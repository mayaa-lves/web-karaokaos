export const ESPERA_PREVIA_MS = 15_000;
export const DURACAO_PREVIA_SEGUNDOS = 30;

// Um único agendamento/áudio por vez, separado do player da partida.
export function criarPreviaMusical() {
  let espera: number | undefined;
  let limite: number | undefined;
  let audio: HTMLAudioElement | null = null;
  let removerEventos: (() => void) | undefined;
  let geracao = 0;

  function parar() {
    geracao += 1;
    if (espera !== undefined) window.clearTimeout(espera);
    if (limite !== undefined) window.clearTimeout(limite);
    espera = undefined;
    limite = undefined;
    removerEventos?.();
    removerEventos = undefined;
    const anterior = audio;
    audio = null;
    if (anterior) {
      anterior.pause();
      anterior.removeAttribute("src");
      anterior.load();
    }
  }

  function agendar(arquivo: string) {
    parar();
    const minhaGeracao = geracao;
    espera = window.setTimeout(() => {
      espera = undefined;
      if (minhaGeracao !== geracao) return;
      const atual = new Audio(arquivo);
      audio = atual;
      atual.preload = "auto";
      atual.volume = 0.55;

      function pararSeAtual() {
        if (audio === atual && geracao === minhaGeracao) parar();
      }
      function limitarPeloRelogio() {
        if (atual.currentTime >= DURACAO_PREVIA_SEGUNDOS) pararSeAtual();
      }
      function comecou() {
        if (audio !== atual || geracao !== minhaGeracao) return;
        if (limite === undefined) {
          limite = window.setTimeout(pararSeAtual, DURACAO_PREVIA_SEGUNDOS * 1000);
        }
      }
      atual.addEventListener("playing", comecou);
      atual.addEventListener("timeupdate", limitarPeloRelogio);
      atual.addEventListener("ended", pararSeAtual);
      atual.addEventListener("error", pararSeAtual);
      removerEventos = () => {
        atual.removeEventListener("playing", comecou);
        atual.removeEventListener("timeupdate", limitarPeloRelogio);
        atual.removeEventListener("ended", pararSeAtual);
        atual.removeEventListener("error", pararSeAtual);
      };
      void atual.play().then(() => {
        // Uma promessa antiga nunca pode reativar uma prévia cancelada.
        if (audio !== atual || geracao !== minhaGeracao) atual.pause();
      }).catch(pararSeAtual);
    }, ESPERA_PREVIA_MS);
  }

  return { agendar, parar };
}
