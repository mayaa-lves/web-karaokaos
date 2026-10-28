import "./App.css";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { io } from "socket.io-client";
import { BABY_TRECHOS, BABY_DURACAO } from "./baby";
import { BarraEstrelas } from "./BarraEstrelas";
import { FAIXAS_NOVAS } from "./faixasNovas";
import { FIO_TRECHOS } from "./fioSincronizado";
import { mensagemErroAudio } from "./erroAudio";
import { criarPreviaMusical } from "./previaMusical";
import { META_PONTOS, duracaoDoJogador, novoEstadoParticipacao, pontuarParticipacao } from "./pontuacao";

const socket = io(import.meta.env.VITE_SERVER_URL || `http://${window.location.hostname}:8000`);
function acompanharConexao(atualizar: () => void) {
  socket.on("connect", atualizar);
  socket.on("disconnect", atualizar);
  return () => { socket.off("connect", atualizar); socket.off("disconnect", atualizar); };
}
const estadoConexao = () => socket.connected;

type Jogador = {
  sid: string;
  nome: string;
  numero: number;
};

type RespostaCriarSala = {
  sucesso: boolean;
  pin: string;
};

type Tela =
  | "home"
  | "sala"
  | "musicas"
  | "contagem"
  | "jogo"
  | "resultado";

type Cantor = 1 | 2 | "dueto" | "intro";

type Trecho = {
  inicio: number;
  fim: number;
  cantor: Cantor;
  letra: string;
  alvoHz: number;
};

type EventoChaos = {
  inicio: number;
  fim: number;
  titulo: string;
  descricao: string;
  emoji: string;
};

type DadosMicrofone = {
  jogador: number;
  nome: string;
  volume: number;
  frequencia: number | null;
};

type EstadoVoz = {
  ultimaFrequencia: number | null;
  leiturasValidas: number;
  ultimoPonto: number;
};

type Musica = {
  id: string; titulo: string; artista: string; arquivo: string;
  duracao: number; trechos: Trecho[]; afinacao: boolean; letraSincronizada: boolean;
};
const CATALOGO: Musica[] = [
  { id: "baby", titulo: "Baby", artista: "Justin Bieber", arquivo: "/musicas/baby-compativel.mp3",
    duracao: BABY_DURACAO, trechos: BABY_TRECHOS, afinacao: false, letraSincronizada: true },
  { id: "fio-de-cabelo", titulo: "Fio de Cabelo", artista: "Chitãozinho & Xororó", arquivo: "/musicas/fio-de-cabelo.mp3",
    duracao: 180.1404, trechos: FIO_TRECHOS, afinacao: true, letraSincronizada: true },
  ...FAIXAS_NOVAS,
];

// ======================================================
// CHAOS
// ======================================================

const EVENTOS_CHAOS: EventoChaos[] = [
  {
    inicio: 34,
    fim: 41,
    titulo: "CHAOS!",
    descricao: "CANTE PULANDO!",
    emoji: "🦘",
  },
  {
    inicio: 57,
    fim: 64,
    titulo: "CHAOS!",
    descricao: "CANTE GIRANDO!",
    emoji: "🌪️",
  },
  {
    inicio: 79,
    fim: 86,
    titulo: "CHAOS!",
    descricao: "CANTE AGACHADO!",
    emoji: "🏋️",
  },
  {
    inicio: 108,
    fim: 115,
    titulo: "CHAOS!",
    descricao: "CANTE COM UMA MÃO NA CABEÇA!",
    emoji: "🙆",
  },
  {
    inicio: 129,
    fim: 136,
    titulo: "CHAOS!",
    descricao: "CANTE DEITADO!",
    emoji: "🛌",
  },
  {
    inicio: 149,
    fim: 156,
    titulo: "CHAOS!",
    descricao: "CANTE DANÇANDO!",
    emoji: "🕺",
  },
  {
    inicio: 169,
    fim: 177,
    titulo: "CHAOS FINAL!",
    descricao: "TODO MUNDO CANTANDO E PULANDO!",
    emoji: "🔥",
  },
];

function limitar(valor: number, minimo: number, maximo: number) {
  return Math.max(minimo, Math.min(maximo, valor));
}

function normalizarOitava(frequencia: number, alvo: number) {
  let hz = frequencia;

  while (hz < alvo / 1.45) {
    hz *= 2;
  }

  while (hz > alvo * 1.45) {
    hz /= 2;
  }

  return hz;
}

function calcularCents(frequencia: number, alvo: number) {
  const normalizada = normalizarOitava(frequencia, alvo);

  return 1200 * Math.log2(normalizada / alvo);
}

function App() {
  const [tela, setTela] = useState<Tela>("home");
  const previa = useMemo(() => criarPreviaMusical(), []);
  useEffect(() => () => previa.parar(), [tela, previa]);
  const [musicaId, setMusicaId] = useState("baby");
  const musica = CATALOGO.find((faixa) => faixa.id === musicaId) ?? CATALOGO[0];
  const trechos = musica.trechos;
  const tocandoRef = useRef(false);
  const [erroAudio, setErroAudio] = useState("");
  const [pin, setPin] = useState("");
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const conectadoServidor = useSyncExternalStore(acompanharConexao, estadoConexao);

  const [contagem, setContagem] = useState(3);

  const [tempo, setTempo] = useState(0);
  const [duracao, setDuracao] = useState(musica.duracao);

  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);

  const [combo1, setCombo1] = useState(0);
  const [combo2, setCombo2] = useState(0);

  const [frequencia1, setFrequencia1] =
    useState<number | null>(null);

  const [frequencia2, setFrequencia2] =
    useState<number | null>(null);

  const [feedback, setFeedback] =
    useState("CANTE PARA COMEÇAR");

  const [pitchPosicao, setPitchPosicao] = useState(50);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recuperandoAudio = useRef(false);
  const cancelarRecuperacao = useRef<(() => void) | null>(null);

  function tentarNovamenteAudio() {
    const audio = audioRef.current;
    if (!audio || recuperandoAudio.current) return;
    const posicao = tempoRef.current;
    cancelarRecuperacao.current?.();
    recuperandoAudio.current = true;
    tocandoRef.current = false;
    audio.pause();
    setErroAudio("Recarregando o áudio…");

    function limpar() {
      audio!.removeEventListener("loadedmetadata", retomar);
      audio!.removeEventListener("error", falhou);
      cancelarRecuperacao.current = null;
    }
    function falhou() {
      limpar();
      recuperandoAudio.current = false;
      if (audioRef.current === audio) setErroAudio(mensagemErroAudio(audio!.error?.code));
    }
    function retomar() {
      limpar();
      if (audioRef.current !== audio) return;
      try {
        audio!.currentTime = Math.max(0, Math.min(posicao, musica.duracao - 0.05));
        recuperandoAudio.current = false;
        void audio!.play().catch(() => setErroAudio("Clique em Reproduzir para continuar o áudio."));
      } catch {
        recuperandoAudio.current = false;
        setErroAudio("Não foi possível retomar a faixa. Tente novamente.");
      }
    }
    audio.addEventListener("loadedmetadata", retomar);
    audio.addEventListener("error", falhou);
    cancelarRecuperacao.current = limpar;
    audio.load();
  }
  const jogoFinalizado = useRef(false);
  const tempoRef = useRef(0);
  const telaRef = useRef<Tela>("home");
  const ultimoChaosRef = useRef<number | null>(null);

  const participacao1 = useRef(novoEstadoParticipacao());
  const participacao2 = useRef(novoEstadoParticipacao());

  const estado1 = useRef<EstadoVoz>({
    ultimaFrequencia: null,
    leiturasValidas: 0,
    ultimoPonto: 0,
  });

  const estado2 = useRef<EstadoVoz>({
    ultimaFrequencia: null,
    leiturasValidas: 0,
    ultimoPonto: 0,
  });

  useEffect(() => {
    telaRef.current = tela;
  }, [tela]);


  // ====================================================
  // SOCKET
  // ====================================================

  useEffect(() => {
    function atualizarJogadores(dados: { jogadores: Jogador[] }) {
      setJogadores(dados.jogadores);
    }

    socket.on("jogadores_atualizados", atualizarJogadores);


    return () => {
      socket.off("jogadores_atualizados", atualizarJogadores);
    };
  }, []);

  const jogador1 = jogadores.find((j) => j.numero === 1);
  const jogador2 = jogadores.find((j) => j.numero === 2);

  const nome1 = jogador1?.nome ?? "Jogador 1";
  const nome2 = jogador2?.nome ?? "Jogador 2";

  // ====================================================
  // SALA
  // ====================================================

  function criarSala() {
    socket.emit(
      "criar_sala",
      (resposta: RespostaCriarSala) => {
        if (!resposta?.sucesso) {
          return;
        }

        setPin(resposta.pin);
        setJogadores([]);
        setTela("sala");
      }
    );
  }

  // ====================================================
  // RESET
  // ====================================================

  function resetarJogo() {
    jogoFinalizado.current = false;
    tocandoRef.current = false;
    setErroAudio("");
    setDuracao(musica.duracao);
    tempoRef.current = 0;
    ultimoChaosRef.current = null;

    estado1.current = {
      ultimaFrequencia: null,
      leiturasValidas: 0,
      ultimoPonto: 0,
    };

    estado2.current = {
      ultimaFrequencia: null,
      leiturasValidas: 0,
      ultimoPonto: 0,
    };

    setTempo(0);

    participacao1.current = novoEstadoParticipacao();
    participacao2.current = novoEstadoParticipacao();
    setPontos1(0);
    setPontos2(0);

    setCombo1(0);
    setCombo2(0);

    setFrequencia1(null);
    setFrequencia2(null);

    setPitchPosicao(50);
    setFeedback("CANTE PARA COMEÇAR");
  }

  function voltarInicio() {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    resetarJogo();

    setPin("");
    setJogadores([]);
    setTela("home");
  }

  function iniciarContagem() {
    previa.parar();
    resetarJogo();

    if (pin) {
      socket.emit("iniciar_partida", { pin });
    }

    setContagem(3);
    setTela("contagem");
  }

  // ====================================================
  // CONTAGEM
  // ====================================================

  useEffect(() => {
    if (tela !== "contagem") {
      return;
    }

    if (contagem <= 0) {
      const timer = window.setTimeout(() => {
        setTela("jogo");
      }, 650);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setContagem((valor) => valor - 1);
    }, 850);

    return () => window.clearTimeout(timer);
  }, [tela, contagem]);

  // ====================================================
  // ÁUDIO
  // ====================================================

  useEffect(() => {
    if (tela !== "jogo") {
      return;
    }

    const audio = new Audio(musica.arquivo);

    audio.preload = "auto";
    audioRef.current = audio;

    let animationId = 0;

    function atualizarRelogio() {
      // Preserva a última posição válida se o arquivo falhar ou estiver recarregando.
      if (!audio.error && !recuperandoAudio.current) {
        const atual = Math.min(audio.currentTime, musica.duracao);
        if (audio.currentTime >= musica.duracao) { terminou(); return; }
        tempoRef.current = atual;
        setTempo(atual);
      }
      animationId = requestAnimationFrame(atualizarRelogio);
    }

    function carregou() {
      if (Number.isFinite(audio.duration)) {
        setDuracao(Math.min(audio.duration, musica.duracao));
      }
    }

    function terminou() {
      if (jogoFinalizado.current) {
        return;
      }

      jogoFinalizado.current = true;
      tocandoRef.current = false;
      audio.pause();

      if (pin) {
        socket.emit("finalizar_partida", {pin})
      }

      setTempo(Math.min(audio.duration || musica.duracao, musica.duracao));

      setTela("resultado");
    }

    function tocou() { tocandoRef.current = true; setErroAudio(""); }
    function pausou() {
      tocandoRef.current = false;
      participacao1.current = novoEstadoParticipacao();
      participacao2.current = novoEstadoParticipacao();
    }
    function reposicionou() { if (!audio.paused && !audio.ended) tocou(); }
    function falhou() {
      tocandoRef.current = false;
      setErroAudio(mensagemErroAudio(audio.error?.code));
    }
    audio.addEventListener("playing", tocou);
    audio.addEventListener("pause", pausou);
    audio.addEventListener("waiting", pausou);
    audio.addEventListener("seeking", pausou);
    audio.addEventListener("seeked", reposicionou);
    audio.addEventListener("error", falhou);
    audio.addEventListener("loadedmetadata", carregou);
    audio.addEventListener("ended", terminou);

    animationId = requestAnimationFrame(atualizarRelogio);
    audio.play().catch(() => setErroAudio("Clique em Reproduzir para liberar o áudio."));

    return () => {
      cancelAnimationFrame(animationId);
      cancelarRecuperacao.current?.();
      recuperandoAudio.current = false;
      audio.pause();

      tocandoRef.current = false;
      audio.removeEventListener("playing", tocou);
      audio.removeEventListener("pause", pausou);
      audio.removeEventListener("waiting", pausou);
      audio.removeEventListener("seeking", pausou);
      audio.removeEventListener("seeked", reposicionou);
      audio.removeEventListener("error", falhou);
      audio.removeEventListener("loadedmetadata", carregou);
      audio.removeEventListener("ended", terminou);

      audioRef.current = null;
    };
  }, [tela, musica.arquivo, musica.duracao, pin]);

  // ====================================================
  // LETRA
  // ====================================================

  const trechoAtual = useMemo(() => trechos.find((trecho) =>
    tempo >= trecho.inicio && tempo < trecho.fim
  ) ?? { inicio: tempo, fim: tempo, cantor: "intro" as Cantor, letra: "♪ Instrumental ♪", alvoHz: 0 }, [tempo, trechos]);
  const indiceTrecho = trechos.indexOf(trechoAtual);
  const trechoAnterior = indiceTrecho > 0 ? trechos[indiceTrecho - 1] : null;
  const proximoTrecho = trechos.find((trecho) => trecho.inicio > tempo) ?? null;

  // ====================================================
  // CHAOS
  // ====================================================

  const chaosAtual = useMemo(() => {
    if (tela !== "jogo") return undefined;
    return EVENTOS_CHAOS.find(
      (evento) =>
        tempo >= evento.inicio &&
        tempo < evento.fim
    );
  }, [tempo, tela]);

  const segundosChaos = chaosAtual
    ? Math.max(1, Math.ceil(chaosAtual.fim - tempo))
    : 0;

  useEffect(() => {
    if (!chaosAtual) {
      return;
    }

    if (ultimoChaosRef.current === chaosAtual.inicio) {
      return;
    }

    ultimoChaosRef.current = chaosAtual.inicio;

    const efeito = new Audio("/sons/chaos.mp3");
    efeito.volume = 0.85;

    efeito.play().catch(() => {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (
            window as typeof window & {
              webkitAudioContext?: typeof AudioContext;
            }
          ).webkitAudioContext;

        if (!AudioContextClass) {
          return;
        }

        const contexto = new AudioContextClass();
        const ganho = contexto.createGain();

        ganho.gain.value = 0.12;
        ganho.connect(contexto.destination);

        function bip(
          frequencia: number,
          inicio: number,
          duracaoBip: number
        ) {
          const oscilador = contexto.createOscillator();

          oscilador.type = "square";
          oscilador.frequency.value = frequencia;
          oscilador.connect(ganho);

          oscilador.start(contexto.currentTime + inicio);

          oscilador.stop(
            contexto.currentTime + inicio + duracaoBip
          );
        }

        bip(660, 0, 0.12);
        bip(880, 0.15, 0.16);

        window.setTimeout(() => {
          contexto.close();
        }, 700);
      } catch {
        // O jogo continua normalmente sem o efeito.
      }
    });
  }, [chaosAtual]);

  // ====================================================
  // MICROFONE / PONTUAÇÃO
  // ====================================================

  useEffect(() => {
    function receberMicrofone(dados: DadosMicrofone) {
      if (dados.jogador !== 1 && dados.jogador !== 2) return;
      if (telaRef.current !== "jogo") {
        return;
      }

      // Mostra a frequência recebida na tela.
      if (dados.jogador === 1) {
        setFrequencia1(dados.frequencia);
      }

      if (dados.jogador === 2) {
        setFrequencia2(dados.frequencia);
      }

      if (!musica.afinacao) {
        const jogador = dados.jogador as 1 | 2;
        const estado = jogador === 1 ? participacao1 : participacao2;
        const trecho = trechos.find((t) => tempoRef.current >= t.inicio && tempoRef.current < t.fim);
        const leitura = pontuarParticipacao(estado.current, {
          tempo: tempoRef.current, recebido: performance.now(),
          frequencia: dados.frequencia, volume: dados.volume,
          tocando: tocandoRef.current && !jogoFinalizado.current,
          jogador, trecho, duracaoElegivel: duracaoDoJogador(trechos, jogador),
        });
        estado.current = leitura.estado;
        if (leitura.pontos > 0) {
          if (jogador === 1) {
            setPontos1((pontos) => Math.min(META_PONTOS, pontos + leitura.pontos));
            setCombo1((combo) => combo + 1);
          } else {
            setPontos2((pontos) => Math.min(META_PONTOS, pontos + leitura.pontos));
            setCombo2((combo) => combo + 1);
          }
          setFeedback(`VOZ DETECTADA +${leitura.pontos}`);
        } else if (!leitura.estado.valido) {
          if (jogador === 1) setCombo1(0); else setCombo2(0);
        }
        return;
      }

      // Sem frequência válida = sem pontuação.
      if (
        dados.frequencia === null ||
        !Number.isFinite(dados.frequencia)
      ) {
        return;
      }

      // Ignora ruído muito baixo.
      // REMOVIDO o limite máximo de volume.
      if (dados.volume < 0.02) {
        return;
      }

      if (!tocandoRef.current || jogoFinalizado.current) return;
      const agoraMusica = tempoRef.current;

      const trecho = trechos.find(
        (item) =>
          agoraMusica >= item.inicio &&
          agoraMusica < item.fim
      );

      if (!trecho || trecho.cantor === "intro" || trecho.alvoHz <= 0) {
        return;
      }

      // Só pontua quem deveria estar cantando.
      const podeCantar =
        trecho.cantor === "dueto" ||
        trecho.cantor === dados.jogador;

      if (!podeCantar) {
        return;
      }

      const estado =
        dados.jogador === 1
          ? estado1.current
          : estado2.current;

      const cents = calcularCents(
        dados.frequencia,
        trecho.alvoHz
      );

      const erro = Math.abs(cents);

      setPitchPosicao(
        limitar(50 + cents / 5, 5, 95)
      );

      /*
        Se estiver muito longe da nota,
        não pontua, mas continua mostrando
        se precisa subir ou descer.
      */

      if (erro > 180) {
        estado.leiturasValidas = 0;
        estado.ultimaFrequencia = dados.frequencia;

        if (dados.jogador === 1) {
          setCombo1(0);
        } else {
          setCombo2(0);
        }

        setFeedback(
          cents < 0
            ? "↑ MAIS AGUDO"
            : "↓ MAIS GRAVE"
        );

        return;
      }

      /*
        Verifica se a voz está minimamente
        estável entre uma leitura e outra.
      */

      if (estado.ultimaFrequencia !== null) {
        const diferenca = Math.abs(
          calcularCents(
            dados.frequencia,
            estado.ultimaFrequencia
          )
        );

        if (diferenca <= 160) {
          estado.leiturasValidas += 1;
        } else {
          estado.leiturasValidas = 1;
        }
      } else {
        estado.leiturasValidas = 1;
      }

      estado.ultimaFrequencia = dados.frequencia;

      /*
        Antes eram 3 leituras.
        Agora são só 2 para responder mais rápido.
      */

      if (estado.leiturasValidas < 2) {
        setFeedback("SUSTENTE A NOTA...");
        return;
      }

      const agora = Date.now();

      /*
        Antes eram 550 ms.
        Agora pode pontuar novamente após 350 ms.
      */

      if (agora - estado.ultimoPonto < 350) {
        return;
      }

      let pontos = 0;
      let mensagem: string;

      /*
        Mais tolerante que antes,
        mas ainda exige uma frequência coerente.
      */

      if (erro <= 55) {
        pontos = 60;
        mensagem = "PERFEITO +60";
      } else if (erro <= 100) {
        pontos = 40;
        mensagem = "ÓTIMO +40";
      } else if (erro <= 150) {
        pontos = 25;
        mensagem = "BOM +25";
      } else {
        estado.leiturasValidas = 0;

        setFeedback(
          cents < 0
            ? "↑ MAIS AGUDO"
            : "↓ MAIS GRAVE"
        );

        return;
      }

      estado.ultimoPonto = agora;

      setFeedback(mensagem);

      if (dados.jogador === 1) {
        setPontos1(
          (anterior) => anterior + pontos
        );

        setCombo1(
          (anterior) => anterior + 1
        );
      } else {
        setPontos2(
          (anterior) => anterior + pontos
        );

        setCombo2(
          (anterior) => anterior + 1
        );
      }
    }

    socket.on("dados_microfone", receberMicrofone);

    return () => {
      socket.off("dados_microfone", receberMicrofone);
    };
  }, [trechos, musica.afinacao]);

  // ====================================================
  // FUNÇÕES VISUAIS
  // ====================================================

  function formatarTempo(valor: number) {
    const segundosTotais = Math.max(
      0,
      Math.floor(valor)
    );

    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;

    return `${minutos}:${segundos
      .toString()
      .padStart(2, "0")}`;
  }

  function nomeCantor(cantor: Cantor) {
    if (cantor === 1) {
      return nome1;
    }

    if (cantor === 2) {
      return nome2;
    }

    if (cantor === "dueto") {
      return "DUETO";
    }

    return "INSTRUMENTAL";
  }

  function classeCantor(cantor: Cantor) {
    if (cantor === 1) {
      return "turn-p1";
    }

    if (cantor === 2) {
      return "turn-p2";
    }

    if (cantor === "dueto") {
      return "turn-duet";
    }

    return "turn-intro";
  }

  const progresso = Math.min(
    100,
    (tempo / Math.max(duracao, 1)) * 100
  );

  // ====================================================
  // SALA
  // ====================================================

  if (tela === "sala") {
    const podeContinuar = jogadores.length >= 1;

    return (
      <main className="home">
        <button
          className="room-back"
          onClick={voltarInicio}
        >
          ← Voltar
        </button>

        <section className="room-screen">
          <div className="room-header">
            <span className="room-label">
              ● SALA CRIADA
            </span>

            <h2>Entre pelo celular 🎤</h2>

            <p>
              Digite este PIN no aplicativo.
            </p>
          </div>

          <div className="room-pin-card">
            <span>PIN DA SALA</span>

            <strong>{pin}</strong>

            <small>
              Compartilhe com os jogadores
            </small>
          </div>

          <div className="players">
            <div
              className={`player-card player-one ${
                jogador1 ? "player-connected" : ""
              }`}
            >
              <div className="player-icon">
                1
              </div>

              <div>
                <span>JOGADOR 1</span>

                <strong>
                  {jogador1
                    ? jogador1.nome
                    : "Aguardando..."}
                </strong>
              </div>

              <div
                className={
                  jogador1
                    ? "connected-dot"
                    : "waiting-dot"
                }
              />
            </div>

            <div
              className={`player-card player-two ${
                jogador2 ? "player-connected" : ""
              }`}
            >
              <div className="player-icon">
                2
              </div>

              <div>
                <span>JOGADOR 2</span>

                <strong>
                  {jogador2
                    ? jogador2.nome
                    : "Aguardando..."}
                </strong>
              </div>

              <div
                className={
                  jogador2
                    ? "connected-dot"
                    : "waiting-dot"
                }
              />
            </div>
          </div>

          <button
            className={`start-game ${
              podeContinuar
                ? "start-game-ready"
                : ""
            }`}
            disabled={!podeContinuar}
            onClick={() =>
              setTela("musicas")
            }
          >
            {podeContinuar
              ? "ESCOLHER MÚSICA →"
              : "AGUARDANDO JOGADOR"}
          </button>

          <p className="room-tip">
            {jogadores.length >= 2
              ? "Os dois jogadores estão conectados. Bora!"
              : jogadores.length === 1
              ? "Um jogador conectado. Você já pode testar o jogo."
              : "Conecte pelo menos um celular."}
          </p>
        </section>
      </main>
    );
  }

  // ====================================================
  // SELEÇÃO DA MÚSICA
  // ====================================================

  if (tela === "musicas") {
    return (
      <main className="game-shell">
        <button
          className="room-back"
          onClick={() =>
            setTela("sala")
          }
        >
          ← Voltar
        </button>

        <section className="song-selection">
          <div className="selection-heading">
            <span className="eyebrow">
              ESCOLHA A MÚSICA
            </span>

            <h2>Preparados?</h2>

            <p>
              Escolha a música para a demonstração.
            </p>
          </div>

          {CATALOGO.map((faixa) => (
            <button type="button" key={faixa.id} className={`song-card song-choice ${musicaId === faixa.id ? "song-active" : ""}`}
              aria-pressed={musicaId === faixa.id}
              onMouseEnter={() => previa.agendar(faixa.arquivo)}
              onMouseLeave={() => previa.parar()}
              onClick={() => { previa.parar(); setMusicaId(faixa.id); }}>
              <div className="album-art">🎤</div>
              <div className="song-info">
                <span className="demo-badge">{faixa.letraSincronizada ? "ÁUDIO LOCAL" : "INSTRUMENTAL · MODO LIVRE"}</span>
                <h3>{faixa.titulo}</h3>
                <p>{faixa.artista}</p>
                <div className="song-meta"><span>{formatarTempo(faixa.duracao)}</span><span>•</span><span>2 jogadores</span></div>
              </div>
              <div className="song-check">{musicaId === faixa.id ? "✓" : ""}</div>
            </button>
          ))}
          <button
            className="big-primary"
            onClick={iniciarContagem}
          >
            COMEÇAR PARTIDA →
          </button>

          <p className="dev-note">
            Frequência analisada em tempo real pelos celulares.
          </p>
        </section>
      </main>
    );
  }

  // ====================================================
  // CONTAGEM
  // ====================================================

  if (tela === "contagem") {
    return (
      <main className="countdown-screen">
        <div className="mini-logo">
          KARAOKE <span>CHAOS</span>
        </div>

        <p>
          Microfones preparados?
        </p>

        <div
          className="countdown-number"
          key={contagem}
        >
          {contagem > 0
            ? contagem
            : "VAI!"}
        </div>

        <div className="countdown-players">
          <span className="p1-pill">
            🎤 {nome1}
          </span>

          <span className="p2-pill">
            🎤 {nome2}
          </span>
        </div>
      </main>
    );
  }

  // ====================================================
  // JOGO
  // ====================================================

  if (tela === "jogo") {
    return (
      <main className="gameplay">
        <header className="game-topbar">
          <div className="game-brand">
            KARAOKE <span>CHAOS</span>
          </div>

          <div className="song-playing">
            <strong>
              {musica.titulo}
            </strong>

            <span>
              {musica.artista}
            </span>
          </div>

          <div className="game-time">
            {formatarTempo(tempo)} /{" "}
            {formatarTempo(duracao)}
          </div>
        </header>

        {chaosAtual && (
          <div className="chaos-banner">
            <div className="chaos-icon">
              {chaosAtual.emoji}
            </div>

            <div>
              <span>
                {chaosAtual.titulo}
              </span>

              <strong>
                {chaosAtual.descricao}
              </strong>
            </div>

            <div className="chaos-timer">
              {segundosChaos}
            </div>
          </div>
        )}

        <section className="game-content">
          <aside className="score-column">
            <div className="live-player p1-score">
              <span>JOGADOR 1</span>

              <strong>{nome1}</strong>

              <div className="score-number">
                {pontos1.toLocaleString(
                  "pt-BR"
                )}
              </div>

              <BarraEstrelas pontos={pontos1} nome={nome1} />
              <small>
                🔥 COMBO x{combo1}
              </small>

              <small>
                🎤{" "}
                {frequencia1 !== null
                  ? `${Math.round(
                      frequencia1
                    )} Hz`
                  : "aguardando voz"}
              </small>
            </div>

            <div className="live-player p2-score">
              <span>JOGADOR 2</span>

              <strong>{nome2}</strong>

              <div className="score-number">
                {pontos2.toLocaleString(
                  "pt-BR"
                )}
              </div>

              <BarraEstrelas pontos={pontos2} nome={nome2} />
              <small>
                🔥 COMBO x{combo2}
              </small>

              <small>
                🎤{" "}
                {frequencia2 !== null
                  ? `${Math.round(
                      frequencia2
                    )} Hz`
                  : "aguardando voz"}
              </small>
            </div>
          </aside>

          <section className="lyrics-area">
            <div
              className={`current-turn ${classeCantor(
                trechoAtual.cantor
              )}`}
            >
              {trechoAtual.cantor === "dueto"
                ? "🎤 VOCÊS DOIS"
                : trechoAtual.cantor === "intro"
                ? "♪ INSTRUMENTAL"
                : `🎤 VEZ DE ${nomeCantor(
                    trechoAtual.cantor
                  ).toUpperCase()}`}
            </div>

            <div className="lyrics">
              <p className="previous-lyric">
                {musica.letraSincronizada ? trechoAnterior?.letra ?? "♪" : "MODO INSTRUMENTAL"}
              </p>

              <h1>
                {musica.letraSincronizada ? trechoAtual.letra : musica.titulo}
              </h1>

              <p className="next-lyric">
                {musica.letraSincronizada ? proximoTrecho?.letra ?? "♪ Fim ♪" : "Cante com o áudio • letra sincronizada ainda não cadastrada"}
              </p>
            </div>

            {!musica.afinacao && <div className="voice-participation">
              <strong>{trechoAtual.cantor === "intro" ? "PREPAREM OS MICROFONES" : feedback}</strong>
              <small>PONTOS POR PARTICIPAÇÃO VOCAL</small>
            </div>}

            {trechoAtual.cantor !== "intro" && trechoAtual.alvoHz > 0 && (
              <div className="pitch-panel">
                <div className="pitch-labels">
                  <span>GRAVE</span>

                  <strong>
                    🎯 TOM ALVO
                  </strong>

                  <span>AGUDO</span>
                </div>

                <div className="pitch-track">
                  <div className="target-zone" />

                  <div
                    className="pitch-marker"
                    style={{
                      left: `${pitchPosicao}%`,
                    }}
                  />
                </div>

                <div className="pitch-feedback">
                  {feedback}
                </div>
              </div>
            )}
          </section>
        </section>

        <div className="local-audio-controls">
          <button onClick={() => { void audioRef.current?.play().catch(() => setErroAudio("Não foi possível reproduzir o áudio.")); }}>Reproduzir</button>
          <button onClick={() => audioRef.current?.pause()}>Pausar</button>
          <button onClick={() => {
            if (pin) socket.emit("finalizar_partida", { pin });
            setTela("musicas");
          }}>← Trocar música</button>
          {erroAudio && <div className="audio-recovery" role="alert">
            <p>{erroAudio}</p>
            <button onClick={tentarNovamenteAudio}>Tentar novamente</button>
          </div>}
        </div>
        <footer className="game-progress">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${progresso}%`,
              }}
            />
          </div>

          <div className="progress-info">
            <span>
              {nomeCantor(
                trechoAtual.cantor
              )}
            </span>

            <span>
              {Math.round(progresso)}%
            </span>
          </div>
        </footer>
      </main>
    );
  }

  // ====================================================
  // RESULTADO
  // ====================================================

  if (tela === "resultado") {
    const empate =
      pontos1 === pontos2;

    const vencedor =
      empate
        ? "EMPATE!"
        : pontos1 > pontos2
        ? nome1
        : nome2;

    return (
      <main className="result-screen">
        <section className="result-card">
          <span className="result-eyebrow">
            FIM DA MÚSICA
          </span>

          <h1>
            QUE CAOS. 🎤
          </h1>

          <p className="result-song">
            {musica.titulo}
          </p>

          <div className="final-scores">
            <div className="final-player final-p1">
              <span>JOGADOR 1</span>

              <strong>{nome1}</strong>

              <b>
                {pontos1.toLocaleString(
                  "pt-BR"
                )}
              </b>

              <small>pontos</small>
              <BarraEstrelas pontos={pontos1} nome={nome1} />
            </div>

            <div className="versus">
              VS
            </div>

            <div className="final-player final-p2">
              <span>JOGADOR 2</span>

              <strong>{nome2}</strong>

              <b>
                {pontos2.toLocaleString(
                  "pt-BR"
                )}
              </b>

              <small>pontos</small>
              <BarraEstrelas pontos={pontos2} nome={nome2} />
            </div>
          </div>

          <div className="winner-box">
            <span>
              {empate
                ? "🤝 RESULTADO"
                : "🏆 VENCEDOR"}
            </span>

            <strong>
              {vencedor}
            </strong>
          </div>

          <div className="result-actions">
            <button
              className="play-again"
              onClick={iniciarContagem}
            >
              JOGAR NOVAMENTE
            </button>

            <button
              className="back-home-result"
              onClick={voltarInicio}
            >
              VOLTAR AO INÍCIO
            </button>
          </div>
        </section>
      </main>
    );
  }

  // ====================================================
  // HOME
  // ====================================================

  return (
    <main className="home">
      <section className="hero">
        <div className="logo">
          <h1>
            <span className="karaoke">
              KARAOKE
            </span>

            <span className="chaos">
              CHAOS
            </span>
          </h1>

          <div
            className="waveform"
            aria-hidden="true"
          >
            {[
              18,
              30,
              22,
              42,
              55,
              34,
              48,
              28,
              38,
              62,
              32,
              44,
              26,
            ].map((altura, index) => (
              <span
                key={index}
                style={{
                  height: `${altura}px`,
                }}
              />
            ))}
          </div>
        </div>

        <p className="subtitle">
          Afinação, desafios e caos. 🎤
        </p>

        <div className="actions">
          <button
            className="create-room"
            onClick={criarSala}
            disabled={!conectadoServidor}
          >
            {conectadoServidor
              ? "CRIAR SALA →"
              : "CONECTANDO..."}
          </button>

          <div className="multiplayer">
            <span className="dot">
              ●
            </span>

            2 JOGADORES · CELULARES COMO MICROFONES
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
