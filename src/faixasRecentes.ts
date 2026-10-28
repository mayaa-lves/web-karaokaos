import { JOGADO_TRECHOS } from "./jogado-na-rua.ts";
import { KO_TRECHOS } from "./ko.ts";
import { BAILANDO_TRECHOS } from "./bailando.ts";
export const FAIXAS_RECENTES = [
  { id: "jogado-na-rua", titulo: "Jogado na Rua", artista: "Guilherme & Santiago", arquivo: "/musicas/jogado-na-rua.m4a", duracao: 207.981134, trechos: JOGADO_TRECHOS, afinacao: false, letraSincronizada: true },
  { id: "ko", titulo: "K.O.", artista: "Pabllo Vittar", arquivo: "/musicas/ko.webm", duracao: 181.561, trechos: KO_TRECHOS, afinacao: false, letraSincronizada: true },
  { id: "bailando", titulo: "Bailando", artista: "Enrique Iglesias feat. Descemer Bueno e Gente de Zona", arquivo: "/musicas/bailando.m4a", duracao: 259.065034, trechos: BAILANDO_TRECHOS, afinacao: false, letraSincronizada: true },
];
