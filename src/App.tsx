import "./App.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

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

const DURACAO_ARQUIVO = 180.14;

// ======================================================
// TRECHOS — NÃO ALTERADOS
// ======================================================

const TRECHOS: Trecho[] = [
  // INTRODUÇÃO
  {
    inicio: 0,
    fim: 14.5,
    cantor: "intro",
    letra: "♪ Introdução ♪",
    alvoHz: 220,
  },

  // PRIMEIRA PARTE
  {
    inicio: 14.5,
    fim: 23.5,
    cantor: 1,
    letra: "Quando a gente ama, qualquer coisa serve para relembrar",
    alvoHz: 196,
  },
  {
    inicio: 23.5,
    fim: 32.5,
    cantor: 2,
    letra: "Um vestido velho da mulher amada tem muito valor",
    alvoHz: 220,
  },
  {
    inicio: 32.5,
    fim: 41.5,
    cantor: 1,
    letra: "Aquele restinho do perfume dela que ficou no frasco",
    alvoHz: 196,
  },
  {
    inicio: 41.5,
    fim: 47.5,
    cantor: 2,
    letra: "Sobre a penteadeira, mostrando que o quarto",
    alvoHz: 220,
  },
  {
    inicio: 47.5,
    fim: 52.5,
    cantor: 2,
    letra: "Já foi o cenário de um grande amor",
    alvoHz: 246.94,
  },
  {
    inicio: 52.5,
    fim: 58.5,
    cantor: 1,
    letra: "E hoje o que encontrei me deixou mais triste",
    alvoHz: 220,
  },
  {
    inicio: 58.5,
    fim: 62.5,
    cantor: 2,
    letra: "Um pedacinho dela que existe",
    alvoHz: 246.94,
  },

  // PRIMEIRO REFRÃO
  {
    inicio: 62.5,
    fim: 68.5,
    cantor: "dueto",
    letra: "Um fio de cabelo no meu paletó",
    alvoHz: 261.63,
  },
  {
    inicio: 68.5,
    fim: 73.5,
    cantor: 1,
    letra: "Lembrei de tudo entre nós",
    alvoHz: 220,
  },
  {
    inicio: 73.5,
    fim: 77.5,
    cantor: 2,
    letra: "Do amor vivido",
    alvoHz: 246.94,
  },
  {
    inicio: 77.5,
    fim: 83.5,
    cantor: "dueto",
    letra: "Aquele fio de cabelo comprido",
    alvoHz: 261.63,
  },
  {
    inicio: 83.5,
    fim: 89.5,
    cantor: "dueto",
    letra: "Já esteve grudado em nosso suor",
    alvoHz: 220,
  },

  // PAUSA INSTRUMENTAL ENTRE AS PARTES
  {
    inicio: 89.5,
    fim: 97.5,
    cantor: "intro",
    letra: "♪ Instrumental ♪",
    alvoHz: 220,
  },

  // SEGUNDA PARTE
  {
    inicio: 97.5,
    fim: 106.5,
    cantor: 1,
    letra: "Quando a gente ama e não vive junto com a pessoa amada",
    alvoHz: 196,
  },
  {
    inicio: 106.5,
    fim: 115.5,
    cantor: 2,
    letra: "Uma coisa à toa é um bom motivo pra gente chorar",
    alvoHz: 220,
  },
  {
    inicio: 115.5,
    fim: 123.5,
    cantor: 1,
    letra: "Apagam-se as luzes ao chegar a hora de ir para a cama",
    alvoHz: 196,
  },
  {
    inicio: 123.5,
    fim: 129.5,
    cantor: 2,
    letra: "A gente começa a esperar por quem ama",
    alvoHz: 220,
  },
  {
    inicio: 129.5,
    fim: 134.5,
    cantor: 2,
    letra: "Na impressão de que ela venha se deitar",
    alvoHz: 246.94,
  },

  // SEGUNDA ENTRADA
  {
    inicio: 134.5,
    fim: 140.5,
    cantor: 1,
    letra: "E hoje o que encontrei me deixou mais triste",
    alvoHz: 220,
  },
  {
    inicio: 140.5,
    fim: 145.5,
    cantor: 2,
    letra: "Um pedacinho dela que existe",
    alvoHz: 246.94,
  },

  // REFRÃO FINAL
  {
    inicio: 145.5,
    fim: 151.5,
    cantor: "dueto",
    letra: "Um fio de cabelo no meu paletó",
    alvoHz: 261.63,
  },
  {
    inicio: 151.5,
    fim: 156.5,
    cantor: 1,
    letra: "Lembrei de tudo entre nós",
    alvoHz: 220,
  },
  {
    inicio: 156.5,
    fim: 160.5,
    cantor: 2,
    letra: "Do amor vivido",
    alvoHz: 246.94,
  },
  {
    inicio: 160.5,
    fim: 166.5,
    cantor: "dueto",
    letra: "Aquele fio de cabelo comprido",
    alvoHz: 261.63,
  },
  {
    inicio: 166.5,
    fim: 173.5,
    cantor: "dueto",
    letra: "Já esteve grudado em nosso suor",
    alvoHz: 220,
  },

  // FINAL INSTRUMENTAL
  {
    inicio: 173.5,
    fim: 180.14,
    cantor: "intro",
    letra: "♪ Final ♪",
    alvoHz: 220,
  },
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
  const [pin, setPin] = useState("");
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [conectadoServidor, setConectadoServidor] = useState(false);

  const [contagem, setContagem] = useState(3);

  const [tempo, setTempo] = useState(0);
  const [duracao, setDuracao] = useState(DURACAO_ARQUIVO);

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
  const jogoFinalizado = useRef(false);
  const tempoRef = useRef(0);
  const telaRef = useRef<Tela>("home");
  const ultimoChaosRef = useRef<number | null>(null);

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

  useEffect(() => {
    tempoRef.current = tempo;
  }, [tempo]);

  // ====================================================
  // SOCKET
  // ====================================================

  useEffect(() => {
    function conectar() {
      setConectadoServidor(true);
    }

    function desconectar() {
      setConectadoServidor(false);
    }

    function atualizarJogadores(dados: { jogadores: Jogador[] }) {
      setJogadores(dados.jogadores);
    }

    socket.on("connect", conectar);
    socket.on("disconnect", desconectar);
    socket.on("jogadores_atualizados", atualizarJogadores);

    if (socket.connected) {
      setConectadoServidor(true);
    }

    return () => {
      socket.off("connect", conectar);
      socket.off("disconnect", desconectar);
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
    resetarJogo();

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

    const audio = new Audio("/musicas/fio-de-cabelo.mp3");

    audio.preload = "auto";
    audioRef.current = audio;

    let animationId = 0;

    function atualizarRelogio() {
      const atual = audio.currentTime;

      tempoRef.current = atual;
      setTempo(atual);

      animationId = requestAnimationFrame(atualizarRelogio);
    }

    function carregou() {
      if (Number.isFinite(audio.duration)) {
        setDuracao(audio.duration);
      }
    }

    function terminou() {
      if (jogoFinalizado.current) {
        return;
      }

      jogoFinalizado.current = true;

      setTempo(audio.duration || DURACAO_ARQUIVO);

      window.setTimeout(() => {
        setTela("resultado");
      }, 650);
    }

    audio.addEventListener("loadedmetadata", carregou);
    audio.addEventListener("ended", terminou);

    audio
      .play()
      .then(() => {
        animationId = requestAnimationFrame(atualizarRelogio);
      })
      .catch((erro) => {
        console.error("Erro ao tocar música:", erro);
      });

    return () => {
      cancelAnimationFrame(animationId);

      audio.pause();

      audio.removeEventListener("loadedmetadata", carregou);
      audio.removeEventListener("ended", terminou);

      audioRef.current = null;
    };
  }, [tela]);

  // ====================================================
  // LETRA
  // ====================================================

  const trechoAtual = useMemo(() => {
    return (
      TRECHOS.find(
        (trecho) =>
          tempo >= trecho.inicio &&
          tempo < trecho.fim
      ) ?? TRECHOS[TRECHOS.length - 1]
    );
  }, [tempo]);

  const indiceTrecho = TRECHOS.findIndex(
    (item) => item === trechoAtual
  );

  const trechoAnterior =
    indiceTrecho > 0 ? TRECHOS[indiceTrecho - 1] : null;

  const proximoTrecho =
    indiceTrecho >= 0 && indiceTrecho < TRECHOS.length - 1
      ? TRECHOS[indiceTrecho + 1]
      : null;

  // ====================================================
  // CHAOS
  // ====================================================

  const chaosAtual = useMemo(() => {
    return EVENTOS_CHAOS.find(
      (evento) =>
        tempo >= evento.inicio &&
        tempo < evento.fim
    );
  }, [tempo]);

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

      const agoraMusica = tempoRef.current;

      const trecho = TRECHOS.find(
        (item) =>
          agoraMusica >= item.inicio &&
          agoraMusica < item.fim
      );

      if (!trecho || trecho.cantor === "intro") {
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
      let mensagem = "";

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
  }, []);

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
              Música preparada para a demonstração.
            </p>
          </div>

          <div className="song-card">
            <div className="album-art">
              🎤
            </div>

            <div className="song-info">
              <span className="demo-badge">
                DEMO
              </span>

              <h3>Fio de Cabelo</h3>

              <p>
                Chitãozinho &amp; Xororó
              </p>

              <div className="song-meta">
                <span>3:00</span>
                <span>•</span>
                <span>2 jogadores</span>
                <span>•</span>
                <span>7 desafios</span>
              </div>
            </div>

            <div className="song-check">
              ✓
            </div>
          </div>

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
              Fio de Cabelo
            </strong>

            <span>
              Chitãozinho &amp; Xororó
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
                {trechoAnterior?.letra ?? "♪"}
              </p>

              <h1>
                {trechoAtual.letra}
              </h1>

              <p className="next-lyric">
                {proximoTrecho?.letra ??
                  "♪ Fim ♪"}
              </p>
            </div>

            {trechoAtual.cantor !== "intro" && (
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
            Fio de Cabelo
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