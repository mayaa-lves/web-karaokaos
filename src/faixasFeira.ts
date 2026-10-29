// Letras fornecidas pela Maya. Marcações iniciais por referências e estrutura musical.
// Não há validação fonética; veja sincronizacao-10-novas.json.
export type FaixaFeira = { id: string; titulo: string; artista: string; arquivo: string; duracao: number; trechos: { inicio: number; fim: number; cantor: 1 | 2 | "dueto" | "intro"; letra: string; alvoHz: number }[]; afinacao: boolean; letraSincronizada: boolean };
export const FAIXAS_FEIRA: FaixaFeira[] = [
  {
    "id": "um-peao-desse",
    "titulo": "Um Peão Desse",
    "artista": "CountryBeat & Mari Fernandez",
    "arquivo": "/musicas/um-peao-desse.m4a",
    "duracao": 134.234558,
    "trechos": [
      {
        "inicio": 0,
        "fim": 4.36,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 4.36,
        "fim": 7.72,
        "cantor": 1,
        "letra": "Postei uma foto todo traiadão",
        "alvoHz": 0
      },
      {
        "inicio": 7.72,
        "fim": 10.61,
        "cantor": 1,
        "letra": "Ela mandou olhinho e coração",
        "alvoHz": 0
      },
      {
        "inicio": 10.61,
        "fim": 13.92,
        "cantor": 2,
        "letra": "Perguntou se eu vou pra festa de peão",
        "alvoHz": 0
      },
      {
        "inicio": 13.92,
        "fim": 16.79,
        "cantor": 2,
        "letra": "Oh, novinha, já peguei a sua intenção",
        "alvoHz": 0
      },
      {
        "inicio": 16.79,
        "fim": 19.58,
        "cantor": 1,
        "letra": "(Oh, novinha, já peguei a sua intenção)",
        "alvoHz": 0
      },
      {
        "inicio": 19.58,
        "fim": 23.35,
        "cantor": "dueto",
        "letra": "Nossa, um peão desse, eu até mudava pra roça",
        "alvoHz": 0
      },
      {
        "inicio": 23.35,
        "fim": 26.24,
        "cantor": "dueto",
        "letra": "Usava bota e comprava uma caminhonete",
        "alvoHz": 0
      },
      {
        "inicio": 26.24,
        "fim": 31.51,
        "cantor": "dueto",
        "letra": "A pegada, a voz grossa me enlouquece",
        "alvoHz": 0
      },
      {
        "inicio": 31.51,
        "fim": 35.65,
        "cantor": "dueto",
        "letra": "Nossa, um peão desse, eu até mudava pra roça",
        "alvoHz": 0
      },
      {
        "inicio": 35.65,
        "fim": 38.7,
        "cantor": "dueto",
        "letra": "Usava bota e comprava uma caminhonete",
        "alvoHz": 0
      },
      {
        "inicio": 38.7,
        "fim": 44.68,
        "cantor": "dueto",
        "letra": "A pegada, a voz grossa me enlouquece",
        "alvoHz": 0
      },
      {
        "inicio": 44.68,
        "fim": 47.66,
        "cantor": 2,
        "letra": "Os cara que elas ama é os de chapéu e bota",
        "alvoHz": 0
      },
      {
        "inicio": 47.66,
        "fim": 50.68,
        "cantor": 1,
        "letra": "Por isso que tá da hora, chovendo na minha horta",
        "alvoHz": 0
      },
      {
        "inicio": 50.68,
        "fim": 53.74,
        "cantor": 1,
        "letra": "Os cara que elas ama é os de chapéu e bota",
        "alvoHz": 0
      },
      {
        "inicio": 53.74,
        "fim": 56.28,
        "cantor": 2,
        "letra": "Por isso que tá da hora, chovendo na minha horta",
        "alvoHz": 0
      },
      {
        "inicio": 56.28,
        "fim": 69.25,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 69.25,
        "fim": 72.55,
        "cantor": 2,
        "letra": "Postei uma foto todo traiadão",
        "alvoHz": 0
      },
      {
        "inicio": 72.55,
        "fim": 75.44,
        "cantor": 1,
        "letra": "Ela mandou olhinho e coração",
        "alvoHz": 0
      },
      {
        "inicio": 75.44,
        "fim": 78.78,
        "cantor": 1,
        "letra": "Perguntou se eu vou pra festa de peão",
        "alvoHz": 0
      },
      {
        "inicio": 78.78,
        "fim": 81.75,
        "cantor": 2,
        "letra": "Oh, novinha, já peguei a sua intenção",
        "alvoHz": 0
      },
      {
        "inicio": 81.75,
        "fim": 84.49,
        "cantor": 2,
        "letra": "(Oh, novinha, já peguei a sua intenção)",
        "alvoHz": 0
      },
      {
        "inicio": 84.49,
        "fim": 88.32,
        "cantor": "dueto",
        "letra": "Nossa, um peão desse, eu até mudava pra roça",
        "alvoHz": 0
      },
      {
        "inicio": 88.32,
        "fim": 91.54,
        "cantor": "dueto",
        "letra": "Usava bota e comprava uma caminhonete",
        "alvoHz": 0
      },
      {
        "inicio": 91.54,
        "fim": 96.58,
        "cantor": "dueto",
        "letra": "A pegada, a voz grossa me enlouquece",
        "alvoHz": 0
      },
      {
        "inicio": 96.58,
        "fim": 100.85,
        "cantor": "dueto",
        "letra": "Nossa, um peão desse, eu até mudava pra roça",
        "alvoHz": 0
      },
      {
        "inicio": 100.85,
        "fim": 103.53,
        "cantor": "dueto",
        "letra": "Usava bota e comprava uma caminhonete",
        "alvoHz": 0
      },
      {
        "inicio": 103.53,
        "fim": 109.73,
        "cantor": "dueto",
        "letra": "A pegada, a voz grossa me enlouquece",
        "alvoHz": 0
      },
      {
        "inicio": 109.73,
        "fim": 112.48,
        "cantor": 2,
        "letra": "Os cara que elas ama é os de chapéu e bota",
        "alvoHz": 0
      },
      {
        "inicio": 112.48,
        "fim": 115.85,
        "cantor": 2,
        "letra": "Por isso que tá da hora, chovendo na minha horta",
        "alvoHz": 0
      },
      {
        "inicio": 115.85,
        "fim": 118.65,
        "cantor": 1,
        "letra": "Os cara que elas ama é os de chapéu e bota",
        "alvoHz": 0
      },
      {
        "inicio": 118.65,
        "fim": 122.07,
        "cantor": 1,
        "letra": "Por isso que tá da hora, chovendo na minha horta",
        "alvoHz": 0
      },
      {
        "inicio": 122.07,
        "fim": 134.234558,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "peao-todo-tatuado",
    "titulo": "Peão Todo Tatuado",
    "artista": "Jeninho & Mariana Fagundes",
    "arquivo": "/musicas/peao-todo-tatuado.m4a",
    "duracao": 137.485351,
    "trechos": [
      {
        "inicio": 0,
        "fim": 3.55,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 3.55,
        "fim": 6.85,
        "cantor": 1,
        "letra": "Ela não vai pro rodeio pra ver montaria",
        "alvoHz": 0
      },
      {
        "inicio": 6.85,
        "fim": 10.51,
        "cantor": 1,
        "letra": "Ela não vai pro rodeio pra beber cachaça",
        "alvoHz": 0
      },
      {
        "inicio": 10.51,
        "fim": 13.56,
        "cantor": 2,
        "letra": "Sabe o que que ela tá interessada?",
        "alvoHz": 0
      },
      {
        "inicio": 13.56,
        "fim": 17.5,
        "cantor": 2,
        "letra": "Sabe o que que ela quer? Ha-ha-ha",
        "alvoHz": 0
      },
      {
        "inicio": 17.5,
        "fim": 21.59,
        "cantor": "dueto",
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 21.59,
        "fim": 24.76,
        "cantor": "dueto",
        "letra": "Beijo de paieiro, perfume de mato",
        "alvoHz": 0
      },
      {
        "inicio": 24.76,
        "fim": 28.08,
        "cantor": "dueto",
        "letra": "Me pega de jeito, me prende no laço",
        "alvoHz": 0
      },
      {
        "inicio": 28.08,
        "fim": 30.17,
        "cantor": "dueto",
        "letra": "Eu adoro",
        "alvoHz": 0
      },
      {
        "inicio": 30.17,
        "fim": 34.12,
        "cantor": "dueto",
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 34.12,
        "fim": 37.22,
        "cantor": "dueto",
        "letra": "Beijo de paieiro, perfume do mato",
        "alvoHz": 0
      },
      {
        "inicio": 37.22,
        "fim": 40.67,
        "cantor": "dueto",
        "letra": "Me pega de jeito, me prende no laço",
        "alvoHz": 0
      },
      {
        "inicio": 40.67,
        "fim": 43.06,
        "cantor": "dueto",
        "letra": "Eu adoro",
        "alvoHz": 0
      },
      {
        "inicio": 43.06,
        "fim": 46.64,
        "cantor": 1,
        "letra": "Dentro da caminhonete, embaixo do chapéu de palha",
        "alvoHz": 0
      },
      {
        "inicio": 46.64,
        "fim": 49.36,
        "cantor": 1,
        "letra": "O chicote estrala, e chicote estrala",
        "alvoHz": 0
      },
      {
        "inicio": 49.36,
        "fim": 52.91,
        "cantor": 2,
        "letra": "Quando acaba o rodeio, aí começa a cavalgada",
        "alvoHz": 0
      },
      {
        "inicio": 52.91,
        "fim": 55.16,
        "cantor": 2,
        "letra": "O chicote estrala, o chicote estrala",
        "alvoHz": 0
      },
      {
        "inicio": 55.16,
        "fim": 59.19,
        "cantor": 1,
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 59.19,
        "fim": 71.33,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 71.33,
        "fim": 74.54,
        "cantor": 1,
        "letra": "Ela não vai pro rodeio pra ver montaria",
        "alvoHz": 0
      },
      {
        "inicio": 74.54,
        "fim": 78.0,
        "cantor": 2,
        "letra": "Ela não vai pro rodeio pra beber cachaça",
        "alvoHz": 0
      },
      {
        "inicio": 78.0,
        "fim": 81.28,
        "cantor": 2,
        "letra": "Sabe o que que ela tá interessada?",
        "alvoHz": 0
      },
      {
        "inicio": 81.28,
        "fim": 85.04,
        "cantor": 1,
        "letra": "Sabe o que que ela quer? Ha-ha-ha",
        "alvoHz": 0
      },
      {
        "inicio": 85.04,
        "fim": 89.09,
        "cantor": "dueto",
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 89.09,
        "fim": 92.03,
        "cantor": "dueto",
        "letra": "Beijo de paieiro, perfume de mato",
        "alvoHz": 0
      },
      {
        "inicio": 92.03,
        "fim": 95.48,
        "cantor": "dueto",
        "letra": "Me pega de jeito, me prende no laço",
        "alvoHz": 0
      },
      {
        "inicio": 95.48,
        "fim": 96.51,
        "cantor": "dueto",
        "letra": "Eu adoro",
        "alvoHz": 0
      },
      {
        "inicio": 96.51,
        "fim": 97.57,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 97.57,
        "fim": 101.65,
        "cantor": "dueto",
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 101.65,
        "fim": 104.66,
        "cantor": "dueto",
        "letra": "Beijo de paieiro, perfume do mato",
        "alvoHz": 0
      },
      {
        "inicio": 104.66,
        "fim": 107.93,
        "cantor": "dueto",
        "letra": "Me pega de jeito, me pega de laço",
        "alvoHz": 0
      },
      {
        "inicio": 107.93,
        "fim": 110.26,
        "cantor": "dueto",
        "letra": "Eu adoro",
        "alvoHz": 0
      },
      {
        "inicio": 110.26,
        "fim": 114.13,
        "cantor": 1,
        "letra": "Dentro da caminhonete, embaixo do chapéu de palha",
        "alvoHz": 0
      },
      {
        "inicio": 114.13,
        "fim": 116.82,
        "cantor": 2,
        "letra": "O chicote estrala, e chicote estrala",
        "alvoHz": 0
      },
      {
        "inicio": 116.82,
        "fim": 119.9,
        "cantor": 2,
        "letra": "Quando acaba o rodeio, aí começa a cavalgada (e aí?)",
        "alvoHz": 0
      },
      {
        "inicio": 119.9,
        "fim": 123.21,
        "cantor": 1,
        "letra": "O chicote estrala, o chicote estrala",
        "alvoHz": 0
      },
      {
        "inicio": 123.21,
        "fim": 127.81,
        "cantor": 1,
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 127.81,
        "fim": 137.485351,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "a-culpa-e-dele",
    "titulo": "A Culpa é Dele",
    "artista": "Marília Mendonça & Maiara & Maraisa",
    "arquivo": "/musicas/a-culpa-e-dele.m4a",
    "duracao": 173.081542,
    "trechos": [
      {
        "inicio": 0,
        "fim": 9.84,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 9.84,
        "fim": 11.2,
        "cantor": 1,
        "letra": "Ei, amiga, senta aqui",
        "alvoHz": 0
      },
      {
        "inicio": 11.2,
        "fim": 13.59,
        "cantor": 1,
        "letra": "Que cara é essa aí?",
        "alvoHz": 0
      },
      {
        "inicio": 13.59,
        "fim": 15.65,
        "cantor": 2,
        "letra": "Será que alguém morreu?",
        "alvoHz": 0
      },
      {
        "inicio": 15.65,
        "fim": 17.39,
        "cantor": 2,
        "letra": "O que aconteceu?",
        "alvoHz": 0
      },
      {
        "inicio": 17.39,
        "fim": 19.23,
        "cantor": 1,
        "letra": "O que quer me dizer?",
        "alvoHz": 0
      },
      {
        "inicio": 19.23,
        "fim": 19.745,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 19.745,
        "fim": 21.29,
        "cantor": 1,
        "letra": "Por que cê tá chorando?",
        "alvoHz": 0
      },
      {
        "inicio": 21.29,
        "fim": 23.21,
        "cantor": 2,
        "letra": "Eu não tô entendendo",
        "alvoHz": 0
      },
      {
        "inicio": 23.21,
        "fim": 24.96,
        "cantor": 2,
        "letra": "Cê tá me assustando",
        "alvoHz": 0
      },
      {
        "inicio": 24.96,
        "fim": 26.96,
        "cantor": 1,
        "letra": "Lembro da noite, sim",
        "alvoHz": 0
      },
      {
        "inicio": 26.96,
        "fim": 29.07,
        "cantor": 1,
        "letra": "Que a gente saiu",
        "alvoHz": 0
      },
      {
        "inicio": 29.07,
        "fim": 30.83,
        "cantor": 2,
        "letra": "Cê disse que ia ali",
        "alvoHz": 0
      },
      {
        "inicio": 30.83,
        "fim": 32.66,
        "cantor": 2,
        "letra": "Logo depois sumiu",
        "alvoHz": 0
      },
      {
        "inicio": 32.66,
        "fim": 34.33,
        "cantor": 1,
        "letra": "Aonde você tava?",
        "alvoHz": 0
      },
      {
        "inicio": 34.33,
        "fim": 36.62,
        "cantor": 1,
        "letra": "Como assim, vou ficar brava?",
        "alvoHz": 0
      },
      {
        "inicio": 36.62,
        "fim": 40.0,
        "cantor": 2,
        "letra": "Que história é essa que aconteceu?",
        "alvoHz": 0
      },
      {
        "inicio": 40.0,
        "fim": 44.02,
        "cantor": 2,
        "letra": "O cara que eu tava deu em cima de você, foi?",
        "alvoHz": 0
      },
      {
        "inicio": 44.02,
        "fim": 47.63,
        "cantor": 1,
        "letra": "E aí você ficou com ele, mas foi uma vez, ok",
        "alvoHz": 0
      },
      {
        "inicio": 47.63,
        "fim": 51.68,
        "cantor": 1,
        "letra": "Do que cê tá com medo? De estragar a amizade?",
        "alvoHz": 0
      },
      {
        "inicio": 51.68,
        "fim": 57.06,
        "cantor": 2,
        "letra": "Nem fica preocupada, a gente resolve mais tarde",
        "alvoHz": 0
      },
      {
        "inicio": 57.06,
        "fim": 61.03,
        "cantor": "dueto",
        "letra": "Se quem tava comigo era ele, a culpa é dele",
        "alvoHz": 0
      },
      {
        "inicio": 61.03,
        "fim": 65.07,
        "cantor": "dueto",
        "letra": "Quem fez essa bagunça na nossa amizade é ele",
        "alvoHz": 0
      },
      {
        "inicio": 65.07,
        "fim": 70.39,
        "cantor": "dueto",
        "letra": "Eu não vou deixar de ser sua amiga por causa de um qualquer",
        "alvoHz": 0
      },
      {
        "inicio": 70.39,
        "fim": 72.71,
        "cantor": "dueto",
        "letra": "Que não respeita uma mulher",
        "alvoHz": 0
      },
      {
        "inicio": 72.71,
        "fim": 76.36,
        "cantor": "dueto",
        "letra": "Se quem tava comigo era ele, a culpa é dele",
        "alvoHz": 0
      },
      {
        "inicio": 76.36,
        "fim": 80.39,
        "cantor": "dueto",
        "letra": "Quem fez essa bagunça na nossa amizade é ele",
        "alvoHz": 0
      },
      {
        "inicio": 80.39,
        "fim": 85.33,
        "cantor": "dueto",
        "letra": "Eu não vou deixar de ser sua amiga por causa de um qualquer",
        "alvoHz": 0
      },
      {
        "inicio": 85.33,
        "fim": 90.22,
        "cantor": "dueto",
        "letra": "Que não respeita uma mulher",
        "alvoHz": 0
      },
      {
        "inicio": 90.22,
        "fim": 104.51,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 104.51,
        "fim": 109.461667,
        "cantor": 2,
        "letra": "O cara que eu tava deu em cima de você, foi?",
        "alvoHz": 0
      },
      {
        "inicio": 109.461667,
        "fim": 112.79,
        "cantor": 1,
        "letra": "Aí você ficou com ele, mas foi só uma vez",
        "alvoHz": 0
      },
      {
        "inicio": 112.79,
        "fim": 116.81,
        "cantor": 1,
        "letra": "Do que cê tá com medo? De estragar a amizade?",
        "alvoHz": 0
      },
      {
        "inicio": 116.81,
        "fim": 121.8,
        "cantor": 2,
        "letra": "Nem fica preocupada, a gente resolve mais tarde",
        "alvoHz": 0
      },
      {
        "inicio": 121.8,
        "fim": 126.13,
        "cantor": "dueto",
        "letra": "Se quem tava comigo era ele, a culpa é dele",
        "alvoHz": 0
      },
      {
        "inicio": 126.13,
        "fim": 129.83,
        "cantor": "dueto",
        "letra": "Quem fez essa bagunça na nossa amizade é ele",
        "alvoHz": 0
      },
      {
        "inicio": 129.83,
        "fim": 134.71,
        "cantor": "dueto",
        "letra": "Eu não vou deixar de ser sua amiga por causa de um qualquer",
        "alvoHz": 0
      },
      {
        "inicio": 134.71,
        "fim": 137.62,
        "cantor": "dueto",
        "letra": "Que não respeita uma mulher",
        "alvoHz": 0
      },
      {
        "inicio": 137.62,
        "fim": 141.46,
        "cantor": "dueto",
        "letra": "Se quem tava comigo era ele, a culpa é dele",
        "alvoHz": 0
      },
      {
        "inicio": 141.46,
        "fim": 145.16,
        "cantor": "dueto",
        "letra": "Quem fez essa bagunça na nossa amizade é ele",
        "alvoHz": 0
      },
      {
        "inicio": 145.16,
        "fim": 150.5,
        "cantor": "dueto",
        "letra": "Eu não vou deixar de ser sua amiga por causa de um qualquer",
        "alvoHz": 0
      },
      {
        "inicio": 150.5,
        "fim": 155.66,
        "cantor": "dueto",
        "letra": "Que não respeita uma mulher",
        "alvoHz": 0
      },
      {
        "inicio": 155.66,
        "fim": 160.55,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 160.55,
        "fim": 165.5,
        "cantor": "dueto",
        "letra": "Eu não vou deixar de ser sua amiga por causa de um qualquer",
        "alvoHz": 0
      },
      {
        "inicio": 165.5,
        "fim": 170.85,
        "cantor": "dueto",
        "letra": "Que não respeita uma mulher",
        "alvoHz": 0
      },
      {
        "inicio": 170.85,
        "fim": 173.081542,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "de-quem-e-a-culpa",
    "titulo": "De Quem é a Culpa?",
    "artista": "Marília Mendonça",
    "arquivo": "/musicas/de-quem-e-a-culpa.m4a",
    "duracao": 205.287619,
    "trechos": [
      {
        "inicio": 0,
        "fim": 16.22,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 16.22,
        "fim": 19.52,
        "cantor": 1,
        "letra": "Exagerado, sim",
        "alvoHz": 0
      },
      {
        "inicio": 19.52,
        "fim": 22.91,
        "cantor": 1,
        "letra": "Sou mais você que eu",
        "alvoHz": 0
      },
      {
        "inicio": 22.91,
        "fim": 26.44,
        "cantor": 2,
        "letra": "Sobrevivo de olhares",
        "alvoHz": 0
      },
      {
        "inicio": 26.44,
        "fim": 29.96,
        "cantor": 2,
        "letra": "E alguns abraços que me deu",
        "alvoHz": 0
      },
      {
        "inicio": 29.96,
        "fim": 33.22,
        "cantor": 1,
        "letra": "E o que vai ser de mim",
        "alvoHz": 0
      },
      {
        "inicio": 33.22,
        "fim": 36.92,
        "cantor": 1,
        "letra": "E o meu assunto que não muda?",
        "alvoHz": 0
      },
      {
        "inicio": 36.92,
        "fim": 41.26,
        "cantor": 2,
        "letra": "Minha cabeça não ajuda",
        "alvoHz": 0
      },
      {
        "inicio": 41.26,
        "fim": 43.43,
        "cantor": 2,
        "letra": "Loucura, tortura",
        "alvoHz": 0
      },
      {
        "inicio": 43.43,
        "fim": 47.11,
        "cantor": 1,
        "letra": "E que se dane a minha postura",
        "alvoHz": 0
      },
      {
        "inicio": 47.11,
        "fim": 50.37,
        "cantor": 1,
        "letra": "Se eu mudei, você não viu",
        "alvoHz": 0
      },
      {
        "inicio": 50.37,
        "fim": 54.82,
        "cantor": 2,
        "letra": "Eu só queria ter você por perto",
        "alvoHz": 0
      },
      {
        "inicio": 54.82,
        "fim": 56.93,
        "cantor": 2,
        "letra": "Mas você sumiu",
        "alvoHz": 0
      },
      {
        "inicio": 56.93,
        "fim": 60.63,
        "cantor": 1,
        "letra": "É tipo um vício que não tem mais cura",
        "alvoHz": 0
      },
      {
        "inicio": 60.63,
        "fim": 65.68,
        "cantor": 1,
        "letra": "E agora, de quem é a culpa?",
        "alvoHz": 0
      },
      {
        "inicio": 65.68,
        "fim": 72.45,
        "cantor": 2,
        "letra": "A culpa é sua por ter esse sorriso",
        "alvoHz": 0
      },
      {
        "inicio": 72.45,
        "fim": 79.19,
        "cantor": 2,
        "letra": "Ou a culpa é minha por me apaixonar por ele?",
        "alvoHz": 0
      },
      {
        "inicio": 79.19,
        "fim": 80.95,
        "cantor": 1,
        "letra": "Só isso",
        "alvoHz": 0
      },
      {
        "inicio": 80.95,
        "fim": 84.49,
        "cantor": "dueto",
        "letra": "Não finja que eu não tô falando com você",
        "alvoHz": 0
      },
      {
        "inicio": 84.49,
        "fim": 87.77,
        "cantor": "dueto",
        "letra": "Eu tô parado no meio da rua",
        "alvoHz": 0
      },
      {
        "inicio": 87.77,
        "fim": 91.38,
        "cantor": "dueto",
        "letra": "Eu tô entrando no meio dos carros",
        "alvoHz": 0
      },
      {
        "inicio": 91.38,
        "fim": 94.88,
        "cantor": "dueto",
        "letra": "Sem você, a vida não continua",
        "alvoHz": 0
      },
      {
        "inicio": 94.88,
        "fim": 98.0,
        "cantor": "dueto",
        "letra": "Não finja que eu não tô falando com você",
        "alvoHz": 0
      },
      {
        "inicio": 98.0,
        "fim": 101.43,
        "cantor": "dueto",
        "letra": "Ninguém entende o que eu tô passando",
        "alvoHz": 0
      },
      {
        "inicio": 101.43,
        "fim": 107.27,
        "cantor": "dueto",
        "letra": "Quem é você, que eu não conheço mais?",
        "alvoHz": 0
      },
      {
        "inicio": 107.27,
        "fim": 114.21,
        "cantor": "dueto",
        "letra": "Me apaixonei pelo que eu inventei de você",
        "alvoHz": 0
      },
      {
        "inicio": 114.21,
        "fim": 123.06,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 123.06,
        "fim": 125.66,
        "cantor": 1,
        "letra": "Mas você sumiu",
        "alvoHz": 0
      },
      {
        "inicio": 125.66,
        "fim": 129.61,
        "cantor": 2,
        "letra": "É tipo um vício que não tem mais cura",
        "alvoHz": 0
      },
      {
        "inicio": 129.61,
        "fim": 134.15,
        "cantor": 2,
        "letra": "E agora, de quem é a culpa?",
        "alvoHz": 0
      },
      {
        "inicio": 134.15,
        "fim": 140.72,
        "cantor": 1,
        "letra": "A culpa é sua por ter esse sorriso",
        "alvoHz": 0
      },
      {
        "inicio": 140.72,
        "fim": 147.67,
        "cantor": 1,
        "letra": "Ou a culpa é minha por me apaixonar por ele?",
        "alvoHz": 0
      },
      {
        "inicio": 147.67,
        "fim": 149.51,
        "cantor": 2,
        "letra": "Só isso",
        "alvoHz": 0
      },
      {
        "inicio": 149.51,
        "fim": 153.25,
        "cantor": "dueto",
        "letra": "Não finja que eu não tô falando com você",
        "alvoHz": 0
      },
      {
        "inicio": 153.25,
        "fim": 156.49,
        "cantor": "dueto",
        "letra": "Eu tô parado no meio da rua",
        "alvoHz": 0
      },
      {
        "inicio": 156.49,
        "fim": 159.83,
        "cantor": "dueto",
        "letra": "Eu tô entrando no meio dos carros",
        "alvoHz": 0
      },
      {
        "inicio": 159.83,
        "fim": 163.39,
        "cantor": "dueto",
        "letra": "Sem você, a vida não continua",
        "alvoHz": 0
      },
      {
        "inicio": 163.39,
        "fim": 166.95,
        "cantor": "dueto",
        "letra": "Não finja que eu não tô falando com você",
        "alvoHz": 0
      },
      {
        "inicio": 166.95,
        "fim": 170.46,
        "cantor": "dueto",
        "letra": "Ninguém entende o que eu tô passando",
        "alvoHz": 0
      },
      {
        "inicio": 170.46,
        "fim": 175.81,
        "cantor": "dueto",
        "letra": "Quem é você, que eu não conheço mais?",
        "alvoHz": 0
      },
      {
        "inicio": 175.81,
        "fim": 182.48,
        "cantor": "dueto",
        "letra": "Me apaixonei pelo que eu inventei de você",
        "alvoHz": 0
      },
      {
        "inicio": 182.48,
        "fim": 189.59,
        "cantor": "dueto",
        "letra": "Iê-iê, iê-iê",
        "alvoHz": 0
      },
      {
        "inicio": 189.59,
        "fim": 196.61,
        "cantor": "dueto",
        "letra": "Me apaixonei pelo que eu inventei de você",
        "alvoHz": 0
      },
      {
        "inicio": 196.61,
        "fim": 205.287619,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "raspao",
    "titulo": "Raspão",
    "artista": "Henrique & Diego feat. Simone & Simaria",
    "arquivo": "/musicas/raspao.m4a",
    "duracao": 182.021224,
    "trechos": [
      {
        "inicio": 0,
        "fim": 9.06,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 9.06,
        "fim": 12.08,
        "cantor": 1,
        "letra": "Poxa, como ela tava linda",
        "alvoHz": 0
      },
      {
        "inicio": 12.08,
        "fim": 17.35,
        "cantor": 1,
        "letra": "O tempo não passou mesmo pra ela",
        "alvoHz": 0
      },
      {
        "inicio": 17.35,
        "fim": 20.27,
        "cantor": 2,
        "letra": "Mudou o corte do cabelo",
        "alvoHz": 0
      },
      {
        "inicio": 20.27,
        "fim": 26.01,
        "cantor": 2,
        "letra": "Mas as covinhas do sorriso continua o charme dela",
        "alvoHz": 0
      },
      {
        "inicio": 26.01,
        "fim": 31.07,
        "cantor": 1,
        "letra": "Só aquele cara estranho no lugar que era meu",
        "alvoHz": 0
      },
      {
        "inicio": 31.07,
        "fim": 34.74,
        "cantor": 1,
        "letra": "Beijando a boca que era minha, foi aí que aconteceu",
        "alvoHz": 0
      },
      {
        "inicio": 34.74,
        "fim": 38.5,
        "cantor": 2,
        "letra": "Minha mão congelou, coração disparou",
        "alvoHz": 0
      },
      {
        "inicio": 38.5,
        "fim": 43.27,
        "cantor": 2,
        "letra": "Quando com um beijo de amigo me cumprimentou",
        "alvoHz": 0
      },
      {
        "inicio": 43.27,
        "fim": 45.95,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 45.95,
        "fim": 48.427143,
        "cantor": "dueto",
        "letra": "Ô, se valeu",
        "alvoHz": 0
      },
      {
        "inicio": 48.427143,
        "fim": 51.73,
        "cantor": "dueto",
        "letra": "Sentir um beijo seu",
        "alvoHz": 0
      },
      {
        "inicio": 51.73,
        "fim": 53.9,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 53.9,
        "fim": 55.95,
        "cantor": "dueto",
        "letra": "Foi no canto da boca",
        "alvoHz": 0
      },
      {
        "inicio": 55.95,
        "fim": 59.206,
        "cantor": "dueto",
        "letra": "Voltei no tempo em que eu era seu",
        "alvoHz": 0
      },
      {
        "inicio": 59.206,
        "fim": 60.02,
        "cantor": "dueto",
        "letra": "Só seu",
        "alvoHz": 0
      },
      {
        "inicio": 60.02,
        "fim": 62.88,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 62.88,
        "fim": 65.125714,
        "cantor": "dueto",
        "letra": "Ô, se valeu",
        "alvoHz": 0
      },
      {
        "inicio": 65.125714,
        "fim": 68.12,
        "cantor": "dueto",
        "letra": "Sentir um beijo seu",
        "alvoHz": 0
      },
      {
        "inicio": 68.12,
        "fim": 70.77,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 70.77,
        "fim": 72.89,
        "cantor": "dueto",
        "letra": "Foi no canto da boca",
        "alvoHz": 0
      },
      {
        "inicio": 72.89,
        "fim": 76.842,
        "cantor": "dueto",
        "letra": "Voltei no tempo em que eu era seu",
        "alvoHz": 0
      },
      {
        "inicio": 76.842,
        "fim": 77.83,
        "cantor": "dueto",
        "letra": "Só seu",
        "alvoHz": 0
      },
      {
        "inicio": 77.83,
        "fim": 91.09,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 91.09,
        "fim": 94.07,
        "cantor": 2,
        "letra": "Poxa, como ela tava linda",
        "alvoHz": 0
      },
      {
        "inicio": 94.07,
        "fim": 98.91,
        "cantor": 2,
        "letra": "O tempo não passou mesmo pra ela",
        "alvoHz": 0
      },
      {
        "inicio": 98.91,
        "fim": 102.53,
        "cantor": 1,
        "letra": "Mudou o corte do cabelo",
        "alvoHz": 0
      },
      {
        "inicio": 102.53,
        "fim": 108.31,
        "cantor": 1,
        "letra": "Mas as covinhas do sorriso continua o charme dela",
        "alvoHz": 0
      },
      {
        "inicio": 108.31,
        "fim": 112.72,
        "cantor": 2,
        "letra": "Só aquele cara estranho no lugar que era meu",
        "alvoHz": 0
      },
      {
        "inicio": 112.72,
        "fim": 116.68,
        "cantor": 2,
        "letra": "Beijando a boca que era minha, foi aí que aconteceu",
        "alvoHz": 0
      },
      {
        "inicio": 116.68,
        "fim": 120.8,
        "cantor": 1,
        "letra": "Minha mão congelou, coração disparou",
        "alvoHz": 0
      },
      {
        "inicio": 120.8,
        "fim": 125.05,
        "cantor": 1,
        "letra": "Quando com um beijo de amigo me cumprimentou",
        "alvoHz": 0
      },
      {
        "inicio": 125.05,
        "fim": 127.85,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 127.85,
        "fim": 130.468571,
        "cantor": "dueto",
        "letra": "Ô, se valeu",
        "alvoHz": 0
      },
      {
        "inicio": 130.468571,
        "fim": 133.96,
        "cantor": "dueto",
        "letra": "Sentir um beijo seu",
        "alvoHz": 0
      },
      {
        "inicio": 133.96,
        "fim": 136.16,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 136.16,
        "fim": 138.08,
        "cantor": "dueto",
        "letra": "Foi no canto da boca",
        "alvoHz": 0
      },
      {
        "inicio": 138.08,
        "fim": 141.472,
        "cantor": "dueto",
        "letra": "Voltei no tempo em que eu era seu",
        "alvoHz": 0
      },
      {
        "inicio": 141.472,
        "fim": 142.32,
        "cantor": "dueto",
        "letra": "Só seu",
        "alvoHz": 0
      },
      {
        "inicio": 142.32,
        "fim": 144.93,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 144.93,
        "fim": 145.688571,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 145.688571,
        "fim": 147.205714,
        "cantor": "dueto",
        "letra": "Ô, se valeu",
        "alvoHz": 0
      },
      {
        "inicio": 147.205714,
        "fim": 150.24,
        "cantor": "dueto",
        "letra": "Sentir um beijo seu",
        "alvoHz": 0
      },
      {
        "inicio": 150.24,
        "fim": 152.99,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 152.99,
        "fim": 154.74,
        "cantor": "dueto",
        "letra": "Foi no canto da boca",
        "alvoHz": 0
      },
      {
        "inicio": 154.74,
        "fim": 159.81,
        "cantor": "dueto",
        "letra": "Voltei no tempo em que eu era seu",
        "alvoHz": 0
      },
      {
        "inicio": 159.81,
        "fim": 161.53,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 161.53,
        "fim": 163.977143,
        "cantor": "dueto",
        "letra": "Ô, se valeu",
        "alvoHz": 0
      },
      {
        "inicio": 163.977143,
        "fim": 167.24,
        "cantor": "dueto",
        "letra": "Sentir um beijo seu",
        "alvoHz": 0
      },
      {
        "inicio": 167.24,
        "fim": 169.68,
        "cantor": "dueto",
        "letra": "Foi de raspão, mas valeu",
        "alvoHz": 0
      },
      {
        "inicio": 169.68,
        "fim": 171.78,
        "cantor": "dueto",
        "letra": "Foi no canto da boca",
        "alvoHz": 0
      },
      {
        "inicio": 171.78,
        "fim": 173.1,
        "cantor": "dueto",
        "letra": "Voltei no tempo em que eu era seu",
        "alvoHz": 0
      },
      {
        "inicio": 173.1,
        "fim": 182.021224,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "ate-que-durou",
    "titulo": "Até que Durou",
    "artista": "Péricles",
    "arquivo": "/musicas/ate-que-durou.m4a",
    "duracao": 208.306213,
    "trechos": [
      {
        "inicio": 0,
        "fim": 17.96,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 17.96,
        "fim": 21.67,
        "cantor": 1,
        "letra": "Tentei fazer valer a pena",
        "alvoHz": 0
      },
      {
        "inicio": 21.67,
        "fim": 25.35,
        "cantor": 1,
        "letra": "Passei por cima dos problemas",
        "alvoHz": 0
      },
      {
        "inicio": 25.35,
        "fim": 28.56,
        "cantor": 2,
        "letra": "Achei que eu era o bastante",
        "alvoHz": 0
      },
      {
        "inicio": 28.56,
        "fim": 32.2,
        "cantor": 2,
        "letra": "Mas não fui pra você",
        "alvoHz": 0
      },
      {
        "inicio": 32.2,
        "fim": 35.77,
        "cantor": 1,
        "letra": "Tentei ser um cara perfeito",
        "alvoHz": 0
      },
      {
        "inicio": 35.77,
        "fim": 39.23,
        "cantor": 1,
        "letra": "Eu fiz as coisas do seu jeito",
        "alvoHz": 0
      },
      {
        "inicio": 39.23,
        "fim": 43.0,
        "cantor": 2,
        "letra": "Queria ser mais importante",
        "alvoHz": 0
      },
      {
        "inicio": 43.0,
        "fim": 46.57,
        "cantor": 2,
        "letra": "Mas não fui pra você",
        "alvoHz": 0
      },
      {
        "inicio": 46.57,
        "fim": 48.19,
        "cantor": 1,
        "letra": "Até que durou",
        "alvoHz": 0
      },
      {
        "inicio": 48.19,
        "fim": 50.35,
        "cantor": 1,
        "letra": "Me diz o porquê",
        "alvoHz": 0
      },
      {
        "inicio": 50.35,
        "fim": 53.42,
        "cantor": 2,
        "letra": "Perdeu tanto tempo aqui",
        "alvoHz": 0
      },
      {
        "inicio": 53.42,
        "fim": 57.065714,
        "cantor": 2,
        "letra": "Te faço um favor",
        "alvoHz": 0
      },
      {
        "inicio": 57.065714,
        "fim": 59.8,
        "cantor": 1,
        "letra": "Melhor eu sumir",
        "alvoHz": 0
      },
      {
        "inicio": 59.8,
        "fim": 62.35,
        "cantor": "dueto",
        "letra": "Fui mais um nas suas mãos",
        "alvoHz": 0
      },
      {
        "inicio": 62.35,
        "fim": 66.31,
        "cantor": "dueto",
        "letra": "Não sei se por carência ou falta de opção",
        "alvoHz": 0
      },
      {
        "inicio": 66.31,
        "fim": 69.37,
        "cantor": "dueto",
        "letra": "Só sei que eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 69.37,
        "fim": 74.01,
        "cantor": "dueto",
        "letra": "Que pena, só eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 74.01,
        "fim": 76.916667,
        "cantor": "dueto",
        "letra": "O que faço com os planos",
        "alvoHz": 0
      },
      {
        "inicio": 76.916667,
        "fim": 78.37,
        "cantor": "dueto",
        "letra": "Dos próximos anos",
        "alvoHz": 0
      },
      {
        "inicio": 78.37,
        "fim": 80.28,
        "cantor": "dueto",
        "letra": "Juro que não sei",
        "alvoHz": 0
      },
      {
        "inicio": 80.28,
        "fim": 83.59,
        "cantor": "dueto",
        "letra": "Só sei que eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 83.59,
        "fim": 89.47,
        "cantor": "dueto",
        "letra": "Que pena, só eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 89.47,
        "fim": 95.7,
        "cantor": "dueto",
        "letra": "Só eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 95.7,
        "fim": 99.23,
        "cantor": 2,
        "letra": "Tentei ser um cara perfeito",
        "alvoHz": 0
      },
      {
        "inicio": 99.23,
        "fim": 102.71,
        "cantor": 1,
        "letra": "Eu fiz as coisas do seu jeito",
        "alvoHz": 0
      },
      {
        "inicio": 102.71,
        "fim": 106.41,
        "cantor": 1,
        "letra": "Queria ser mais importante",
        "alvoHz": 0
      },
      {
        "inicio": 106.41,
        "fim": 109.98,
        "cantor": 2,
        "letra": "Mas não fui pra você",
        "alvoHz": 0
      },
      {
        "inicio": 109.98,
        "fim": 111.617143,
        "cantor": 2,
        "letra": "Até que durou",
        "alvoHz": 0
      },
      {
        "inicio": 111.617143,
        "fim": 113.8,
        "cantor": 1,
        "letra": "Me diz o porquê",
        "alvoHz": 0
      },
      {
        "inicio": 113.8,
        "fim": 116.95,
        "cantor": 1,
        "letra": "Perdeu tanto tempo aqui",
        "alvoHz": 0
      },
      {
        "inicio": 116.95,
        "fim": 120.607143,
        "cantor": 2,
        "letra": "Te faço um favor",
        "alvoHz": 0
      },
      {
        "inicio": 120.607143,
        "fim": 123.35,
        "cantor": 2,
        "letra": "Melhor eu sumir",
        "alvoHz": 0
      },
      {
        "inicio": 123.35,
        "fim": 126.05,
        "cantor": "dueto",
        "letra": "Fui mais um nas suas mãos",
        "alvoHz": 0
      },
      {
        "inicio": 126.05,
        "fim": 129.75,
        "cantor": "dueto",
        "letra": "Não sei se por carência ou falta de opção",
        "alvoHz": 0
      },
      {
        "inicio": 129.75,
        "fim": 133.08,
        "cantor": "dueto",
        "letra": "Só sei que eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 133.08,
        "fim": 138.02,
        "cantor": "dueto",
        "letra": "Que pena, só eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 138.02,
        "fim": 140.56,
        "cantor": "dueto",
        "letra": "O que faço com os planos",
        "alvoHz": 0
      },
      {
        "inicio": 140.56,
        "fim": 141.83,
        "cantor": "dueto",
        "letra": "Dos próximos anos",
        "alvoHz": 0
      },
      {
        "inicio": 141.83,
        "fim": 143.94,
        "cantor": "dueto",
        "letra": "Juro que não sei",
        "alvoHz": 0
      },
      {
        "inicio": 143.94,
        "fim": 147.19,
        "cantor": "dueto",
        "letra": "Só sei que eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 147.19,
        "fim": 151.93,
        "cantor": "dueto",
        "letra": "Que pena, só eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 151.93,
        "fim": 155.0,
        "cantor": "dueto",
        "letra": "Fui mais um nas suas mãos",
        "alvoHz": 0
      },
      {
        "inicio": 155.0,
        "fim": 158.02,
        "cantor": "dueto",
        "letra": "Não sei se por carência ou falta de opção",
        "alvoHz": 0
      },
      {
        "inicio": 158.02,
        "fim": 161.03,
        "cantor": "dueto",
        "letra": "Só sei que eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 161.03,
        "fim": 166.08,
        "cantor": "dueto",
        "letra": "Que pena, só eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 166.08,
        "fim": 168.946667,
        "cantor": "dueto",
        "letra": "O que faço com os planos",
        "alvoHz": 0
      },
      {
        "inicio": 168.946667,
        "fim": 170.38,
        "cantor": "dueto",
        "letra": "Dos próximos anos",
        "alvoHz": 0
      },
      {
        "inicio": 170.38,
        "fim": 172.16,
        "cantor": "dueto",
        "letra": "Juro que não sei",
        "alvoHz": 0
      },
      {
        "inicio": 172.16,
        "fim": 175.59,
        "cantor": "dueto",
        "letra": "Só sei que eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 175.59,
        "fim": 181.14,
        "cantor": "dueto",
        "letra": "Que pena, só eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 181.14,
        "fim": 188.11,
        "cantor": "dueto",
        "letra": "Só eu senti amor",
        "alvoHz": 0
      },
      {
        "inicio": 188.11,
        "fim": 208.306213,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "tubaroes",
    "titulo": "Tubarões",
    "artista": "Diego & Victor Hugo",
    "arquivo": "/musicas/tubaroes.m4a",
    "duracao": 155.550476,
    "trechos": [
      {
        "inicio": 0,
        "fim": 3.83,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 3.83,
        "fim": 8.59,
        "cantor": 1,
        "letra": "Se quer saber de mim",
        "alvoHz": 0
      },
      {
        "inicio": 8.59,
        "fim": 12.15,
        "cantor": 1,
        "letra": "Pergunte para mim",
        "alvoHz": 0
      },
      {
        "inicio": 12.15,
        "fim": 16.13,
        "cantor": 2,
        "letra": "Se for falar do que passou",
        "alvoHz": 0
      },
      {
        "inicio": 16.13,
        "fim": 19.77,
        "cantor": 2,
        "letra": "Conta a parte que você errou",
        "alvoHz": 0
      },
      {
        "inicio": 19.77,
        "fim": 22.97,
        "cantor": 1,
        "letra": "Não pergunte se estou bem",
        "alvoHz": 0
      },
      {
        "inicio": 22.97,
        "fim": 27.55,
        "cantor": 1,
        "letra": "Não quero ser assunto seu pra mais ninguém",
        "alvoHz": 0
      },
      {
        "inicio": 27.55,
        "fim": 31.06,
        "cantor": 2,
        "letra": "Não estrague as minhas canções",
        "alvoHz": 0
      },
      {
        "inicio": 31.06,
        "fim": 35.56,
        "cantor": 2,
        "letra": "Vá pro inferno com suas recordações",
        "alvoHz": 0
      },
      {
        "inicio": 35.56,
        "fim": 38.85,
        "cantor": "dueto",
        "letra": "Quem me deixou no mar",
        "alvoHz": 0
      },
      {
        "inicio": 38.85,
        "fim": 42.76,
        "cantor": "dueto",
        "letra": "Não tem direito de me perguntar",
        "alvoHz": 0
      },
      {
        "inicio": 42.76,
        "fim": 46.72,
        "cantor": "dueto",
        "letra": "O que rolou comigo e os tubarões",
        "alvoHz": 0
      },
      {
        "inicio": 46.72,
        "fim": 49.055,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 49.055,
        "fim": 51.39,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 51.39,
        "fim": 54.03,
        "cantor": "dueto",
        "letra": "Cê me deixou voar",
        "alvoHz": 0
      },
      {
        "inicio": 54.03,
        "fim": 58.35,
        "cantor": "dueto",
        "letra": "Agora quer saber aonde eu vou pousar",
        "alvoHz": 0
      },
      {
        "inicio": 58.35,
        "fim": 62.14,
        "cantor": "dueto",
        "letra": "Cancela as suas investigações",
        "alvoHz": 0
      },
      {
        "inicio": 62.14,
        "fim": 65.41,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 65.41,
        "fim": 68.68,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 68.68,
        "fim": 81.98,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 81.98,
        "fim": 84.97,
        "cantor": 2,
        "letra": "Não pergunte se estou bem",
        "alvoHz": 0
      },
      {
        "inicio": 84.97,
        "fim": 89.32,
        "cantor": 2,
        "letra": "Não quero ser assunto seu pra mais ninguém",
        "alvoHz": 0
      },
      {
        "inicio": 89.32,
        "fim": 93.03,
        "cantor": 1,
        "letra": "Não estrague as minhas canções",
        "alvoHz": 0
      },
      {
        "inicio": 93.03,
        "fim": 97.42,
        "cantor": 1,
        "letra": "Vá pro inferno com suas recordações",
        "alvoHz": 0
      },
      {
        "inicio": 97.42,
        "fim": 100.81,
        "cantor": "dueto",
        "letra": "Quem me deixou no mar",
        "alvoHz": 0
      },
      {
        "inicio": 100.81,
        "fim": 104.59,
        "cantor": "dueto",
        "letra": "Não tem direito de me perguntar",
        "alvoHz": 0
      },
      {
        "inicio": 104.59,
        "fim": 108.51,
        "cantor": "dueto",
        "letra": "O que rolou comigo e os tubarões",
        "alvoHz": 0
      },
      {
        "inicio": 108.51,
        "fim": 110.87,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 110.87,
        "fim": 113.23,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 113.23,
        "fim": 115.97,
        "cantor": "dueto",
        "letra": "Cê me deixou voar",
        "alvoHz": 0
      },
      {
        "inicio": 115.97,
        "fim": 120.35,
        "cantor": "dueto",
        "letra": "Agora quer saber aonde eu vou pousar",
        "alvoHz": 0
      },
      {
        "inicio": 120.35,
        "fim": 124.12,
        "cantor": "dueto",
        "letra": "Cancela as suas investigações",
        "alvoHz": 0
      },
      {
        "inicio": 124.12,
        "fim": 128.22,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 128.22,
        "fim": 132.32,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 132.32,
        "fim": 139.58,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 139.58,
        "fim": 144.435,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 144.435,
        "fim": 149.29,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 149.29,
        "fim": 155.550476,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "jet-ski",
    "titulo": "Jet Ski",
    "artista": "PEDRO SAMPAIO, MC Meno K & Melody",
    "arquivo": "/musicas/jet-ski.m4a",
    "duracao": 155.550476,
    "trechos": [
      {
        "inicio": 0,
        "fim": 3.01,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 3.01,
        "fim": 6.55,
        "cantor": 1,
        "letra": "Tu gosta, né? De correr perigo",
        "alvoHz": 0
      },
      {
        "inicio": 6.55,
        "fim": 9.23,
        "cantor": 1,
        "letra": "Gosta, né? De um sexo proibido",
        "alvoHz": 0
      },
      {
        "inicio": 9.23,
        "fim": 12.68,
        "cantor": 2,
        "letra": "Só quem vai ver sou eu e os golfinho",
        "alvoHz": 0
      },
      {
        "inicio": 12.68,
        "fim": 15.82,
        "cantor": 2,
        "letra": "As onda batendo, ai, que delícia o barulhinho",
        "alvoHz": 0
      },
      {
        "inicio": 15.82,
        "fim": 17.36,
        "cantor": "dueto",
        "letra": "Em cima (em cima)",
        "alvoHz": 0
      },
      {
        "inicio": 17.36,
        "fim": 19.19,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski",
        "alvoHz": 0
      },
      {
        "inicio": 19.19,
        "fim": 23.44,
        "cantor": "dueto",
        "letra": "Vou rebolar pra tu (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 23.44,
        "fim": 25.3,
        "cantor": "dueto",
        "letra": "Nessa onda sexy",
        "alvoHz": 0
      },
      {
        "inicio": 25.3,
        "fim": 29.86,
        "cantor": "dueto",
        "letra": "Te deixo maluco (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 29.86,
        "fim": 31.47,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski",
        "alvoHz": 0
      },
      {
        "inicio": 31.47,
        "fim": 35.92,
        "cantor": "dueto",
        "letra": "Vou rebolar pra tu (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 35.92,
        "fim": 37.69,
        "cantor": "dueto",
        "letra": "Nessa onda sexy",
        "alvoHz": 0
      },
      {
        "inicio": 37.69,
        "fim": 44.0,
        "cantor": "dueto",
        "letra": "Te deixo maluco (deixa, sim, haha, deixa, sim) (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 44.0,
        "fim": 47.1,
        "cantor": "dueto",
        "letra": "(Ah)",
        "alvoHz": 0
      },
      {
        "inicio": 47.1,
        "fim": 50.2,
        "cantor": "dueto",
        "letra": "(Ah)",
        "alvoHz": 0
      },
      {
        "inicio": 50.2,
        "fim": 55.28,
        "cantor": "dueto",
        "letra": "(Ah)",
        "alvoHz": 0
      },
      {
        "inicio": 55.28,
        "fim": 58.19,
        "cantor": 1,
        "letra": "Barulho do mar, o tempo voa por aqui",
        "alvoHz": 0
      },
      {
        "inicio": 58.19,
        "fim": 61.6175,
        "cantor": 1,
        "letra": "Confesso, se eu precisar, te levo de novo pra mim",
        "alvoHz": 0
      },
      {
        "inicio": 61.6175,
        "fim": 64.4,
        "cantor": 2,
        "letra": "Pa ver você dançar nessa brisa da praia",
        "alvoHz": 0
      },
      {
        "inicio": 64.4,
        "fim": 67.12,
        "cantor": 2,
        "letra": "Vendo o Sol raiar, então vai, moça, baila",
        "alvoHz": 0
      },
      {
        "inicio": 67.12,
        "fim": 70.47,
        "cantor": 1,
        "letra": "Se tu vai, eu também vou, não vou ficar sozinho aqui",
        "alvoHz": 0
      },
      {
        "inicio": 70.47,
        "fim": 73.44,
        "cantor": 1,
        "letra": "O verão chegou, vem montar no meu jet-ski (aham)",
        "alvoHz": 0
      },
      {
        "inicio": 73.44,
        "fim": 76.61,
        "cantor": 2,
        "letra": "Se tu vai, eu também vou, pa mim, fico melhor assim",
        "alvoHz": 0
      },
      {
        "inicio": 76.61,
        "fim": 79.24,
        "cantor": 2,
        "letra": "Solteiro e ser feliz, solteiro e ser feliz",
        "alvoHz": 0
      },
      {
        "inicio": 79.24,
        "fim": 80.8,
        "cantor": "dueto",
        "letra": "Em cima (em cima)",
        "alvoHz": 0
      },
      {
        "inicio": 80.8,
        "fim": 82.65,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski (uh-uh)",
        "alvoHz": 0
      },
      {
        "inicio": 82.65,
        "fim": 86.93,
        "cantor": "dueto",
        "letra": "Vou rebolar pra tu (ah) (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 86.93,
        "fim": 88.78,
        "cantor": "dueto",
        "letra": "Nessa onda sexy (ahn)",
        "alvoHz": 0
      },
      {
        "inicio": 88.78,
        "fim": 92.81,
        "cantor": "dueto",
        "letra": "Te deixo maluco (deixa, sim, haha, deixa, sim)",
        "alvoHz": 0
      },
      {
        "inicio": 92.81,
        "fim": 94.93,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski",
        "alvoHz": 0
      },
      {
        "inicio": 94.93,
        "fim": 99.43,
        "cantor": "dueto",
        "letra": "Vou rebolar pra tu (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 99.43,
        "fim": 101.14,
        "cantor": "dueto",
        "letra": "Nessa onda sexy",
        "alvoHz": 0
      },
      {
        "inicio": 101.14,
        "fim": 108.8,
        "cantor": "dueto",
        "letra": "Te deixo maluco (hahaha, Melody, PEDRO SAMPAIO, vai)",
        "alvoHz": 0
      },
      {
        "inicio": 108.8,
        "fim": 113.45,
        "cantor": "dueto",
        "letra": "(Ahn-ahn-ahn-uh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 113.45,
        "fim": 117.59,
        "cantor": "dueto",
        "letra": "(É o K na voz) (ah)",
        "alvoHz": 0
      },
      {
        "inicio": 117.59,
        "fim": 119.694286,
        "cantor": 2,
        "letra": "Então vai (vai)",
        "alvoHz": 0
      },
      {
        "inicio": 119.694286,
        "fim": 122.5,
        "cantor": 1,
        "letra": "Rebolo e tu pede mais (mais)",
        "alvoHz": 0
      },
      {
        "inicio": 122.5,
        "fim": 125.99,
        "cantor": 1,
        "letra": "Nós dois suando sozinho, a onda subindo",
        "alvoHz": 0
      },
      {
        "inicio": 125.99,
        "fim": 128.99,
        "cantor": 2,
        "letra": "O biquíni caindo, o corpo molhadinho",
        "alvoHz": 0
      },
      {
        "inicio": 128.99,
        "fim": 129.905,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 129.905,
        "fim": 130.82,
        "cantor": 2,
        "letra": "E você faz",
        "alvoHz": 0
      },
      {
        "inicio": 130.82,
        "fim": 132.65,
        "cantor": 1,
        "letra": "(Em cima do jet)",
        "alvoHz": 0
      },
      {
        "inicio": 132.65,
        "fim": 133.85,
        "cantor": "dueto",
        "letra": "Vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 133.85,
        "fim": 135.5,
        "cantor": "dueto",
        "letra": "Vem, vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 135.5,
        "fim": 137.05,
        "cantor": "dueto",
        "letra": "Vem, vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 137.05,
        "fim": 138.92,
        "cantor": "dueto",
        "letra": "Em cima do, em cima do jet",
        "alvoHz": 0
      },
      {
        "inicio": 138.92,
        "fim": 140.09,
        "cantor": "dueto",
        "letra": "Vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 140.09,
        "fim": 141.66,
        "cantor": "dueto",
        "letra": "Vem, vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 141.66,
        "fim": 142.93,
        "cantor": "dueto",
        "letra": "Vem, vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 142.93,
        "fim": 144.33,
        "cantor": "dueto",
        "letra": "Em cima do, em cima do",
        "alvoHz": 0
      },
      {
        "inicio": 144.33,
        "fim": 147.15,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski",
        "alvoHz": 0
      },
      {
        "inicio": 147.15,
        "fim": 155.550476,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "na-imaginacao",
    "titulo": "Na Imaginação",
    "artista": "DJ TOPO & MC Livinho",
    "arquivo": "/musicas/na-imaginacao.m4a",
    "duracao": 159.079909,
    "trechos": [
      {
        "inicio": 0,
        "fim": 10.51991,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 10.51991,
        "fim": 13.16991,
        "cantor": 1,
        "letra": "Num futuro perto",
        "alvoHz": 0
      },
      {
        "inicio": 13.16991,
        "fim": 16.89991,
        "cantor": 1,
        "letra": "Quero atender sua chamada",
        "alvoHz": 0
      },
      {
        "inicio": 16.89991,
        "fim": 19.70991,
        "cantor": 2,
        "letra": "Batendo a hora das agendas",
        "alvoHz": 0
      },
      {
        "inicio": 19.70991,
        "fim": 25.32991,
        "cantor": 2,
        "letra": "Pro nosso fight se concretizar",
        "alvoHz": 0
      },
      {
        "inicio": 25.32991,
        "fim": 28.55991,
        "cantor": "dueto",
        "letra": "Na imaginação, já fiz coisas com você",
        "alvoHz": 0
      },
      {
        "inicio": 28.55991,
        "fim": 32.74991,
        "cantor": "dueto",
        "letra": "Cê não mensura o quanto foi bom",
        "alvoHz": 0
      },
      {
        "inicio": 32.74991,
        "fim": 35.86991,
        "cantor": "dueto",
        "letra": "E a cada ação mais virava seu fã",
        "alvoHz": 0
      },
      {
        "inicio": 35.86991,
        "fim": 40.05991,
        "cantor": "dueto",
        "letra": "Conteúdo exclusivo, mostrando seu dom",
        "alvoHz": 0
      },
      {
        "inicio": 40.05991,
        "fim": 44.62991,
        "cantor": 1,
        "letra": "Cê é apelação, não é à toa que é tão cobiçada",
        "alvoHz": 0
      },
      {
        "inicio": 44.62991,
        "fim": 47.20991,
        "cantor": 1,
        "letra": "Qual é a boa? Me explica essa charada",
        "alvoHz": 0
      },
      {
        "inicio": 47.20991,
        "fim": 50.55991,
        "cantor": 2,
        "letra": "Receba essa botada, toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 50.55991,
        "fim": 52.39991,
        "cantor": 2,
        "letra": "Toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 52.39991,
        "fim": 54.76991,
        "cantor": 1,
        "letra": "Toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 54.76991,
        "fim": 58.02991,
        "cantor": "dueto",
        "letra": "Na imaginação, já fiz coisas com você",
        "alvoHz": 0
      },
      {
        "inicio": 58.02991,
        "fim": 62.15991,
        "cantor": "dueto",
        "letra": "Cê não mensura o quanto foi bom",
        "alvoHz": 0
      },
      {
        "inicio": 62.15991,
        "fim": 65.43991,
        "cantor": "dueto",
        "letra": "E a cada ação mais virava seu fã",
        "alvoHz": 0
      },
      {
        "inicio": 65.43991,
        "fim": 68.65991,
        "cantor": "dueto",
        "letra": "Conteúdo exclusivo, mostrando seu dom",
        "alvoHz": 0
      },
      {
        "inicio": 68.65991,
        "fim": 72.20991,
        "cantor": 1,
        "letra": "Num fut—, num fut—, num futuro perto",
        "alvoHz": 0
      },
      {
        "inicio": 72.20991,
        "fim": 75.86991,
        "cantor": 2,
        "letra": "Quero atender sua chamada",
        "alvoHz": 0
      },
      {
        "inicio": 75.86991,
        "fim": 78.67991,
        "cantor": 2,
        "letra": "Batendo a hora das agendas",
        "alvoHz": 0
      },
      {
        "inicio": 78.67991,
        "fim": 84.45991,
        "cantor": 1,
        "letra": "Pro nosso fight se concretizar",
        "alvoHz": 0
      },
      {
        "inicio": 84.45991,
        "fim": 87.37991,
        "cantor": "dueto",
        "letra": "Na imaginação, já fiz coisas com você",
        "alvoHz": 0
      },
      {
        "inicio": 87.37991,
        "fim": 91.58991,
        "cantor": "dueto",
        "letra": "Cê não mensura o quanto foi bom",
        "alvoHz": 0
      },
      {
        "inicio": 91.58991,
        "fim": 94.76991,
        "cantor": "dueto",
        "letra": "E a cada ação mais virava seu fã",
        "alvoHz": 0
      },
      {
        "inicio": 94.76991,
        "fim": 98.89991,
        "cantor": "dueto",
        "letra": "Conteúdo exclusivo, mostrando seu dom",
        "alvoHz": 0
      },
      {
        "inicio": 98.89991,
        "fim": 103.71991,
        "cantor": 1,
        "letra": "Cê é apelação, não é à toa que é tão cobiçada",
        "alvoHz": 0
      },
      {
        "inicio": 103.71991,
        "fim": 106.16991,
        "cantor": 2,
        "letra": "Qual é a boa? Me explica essa charada",
        "alvoHz": 0
      },
      {
        "inicio": 106.16991,
        "fim": 109.48991,
        "cantor": 2,
        "letra": "Receba essa botada, toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 109.48991,
        "fim": 111.31991,
        "cantor": 1,
        "letra": "Toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 111.31991,
        "fim": 113.78991,
        "cantor": 1,
        "letra": "Toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 113.78991,
        "fim": 117.02991,
        "cantor": "dueto",
        "letra": "Na imaginação, já fiz coisas com você",
        "alvoHz": 0
      },
      {
        "inicio": 117.02991,
        "fim": 121.26991,
        "cantor": "dueto",
        "letra": "Cê não mensura o quanto foi bom",
        "alvoHz": 0
      },
      {
        "inicio": 121.26991,
        "fim": 124.45991,
        "cantor": "dueto",
        "letra": "E a cada ação mais virava seu fã",
        "alvoHz": 0
      },
      {
        "inicio": 124.45991,
        "fim": 128.51991,
        "cantor": "dueto",
        "letra": "Conteúdo exclusivo, mostrando seu dom",
        "alvoHz": 0
      },
      {
        "inicio": 128.51991,
        "fim": 130.122767,
        "cantor": 2,
        "letra": "Cê é apelação",
        "alvoHz": 0
      },
      {
        "inicio": 130.122767,
        "fim": 132.25991,
        "cantor": 2,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 132.25991,
        "fim": 134.05991,
        "cantor": 1,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 134.05991,
        "fim": 135.85991,
        "cantor": 1,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 135.85991,
        "fim": 137.514196,
        "cantor": 2,
        "letra": "Cê é apelação",
        "alvoHz": 0
      },
      {
        "inicio": 137.514196,
        "fim": 139.71991,
        "cantor": 2,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 139.71991,
        "fim": 141.11491,
        "cantor": 1,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 141.11491,
        "fim": 142.50991,
        "cantor": 1,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 142.50991,
        "fim": 144.51991,
        "cantor": 2,
        "letra": "(E aê, DJ Topo?)",
        "alvoHz": 0
      },
      {
        "inicio": 144.51991,
        "fim": 159.079909,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  }
];
