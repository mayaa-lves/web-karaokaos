export const META_PONTOS = 10000;
export const METAS_ESTRELAS = [1500, 3000, 5000, 7000, 9000] as const;
export const estrelasPara = (pontos: number) => METAS_ESTRELAS.filter((meta) => pontos >= meta).length;

export type TrechoPontuavel = { inicio: number; fim: number; cantor: 1 | 2 | "dueto" | "intro" };
export type EstadoParticipacao = { tempo: number | null; recebido: number | null; valido: boolean; fracao: number };
export const novoEstadoParticipacao = (): EstadoParticipacao => ({ tempo: null, recebido: null, valido: false, fracao: 0 });

export function duracaoDoJogador(trechos: TrechoPontuavel[], jogador: 1 | 2) {
  return trechos.reduce((total, trecho) => total + (
    trecho.cantor === jogador || trecho.cantor === "dueto" ? trecho.fim - trecho.inicio : 0
  ), 0);
}

type Leitura = {
  tempo: number; recebido: number; frequencia: number | null; volume: number;
  tocando: boolean; jogador: 1 | 2; trecho?: TrechoPontuavel; duracaoElegivel: number;
};

// Mede tempo de participação vocal, não acerto de nota nem de palavras.
// Pacotes repetidos, saltos na faixa e atrasos de conexão não geram bônus.
export function pontuarParticipacao(estado: EstadoParticipacao, leitura: Leitura) {
  const { tempo, recebido, trecho, jogador, frequencia, volume } = leitura;
  const turno = trecho && (trecho.cantor === jogador || trecho.cantor === "dueto");
  const valido = Boolean(leitura.tocando && turno && Number.isFinite(tempo) && Number.isFinite(recebido)
    && frequencia !== null && Number.isFinite(frequencia) && frequencia >= 75 && frequencia <= 1000
    && Number.isFinite(volume) && volume >= 0.008 && volume <= 1);
  const proximo: EstadoParticipacao = { tempo, recebido, valido, fracao: estado.fracao };
  const delta = estado.tempo === null ? 0 : tempo - estado.tempo;
  const atraso = estado.recebido === null ? Infinity : recebido - estado.recebido;
  if (!valido || !estado.valido || delta <= 0 || delta > 0.5 || atraso <= 0 || atraso > 600
      || !Number.isFinite(leitura.duracaoElegivel) || leitura.duracaoElegivel <= 0) {
    return { estado: proximo, pontos: 0 };
  }
  const segundos = Math.max(0, tempo - Math.max(estado.tempo!, trecho!.inicio));
  const bruto = segundos * META_PONTOS / leitura.duracaoElegivel + estado.fracao;
  const pontos = Math.floor(bruto + 1e-9);
  proximo.fracao = Math.max(0, bruto - pontos);
  return { estado: proximo, pontos };
}
