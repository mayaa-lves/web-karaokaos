import { FAIXAS_RECENTES } from "./faixasRecentes.ts";
import { MEIGA_TRECHOS } from "./meigaEAbusada.ts";
import { VAGALUMES_TRECHOS } from "./vagalumes.ts";
import { FAIXAS_ADICIONAIS } from "./faixasAdicionais.ts";
import { INFIEL_TRECHOS } from "./infiel.ts";
import { QUERO_TRECHOS } from "./queroTeEncontrar.ts";
type TrechoFaixa = { inicio: number; fim: number; cantor: 1 | 2 | "intro" | "dueto"; letra: string; alvoHz: number };
// Letras fornecidas pela Maya; marcações iniciais por estrutura musical.
// A coincidência com uma voz cantada ainda não foi confirmada.
export const BOATE_TRECHOS: TrechoFaixa[] = [
  {
    "inicio": 0,
    "fim": 29.13,
    "cantor": "intro",
    "letra": "♪ Introdução ♪",
    "alvoHz": 0
  },
  {
    "inicio": 29.13,
    "fim": 36.553,
    "cantor": 1,
    "letra": "Doente de amor, procurei remédio na vida noturna",
    "alvoHz": 0
  },
  {
    "inicio": 36.553,
    "fim": 43.975,
    "cantor": 2,
    "letra": "Com a flor da noite em uma boate aqui na zona sul",
    "alvoHz": 0
  },
  {
    "inicio": 43.975,
    "fim": 51.398,
    "cantor": 1,
    "letra": "A dor do amor é com outro amor que a gente cura",
    "alvoHz": 0
  },
  {
    "inicio": 51.398,
    "fim": 58.821,
    "cantor": 2,
    "letra": "Vim curar a dor desse mal de amor na boate azul",
    "alvoHz": 0
  },
  {
    "inicio": 58.821,
    "fim": 66.243,
    "cantor": 1,
    "letra": "E quando a noite vai se agonizando no clarão da aurora",
    "alvoHz": 0
  },
  {
    "inicio": 66.243,
    "fim": 73.666,
    "cantor": 2,
    "letra": "Os integrantes da vida noturna se foram dormir",
    "alvoHz": 0
  },
  {
    "inicio": 73.666,
    "fim": 81.089,
    "cantor": 1,
    "letra": "E a dama da noite que estava comigo também foi embora",
    "alvoHz": 0
  },
  {
    "inicio": 81.089,
    "fim": 88.511,
    "cantor": 2,
    "letra": "Fecharam-se as portas, sozinho de novo tive que sair",
    "alvoHz": 0
  },
  {
    "inicio": 88.511,
    "fim": 95.934,
    "cantor": "dueto",
    "letra": "Sair de que jeito se nem sei o rumo para onde vou",
    "alvoHz": 0
  },
  {
    "inicio": 95.934,
    "fim": 99.645,
    "cantor": "dueto",
    "letra": "Muito vagamente me lembro que estou",
    "alvoHz": 0
  },
  {
    "inicio": 99.645,
    "fim": 103.357,
    "cantor": "dueto",
    "letra": "Em uma boate aqui na zona sul",
    "alvoHz": 0
  },
  {
    "inicio": 103.357,
    "fim": 110.779,
    "cantor": "dueto",
    "letra": "Eu bebi demais e não consigo me lembrar sequer",
    "alvoHz": 0
  },
  {
    "inicio": 110.779,
    "fim": 114.491,
    "cantor": "dueto",
    "letra": "Qual era o nome daquela mulher",
    "alvoHz": 0
  },
  {
    "inicio": 114.491,
    "fim": 118.202,
    "cantor": "dueto",
    "letra": "A flor da noite na boate azul",
    "alvoHz": 0
  },
  {
    "inicio": 118.202,
    "fim": 133.048,
    "cantor": "intro",
    "letra": "♪ Instrumental ♪",
    "alvoHz": 0
  },
  {
    "inicio": 133.048,
    "fim": 140.47,
    "cantor": 1,
    "letra": "E quando a noite vai se agonizando no clarão da aurora",
    "alvoHz": 0
  },
  {
    "inicio": 140.47,
    "fim": 147.893,
    "cantor": 2,
    "letra": "Os integrantes da vida noturna se foram dormir",
    "alvoHz": 0
  },
  {
    "inicio": 147.893,
    "fim": 155.316,
    "cantor": 1,
    "letra": "E a dama da noite que estava comigo também foi embora",
    "alvoHz": 0
  },
  {
    "inicio": 155.316,
    "fim": 162.738,
    "cantor": 2,
    "letra": "Fecharam-se as portas, sozinho de novo tive que sair",
    "alvoHz": 0
  },
  {
    "inicio": 162.738,
    "fim": 170.161,
    "cantor": "dueto",
    "letra": "Sair de que jeito se nem sei o rumo para onde vou",
    "alvoHz": 0
  },
  {
    "inicio": 170.161,
    "fim": 173.872,
    "cantor": "dueto",
    "letra": "Muito vagamente me lembro que estou",
    "alvoHz": 0
  },
  {
    "inicio": 173.872,
    "fim": 177.584,
    "cantor": "dueto",
    "letra": "Em uma boate aqui na zona sul",
    "alvoHz": 0
  },
  {
    "inicio": 177.584,
    "fim": 185.006,
    "cantor": "dueto",
    "letra": "Eu bebi demais e não consigo me lembrar sequer",
    "alvoHz": 0
  },
  {
    "inicio": 185.006,
    "fim": 188.718,
    "cantor": "dueto",
    "letra": "Qual era o nome daquela mulher",
    "alvoHz": 0
  },
  {
    "inicio": 188.718,
    "fim": 192.429,
    "cantor": "dueto",
    "letra": "A flor da noite na boate azul",
    "alvoHz": 0
  },
  {
    "inicio": 192.429,
    "fim": 200,
    "cantor": "intro",
    "letra": "♪ Final ♪",
    "alvoHz": 0
  }
];
export const BALADA_TRECHOS: TrechoFaixa[] = [
  {
    "inicio": 0,
    "fim": 7.73,
    "cantor": "intro",
    "letra": "♪ Introdução ♪",
    "alvoHz": 0
  },
  {
    "inicio": 7.73,
    "fim": 11.58,
    "cantor": 1,
    "letra": "Eu já lavei o meu carro, regulei o som",
    "alvoHz": 0
  },
  {
    "inicio": 11.58,
    "fim": 15.41,
    "cantor": 2,
    "letra": "Já tá tudo preparado, vem que o reggae é bom",
    "alvoHz": 0
  },
  {
    "inicio": 15.41,
    "fim": 19.54,
    "cantor": 1,
    "letra": "Menina, fique à vontade, entre e faça a festa",
    "alvoHz": 0
  },
  {
    "inicio": 19.54,
    "fim": 22.62,
    "cantor": 2,
    "letra": "Me liga mais tarde, vou adorar, vamo nessa",
    "alvoHz": 0
  },
  {
    "inicio": 22.62,
    "fim": 24.61,
    "cantor": "dueto",
    "letra": "Gata, me liga, mais tarde tem balada",
    "alvoHz": 0
  },
  {
    "inicio": 24.61,
    "fim": 26.86,
    "cantor": "dueto",
    "letra": "Quero curtir com você na madrugada",
    "alvoHz": 0
  },
  {
    "inicio": 26.86,
    "fim": 30.16,
    "cantor": "dueto",
    "letra": "Dançar, pular, até o sol raiar",
    "alvoHz": 0
  },
  {
    "inicio": 30.16,
    "fim": 32.45,
    "cantor": "dueto",
    "letra": "Gata, me liga, mais tarde tem balada",
    "alvoHz": 0
  },
  {
    "inicio": 32.45,
    "fim": 34.41,
    "cantor": "dueto",
    "letra": "Quero curtir com você na madrugada",
    "alvoHz": 0
  },
  {
    "inicio": 34.41,
    "fim": 36.9,
    "cantor": "dueto",
    "letra": "Dançar, pular, que hoje vai rolar o",
    "alvoHz": 0
  },
  {
    "inicio": 36.9,
    "fim": 37.77,
    "cantor": "dueto",
    "letra": "Que hoje vai rolar o",
    "alvoHz": 0
  },
  {
    "inicio": 37.77,
    "fim": 39.02,
    "cantor": "dueto",
    "letra": "Tchê, tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 39.02,
    "fim": 39.99,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 39.99,
    "fim": 40.94,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 40.94,
    "fim": 42.0,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 42.0,
    "fim": 43.52,
    "cantor": "dueto",
    "letra": "Tchê, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 43.52,
    "fim": 45.57,
    "cantor": "dueto",
    "letra": "Gusttavo Lima e você",
    "alvoHz": 0
  },
  {
    "inicio": 45.57,
    "fim": 46.49,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 46.49,
    "fim": 47.4,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 47.4,
    "fim": 48.31,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 48.31,
    "fim": 49.4,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 49.4,
    "fim": 51.0,
    "cantor": "dueto",
    "letra": "Tchê, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 51.0,
    "fim": 53.02,
    "cantor": "intro",
    "letra": "♪ Instrumental ♪",
    "alvoHz": 0
  },
  {
    "inicio": 53.02,
    "fim": 60.4,
    "cantor": 1,
    "letra": "Se você me olhar, vou querer te pegar",
    "alvoHz": 0
  },
  {
    "inicio": 60.4,
    "fim": 67.66,
    "cantor": 2,
    "letra": "E depois namorar, curtição, que hoje vai rolar",
    "alvoHz": 0
  },
  {
    "inicio": 67.66,
    "fim": 69.86,
    "cantor": "dueto",
    "letra": "Gata, me liga, mais tarde tem balada",
    "alvoHz": 0
  },
  {
    "inicio": 69.86,
    "fim": 71.64,
    "cantor": "dueto",
    "letra": "Quero curtir com você na madrugada",
    "alvoHz": 0
  },
  {
    "inicio": 71.64,
    "fim": 75.11,
    "cantor": "dueto",
    "letra": "Dançar, pular, até o sol raiar",
    "alvoHz": 0
  },
  {
    "inicio": 75.11,
    "fim": 77.08,
    "cantor": "dueto",
    "letra": "Gata, me liga, mais tarde tem balada",
    "alvoHz": 0
  },
  {
    "inicio": 77.08,
    "fim": 79.21,
    "cantor": "dueto",
    "letra": "Quero curtir com você na madrugada",
    "alvoHz": 0
  },
  {
    "inicio": 79.21,
    "fim": 82.72,
    "cantor": "dueto",
    "letra": "Dançar, pular, que hoje vai rolar o",
    "alvoHz": 0
  },
  {
    "inicio": 82.72,
    "fim": 84.04,
    "cantor": "dueto",
    "letra": "Tchê, tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 84.04,
    "fim": 85.04,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 85.04,
    "fim": 85.92,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 85.92,
    "fim": 87.0,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 87.0,
    "fim": 88.75,
    "cantor": "dueto",
    "letra": "Tchê, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 88.75,
    "fim": 90.68,
    "cantor": "dueto",
    "letra": "Gusttavo Lima e você",
    "alvoHz": 0
  },
  {
    "inicio": 90.68,
    "fim": 91.53,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 91.53,
    "fim": 92.36,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 92.36,
    "fim": 93.35,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 93.35,
    "fim": 94.45,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 94.45,
    "fim": 96.29,
    "cantor": "dueto",
    "letra": "Tchê, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 96.29,
    "fim": 98.8,
    "cantor": 2,
    "letra": "Gusttavo Lima",
    "alvoHz": 0
  },
  {
    "inicio": 98.8,
    "fim": 111.2,
    "cantor": "intro",
    "letra": "♪ Instrumental ♪",
    "alvoHz": 0
  },
  {
    "inicio": 111.2,
    "fim": 112.56,
    "cantor": 1,
    "letra": "Que hoje vai rolar",
    "alvoHz": 0
  },
  {
    "inicio": 112.56,
    "fim": 114.67,
    "cantor": "dueto",
    "letra": "Gata, me liga, mais tarde tem balada",
    "alvoHz": 0
  },
  {
    "inicio": 114.67,
    "fim": 116.75,
    "cantor": "dueto",
    "letra": "Quero curtir com você na madrugada",
    "alvoHz": 0
  },
  {
    "inicio": 116.75,
    "fim": 120.06,
    "cantor": "dueto",
    "letra": "Dançar, pular, até o sol raiar",
    "alvoHz": 0
  },
  {
    "inicio": 120.06,
    "fim": 121.9,
    "cantor": "dueto",
    "letra": "Gata, me liga, mais tarde tem balada",
    "alvoHz": 0
  },
  {
    "inicio": 121.9,
    "fim": 124.08,
    "cantor": "dueto",
    "letra": "Quero curtir com você na madrugada",
    "alvoHz": 0
  },
  {
    "inicio": 124.08,
    "fim": 126.4,
    "cantor": "dueto",
    "letra": "Dançar, pular, que hoje vai rolar o",
    "alvoHz": 0
  },
  {
    "inicio": 126.4,
    "fim": 127.63,
    "cantor": "dueto",
    "letra": "Que hoje vai rolar o",
    "alvoHz": 0
  },
  {
    "inicio": 127.63,
    "fim": 128.7,
    "cantor": "dueto",
    "letra": "Tchê, tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 128.7,
    "fim": 129.77,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 129.77,
    "fim": 130.65,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 130.65,
    "fim": 131.75,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 131.75,
    "fim": 133.62,
    "cantor": "dueto",
    "letra": "Tchê, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 133.62,
    "fim": 135.6,
    "cantor": "dueto",
    "letra": "Gusttavo Lima e você",
    "alvoHz": 0
  },
  {
    "inicio": 135.6,
    "fim": 136.65,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 136.65,
    "fim": 137.32,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 137.32,
    "fim": 138.27,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 138.27,
    "fim": 139.35,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 139.35,
    "fim": 141.0,
    "cantor": "dueto",
    "letra": "Tchê, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 141.0,
    "fim": 142.46,
    "cantor": "intro",
    "letra": "♪ Instrumental ♪",
    "alvoHz": 0
  },
  {
    "inicio": 142.46,
    "fim": 150.48,
    "cantor": 2,
    "letra": "Se você me olhar, vou querer te pegar",
    "alvoHz": 0
  },
  {
    "inicio": 150.48,
    "fim": 157.67,
    "cantor": 1,
    "letra": "E depois namorar, curtição, que hoje vai rolar",
    "alvoHz": 0
  },
  {
    "inicio": 157.67,
    "fim": 159.6,
    "cantor": "dueto",
    "letra": "Gata, me liga, mais tarde tem balada",
    "alvoHz": 0
  },
  {
    "inicio": 159.6,
    "fim": 161.63,
    "cantor": "dueto",
    "letra": "Quero curtir com você na madrugada",
    "alvoHz": 0
  },
  {
    "inicio": 161.63,
    "fim": 165.11,
    "cantor": "dueto",
    "letra": "Dançar, pular, até o sol raiar",
    "alvoHz": 0
  },
  {
    "inicio": 165.11,
    "fim": 167.11,
    "cantor": "dueto",
    "letra": "Gata, me liga, mais tarde tem balada",
    "alvoHz": 0
  },
  {
    "inicio": 167.11,
    "fim": 169.28,
    "cantor": "dueto",
    "letra": "Quero curtir com você na madrugada",
    "alvoHz": 0
  },
  {
    "inicio": 169.28,
    "fim": 172.7,
    "cantor": "dueto",
    "letra": "Dançar, pular, que hoje vai rolar o",
    "alvoHz": 0
  },
  {
    "inicio": 172.7,
    "fim": 174.05,
    "cantor": "dueto",
    "letra": "Tchê, tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 174.05,
    "fim": 174.85,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 174.85,
    "fim": 175.85,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 175.85,
    "fim": 176.9,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 176.9,
    "fim": 178.55,
    "cantor": "dueto",
    "letra": "Tchê, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 178.55,
    "fim": 180.58,
    "cantor": "dueto",
    "letra": "Gusttavo Lima e você",
    "alvoHz": 0
  },
  {
    "inicio": 180.58,
    "fim": 181.52,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 181.52,
    "fim": 182.52,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 182.52,
    "fim": 183.44,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 183.44,
    "fim": 184.5,
    "cantor": "dueto",
    "letra": "Tchêrere, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 184.5,
    "fim": 186.08,
    "cantor": "dueto",
    "letra": "Tchê, tchê, tchê",
    "alvoHz": 0
  },
  {
    "inicio": 186.08,
    "fim": 190.0,
    "cantor": "dueto",
    "letra": "Gusttavo Lima e você",
    "alvoHz": 0
  },
  {
    "inicio": 190.0,
    "fim": 207.934694,
    "cantor": "intro",
    "letra": "♪ Final ♪",
    "alvoHz": 0
  }
];
export const FAIXAS_NOVAS = [
  ...FAIXAS_RECENTES,
  { id: "meiga-e-abusada", titulo: "Meiga e Abusada", artista: "Anitta", arquivo: "/musicas/meiga-e-abusada.webm", duracao: 238.221, trechos: MEIGA_TRECHOS, afinacao: false, letraSincronizada: true },
  { id: "vagalumes", titulo: "Vagalumes", artista: "Pollo feat. Ivo Mozart", arquivo: "/musicas/vagalumes.webm", duracao: 169.901, trechos: VAGALUMES_TRECHOS, afinacao: false, letraSincronizada: true },
  ...FAIXAS_ADICIONAIS,
  { id: "quero-te-encontrar", titulo: "Quero Te Encontrar", artista: "Claudinho & Buchecha", arquivo: "/musicas/quero-te-encontrar.m4a", duracao: 227.989002, trechos: QUERO_TRECHOS, afinacao: false, letraSincronizada: true },
  { id: "infiel", titulo: "Infiel", artista: "Marília Mendonça", arquivo: "/musicas/infiel.m4a", duracao: 201.943946, trechos: INFIEL_TRECHOS, afinacao: false, letraSincronizada: true },
  { id: "boate-azul", titulo: "Boate Azul", artista: "Bruno & Marrone", arquivo: "/musicas/boate-azul.m4a", duracao: 200, trechos: BOATE_TRECHOS, afinacao: false, letraSincronizada: true },
  { id: "balada", titulo: "Balada", artista: "Gusttavo Lima", arquivo: "/musicas/balada.m4a", duracao: 207.934694, trechos: BALADA_TRECHOS, afinacao: false, letraSincronizada: true },
];
