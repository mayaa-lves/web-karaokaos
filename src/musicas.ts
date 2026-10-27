/**
 * Catálogo do Karaokaos. Não inclui áudio nem letras de terceiros.
 * Edite os tempos após testar arquivos que você pode usar na feira.
 * Fio de Cabelo reaproveita os trechos originais do App.tsx.
 */
export type CantorMusica = 1 | 2 | "dueto" | "intro";
export type TrechoMusica = {
  inicio: number;
  fim: number;
  cantor: CantorMusica;
  letra: string;
  alvoHz: number;
};
export type Musica = {
  id: string;
  titulo: string;
  artista: string;
  arquivo: string;
  emoji: string;
  // Quando true, a pontuação usa as frequências alinhadas ao áudio.
  calibrada: boolean;
  trechos: TrechoMusica[];
};

/** Intervalos são marcadores de edição, NÃO a letra ou tempo real dos vídeos. */
function trechosParaAjustar(): TrechoMusica[] {
  const blocos: TrechoMusica[] = [];
  for (let inicio = 0, i = 0; inicio < 480; inicio += 15, i++) {
    blocos.push({
      inicio,
      fim: inicio + 15,
      cantor: i % 6 === 5 ? "dueto" : i % 2 === 0 ? 1 : 2,
      letra: `♪ Trecho ${i + 1} — insira aqui a letra e ajuste os segundos ♪`,
      alvoHz: 220, // Valor temporário! Não é a nota verdadeira.
    });
  }
  return blocos;
}

export const MUSICAS: Musica[] = [
  { id: "fio-de-cabelo", titulo: "Fio de Cabelo", artista: "Chitãozinho & Xororó", arquivo: "/musicas/fio-de-cabelo.mp3", emoji: "🎤", calibrada: true, trechos: [] },
  { id: "boate-azul", titulo: "Boate Azul", artista: "Bruno & Marrone", arquivo: "/musicas/boate-azul.mp3", emoji: "💙", calibrada: false, trechos: trechosParaAjustar() },
  { id: "galopeira", titulo: "Galopeira", artista: "Chitãozinho & Xororó", arquivo: "/musicas/galopeira.mp3", emoji: "🐓", calibrada: false, trechos: trechosParaAjustar() },
  { id: "vagalumes", titulo: "Vagalumes", artista: "Pollo", arquivo: "/musicas/vagalumes.mp3", emoji: "✨", calibrada: false, trechos: trechosParaAjustar() },
  { id: "fico-assim-sem-voce", titulo: "Fico Assim Sem Você", artista: "Adriana Calcanhotto", arquivo: "/musicas/fico-assim-sem-voce.mp3", emoji: "💜", calibrada: false, trechos: trechosParaAjustar() },
];
