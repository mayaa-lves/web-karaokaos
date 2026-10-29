// Grade única do jogo. Nenhum ajuste do navegador altera estes tempos.
// Conferência parcial por referência cantada; limitações em REVISAO-SINCRONIA.txt.
export type TrechoMusical = { inicio: number; fim: number; cantor: 1 | 2 | "dueto" | "intro"; letra: string; alvoHz: number };
export type Musica = { id: string; titulo: string; artista: string; arquivo: string; duracao: number; trechos: TrechoMusical[]; afinacao: boolean; letraSincronizada: boolean };
export const CATALOGO: Musica[] = [
  {
    "id": "baby",
    "titulo": "Baby",
    "artista": "Justin Bieber",
    "arquivo": "/musicas/baby-compativel.mp3",
    "duracao": 150,
    "trechos": [
      {
        "inicio": 0,
        "fim": 11.13,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 11.13,
        "fim": 14.822,
        "cantor": "dueto",
        "letra": "Oh, whoa",
        "alvoHz": 0
      },
      {
        "inicio": 14.822,
        "fim": 18.515,
        "cantor": "dueto",
        "letra": "Oh, whoa",
        "alvoHz": 0
      },
      {
        "inicio": 18.515,
        "fim": 22.207,
        "cantor": "dueto",
        "letra": "Oh, whoa",
        "alvoHz": 0
      },
      {
        "inicio": 22.207,
        "fim": 25.899,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 25.899,
        "fim": 29.592,
        "cantor": 1,
        "letra": "You know you love me (yo), I know you care (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 29.592,
        "fim": 33.284,
        "cantor": 2,
        "letra": "Just shout whenever (yo), and I'll be there (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 33.284,
        "fim": 36.976,
        "cantor": 1,
        "letra": "You are my love (yo), you are my heart (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 36.976,
        "fim": 40.668,
        "cantor": 2,
        "letra": "And we will never, ever, ever be apart (yo, uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 40.668,
        "fim": 44.361,
        "cantor": 1,
        "letra": "Are we an item? (Yo) girl, quit playin' (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 44.361,
        "fim": 48.053,
        "cantor": 2,
        "letra": "\"We're just friends\" (yo), what are you sayin'? (Uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 48.053,
        "fim": 51.745,
        "cantor": 1,
        "letra": "Said, \"There's another\" (yo), and looked right in my eyes (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 51.745,
        "fim": 55.438,
        "cantor": 2,
        "letra": "My first love broke my heart for the first time (yo), and I was like (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 55.438,
        "fim": 59.13,
        "cantor": "dueto",
        "letra": "Baby, baby, baby, oh",
        "alvoHz": 0
      },
      {
        "inicio": 59.13,
        "fim": 62.822,
        "cantor": "dueto",
        "letra": "Like baby, baby, baby, no",
        "alvoHz": 0
      },
      {
        "inicio": 62.822,
        "fim": 66.515,
        "cantor": "dueto",
        "letra": "Like baby, baby, baby, oh",
        "alvoHz": 0
      },
      {
        "inicio": 66.515,
        "fim": 70.207,
        "cantor": "dueto",
        "letra": "I thought you'd always be mine, mine",
        "alvoHz": 0
      },
      {
        "inicio": 70.207,
        "fim": 73.899,
        "cantor": "dueto",
        "letra": "Baby, baby, baby, oh",
        "alvoHz": 0
      },
      {
        "inicio": 73.899,
        "fim": 77.592,
        "cantor": "dueto",
        "letra": "Like baby, baby, baby, no",
        "alvoHz": 0
      },
      {
        "inicio": 77.592,
        "fim": 81.284,
        "cantor": "dueto",
        "letra": "Like baby, baby, baby, oh",
        "alvoHz": 0
      },
      {
        "inicio": 81.284,
        "fim": 84.976,
        "cantor": "dueto",
        "letra": "I thought you'd always be mine, mine",
        "alvoHz": 0
      },
      {
        "inicio": 84.976,
        "fim": 88.668,
        "cantor": 1,
        "letra": "Oh, for you, I would've done whatever (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 88.668,
        "fim": 92.361,
        "cantor": 2,
        "letra": "And I just can't believe we ain't together (yo, uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 92.361,
        "fim": 96.053,
        "cantor": 1,
        "letra": "And I wanna play it cool (yo), but I'm losin' you (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 96.053,
        "fim": 99.745,
        "cantor": 2,
        "letra": "I'll buy you anything (yo), I'll buy you any ring (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 99.745,
        "fim": 103.438,
        "cantor": 1,
        "letra": "And I'm in pieces (yo), baby, fix me (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 103.438,
        "fim": 107.13,
        "cantor": 2,
        "letra": "And just shake me 'til you wake me from this bad dream (yo, uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 107.13,
        "fim": 110.822,
        "cantor": 1,
        "letra": "I'm goin' down (yo), down, down, down (uh-huh)",
        "alvoHz": 0
      },
      {
        "inicio": 110.822,
        "fim": 114.515,
        "cantor": 2,
        "letra": "And I just can't believe my first love won't be around, and I'm like",
        "alvoHz": 0
      },
      {
        "inicio": 114.515,
        "fim": 118.207,
        "cantor": "dueto",
        "letra": "Baby, baby, baby, oh",
        "alvoHz": 0
      },
      {
        "inicio": 118.207,
        "fim": 121.899,
        "cantor": "dueto",
        "letra": "Like baby, baby, baby, no",
        "alvoHz": 0
      },
      {
        "inicio": 121.899,
        "fim": 125.592,
        "cantor": "dueto",
        "letra": "Like baby, baby, baby, oh",
        "alvoHz": 0
      },
      {
        "inicio": 125.592,
        "fim": 129.284,
        "cantor": "dueto",
        "letra": "I thought you'd always be mine, mine",
        "alvoHz": 0
      },
      {
        "inicio": 129.284,
        "fim": 132.976,
        "cantor": "dueto",
        "letra": "Baby, baby, baby, oh",
        "alvoHz": 0
      },
      {
        "inicio": 132.976,
        "fim": 136.668,
        "cantor": "dueto",
        "letra": "Like baby, baby, baby, no",
        "alvoHz": 0
      },
      {
        "inicio": 136.668,
        "fim": 140.361,
        "cantor": "dueto",
        "letra": "Like baby, baby, baby, oh",
        "alvoHz": 0
      },
      {
        "inicio": 140.361,
        "fim": 144.053,
        "cantor": "dueto",
        "letra": "I thought you'd always be mine, mine",
        "alvoHz": 0
      },
      {
        "inicio": 144.053,
        "fim": 147.745,
        "cantor": 1,
        "letra": "You can give all of your love",
        "alvoHz": 0
      },
      {
        "inicio": 147.745,
        "fim": 150,
        "cantor": 2,
        "letra": "But sometimes it won't be enough",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "fio-de-cabelo",
    "titulo": "Fio de Cabelo",
    "artista": "Chitãozinho & Xororó",
    "arquivo": "/musicas/fio-de-cabelo.mp3",
    "duracao": 180.1404,
    "trechos": [
      {
        "inicio": 0,
        "fim": 17.74,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 220
      },
      {
        "inicio": 17.74,
        "fim": 25.992,
        "cantor": 1,
        "letra": "Quando a gente ama, qualquer coisa serve para relembrar",
        "alvoHz": 196
      },
      {
        "inicio": 25.992,
        "fim": 34.203,
        "cantor": 2,
        "letra": "Um vestido velho da mulher amada tem muito valor",
        "alvoHz": 220
      },
      {
        "inicio": 34.203,
        "fim": 41.138,
        "cantor": 1,
        "letra": "Aquele restinho do perfume dela que ficou no frasco",
        "alvoHz": 196
      },
      {
        "inicio": 41.138,
        "fim": 45.122,
        "cantor": 2,
        "letra": "Sobre a penteadeira, mostrando que o quarto",
        "alvoHz": 220
      },
      {
        "inicio": 45.122,
        "fim": 52.078,
        "cantor": 2,
        "letra": "Já foi o cenário de um grande amor",
        "alvoHz": 246.94
      },
      {
        "inicio": 52.078,
        "fim": 57.874,
        "cantor": 1,
        "letra": "E hoje o que encontrei me deixou mais triste",
        "alvoHz": 220
      },
      {
        "inicio": 57.874,
        "fim": 62.132,
        "cantor": 2,
        "letra": "Um pedacinho dela que existe",
        "alvoHz": 246.94
      },
      {
        "inicio": 62.132,
        "fim": 69.362,
        "cantor": "dueto",
        "letra": "Um fio de cabelo no meu paletó",
        "alvoHz": 261.63
      },
      {
        "inicio": 69.362,
        "fim": 73.02,
        "cantor": 1,
        "letra": "Lembrei de tudo entre nós",
        "alvoHz": 220
      },
      {
        "inicio": 73.02,
        "fim": 74.885,
        "cantor": 2,
        "letra": "Do amor vivido",
        "alvoHz": 246.94
      },
      {
        "inicio": 74.885,
        "fim": 79.154,
        "cantor": "dueto",
        "letra": "Aquele fio de cabelo comprido",
        "alvoHz": 261.63
      },
      {
        "inicio": 79.154,
        "fim": 87.965,
        "cantor": "dueto",
        "letra": "Já esteve grudado em nosso suor",
        "alvoHz": 220
      },
      {
        "inicio": 87.965,
        "fim": 102.446,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 220
      },
      {
        "inicio": 102.446,
        "fim": 110.814,
        "cantor": 1,
        "letra": "Quando a gente ama e não vive junto com a pessoa amada",
        "alvoHz": 196
      },
      {
        "inicio": 110.814,
        "fim": 119.056,
        "cantor": 2,
        "letra": "Uma coisa à toa é um bom motivo pra gente chorar",
        "alvoHz": 220
      },
      {
        "inicio": 119.056,
        "fim": 125.411,
        "cantor": 1,
        "letra": "Apagam-se as luzes ao chegar a hora de ir para a cama",
        "alvoHz": 196
      },
      {
        "inicio": 125.411,
        "fim": 129.532,
        "cantor": 2,
        "letra": "A gente começa a esperar por quem ama",
        "alvoHz": 220
      },
      {
        "inicio": 129.532,
        "fim": 136.541,
        "cantor": 2,
        "letra": "Na impressão de que ela venha se deitar",
        "alvoHz": 246.94
      },
      {
        "inicio": 136.541,
        "fim": 142.549,
        "cantor": 1,
        "letra": "E hoje o que encontrei me deixou mais triste",
        "alvoHz": 220
      },
      {
        "inicio": 142.549,
        "fim": 146.364,
        "cantor": 2,
        "letra": "Um pedacinho dela que existe",
        "alvoHz": 246.94
      },
      {
        "inicio": 146.364,
        "fim": 153.331,
        "cantor": "dueto",
        "letra": "Um fio de cabelo no meu paletó",
        "alvoHz": 261.63
      },
      {
        "inicio": 153.331,
        "fim": 157.504,
        "cantor": 1,
        "letra": "Lembrei de tudo entre nós",
        "alvoHz": 220
      },
      {
        "inicio": 157.504,
        "fim": 159.148,
        "cantor": 2,
        "letra": "Do amor vivido",
        "alvoHz": 246.94
      },
      {
        "inicio": 159.148,
        "fim": 163.512,
        "cantor": "dueto",
        "letra": "Aquele fio de cabelo comprido",
        "alvoHz": 261.63
      },
      {
        "inicio": 163.512,
        "fim": 172.207,
        "cantor": "dueto",
        "letra": "Já esteve grudado em nosso suor",
        "alvoHz": 220
      },
      {
        "inicio": 172.207,
        "fim": 180.1404,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 220
      }
    ],
    "afinacao": true,
    "letraSincronizada": true
  },
  {
    "id": "jogado-na-rua",
    "titulo": "Jogado na Rua",
    "artista": "Guilherme & Santiago",
    "arquivo": "/musicas/jogado-na-rua.m4a",
    "duracao": 207.981134,
    "trechos": [
      {
        "inicio": 0,
        "fim": 18.69,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 18.69,
        "fim": 22.34,
        "cantor": 1,
        "letra": "Não tá fácil ficar",
        "alvoHz": 0
      },
      {
        "inicio": 22.34,
        "fim": 27.18,
        "cantor": 2,
        "letra": "Sem teu amor aqui",
        "alvoHz": 0
      },
      {
        "inicio": 27.18,
        "fim": 30.72,
        "cantor": 1,
        "letra": "Que saudade que dá",
        "alvoHz": 0
      },
      {
        "inicio": 30.72,
        "fim": 37.75,
        "cantor": 2,
        "letra": "Chego a ter dó de mim",
        "alvoHz": 0
      },
      {
        "inicio": 37.75,
        "fim": 41.76,
        "cantor": 1,
        "letra": "Meu amor é assim",
        "alvoHz": 0
      },
      {
        "inicio": 41.76,
        "fim": 46.21,
        "cantor": 2,
        "letra": "Bruto e sincero demais",
        "alvoHz": 0
      },
      {
        "inicio": 46.21,
        "fim": 50.25,
        "cantor": 1,
        "letra": "Sentimento sem fim",
        "alvoHz": 0
      },
      {
        "inicio": 50.25,
        "fim": 57.55,
        "cantor": 2,
        "letra": "Amo você, ninguém mais",
        "alvoHz": 0
      },
      {
        "inicio": 57.55,
        "fim": 59.73,
        "cantor": 1,
        "letra": "Me deixou assim",
        "alvoHz": 0
      },
      {
        "inicio": 59.73,
        "fim": 65.58,
        "cantor": 2,
        "letra": "Sombra na escuridão",
        "alvoHz": 0
      },
      {
        "inicio": 65.58,
        "fim": 69.14,
        "cantor": 1,
        "letra": "Arrancou de mim a paz",
        "alvoHz": 0
      },
      {
        "inicio": 69.14,
        "fim": 76.69,
        "cantor": 2,
        "letra": "O sorriso e a razão, uô-uô-uô-uô, ai",
        "alvoHz": 0
      },
      {
        "inicio": 76.69,
        "fim": 80.92,
        "cantor": "dueto",
        "letra": "É no som da viola que o peito chora, ai",
        "alvoHz": 0
      },
      {
        "inicio": 80.92,
        "fim": 84.74,
        "cantor": "dueto",
        "letra": "Nessas noites de lua jogado na rua, ai",
        "alvoHz": 0
      },
      {
        "inicio": 84.74,
        "fim": 89.68,
        "cantor": "dueto",
        "letra": "Ai amor, ai amor",
        "alvoHz": 0
      },
      {
        "inicio": 89.68,
        "fim": 93.95,
        "cantor": "dueto",
        "letra": "Nessas noites de lua jogado na rua, ai",
        "alvoHz": 0
      },
      {
        "inicio": 93.95,
        "fim": 98.13,
        "cantor": "dueto",
        "letra": "É no som da viola que o peito chora, ai",
        "alvoHz": 0
      },
      {
        "inicio": 98.13,
        "fim": 101.93,
        "cantor": "dueto",
        "letra": "Nessas noites de lua jogado na rua, ai",
        "alvoHz": 0
      },
      {
        "inicio": 101.93,
        "fim": 106.78,
        "cantor": "dueto",
        "letra": "Ai amor, ai amor",
        "alvoHz": 0
      },
      {
        "inicio": 106.78,
        "fim": 125.65,
        "cantor": "dueto",
        "letra": "Nessas noites de lua jogado na rua, ai",
        "alvoHz": 0
      },
      {
        "inicio": 125.65,
        "fim": 129.35,
        "cantor": 1,
        "letra": "Meu amor é assim",
        "alvoHz": 0
      },
      {
        "inicio": 129.35,
        "fim": 134.27,
        "cantor": 2,
        "letra": "Bruto e sincero demais",
        "alvoHz": 0
      },
      {
        "inicio": 134.27,
        "fim": 138.12,
        "cantor": 1,
        "letra": "Sentimento sem fim",
        "alvoHz": 0
      },
      {
        "inicio": 138.12,
        "fim": 145.32,
        "cantor": 2,
        "letra": "Amo você, ninguém mais",
        "alvoHz": 0
      },
      {
        "inicio": 145.32,
        "fim": 147.51,
        "cantor": 1,
        "letra": "Me deixou assim",
        "alvoHz": 0
      },
      {
        "inicio": 147.51,
        "fim": 153.54,
        "cantor": 2,
        "letra": "Sombra na escuridão",
        "alvoHz": 0
      },
      {
        "inicio": 153.54,
        "fim": 155.86,
        "cantor": 1,
        "letra": "Arrancou de mim a paz",
        "alvoHz": 0
      },
      {
        "inicio": 155.86,
        "fim": 164.72,
        "cantor": 2,
        "letra": "O sorriso e a razão, uô-uô-uô-uô, ai",
        "alvoHz": 0
      },
      {
        "inicio": 164.72,
        "fim": 168.92,
        "cantor": "dueto",
        "letra": "É no som da viola que o peito chora, ai",
        "alvoHz": 0
      },
      {
        "inicio": 168.92,
        "fim": 172.63,
        "cantor": "dueto",
        "letra": "Nessas noites de lua jogado na rua, ai",
        "alvoHz": 0
      },
      {
        "inicio": 172.63,
        "fim": 177.41,
        "cantor": "dueto",
        "letra": "Ai amor, ai amor",
        "alvoHz": 0
      },
      {
        "inicio": 177.41,
        "fim": 181.67,
        "cantor": "dueto",
        "letra": "Nessas noites de lua jogado na rua, ai",
        "alvoHz": 0
      },
      {
        "inicio": 181.67,
        "fim": 185.92,
        "cantor": "dueto",
        "letra": "É no som da viola que o peito chora, ai",
        "alvoHz": 0
      },
      {
        "inicio": 185.92,
        "fim": 189.63,
        "cantor": "dueto",
        "letra": "Nessas noites de lua jogado na rua, ai",
        "alvoHz": 0
      },
      {
        "inicio": 189.63,
        "fim": 194.43,
        "cantor": "dueto",
        "letra": "Ai amor, ai amor",
        "alvoHz": 0
      },
      {
        "inicio": 194.43,
        "fim": 200.98,
        "cantor": "dueto",
        "letra": "Nessas noites de lua jogado na rua, ai",
        "alvoHz": 0
      },
      {
        "inicio": 200.98,
        "fim": 207.981134,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "ko",
    "titulo": "K.O.",
    "artista": "Pabllo Vittar",
    "arquivo": "/musicas/ko.webm",
    "duracao": 181.561,
    "trechos": [
      {
        "inicio": 0,
        "fim": 20.9311,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 20.9311,
        "fim": 23.9811,
        "cantor": "dueto",
        "letra": "Seu amor, me pegou",
        "alvoHz": 0
      },
      {
        "inicio": 23.9811,
        "fim": 26.7311,
        "cantor": "dueto",
        "letra": "Cê bateu tão forte com o teu amor",
        "alvoHz": 0
      },
      {
        "inicio": 26.7311,
        "fim": 30.0011,
        "cantor": "dueto",
        "letra": "Nocauteou, me tonteou",
        "alvoHz": 0
      },
      {
        "inicio": 30.0011,
        "fim": 33.8911,
        "cantor": "dueto",
        "letra": "Veio à tona, fui a lona, foi K.O.",
        "alvoHz": 0
      },
      {
        "inicio": 33.8911,
        "fim": 44.6811,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 44.6811,
        "fim": 47.3111,
        "cantor": 1,
        "letra": "Sempre fui guerreira, mas foi de primeira",
        "alvoHz": 0
      },
      {
        "inicio": 47.3111,
        "fim": 50.4611,
        "cantor": 2,
        "letra": "Me vi indefesa, coração perdeu a luta, sim",
        "alvoHz": 0
      },
      {
        "inicio": 50.4611,
        "fim": 52.9011,
        "cantor": 1,
        "letra": "Adeus bebedeira, vida de solteira",
        "alvoHz": 0
      },
      {
        "inicio": 52.9011,
        "fim": 54.4411,
        "cantor": 2,
        "letra": "Quero sexta-feira estar contigo",
        "alvoHz": 0
      },
      {
        "inicio": 54.4411,
        "fim": 56.8711,
        "cantor": 1,
        "letra": "Na minha cama juntos coladin",
        "alvoHz": 0
      },
      {
        "inicio": 56.8711,
        "fim": 59.6811,
        "cantor": 2,
        "letra": "Me beija a noite inteira, sexy na banheira",
        "alvoHz": 0
      },
      {
        "inicio": 59.6811,
        "fim": 63.0311,
        "cantor": 1,
        "letra": "Vou te dar canseira, quero do início até o fim",
        "alvoHz": 0
      },
      {
        "inicio": 63.0311,
        "fim": 66.6711,
        "cantor": 2,
        "letra": "E fixa o olhar, fico a te olhar",
        "alvoHz": 0
      },
      {
        "inicio": 66.6711,
        "fim": 70.6711,
        "cantor": 1,
        "letra": "Vou te falar, fui a lona com o seu",
        "alvoHz": 0
      },
      {
        "inicio": 70.6711,
        "fim": 73.4511,
        "cantor": "dueto",
        "letra": "Seu amor, me pegou",
        "alvoHz": 0
      },
      {
        "inicio": 73.4511,
        "fim": 76.5111,
        "cantor": "dueto",
        "letra": "Cê bateu tão forte com o teu amor",
        "alvoHz": 0
      },
      {
        "inicio": 76.5111,
        "fim": 79.7611,
        "cantor": "dueto",
        "letra": "Nocauteou, me tonteou",
        "alvoHz": 0
      },
      {
        "inicio": 79.7611,
        "fim": 83.1111,
        "cantor": "dueto",
        "letra": "Veio à tona, fui a lona, foi K.O.",
        "alvoHz": 0
      },
      {
        "inicio": 83.1111,
        "fim": 85.8411,
        "cantor": "dueto",
        "letra": "Seu amor, me pegou",
        "alvoHz": 0
      },
      {
        "inicio": 85.8411,
        "fim": 88.8611,
        "cantor": "dueto",
        "letra": "Cê bateu tão forte com o teu amor",
        "alvoHz": 0
      },
      {
        "inicio": 88.8611,
        "fim": 92.1011,
        "cantor": "dueto",
        "letra": "Nocauteou, me tonteou",
        "alvoHz": 0
      },
      {
        "inicio": 92.1011,
        "fim": 94.3711,
        "cantor": "dueto",
        "letra": "Veio à tona, fui a lona, foi K.O.",
        "alvoHz": 0
      },
      {
        "inicio": 94.3711,
        "fim": 96.7511,
        "cantor": 2,
        "letra": "Sempre fui guerreira, mas foi de primeira",
        "alvoHz": 0
      },
      {
        "inicio": 96.7511,
        "fim": 99.9511,
        "cantor": 1,
        "letra": "Me vi indefesa, coração perdeu a luta, sim",
        "alvoHz": 0
      },
      {
        "inicio": 99.9511,
        "fim": 102.3011,
        "cantor": 2,
        "letra": "Adeus bebedeira, vida de solteira",
        "alvoHz": 0
      },
      {
        "inicio": 102.3011,
        "fim": 104.1711,
        "cantor": 1,
        "letra": "Quero sexta-feira estar contigo",
        "alvoHz": 0
      },
      {
        "inicio": 104.1711,
        "fim": 106.3711,
        "cantor": 2,
        "letra": "Na minha cama juntos coladin",
        "alvoHz": 0
      },
      {
        "inicio": 106.3711,
        "fim": 109.3911,
        "cantor": 1,
        "letra": "Me beija a noite inteira, sexy na banheira",
        "alvoHz": 0
      },
      {
        "inicio": 109.3911,
        "fim": 112.7411,
        "cantor": 2,
        "letra": "Vou te dar canseira, quero do inicio até o fim",
        "alvoHz": 0
      },
      {
        "inicio": 112.7411,
        "fim": 116.1311,
        "cantor": 1,
        "letra": "E fixa o olhar, fico a te olhar",
        "alvoHz": 0
      },
      {
        "inicio": 116.1311,
        "fim": 120.1311,
        "cantor": 2,
        "letra": "Vou te falar, fui a lona com o seu",
        "alvoHz": 0
      },
      {
        "inicio": 120.1311,
        "fim": 123.1611,
        "cantor": "dueto",
        "letra": "Seu amor, me pegou",
        "alvoHz": 0
      },
      {
        "inicio": 123.1611,
        "fim": 125.9811,
        "cantor": "dueto",
        "letra": "Cê bateu tão forte com o teu amor",
        "alvoHz": 0
      },
      {
        "inicio": 125.9811,
        "fim": 129.3411,
        "cantor": "dueto",
        "letra": "Nocauteou, me tonteou",
        "alvoHz": 0
      },
      {
        "inicio": 129.3411,
        "fim": 132.7411,
        "cantor": "dueto",
        "letra": "Veio à tona, fui a lona, foi K.O.",
        "alvoHz": 0
      },
      {
        "inicio": 132.7411,
        "fim": 135.5511,
        "cantor": "dueto",
        "letra": "Seu amor, me pegou",
        "alvoHz": 0
      },
      {
        "inicio": 135.5511,
        "fim": 138.3311,
        "cantor": "dueto",
        "letra": "Cê bateu tão forte com o teu amor",
        "alvoHz": 0
      },
      {
        "inicio": 138.3311,
        "fim": 141.6011,
        "cantor": "dueto",
        "letra": "Nocauteou, me tonteou",
        "alvoHz": 0
      },
      {
        "inicio": 141.6011,
        "fim": 145.4511,
        "cantor": "dueto",
        "letra": "Veio à tona, fui a lona, foi K.O.",
        "alvoHz": 0
      },
      {
        "inicio": 145.4511,
        "fim": 147.9411,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 147.9411,
        "fim": 153.0511,
        "cantor": "dueto",
        "letra": "Eu me entreguei e decretei K.O.",
        "alvoHz": 0
      },
      {
        "inicio": 153.0511,
        "fim": 154.9911,
        "cantor": "dueto",
        "letra": "Eu me entreguei e decretei K.O.",
        "alvoHz": 0
      },
      {
        "inicio": 154.9911,
        "fim": 181.561,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "bailando",
    "titulo": "Bailando",
    "artista": "Enrique Iglesias feat. Descemer Bueno e Gente de Zona",
    "arquivo": "/musicas/bailando.m4a",
    "duracao": 259.065034,
    "trechos": [
      {
        "inicio": 0,
        "fim": 34.695551,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 34.695551,
        "fim": 40.045551,
        "cantor": 1,
        "letra": "Yo te miro y se me corta la respiración",
        "alvoHz": 0
      },
      {
        "inicio": 40.045551,
        "fim": 42.865551,
        "cantor": 2,
        "letra": "Cuando tú me miras, se me sube el corazón",
        "alvoHz": 0
      },
      {
        "inicio": 42.865551,
        "fim": 45.365551,
        "cantor": 1,
        "letra": "(Me palpita lento el corazón)",
        "alvoHz": 0
      },
      {
        "inicio": 45.365551,
        "fim": 50.495551,
        "cantor": 2,
        "letra": "Y en un silencio, tu mirada dice mil palabras",
        "alvoHz": 0
      },
      {
        "inicio": 50.495551,
        "fim": 55.265551,
        "cantor": 1,
        "letra": "La noche en la que te suplico que no salga el Sol",
        "alvoHz": 0
      },
      {
        "inicio": 55.265551,
        "fim": 57.905551,
        "cantor": "dueto",
        "letra": "Bailando (bailando)",
        "alvoHz": 0
      },
      {
        "inicio": 57.905551,
        "fim": 60.045551,
        "cantor": "dueto",
        "letra": "Bailando (bailando)",
        "alvoHz": 0
      },
      {
        "inicio": 60.045551,
        "fim": 62.535551,
        "cantor": "dueto",
        "letra": "Tu cuerpo y el mío, llenando el vacío",
        "alvoHz": 0
      },
      {
        "inicio": 62.535551,
        "fim": 65.695551,
        "cantor": "dueto",
        "letra": "Subiendo y bajando (subiendo y bajando)",
        "alvoHz": 0
      },
      {
        "inicio": 65.695551,
        "fim": 68.325551,
        "cantor": "dueto",
        "letra": "Bailando (bailando)",
        "alvoHz": 0
      },
      {
        "inicio": 68.325551,
        "fim": 70.535551,
        "cantor": "dueto",
        "letra": "Bailando (bailando)",
        "alvoHz": 0
      },
      {
        "inicio": 70.535551,
        "fim": 73.105551,
        "cantor": "dueto",
        "letra": "Ese fuego por dentro me va enloqueciendo",
        "alvoHz": 0
      },
      {
        "inicio": 73.105551,
        "fim": 75.585551,
        "cantor": "dueto",
        "letra": "Me va saturando",
        "alvoHz": 0
      },
      {
        "inicio": 75.585551,
        "fim": 78.385551,
        "cantor": 2,
        "letra": "Con tu física y tu química, también tu anatomía",
        "alvoHz": 0
      },
      {
        "inicio": 78.385551,
        "fim": 81.085551,
        "cantor": 1,
        "letra": "La cerveza y el tequila, y tu boca con la mía",
        "alvoHz": 0
      },
      {
        "inicio": 81.085551,
        "fim": 83.495551,
        "cantor": 2,
        "letra": "Y ya no puedo más (ya no puedo más)",
        "alvoHz": 0
      },
      {
        "inicio": 83.495551,
        "fim": 86.525551,
        "cantor": 1,
        "letra": "Ya no puedo más (ya no puedo más)",
        "alvoHz": 0
      },
      {
        "inicio": 86.525551,
        "fim": 89.095551,
        "cantor": 2,
        "letra": "Con esta melodía, tu color, tu fantasía",
        "alvoHz": 0
      },
      {
        "inicio": 89.095551,
        "fim": 91.255551,
        "cantor": 1,
        "letra": "Con tu filosofía, mi cabeza está vacía",
        "alvoHz": 0
      },
      {
        "inicio": 91.255551,
        "fim": 94.315551,
        "cantor": 2,
        "letra": "Y ya no puedo más (ya no puedo más)",
        "alvoHz": 0
      },
      {
        "inicio": 94.315551,
        "fim": 96.665551,
        "cantor": 1,
        "letra": "Ya no puedo más (ya no puedo más)",
        "alvoHz": 0
      },
      {
        "inicio": 96.665551,
        "fim": 99.775551,
        "cantor": "dueto",
        "letra": "Yo quiero estar contigo, vivir contigo",
        "alvoHz": 0
      },
      {
        "inicio": 99.775551,
        "fim": 102.225551,
        "cantor": "dueto",
        "letra": "Bailar contigo, tener contigo",
        "alvoHz": 0
      },
      {
        "inicio": 102.225551,
        "fim": 104.705551,
        "cantor": "dueto",
        "letra": "Una noche loca (una noche loca)",
        "alvoHz": 0
      },
      {
        "inicio": 104.705551,
        "fim": 107.315551,
        "cantor": "dueto",
        "letra": "Ay, besar tu boca (y besar tu boca)",
        "alvoHz": 0
      },
      {
        "inicio": 107.315551,
        "fim": 110.380551,
        "cantor": "dueto",
        "letra": "Yo quiero estar contigo, vivir contigo",
        "alvoHz": 0
      },
      {
        "inicio": 110.380551,
        "fim": 112.805551,
        "cantor": "dueto",
        "letra": "Bailar contigo, tener contigo",
        "alvoHz": 0
      },
      {
        "inicio": 112.805551,
        "fim": 114.965551,
        "cantor": "dueto",
        "letra": "Una noche loca",
        "alvoHz": 0
      },
      {
        "inicio": 114.965551,
        "fim": 117.965551,
        "cantor": "dueto",
        "letra": "Con tremenda nota",
        "alvoHz": 0
      },
      {
        "inicio": 117.965551,
        "fim": 120.425551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 120.425551,
        "fim": 123.125551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 123.125551,
        "fim": 125.745551,
        "cantor": "dueto",
        "letra": "(Oh, oh, ooh, oh)",
        "alvoHz": 0
      },
      {
        "inicio": 125.745551,
        "fim": 129.745551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 129.745551,
        "fim": 132.705551,
        "cantor": 2,
        "letra": "Tú me miras y me llevas a otra dimensión",
        "alvoHz": 0
      },
      {
        "inicio": 132.705551,
        "fim": 134.875551,
        "cantor": 1,
        "letra": "(Estoy en otra dimensión)",
        "alvoHz": 0
      },
      {
        "inicio": 134.875551,
        "fim": 137.905551,
        "cantor": 2,
        "letra": "Tus latidos aceleran a mi corazón",
        "alvoHz": 0
      },
      {
        "inicio": 137.905551,
        "fim": 140.275551,
        "cantor": 1,
        "letra": "(Tus latidos aceleran a mi corazón)",
        "alvoHz": 0
      },
      {
        "inicio": 140.275551,
        "fim": 144.395551,
        "cantor": 2,
        "letra": "Qué ironía del destino no poder tocarte",
        "alvoHz": 0
      },
      {
        "inicio": 144.395551,
        "fim": 150.195551,
        "cantor": 1,
        "letra": "Abrazarte y sentir la magia de tu olor",
        "alvoHz": 0
      },
      {
        "inicio": 150.195551,
        "fim": 152.835551,
        "cantor": "dueto",
        "letra": "Bailando (bailando)",
        "alvoHz": 0
      },
      {
        "inicio": 152.835551,
        "fim": 155.025551,
        "cantor": "dueto",
        "letra": "Bailando (bailando)",
        "alvoHz": 0
      },
      {
        "inicio": 155.025551,
        "fim": 157.705551,
        "cantor": "dueto",
        "letra": "Tu cuerpo y el mío, llenando el vacío",
        "alvoHz": 0
      },
      {
        "inicio": 157.705551,
        "fim": 160.625551,
        "cantor": "dueto",
        "letra": "Subiendo y bajando (subiendo y bajando)",
        "alvoHz": 0
      },
      {
        "inicio": 160.625551,
        "fim": 163.315551,
        "cantor": "dueto",
        "letra": "Bailando (bailando)",
        "alvoHz": 0
      },
      {
        "inicio": 163.315551,
        "fim": 165.375551,
        "cantor": "dueto",
        "letra": "Bailando (bailando)",
        "alvoHz": 0
      },
      {
        "inicio": 165.375551,
        "fim": 167.955551,
        "cantor": "dueto",
        "letra": "Ese fuego por dentro me va enloqueciendo",
        "alvoHz": 0
      },
      {
        "inicio": 167.955551,
        "fim": 170.605551,
        "cantor": "dueto",
        "letra": "Me va saturando",
        "alvoHz": 0
      },
      {
        "inicio": 170.605551,
        "fim": 173.385551,
        "cantor": 2,
        "letra": "Con tu física y tu química, también tu anatomía",
        "alvoHz": 0
      },
      {
        "inicio": 173.385551,
        "fim": 176.225551,
        "cantor": 1,
        "letra": "La cerveza y el tequila, y tu boca con la mía",
        "alvoHz": 0
      },
      {
        "inicio": 176.225551,
        "fim": 178.695551,
        "cantor": 2,
        "letra": "Y ya no puedo más (ya no puedo más)",
        "alvoHz": 0
      },
      {
        "inicio": 178.695551,
        "fim": 181.435551,
        "cantor": 1,
        "letra": "Ya no puedo más (ya no puedo más)",
        "alvoHz": 0
      },
      {
        "inicio": 181.435551,
        "fim": 184.065551,
        "cantor": 2,
        "letra": "Con esta melodía, tu color, tu fantasía",
        "alvoHz": 0
      },
      {
        "inicio": 184.065551,
        "fim": 186.525551,
        "cantor": 1,
        "letra": "Con tu filosofía, mi cabeza está vacía",
        "alvoHz": 0
      },
      {
        "inicio": 186.525551,
        "fim": 189.175551,
        "cantor": 2,
        "letra": "Y ya no puedo más (ya no puedo más)",
        "alvoHz": 0
      },
      {
        "inicio": 189.175551,
        "fim": 191.825551,
        "cantor": 1,
        "letra": "Ya no puedo más (ya no puedo más)",
        "alvoHz": 0
      },
      {
        "inicio": 191.825551,
        "fim": 194.635551,
        "cantor": "dueto",
        "letra": "Yo quiero estar contigo, vivir contigo",
        "alvoHz": 0
      },
      {
        "inicio": 194.635551,
        "fim": 197.155551,
        "cantor": "dueto",
        "letra": "Bailar contigo, tener contigo",
        "alvoHz": 0
      },
      {
        "inicio": 197.155551,
        "fim": 199.515551,
        "cantor": "dueto",
        "letra": "Una noche loca (una noche loca)",
        "alvoHz": 0
      },
      {
        "inicio": 199.515551,
        "fim": 202.215551,
        "cantor": "dueto",
        "letra": "Ay, besar tu boca (y besar tu boca)",
        "alvoHz": 0
      },
      {
        "inicio": 202.215551,
        "fim": 205.150551,
        "cantor": "dueto",
        "letra": "Yo quiero estar contigo, vivir contigo",
        "alvoHz": 0
      },
      {
        "inicio": 205.150551,
        "fim": 207.705551,
        "cantor": "dueto",
        "letra": "Bailar contigo, tener contigo",
        "alvoHz": 0
      },
      {
        "inicio": 207.705551,
        "fim": 210.105551,
        "cantor": "dueto",
        "letra": "Una noche loca",
        "alvoHz": 0
      },
      {
        "inicio": 210.105551,
        "fim": 212.995551,
        "cantor": "dueto",
        "letra": "Con tremenda nota",
        "alvoHz": 0
      },
      {
        "inicio": 212.995551,
        "fim": 215.405551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 215.405551,
        "fim": 218.065551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 218.065551,
        "fim": 220.835551,
        "cantor": "dueto",
        "letra": "(Oh, oh, ooh, oh)",
        "alvoHz": 0
      },
      {
        "inicio": 220.835551,
        "fim": 223.475551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 223.475551,
        "fim": 225.895551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 225.895551,
        "fim": 228.585551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 228.585551,
        "fim": 231.325551,
        "cantor": "dueto",
        "letra": "(Oh, oh, ooh, oh)",
        "alvoHz": 0
      },
      {
        "inicio": 231.325551,
        "fim": 233.975551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 233.975551,
        "fim": 236.465551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh) bailando, amor",
        "alvoHz": 0
      },
      {
        "inicio": 236.465551,
        "fim": 239.185551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh) bailando, amor",
        "alvoHz": 0
      },
      {
        "inicio": 239.185551,
        "fim": 242.145551,
        "cantor": "dueto",
        "letra": "(Oh, oh, ooh, oh) es que se me va el dolor",
        "alvoHz": 0
      },
      {
        "inicio": 242.145551,
        "fim": 243.325551,
        "cantor": "dueto",
        "letra": "(Oh, oh, oh, ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 243.325551,
        "fim": 259.065034,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "meiga-e-abusada",
    "titulo": "Meiga e Abusada",
    "artista": "Anitta",
    "arquivo": "/musicas/meiga-e-abusada.webm",
    "duracao": 238.221,
    "trechos": [
      {
        "inicio": 0,
        "fim": 14.46,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 14.46,
        "fim": 18.26,
        "cantor": 1,
        "letra": "Eu posso conquistar tudo que eu quero",
        "alvoHz": 0
      },
      {
        "inicio": 18.26,
        "fim": 21.85,
        "cantor": 2,
        "letra": "Mas foi tão fácil pra te controlar",
        "alvoHz": 0
      },
      {
        "inicio": 21.85,
        "fim": 25.46,
        "cantor": 1,
        "letra": "Com jeito de menina brincalhona",
        "alvoHz": 0
      },
      {
        "inicio": 25.46,
        "fim": 28.92,
        "cantor": 2,
        "letra": "A fórmula perfeita pra poder te comandar",
        "alvoHz": 0
      },
      {
        "inicio": 28.92,
        "fim": 32.99,
        "cantor": 1,
        "letra": "Pensou que eu fosse cair mesmo nesse papo",
        "alvoHz": 0
      },
      {
        "inicio": 32.99,
        "fim": 36.43,
        "cantor": 2,
        "letra": "Que tá solteiro e agora quer parar",
        "alvoHz": 0
      },
      {
        "inicio": 36.43,
        "fim": 40.15,
        "cantor": 1,
        "letra": "Eu finjo, vou fazendo meu teatro",
        "alvoHz": 0
      },
      {
        "inicio": 40.15,
        "fim": 42.94,
        "cantor": 2,
        "letra": "E te faço de palhaço, pra te dominar",
        "alvoHz": 0
      },
      {
        "inicio": 42.94,
        "fim": 46.88,
        "cantor": 1,
        "letra": "Tá fazendo tudo que eu mando",
        "alvoHz": 0
      },
      {
        "inicio": 46.88,
        "fim": 50.43,
        "cantor": 2,
        "letra": "Achando que logo vai me ter",
        "alvoHz": 0
      },
      {
        "inicio": 50.43,
        "fim": 57.92,
        "cantor": 1,
        "letra": "Mas no fundo eu só tô brincando com você",
        "alvoHz": 0
      },
      {
        "inicio": 57.92,
        "fim": 61.54,
        "cantor": 2,
        "letra": "Poderosa, eu sou quase um anjo",
        "alvoHz": 0
      },
      {
        "inicio": 61.54,
        "fim": 65.2,
        "cantor": 1,
        "letra": "Hipnose, já ganhei você",
        "alvoHz": 0
      },
      {
        "inicio": 65.2,
        "fim": 73.59,
        "cantor": 2,
        "letra": "Nesse jogo vamos ver quem é que vai vencer",
        "alvoHz": 0
      },
      {
        "inicio": 73.59,
        "fim": 77.27,
        "cantor": "dueto",
        "letra": "Toda produzida, ah, te deixo quente",
        "alvoHz": 0
      },
      {
        "inicio": 77.27,
        "fim": 80.92,
        "cantor": "dueto",
        "letra": "Meiga e abusada, faço você se perder",
        "alvoHz": 0
      },
      {
        "inicio": 80.92,
        "fim": 82.34,
        "cantor": "dueto",
        "letra": "E quem foi que disse",
        "alvoHz": 0
      },
      {
        "inicio": 82.34,
        "fim": 85.72,
        "cantor": "dueto",
        "letra": "Que eu estava apaixonada por você?",
        "alvoHz": 0
      },
      {
        "inicio": 85.72,
        "fim": 88.41,
        "cantor": "dueto",
        "letra": "Eu só quero saber",
        "alvoHz": 0
      },
      {
        "inicio": 88.41,
        "fim": 91.99,
        "cantor": "dueto",
        "letra": "Linda e perfumada, ah, na tua mente",
        "alvoHz": 0
      },
      {
        "inicio": 91.99,
        "fim": 95.61,
        "cantor": "dueto",
        "letra": "Faz o que quiser comigo na imaginação",
        "alvoHz": 0
      },
      {
        "inicio": 95.61,
        "fim": 97.34,
        "cantor": "dueto",
        "letra": "Homem do teu tipo eu uso",
        "alvoHz": 0
      },
      {
        "inicio": 97.34,
        "fim": 103.07,
        "cantor": "dueto",
        "letra": "Mas se chega lá, eu digo não",
        "alvoHz": 0
      },
      {
        "inicio": 103.07,
        "fim": 106.65,
        "cantor": 2,
        "letra": "Eu posso conquistar tudo que eu quero",
        "alvoHz": 0
      },
      {
        "inicio": 106.65,
        "fim": 110.42,
        "cantor": 1,
        "letra": "Mas foi tão fácil pra te controlar",
        "alvoHz": 0
      },
      {
        "inicio": 110.42,
        "fim": 114.02,
        "cantor": 2,
        "letra": "Com jeito de menina brincalhona",
        "alvoHz": 0
      },
      {
        "inicio": 114.02,
        "fim": 117.38,
        "cantor": 1,
        "letra": "A fórmula perfeita pra poder te comandar",
        "alvoHz": 0
      },
      {
        "inicio": 117.38,
        "fim": 121.59,
        "cantor": 2,
        "letra": "Pensou que eu fosse cair mesmo nesse papo",
        "alvoHz": 0
      },
      {
        "inicio": 121.59,
        "fim": 125.2,
        "cantor": 1,
        "letra": "Que tá solteiro e agora quer parar",
        "alvoHz": 0
      },
      {
        "inicio": 125.2,
        "fim": 128.64,
        "cantor": 2,
        "letra": "Eu finjo, vou fazendo meu teatro",
        "alvoHz": 0
      },
      {
        "inicio": 128.64,
        "fim": 131.76,
        "cantor": 1,
        "letra": "E te faço de palhaço, pra te dominar",
        "alvoHz": 0
      },
      {
        "inicio": 131.76,
        "fim": 135.67,
        "cantor": 2,
        "letra": "Tá fazendo tudo que eu mando",
        "alvoHz": 0
      },
      {
        "inicio": 135.67,
        "fim": 139.09,
        "cantor": 1,
        "letra": "Achando que logo vai me ter",
        "alvoHz": 0
      },
      {
        "inicio": 139.09,
        "fim": 146.42,
        "cantor": 2,
        "letra": "Mas no fundo eu só tô brincando com você",
        "alvoHz": 0
      },
      {
        "inicio": 146.42,
        "fim": 150.18,
        "cantor": 1,
        "letra": "Poderosa, eu sou quase um anjo",
        "alvoHz": 0
      },
      {
        "inicio": 150.18,
        "fim": 153.78,
        "cantor": 2,
        "letra": "Hipnose, já ganhei você",
        "alvoHz": 0
      },
      {
        "inicio": 153.78,
        "fim": 162.06,
        "cantor": 1,
        "letra": "Nesse jogo vamos ver quem é que vai vencer",
        "alvoHz": 0
      },
      {
        "inicio": 162.06,
        "fim": 165.73,
        "cantor": "dueto",
        "letra": "Toda produzida, ah, te deixo quente",
        "alvoHz": 0
      },
      {
        "inicio": 165.73,
        "fim": 169.53,
        "cantor": "dueto",
        "letra": "Meiga e abusada, faço você se perder",
        "alvoHz": 0
      },
      {
        "inicio": 169.53,
        "fim": 170.95,
        "cantor": "dueto",
        "letra": "E quem foi que disse",
        "alvoHz": 0
      },
      {
        "inicio": 170.95,
        "fim": 174.37,
        "cantor": "dueto",
        "letra": "Que eu estava apaixonada por você?",
        "alvoHz": 0
      },
      {
        "inicio": 174.37,
        "fim": 177.05,
        "cantor": "dueto",
        "letra": "Eu só quero saber",
        "alvoHz": 0
      },
      {
        "inicio": 177.05,
        "fim": 180.59,
        "cantor": "dueto",
        "letra": "Linda e perfumada, ah, na tua mente",
        "alvoHz": 0
      },
      {
        "inicio": 180.59,
        "fim": 184.28,
        "cantor": "dueto",
        "letra": "Faz o que quiser comigo na imaginação",
        "alvoHz": 0
      },
      {
        "inicio": 184.28,
        "fim": 186.03,
        "cantor": "dueto",
        "letra": "Homem do teu tipo eu uso",
        "alvoHz": 0
      },
      {
        "inicio": 186.03,
        "fim": 188.86,
        "cantor": "dueto",
        "letra": "Mas se chega lá, eu digo não",
        "alvoHz": 0
      },
      {
        "inicio": 188.86,
        "fim": 191.4,
        "cantor": "dueto",
        "letra": "Eu sempre digo não",
        "alvoHz": 0
      },
      {
        "inicio": 191.4,
        "fim": 195.47,
        "cantor": "dueto",
        "letra": "Toda produzida, ah, te deixo quente",
        "alvoHz": 0
      },
      {
        "inicio": 195.47,
        "fim": 199.08,
        "cantor": "dueto",
        "letra": "Meiga e abusada, faço você se perder",
        "alvoHz": 0
      },
      {
        "inicio": 199.08,
        "fim": 200.12,
        "cantor": "dueto",
        "letra": "E quem foi que disse",
        "alvoHz": 0
      },
      {
        "inicio": 200.12,
        "fim": 203.87,
        "cantor": "dueto",
        "letra": "Que eu estava apaixonada por você?",
        "alvoHz": 0
      },
      {
        "inicio": 203.87,
        "fim": 206.5,
        "cantor": "dueto",
        "letra": "Eu só quero saber",
        "alvoHz": 0
      },
      {
        "inicio": 206.5,
        "fim": 210.05,
        "cantor": "dueto",
        "letra": "Linda e perfumada, ah, na tua mente",
        "alvoHz": 0
      },
      {
        "inicio": 210.05,
        "fim": 213.84,
        "cantor": "dueto",
        "letra": "Faz o que quiser comigo na imaginação",
        "alvoHz": 0
      },
      {
        "inicio": 213.84,
        "fim": 215.56,
        "cantor": "dueto",
        "letra": "Homem do teu tipo eu uso",
        "alvoHz": 0
      },
      {
        "inicio": 215.56,
        "fim": 218.39,
        "cantor": "dueto",
        "letra": "Mas se chega lá, eu digo não",
        "alvoHz": 0
      },
      {
        "inicio": 218.39,
        "fim": 238.221,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "vagalumes",
    "titulo": "Vagalumes",
    "artista": "Pollo feat. Ivo Mozart",
    "arquivo": "/musicas/vagalumes.webm",
    "duracao": 169.901,
    "trechos": [
      {
        "inicio": 0,
        "fim": 10.98,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 10.98,
        "fim": 17.63,
        "cantor": "dueto",
        "letra": "Vou caçar mais de um milhão de vagalumes por aí",
        "alvoHz": 0
      },
      {
        "inicio": 17.63,
        "fim": 21.82,
        "cantor": "dueto",
        "letra": "Pra te ver sorrir, eu posso colorir o céu de outra cor",
        "alvoHz": 0
      },
      {
        "inicio": 21.82,
        "fim": 29.04,
        "cantor": "dueto",
        "letra": "Eu só quero amar você e quando amanhecer",
        "alvoHz": 0
      },
      {
        "inicio": 29.04,
        "fim": 32.4,
        "cantor": "dueto",
        "letra": "Eu quero acordar do seu lado",
        "alvoHz": 0
      },
      {
        "inicio": 32.4,
        "fim": 35.28,
        "cantor": 1,
        "letra": "Vou escrever mais de um milhão de canções pra você ouvir",
        "alvoHz": 0
      },
      {
        "inicio": 35.28,
        "fim": 37.63,
        "cantor": 2,
        "letra": "Que meu amor é teu, teu sorriso me faz sorrir",
        "alvoHz": 0
      },
      {
        "inicio": 37.63,
        "fim": 40.51,
        "cantor": 1,
        "letra": "Eu vou de Marte até a Lua, cê sabe, já tô na tua",
        "alvoHz": 0
      },
      {
        "inicio": 40.51,
        "fim": 43.31,
        "cantor": 2,
        "letra": "E não cabe tanta saudade, essa verdade nua e crua",
        "alvoHz": 0
      },
      {
        "inicio": 43.31,
        "fim": 46.07,
        "cantor": 1,
        "letra": "Eu sei o que eu faço, nosso caminho, eu traço",
        "alvoHz": 0
      },
      {
        "inicio": 46.07,
        "fim": 48.72,
        "cantor": 2,
        "letra": "Um casal fora da lei, ocupando o mesmo espaço",
        "alvoHz": 0
      },
      {
        "inicio": 48.72,
        "fim": 51.58,
        "cantor": 1,
        "letra": "Se eu tô contigo, não ligo se o Sol não aparecer",
        "alvoHz": 0
      },
      {
        "inicio": 51.58,
        "fim": 54.7,
        "cantor": 2,
        "letra": "É que não faz sentido caminhar sem dar a mão pra você",
        "alvoHz": 0
      },
      {
        "inicio": 54.7,
        "fim": 56.63,
        "cantor": 1,
        "letra": "Teu sonho impossível vai ser realidade",
        "alvoHz": 0
      },
      {
        "inicio": 56.63,
        "fim": 58.26,
        "cantor": 2,
        "letra": "Sei que o mundo tá terrível",
        "alvoHz": 0
      },
      {
        "inicio": 58.26,
        "fim": 60.36,
        "cantor": 1,
        "letra": "Mas não vai ser a maldade que",
        "alvoHz": 0
      },
      {
        "inicio": 60.36,
        "fim": 62.49,
        "cantor": 2,
        "letra": "Vai me tirar de você, eu faço você ver",
        "alvoHz": 0
      },
      {
        "inicio": 62.49,
        "fim": 65.13,
        "cantor": 1,
        "letra": "Pra tu sorrir, eu faço o mundo inteiro saber que eu",
        "alvoHz": 0
      },
      {
        "inicio": 65.13,
        "fim": 72.38,
        "cantor": "dueto",
        "letra": "Vou caçar mais de um milhão de vagalumes por aí",
        "alvoHz": 0
      },
      {
        "inicio": 72.38,
        "fim": 76.28,
        "cantor": "dueto",
        "letra": "Pra te ver sorrir, eu posso colorir o céu de outra cor",
        "alvoHz": 0
      },
      {
        "inicio": 76.28,
        "fim": 83.76,
        "cantor": "dueto",
        "letra": "Eu só quero amar você e quando amanhecer",
        "alvoHz": 0
      },
      {
        "inicio": 83.76,
        "fim": 87.23,
        "cantor": "dueto",
        "letra": "Eu quero acordar do seu lado",
        "alvoHz": 0
      },
      {
        "inicio": 87.23,
        "fim": 89.73,
        "cantor": 2,
        "letra": "Pra ter o teu sorriso, eu descubro o paraíso",
        "alvoHz": 0
      },
      {
        "inicio": 89.73,
        "fim": 93.07,
        "cantor": 1,
        "letra": "É só ver sua boca que eu perco o juízo por inteiro",
        "alvoHz": 0
      },
      {
        "inicio": 93.07,
        "fim": 95.3,
        "cantor": 2,
        "letra": "Sentimento verdadeiro, eu e você",
        "alvoHz": 0
      },
      {
        "inicio": 95.3,
        "fim": 97.88,
        "cantor": 1,
        "letra": "Ao som de Janelle Monáe, vem, deixa acontecer",
        "alvoHz": 0
      },
      {
        "inicio": 97.88,
        "fim": 100.76,
        "cantor": 2,
        "letra": "E me abraça, que o tempo não passa quando cê tá perto",
        "alvoHz": 0
      },
      {
        "inicio": 100.76,
        "fim": 103.37,
        "cantor": 1,
        "letra": "Dá a mão e vem comigo, que eu vejo como eu tô certo",
        "alvoHz": 0
      },
      {
        "inicio": 103.37,
        "fim": 106.01,
        "cantor": 2,
        "letra": "Eu digo que te amo, cê pede algo impossível",
        "alvoHz": 0
      },
      {
        "inicio": 106.01,
        "fim": 111.77,
        "cantor": 1,
        "letra": "Levanta da sua cama, hoje o céu está incrível (incrível)",
        "alvoHz": 0
      },
      {
        "inicio": 111.77,
        "fim": 118.5,
        "cantor": "dueto",
        "letra": "Vou caçar mais de um milhão de vagalumes por aí",
        "alvoHz": 0
      },
      {
        "inicio": 118.5,
        "fim": 122.55,
        "cantor": "dueto",
        "letra": "E pra te ver sorrir, eu posso colorir o céu de outra cor",
        "alvoHz": 0
      },
      {
        "inicio": 122.55,
        "fim": 130.04,
        "cantor": "dueto",
        "letra": "Eu só quero amar você e quando amanhecer",
        "alvoHz": 0
      },
      {
        "inicio": 130.04,
        "fim": 133.96,
        "cantor": "dueto",
        "letra": "Eu quero acordar do seu lado",
        "alvoHz": 0
      },
      {
        "inicio": 133.96,
        "fim": 136.57,
        "cantor": 2,
        "letra": "Faço dos teus braços um lugar mais seguro",
        "alvoHz": 0
      },
      {
        "inicio": 136.57,
        "fim": 139.57,
        "cantor": 1,
        "letra": "Procurei paz em outro abraço, eu não achei, eu juro",
        "alvoHz": 0
      },
      {
        "inicio": 139.57,
        "fim": 141.94,
        "cantor": 2,
        "letra": "Saio do compasso, passo apuros, o que vier",
        "alvoHz": 0
      },
      {
        "inicio": 141.94,
        "fim": 144.67,
        "cantor": 1,
        "letra": "Abro a janela pra que você possa ver",
        "alvoHz": 0
      },
      {
        "inicio": 144.67,
        "fim": 151.07,
        "cantor": "dueto",
        "letra": "Vou caçar mais de um milhão de vagalumes por aí",
        "alvoHz": 0
      },
      {
        "inicio": 151.07,
        "fim": 155.78,
        "cantor": "dueto",
        "letra": "Pra te ver sorrir, eu posso colorir o céu de outra cor",
        "alvoHz": 0
      },
      {
        "inicio": 155.78,
        "fim": 162.83,
        "cantor": "dueto",
        "letra": "Eu só quero amar você e quando amanhecer",
        "alvoHz": 0
      },
      {
        "inicio": 162.83,
        "fim": 166.871,
        "cantor": "dueto",
        "letra": "Eu quero acordar do seu lado",
        "alvoHz": 0
      },
      {
        "inicio": 166.871,
        "fim": 169.901,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "nega",
    "titulo": "Nega",
    "artista": "Luan Santana",
    "arquivo": "/musicas/nega.m4a",
    "duracao": 166.045896,
    "trechos": [
      {
        "inicio": 0,
        "fim": 11.63,
        "letra": "♪ Introdução ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 11.63,
        "fim": 14.7,
        "letra": "Eu sei você sofreu demais",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 14.7,
        "fim": 18.16,
        "letra": "E sabe que eu não fui capaz, mas mas mas",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 18.16,
        "fim": 21.23,
        "letra": "Aquele sonho que era meu",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 21.23,
        "fim": 24.73,
        "letra": "Descobri não era seu, é não deu",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 24.73,
        "fim": 29.82,
        "letra": "Não deu certo quanto a gente planejou",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 29.82,
        "fim": 33.84,
        "letra": "Mas o amor nos deu mais uma chance",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 33.84,
        "fim": 38.48,
        "letra": "Volta e vem viver (joga a mão no céu e canta assim, vai)",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 38.48,
        "fim": 42.46,
        "letra": "Nega chega junto vem me amar, vem cá",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 42.46,
        "fim": 45.04,
        "letra": "Já 'tava arrumando a minha vida",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 45.04,
        "fim": 48.3,
        "letra": "Mas 'to doido pr'ocê bagunçar, nega",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 48.3,
        "fim": 52.36,
        "letra": "Nega a saudade não quer sossegar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 52.36,
        "fim": 53.85,
        "letra": "Só 'tá aumentando",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 53.85,
        "fim": 56.91,
        "letra": "E o seu nego 'tá indo aí pra te buscar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 56.91,
        "fim": 61.8,
        "letra": "Nega ai ai, eu 'to pronto pra te amar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 61.8,
        "fim": 65.06,
        "letra": "♪ Instrumental ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 65.06,
        "fim": 67.72,
        "letra": "Eu sei você sofreu demais",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 67.72,
        "fim": 71.08,
        "letra": "E sabe que eu não fui capaz mas mas mas",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 71.08,
        "fim": 74.29,
        "letra": "Aquele sonho que era meu",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 74.29,
        "fim": 77.67,
        "letra": "Descobri não era seu, é não deu",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 77.67,
        "fim": 82.78,
        "letra": "Não deu certo quanto a gente planejou",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 82.78,
        "fim": 86.73,
        "letra": "Mas o amor nos deu mais uma chance",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 86.73,
        "fim": 90.57,
        "letra": "Volta e vem viver esse romance (e na palma da mão que eu quero ouvir)",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 90.57,
        "fim": 95.37,
        "letra": "Nega chega junto vem me amar, vem cá",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 95.37,
        "fim": 97.86,
        "letra": "Já 'tava arrumando a minha vida",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 97.86,
        "fim": 101.21,
        "letra": "Mas 'to doido pr'ocê bagunçar, nega",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 101.21,
        "fim": 105.38,
        "letra": "Nega a saudade não quer sossegar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 105.38,
        "fim": 106.88,
        "letra": "Só 'tá aumentando",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 106.88,
        "fim": 110.02,
        "letra": "E o seu nego 'tá indo aí pra te buscar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 110.02,
        "fim": 115.5,
        "letra": "Nega ai ai, eu 'to pronto pra te amar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 115.5,
        "fim": 119,
        "letra": "♪ Instrumental ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 119,
        "fim": 122,
        "letra": "Joga na palma da mão assim, vai vai vai",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 122,
        "fim": 124,
        "letra": "♪ Instrumental ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 124,
        "fim": 126.7,
        "letra": "E canta assim Brasil",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 126.7,
        "fim": 128.7,
        "letra": "♪ Instrumental ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 128.7,
        "fim": 131.78,
        "letra": "Nega chega junto vem me amar, vem cá",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 131.78,
        "fim": 134.19,
        "letra": "Já 'tava arrumando a minha vida",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 134.19,
        "fim": 137.54,
        "letra": "Mas 'to doido pr'ocê bagunçar, nega",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 137.54,
        "fim": 141.62,
        "letra": "Nega a saudade não quer sossegar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 141.62,
        "fim": 143.2,
        "letra": "Só 'tá aumentando",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 143.2,
        "fim": 146.09,
        "letra": "E o seu nego 'tá indo aí pra te buscar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 146.09,
        "fim": 156.03,
        "letra": "Nega ai ai, eu 'to pronto pra te amar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 156.03,
        "fim": 159.5,
        "letra": "Uh oh oh pronto pra te amar",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 159.5,
        "fim": 160.4,
        "letra": "♪ Instrumental ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 160.4,
        "fim": 164.48,
        "letra": "Eu 'to pronto pra amar vocês viu minhas nega",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 164.48,
        "fim": 166.045896,
        "letra": "♪ Final ♪",
        "cantor": "intro",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "aulas-e-cursos",
    "titulo": "Aulas e Cursos",
    "artista": "DNASTY",
    "arquivo": "/musicas/aulas-e-cursos.m4a",
    "duracao": 215.205011,
    "trechos": [
      {
        "inicio": 0,
        "fim": 2.98,
        "letra": "♪ Introdução ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 2.98,
        "fim": 7.17,
        "letra": "É Thiérre no beat, porra",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 7.17,
        "fim": 16.27,
        "letra": "♪ Instrumental ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 16.27,
        "fim": 18.42,
        "letra": "Gasto dinheiro em espécie, não confio em nenhum banco",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 18.42,
        "fim": 20.53,
        "letra": "Ela senta em mim, não confia em nenhum banco",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 20.53,
        "fim": 22.42,
        "letra": "Tô de Nike vestindo o meu manto",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 22.42,
        "fim": 24.71,
        "letra": "Bebendo uísque de canto",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 24.71,
        "fim": 26.79,
        "letra": "As pedras no caminho coloquei nas minhas joias",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 26.79,
        "fim": 29.21,
        "letra": "Tô brilhando tanto, é impossível de ignorar",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 29.21,
        "fim": 31.23,
        "letra": "Ay, do palco agitando a party",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 31.23,
        "fim": 33.28,
        "letra": "Dreads balançando tipo um rastafari",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 33.28,
        "fim": 35.15,
        "letra": "E eu tava na pior, aflito (alright)",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 35.15,
        "fim": 37.42,
        "letra": "No corre suando litros (alright)",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 37.42,
        "fim": 39.73,
        "letra": "Hoje ela me liga falando que eu tô",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 39.73,
        "fim": 41.68,
        "letra": "Cada dia mais bonito, lindo",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 41.68,
        "fim": 43.69,
        "letra": "Yeah, agora chegou a minha vez",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 43.69,
        "fim": 46.4,
        "letra": "Porque esse boy virou uma estrela",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 46.4,
        "fim": 47.93,
        "letra": "Falei pra ela esquecer o ex",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 47.93,
        "fim": 50.56,
        "letra": "Que de bundão já basta o dela",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 50.56,
        "fim": 54.76,
        "letra": "Woah, é fogo na party, gelo no pulso",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 54.76,
        "fim": 59.29,
        "letra": "Woah, sentando essa mami, dá aulas e cursos",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 59.29,
        "fim": 63.12,
        "letra": "Woah, é fogo na party, gelo no pulso",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 63.12,
        "fim": 67.78,
        "letra": "Woah, sentando essa mami, dá aulas e cursos",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 67.78,
        "fim": 69.08,
        "letra": "Yeah, fazer grana é o hobby",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 69.08,
        "fim": 71.26,
        "letra": "E o deles é falar de nóis, não é de hoje",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 71.26,
        "fim": 73.24,
        "letra": "Mas se eu piar com o meu bonde",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 73.24,
        "fim": 75.23,
        "letra": "Cês vão amarelar tipo emojis",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 75.23,
        "fim": 76.94,
        "letra": "Se eu lançar a nova onda são vários clones",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 76.94,
        "fim": 79.08,
        "letra": "E quem mais fala mal é quem mais consome",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 79.08,
        "fim": 81.15,
        "letra": "Tá ligado que a inveja é o pior mal do homem?",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 81.15,
        "fim": 83.49,
        "letra": "Tá com o meu nome na boca e o meu som no fone",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 83.49,
        "fim": 85.38,
        "letra": "Esses manos sempre testam minha paz",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 85.38,
        "fim": 87.83,
        "letra": "Esses manos sempre testam minha paz",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 87.83,
        "fim": 89.76,
        "letra": "Cê tem zero fundamento e quer tretar comigo?",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 89.76,
        "fim": 91.6,
        "letra": "Se depender de mim você vai tretar sozinho",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 91.6,
        "fim": 95.97,
        "letra": "Porque eu, woah, só sei correr atrás do money",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 95.97,
        "fim": 100.88,
        "letra": "Fiz um show ontem, taquei fogo na party, yeah",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 100.88,
        "fim": 105.11,
        "letra": "Woah, é fogo na party, gelo no pulso",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 105.11,
        "fim": 109.27,
        "letra": "Woah, sentando essa mami, dá aulas e cursos",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 109.27,
        "fim": 113.6,
        "letra": "Woah, é fogo na party, gelo no pulso",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 113.6,
        "fim": 117.95,
        "letra": "Woah, sentando essa mami, dá aulas e cursos",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 117.95,
        "fim": 119.74,
        "letra": "Manos sem sal nunca curti",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 119.74,
        "fim": 121.95,
        "letra": "Baby só quer me seduzir",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 121.95,
        "fim": 123.57,
        "letra": "Ela tipo use e abuse",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 123.57,
        "fim": 126.17,
        "letra": "Sujou de batom minha peita da Gucci",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 126.17,
        "fim": 128.74,
        "letra": "Matando a cena, sem rastros",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 128.74,
        "fim": 130.48,
        "letra": "Fiz 10 mil sem gastos",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 130.48,
        "fim": 132.07,
        "letra": "Falo três línguas, apenas",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 132.07,
        "fim": 134.48,
        "letra": "Português, inglês e fatos",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 134.48,
        "fim": 136.33,
        "letra": "E eu digo fé em Deus",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 136.33,
        "fim": 139.13,
        "letra": "Grana na conta",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 139.13,
        "fim": 141.28,
        "letra": "Pra mim e pros meus",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 141.28,
        "fim": 143.16,
        "letra": "Nada me assombra",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 143.16,
        "fim": 145.13,
        "letra": "E eles dizem: Evan, se eu duvidei",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 145.13,
        "fim": 147.27,
        "letra": "Cê pode acreditar, não duvido mais",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 147.27,
        "fim": 148.92,
        "letra": "Hoje a vida já sorri pra nóis",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 148.92,
        "fim": 151.06,
        "letra": "Mas nunca vou esquecer que há um tempo atrás",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 151.06,
        "fim": 153.3,
        "letra": "Tava na pior, aflito (alright)",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 153.3,
        "fim": 155.18,
        "letra": "No corre suando litros (alright)",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 155.18,
        "fim": 157.33,
        "letra": "Hoje ela me liga falando que eu tô",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 157.33,
        "fim": 159.56,
        "letra": "Cada dia mais bonito, lindo",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 159.56,
        "fim": 161.26,
        "letra": "Yeah, agora chegou a minha vez",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 161.26,
        "fim": 163.81,
        "letra": "Porque esse boy virou uma estrela",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 163.81,
        "fim": 165.59,
        "letra": "Falei pra ela esquecer o ex",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 165.59,
        "fim": 168.23,
        "letra": "Que de bundão já basta o dela",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 168.23,
        "fim": 172.32,
        "letra": "Woah, é fogo na party, gelo no pulso",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 172.32,
        "fim": 176.87,
        "letra": "Woah, sentando essa mami, dá aulas e cursos",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 176.87,
        "fim": 181.02,
        "letra": "Woah, é fogo na party, gelo no pulso",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 181.02,
        "fim": 185.99,
        "letra": "Woah, sentando essa mami, dá aulas e cursos, yeah",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 185.99,
        "fim": 215.205011,
        "letra": "♪ Final ♪",
        "cantor": "intro",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "fui-fiel",
    "titulo": "Fui Fiel",
    "artista": "Gusttavo Lima",
    "arquivo": "/musicas/fui-fiel.m4a",
    "duracao": 202.385125,
    "trechos": [
      {
        "inicio": 0,
        "fim": 20.34,
        "letra": "♪ Introdução ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 20.34,
        "fim": 25.5,
        "letra": "Foi bonito, foi, foi intenso, foi verdadeiro",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 25.5,
        "fim": 27.38,
        "letra": "Mas sincero",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 27.38,
        "fim": 32.1,
        "letra": "Sei que fui capaz, fiz até demais, te quis",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 32.1,
        "fim": 34.51,
        "letra": "Do seu jeito",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 34.51,
        "fim": 38.04,
        "letra": "Te amei, te mostrei",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 38.04,
        "fim": 41.57,
        "letra": "Que o meu amor foi o mais profundo",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 41.57,
        "fim": 45.82,
        "letra": "Me doei, me entreguei, fui fiel",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 45.82,
        "fim": 48.03,
        "letra": "Chorei, chorei",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 48.03,
        "fim": 51.63,
        "letra": "Hoje eu acordei, me veio a falta de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 51.63,
        "fim": 55.01,
        "letra": "Saudade de você, saudade de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 55.01,
        "fim": 58.45,
        "letra": "Lembrei que me acordava de manhã só pra dizer",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 58.45,
        "fim": 62.147647,
        "letra": "Bom dia, meu bebê, te amo, meu bebê",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 62.147647,
        "fim": 65.747647,
        "letra": "Hoje eu acordei, me veio a falta de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 65.747647,
        "fim": 69.127647,
        "letra": "Saudade de você, saudade de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 69.127647,
        "fim": 72.567647,
        "letra": "Lembrei que me acordava de manhã só pra dizer",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 72.567647,
        "fim": 76.265,
        "letra": "Bom dia, meu bebê, te amo, meu bebê",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 76.265,
        "fim": 90.928235,
        "letra": "♪ Instrumental ♪",
        "cantor": "intro",
        "alvoHz": 0
      },
      {
        "inicio": 90.928235,
        "fim": 96.088235,
        "letra": "Foi bonito, foi, foi intenso, foi verdadeiro",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 96.088235,
        "fim": 97.968235,
        "letra": "Mas sincero",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 97.968235,
        "fim": 102.688235,
        "letra": "Sei que fui capaz, fiz até demais, te quis",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 102.688235,
        "fim": 105.098235,
        "letra": "Do seu jeito",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 105.098235,
        "fim": 108.628235,
        "letra": "Te amei, te mostrei",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 108.628235,
        "fim": 112.158235,
        "letra": "Que o meu amor foi o mais profundo",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 112.158235,
        "fim": 116.408235,
        "letra": "Me doei, me entreguei, fui fiel",
        "cantor": 1,
        "alvoHz": 0
      },
      {
        "inicio": 116.408235,
        "fim": 118.618235,
        "letra": "Chorei, chorei",
        "cantor": 2,
        "alvoHz": 0
      },
      {
        "inicio": 118.618235,
        "fim": 122.218235,
        "letra": "Hoje eu acordei, me veio a falta de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 122.218235,
        "fim": 125.598235,
        "letra": "Saudade de você, saudade de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 125.598235,
        "fim": 129.038235,
        "letra": "Lembrei que me acordava de manhã só pra dizer",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 129.038235,
        "fim": 132.735882,
        "letra": "Bom dia, meu bebê, te amo, meu bebê",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 132.735882,
        "fim": 136.335882,
        "letra": "Hoje eu acordei, me veio a falta de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 136.335882,
        "fim": 139.715882,
        "letra": "Saudade de você, saudade de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 139.715882,
        "fim": 143.155882,
        "letra": "Lembrei que me acordava de manhã só pra dizer",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 143.155882,
        "fim": 146.853529,
        "letra": "Bom dia, meu bebê, te amo, meu bebê",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 146.853529,
        "fim": 150.453529,
        "letra": "Hoje eu acordei, me veio a falta de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 150.453529,
        "fim": 153.833529,
        "letra": "Saudade de você, saudade de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 153.833529,
        "fim": 157.273529,
        "letra": "Lembrei que me acordava de manhã só pra dizer",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 157.273529,
        "fim": 160.971176,
        "letra": "Bom dia, meu bebê, te amo, meu bebê",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 160.971176,
        "fim": 164.571176,
        "letra": "Hoje eu acordei, me veio a falta de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 164.571176,
        "fim": 167.951176,
        "letra": "Saudade de você, saudade de você",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 167.951176,
        "fim": 171.391176,
        "letra": "Lembrei que me acordava de manhã só pra dizer",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 171.391176,
        "fim": 175.089,
        "letra": "Bom dia, meu bebê, te amo, meu bebê",
        "cantor": "dueto",
        "alvoHz": 0
      },
      {
        "inicio": 175.089,
        "fim": 202.385125,
        "letra": "♪ Final ♪",
        "cantor": "intro",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "quero-te-encontrar",
    "titulo": "Quero Te Encontrar",
    "artista": "Claudinho & Buchecha",
    "arquivo": "/musicas/quero-te-encontrar.m4a",
    "duracao": 227.989002,
    "trechos": [
      {
        "inicio": 0,
        "fim": 19.79,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 19.79,
        "fim": 21.98,
        "cantor": 1,
        "letra": "Quando você vem",
        "alvoHz": 0
      },
      {
        "inicio": 21.98,
        "fim": 24.2,
        "cantor": 2,
        "letra": "Pra passar o fim de semana",
        "alvoHz": 0
      },
      {
        "inicio": 24.2,
        "fim": 27.29,
        "cantor": 1,
        "letra": "Eu finjo estar tudo bem",
        "alvoHz": 0
      },
      {
        "inicio": 27.29,
        "fim": 29.36,
        "cantor": 2,
        "letra": "Mesmo duro ou com grana",
        "alvoHz": 0
      },
      {
        "inicio": 29.36,
        "fim": 35.25,
        "cantor": 1,
        "letra": "É que você ignora tudo que eu faço",
        "alvoHz": 0
      },
      {
        "inicio": 35.25,
        "fim": 37.39,
        "cantor": 2,
        "letra": "Depois vai embora",
        "alvoHz": 0
      },
      {
        "inicio": 37.39,
        "fim": 39.99,
        "cantor": 1,
        "letra": "Desatando os nossos laços",
        "alvoHz": 0
      },
      {
        "inicio": 39.99,
        "fim": 42.43,
        "cantor": "dueto",
        "letra": "Quero te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 42.43,
        "fim": 44.6,
        "cantor": "dueto",
        "letra": "Quero te amar",
        "alvoHz": 0
      },
      {
        "inicio": 44.6,
        "fim": 47.36,
        "cantor": "dueto",
        "letra": "Você pra mim é tudo",
        "alvoHz": 0
      },
      {
        "inicio": 47.36,
        "fim": 50.19,
        "cantor": "dueto",
        "letra": "Minha terra, meu céu, meu mar",
        "alvoHz": 0
      },
      {
        "inicio": 50.19,
        "fim": 52.57,
        "cantor": "dueto",
        "letra": "Quero te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 52.57,
        "fim": 54.89,
        "cantor": "dueto",
        "letra": "Quero te amar",
        "alvoHz": 0
      },
      {
        "inicio": 54.89,
        "fim": 57.54,
        "cantor": "dueto",
        "letra": "Você pra mim é tudo",
        "alvoHz": 0
      },
      {
        "inicio": 57.54,
        "fim": 62.13,
        "cantor": "dueto",
        "letra": "Minha terra, meu céu, meu mar",
        "alvoHz": 0
      },
      {
        "inicio": 62.13,
        "fim": 70.31,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 70.31,
        "fim": 72.31,
        "cantor": 2,
        "letra": "Quando você vem",
        "alvoHz": 0
      },
      {
        "inicio": 72.31,
        "fim": 74.69,
        "cantor": 1,
        "letra": "Pra passar o fim de semana",
        "alvoHz": 0
      },
      {
        "inicio": 74.69,
        "fim": 77.61,
        "cantor": 2,
        "letra": "Eu finjo estar tudo bem",
        "alvoHz": 0
      },
      {
        "inicio": 77.61,
        "fim": 79.82,
        "cantor": 1,
        "letra": "Mesmo duro ou com grana",
        "alvoHz": 0
      },
      {
        "inicio": 79.82,
        "fim": 85.9,
        "cantor": 2,
        "letra": "É que você ignora tudo que eu faço",
        "alvoHz": 0
      },
      {
        "inicio": 85.9,
        "fim": 87.93,
        "cantor": 1,
        "letra": "Depois vai embora",
        "alvoHz": 0
      },
      {
        "inicio": 87.93,
        "fim": 90.45,
        "cantor": 2,
        "letra": "Desatando os nossos laços",
        "alvoHz": 0
      },
      {
        "inicio": 90.45,
        "fim": 92.9,
        "cantor": "dueto",
        "letra": "Quero te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 92.9,
        "fim": 95.22,
        "cantor": "dueto",
        "letra": "Quero te amar",
        "alvoHz": 0
      },
      {
        "inicio": 95.22,
        "fim": 97.92,
        "cantor": "dueto",
        "letra": "Você pra mim é tudo",
        "alvoHz": 0
      },
      {
        "inicio": 97.92,
        "fim": 100.65,
        "cantor": "dueto",
        "letra": "Minha terra, meu céu, meu mar",
        "alvoHz": 0
      },
      {
        "inicio": 100.65,
        "fim": 102.92,
        "cantor": "dueto",
        "letra": "Quero te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 102.92,
        "fim": 105.16,
        "cantor": "dueto",
        "letra": "Quero te amar",
        "alvoHz": 0
      },
      {
        "inicio": 105.16,
        "fim": 107.9,
        "cantor": "dueto",
        "letra": "Você pra mim é tudo",
        "alvoHz": 0
      },
      {
        "inicio": 107.9,
        "fim": 111.19,
        "cantor": "dueto",
        "letra": "Minha terra, meu céu, meu mar",
        "alvoHz": 0
      },
      {
        "inicio": 111.19,
        "fim": 113.75,
        "cantor": 1,
        "letra": "É muita ousadia ter que percorrer",
        "alvoHz": 0
      },
      {
        "inicio": 113.75,
        "fim": 116.38,
        "cantor": 2,
        "letra": "O país inteiro pra achar você",
        "alvoHz": 0
      },
      {
        "inicio": 116.38,
        "fim": 118.99,
        "cantor": 1,
        "letra": "Mas tudo que eu faço tem um bom motivo",
        "alvoHz": 0
      },
      {
        "inicio": 118.99,
        "fim": 121.25,
        "cantor": 2,
        "letra": "Linda, eu te amo, vem ficar comigo",
        "alvoHz": 0
      },
      {
        "inicio": 121.25,
        "fim": 123.74,
        "cantor": 1,
        "letra": "Tô alucinado pelo seu olhar",
        "alvoHz": 0
      },
      {
        "inicio": 123.74,
        "fim": 126.24,
        "cantor": 2,
        "letra": "Vou aonde for até te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 126.24,
        "fim": 128.84,
        "cantor": 1,
        "letra": "Eu te amo demais, você é minha paz",
        "alvoHz": 0
      },
      {
        "inicio": 128.84,
        "fim": 133.94,
        "cantor": 2,
        "letra": "Faz amor gostoso de novo comigo, faz",
        "alvoHz": 0
      },
      {
        "inicio": 133.94,
        "fim": 136.68,
        "cantor": 1,
        "letra": "Faz",
        "alvoHz": 0
      },
      {
        "inicio": 136.68,
        "fim": 138.84,
        "cantor": "dueto",
        "letra": "Quero te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 138.84,
        "fim": 141.21,
        "cantor": "dueto",
        "letra": "Quero te amar",
        "alvoHz": 0
      },
      {
        "inicio": 141.21,
        "fim": 144.17,
        "cantor": "dueto",
        "letra": "Você pra mim é tudo",
        "alvoHz": 0
      },
      {
        "inicio": 144.17,
        "fim": 146.72,
        "cantor": "dueto",
        "letra": "Minha terra, meu céu, meu mar",
        "alvoHz": 0
      },
      {
        "inicio": 146.72,
        "fim": 149.22,
        "cantor": "dueto",
        "letra": "Quero te encontrar (ooh-ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 149.22,
        "fim": 151.54,
        "cantor": "dueto",
        "letra": "Quero te amar",
        "alvoHz": 0
      },
      {
        "inicio": 151.54,
        "fim": 154.36,
        "cantor": "dueto",
        "letra": "Você pra mim é tudo",
        "alvoHz": 0
      },
      {
        "inicio": 154.36,
        "fim": 156.87,
        "cantor": "dueto",
        "letra": "Minha terra, meu céu, meu mar",
        "alvoHz": 0
      },
      {
        "inicio": 156.87,
        "fim": 159.29,
        "cantor": "dueto",
        "letra": "Quero te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 159.29,
        "fim": 161.58,
        "cantor": "dueto",
        "letra": "Quero te amar",
        "alvoHz": 0
      },
      {
        "inicio": 161.58,
        "fim": 164.42,
        "cantor": "dueto",
        "letra": "Você pra mim é tudo",
        "alvoHz": 0
      },
      {
        "inicio": 164.42,
        "fim": 167.02,
        "cantor": "dueto",
        "letra": "Minha terra, meu céu, meu mar",
        "alvoHz": 0
      },
      {
        "inicio": 167.02,
        "fim": 169.48,
        "cantor": "dueto",
        "letra": "Quero te encontrar (ooh-ooh)",
        "alvoHz": 0
      },
      {
        "inicio": 169.48,
        "fim": 171.78,
        "cantor": "dueto",
        "letra": "Quero te amar",
        "alvoHz": 0
      },
      {
        "inicio": 171.78,
        "fim": 174.4,
        "cantor": "dueto",
        "letra": "Você pra mim é tudo",
        "alvoHz": 0
      },
      {
        "inicio": 174.4,
        "fim": 176.9,
        "cantor": "dueto",
        "letra": "Minha terra, meu céu, meu mar",
        "alvoHz": 0
      },
      {
        "inicio": 176.9,
        "fim": 181.96,
        "cantor": "dueto",
        "letra": "Quero te-te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 181.96,
        "fim": 187.23,
        "cantor": "dueto",
        "letra": "Quero te-te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 187.23,
        "fim": 192.16,
        "cantor": "dueto",
        "letra": "Quero te-te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 192.16,
        "fim": 194.54,
        "cantor": "dueto",
        "letra": "Quero te encontrar",
        "alvoHz": 0
      },
      {
        "inicio": 194.54,
        "fim": 227.989002,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "infiel",
    "titulo": "Infiel",
    "artista": "Marília Mendonça",
    "arquivo": "/musicas/infiel.m4a",
    "duracao": 201.943946,
    "trechos": [
      {
        "inicio": 0,
        "fim": 13.54,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 13.54,
        "fim": 16.44,
        "cantor": 1,
        "letra": "Isso não é uma disputa",
        "alvoHz": 0
      },
      {
        "inicio": 16.44,
        "fim": 20.77,
        "cantor": 2,
        "letra": "Eu não quero te provocar",
        "alvoHz": 0
      },
      {
        "inicio": 20.77,
        "fim": 21.79,
        "cantor": 1,
        "letra": "Descobri faz um ano",
        "alvoHz": 0
      },
      {
        "inicio": 21.79,
        "fim": 24.03,
        "cantor": 2,
        "letra": "E tô te procurando pra dizer",
        "alvoHz": 0
      },
      {
        "inicio": 24.03,
        "fim": 28.7,
        "cantor": 1,
        "letra": "Hoje a farsa vai acabar",
        "alvoHz": 0
      },
      {
        "inicio": 28.7,
        "fim": 31.59,
        "cantor": 2,
        "letra": "Hoje não tem hora de ir embora",
        "alvoHz": 0
      },
      {
        "inicio": 31.59,
        "fim": 36.05,
        "cantor": 1,
        "letra": "Hoje ele vai ficar",
        "alvoHz": 0
      },
      {
        "inicio": 36.05,
        "fim": 37.55,
        "cantor": 2,
        "letra": "No momento deve estar feliz",
        "alvoHz": 0
      },
      {
        "inicio": 37.55,
        "fim": 38.97,
        "cantor": 1,
        "letra": "E achando que ganhou",
        "alvoHz": 0
      },
      {
        "inicio": 38.97,
        "fim": 43.63,
        "cantor": 2,
        "letra": "Não perdi nada, acabei de me livrar",
        "alvoHz": 0
      },
      {
        "inicio": 43.63,
        "fim": 47.2,
        "cantor": 1,
        "letra": "Com certeza ele vai atrás, mas com outra intenção",
        "alvoHz": 0
      },
      {
        "inicio": 47.2,
        "fim": 50.97,
        "cantor": 2,
        "letra": "Tá sem casa, sem rumo e você é a única opção",
        "alvoHz": 0
      },
      {
        "inicio": 50.97,
        "fim": 54.76,
        "cantor": 1,
        "letra": "E agora, será que aguenta a barra sozinha?",
        "alvoHz": 0
      },
      {
        "inicio": 54.76,
        "fim": 58.47,
        "cantor": 2,
        "letra": "Se sabia de tudo, se vira, a culpa não é minha",
        "alvoHz": 0
      },
      {
        "inicio": 58.47,
        "fim": 62.34,
        "cantor": 1,
        "letra": "O seu prêmio que não vale nada, estou te entregando",
        "alvoHz": 0
      },
      {
        "inicio": 62.34,
        "fim": 66.02,
        "cantor": 2,
        "letra": "Pus as malas lá fora e ele ainda saiu chorando",
        "alvoHz": 0
      },
      {
        "inicio": 66.02,
        "fim": 69.6,
        "cantor": 1,
        "letra": "Essa competição por amor só serviu pra me machucar",
        "alvoHz": 0
      },
      {
        "inicio": 69.6,
        "fim": 73.29,
        "cantor": 2,
        "letra": "Tá na sua mão, você agora vai cuidar",
        "alvoHz": 0
      },
      {
        "inicio": 73.29,
        "fim": 79.76,
        "cantor": 1,
        "letra": "De um traidor, me faça esse favor",
        "alvoHz": 0
      },
      {
        "inicio": 79.76,
        "fim": 82.4,
        "cantor": "dueto",
        "letra": "Iê, infiel",
        "alvoHz": 0
      },
      {
        "inicio": 82.4,
        "fim": 86.15,
        "cantor": "dueto",
        "letra": "Eu quero ver você morar num motel",
        "alvoHz": 0
      },
      {
        "inicio": 86.15,
        "fim": 90.13,
        "cantor": "dueto",
        "letra": "Estou te expulsando do meu coração",
        "alvoHz": 0
      },
      {
        "inicio": 90.13,
        "fim": 93.81,
        "cantor": "dueto",
        "letra": "Assuma as consequências dessa traição",
        "alvoHz": 0
      },
      {
        "inicio": 93.81,
        "fim": 97.73,
        "cantor": "dueto",
        "letra": "Iê, iê, iê, infiel",
        "alvoHz": 0
      },
      {
        "inicio": 97.73,
        "fim": 101.49,
        "cantor": "dueto",
        "letra": "Agora ela vai fazer o meu papel",
        "alvoHz": 0
      },
      {
        "inicio": 101.49,
        "fim": 105.33,
        "cantor": "dueto",
        "letra": "Daqui um tempo, você vai se acostumar",
        "alvoHz": 0
      },
      {
        "inicio": 105.33,
        "fim": 108.67,
        "cantor": "dueto",
        "letra": "E aí vai ser a ela a quem vai enganar",
        "alvoHz": 0
      },
      {
        "inicio": 108.67,
        "fim": 116.89,
        "cantor": "dueto",
        "letra": "Você não vai mudar",
        "alvoHz": 0
      },
      {
        "inicio": 116.89,
        "fim": 123.6,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 123.6,
        "fim": 127.11,
        "cantor": 1,
        "letra": "O seu prêmio que não vale nada, estou te entregando",
        "alvoHz": 0
      },
      {
        "inicio": 127.11,
        "fim": 130.96,
        "cantor": 2,
        "letra": "Pus as malas lá fora e ele ainda saiu chorando",
        "alvoHz": 0
      },
      {
        "inicio": 130.96,
        "fim": 134.51,
        "cantor": 1,
        "letra": "Essa competição por amor só serviu pra me machucar",
        "alvoHz": 0
      },
      {
        "inicio": 134.51,
        "fim": 138.1,
        "cantor": 2,
        "letra": "Tá na sua mão, você agora vai cuidar",
        "alvoHz": 0
      },
      {
        "inicio": 138.1,
        "fim": 144.58,
        "cantor": 1,
        "letra": "De um traidor, me faça esse favor",
        "alvoHz": 0
      },
      {
        "inicio": 144.58,
        "fim": 147.43,
        "cantor": "dueto",
        "letra": "Iê, infiel",
        "alvoHz": 0
      },
      {
        "inicio": 147.43,
        "fim": 151.19,
        "cantor": "dueto",
        "letra": "Eu quero ver você morar num motel",
        "alvoHz": 0
      },
      {
        "inicio": 151.19,
        "fim": 154.75,
        "cantor": "dueto",
        "letra": "Estou te expulsando do meu coração",
        "alvoHz": 0
      },
      {
        "inicio": 154.75,
        "fim": 158.68,
        "cantor": "dueto",
        "letra": "Assuma as consequências dessa traição",
        "alvoHz": 0
      },
      {
        "inicio": 158.68,
        "fim": 162.49,
        "cantor": "dueto",
        "letra": "Iê, iê, iê, infiel",
        "alvoHz": 0
      },
      {
        "inicio": 162.49,
        "fim": 166.33,
        "cantor": "dueto",
        "letra": "Agora ela vai fazer o meu papel",
        "alvoHz": 0
      },
      {
        "inicio": 166.33,
        "fim": 170.0,
        "cantor": "dueto",
        "letra": "Daqui um tempo, você vai se acostumar",
        "alvoHz": 0
      },
      {
        "inicio": 170.0,
        "fim": 173.48,
        "cantor": "dueto",
        "letra": "E aí vai ser a ela a quem vai enganar",
        "alvoHz": 0
      },
      {
        "inicio": 173.48,
        "fim": 174.98,
        "cantor": "dueto",
        "letra": "Você não vai mudar",
        "alvoHz": 0
      },
      {
        "inicio": 174.98,
        "fim": 177.83,
        "cantor": "dueto",
        "letra": "Iê, infiel",
        "alvoHz": 0
      },
      {
        "inicio": 177.83,
        "fim": 181.4,
        "cantor": "dueto",
        "letra": "Agora ela vai fazer o meu papel",
        "alvoHz": 0
      },
      {
        "inicio": 181.4,
        "fim": 185.4,
        "cantor": "dueto",
        "letra": "Daqui um tempo, você vai se acostumar",
        "alvoHz": 0
      },
      {
        "inicio": 185.4,
        "fim": 188.72,
        "cantor": "dueto",
        "letra": "E aí vai ser a ela a quem vai enganar",
        "alvoHz": 0
      },
      {
        "inicio": 188.72,
        "fim": 190.57,
        "cantor": "dueto",
        "letra": "Você não vai mudar",
        "alvoHz": 0
      },
      {
        "inicio": 190.57,
        "fim": 196.26,
        "cantor": "dueto",
        "letra": "Iê, infiel",
        "alvoHz": 0
      },
      {
        "inicio": 196.26,
        "fim": 201.943946,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "boate-azul",
    "titulo": "Boate Azul",
    "artista": "Bruno & Marrone",
    "arquivo": "/musicas/boate-azul.m4a",
    "duracao": 200,
    "trechos": [
      {
        "inicio": 0,
        "fim": 29.53,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 29.53,
        "fim": 36.953,
        "cantor": 1,
        "letra": "Doente de amor, procurei remédio na vida noturna",
        "alvoHz": 0
      },
      {
        "inicio": 36.953,
        "fim": 44.375,
        "cantor": 2,
        "letra": "Com a flor da noite em uma boate aqui na zona sul",
        "alvoHz": 0
      },
      {
        "inicio": 44.375,
        "fim": 51.798,
        "cantor": 1,
        "letra": "A dor do amor é com outro amor que a gente cura",
        "alvoHz": 0
      },
      {
        "inicio": 51.798,
        "fim": 59.221,
        "cantor": 2,
        "letra": "Vim curar a dor desse mal de amor na boate azul",
        "alvoHz": 0
      },
      {
        "inicio": 59.221,
        "fim": 66.643,
        "cantor": 1,
        "letra": "E quando a noite vai se agonizando no clarão da aurora",
        "alvoHz": 0
      },
      {
        "inicio": 66.643,
        "fim": 74.066,
        "cantor": 2,
        "letra": "Os integrantes da vida noturna se foram dormir",
        "alvoHz": 0
      },
      {
        "inicio": 74.066,
        "fim": 81.489,
        "cantor": 1,
        "letra": "E a dama da noite que estava comigo também foi embora",
        "alvoHz": 0
      },
      {
        "inicio": 81.489,
        "fim": 88.911,
        "cantor": 2,
        "letra": "Fecharam-se as portas, sozinho de novo tive que sair",
        "alvoHz": 0
      },
      {
        "inicio": 88.911,
        "fim": 96.334,
        "cantor": "dueto",
        "letra": "Sair de que jeito se nem sei o rumo para onde vou",
        "alvoHz": 0
      },
      {
        "inicio": 96.334,
        "fim": 100.045,
        "cantor": "dueto",
        "letra": "Muito vagamente me lembro que estou",
        "alvoHz": 0
      },
      {
        "inicio": 100.045,
        "fim": 103.757,
        "cantor": "dueto",
        "letra": "Em uma boate aqui na zona sul",
        "alvoHz": 0
      },
      {
        "inicio": 103.757,
        "fim": 111.179,
        "cantor": "dueto",
        "letra": "Eu bebi demais e não consigo me lembrar sequer",
        "alvoHz": 0
      },
      {
        "inicio": 111.179,
        "fim": 114.891,
        "cantor": "dueto",
        "letra": "Qual era o nome daquela mulher",
        "alvoHz": 0
      },
      {
        "inicio": 114.891,
        "fim": 118.602,
        "cantor": "dueto",
        "letra": "A flor da noite na boate azul",
        "alvoHz": 0
      },
      {
        "inicio": 118.602,
        "fim": 133.448,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 133.448,
        "fim": 140.87,
        "cantor": 1,
        "letra": "E quando a noite vai se agonizando no clarão da aurora",
        "alvoHz": 0
      },
      {
        "inicio": 140.87,
        "fim": 148.293,
        "cantor": 2,
        "letra": "Os integrantes da vida noturna se foram dormir",
        "alvoHz": 0
      },
      {
        "inicio": 148.293,
        "fim": 155.716,
        "cantor": 1,
        "letra": "E a dama da noite que estava comigo também foi embora",
        "alvoHz": 0
      },
      {
        "inicio": 155.716,
        "fim": 163.138,
        "cantor": 2,
        "letra": "Fecharam-se as portas, sozinho de novo tive que sair",
        "alvoHz": 0
      },
      {
        "inicio": 163.138,
        "fim": 170.561,
        "cantor": "dueto",
        "letra": "Sair de que jeito se nem sei o rumo para onde vou",
        "alvoHz": 0
      },
      {
        "inicio": 170.561,
        "fim": 174.272,
        "cantor": "dueto",
        "letra": "Muito vagamente me lembro que estou",
        "alvoHz": 0
      },
      {
        "inicio": 174.272,
        "fim": 177.984,
        "cantor": "dueto",
        "letra": "Em uma boate aqui na zona sul",
        "alvoHz": 0
      },
      {
        "inicio": 177.984,
        "fim": 185.406,
        "cantor": "dueto",
        "letra": "Eu bebi demais e não consigo me lembrar sequer",
        "alvoHz": 0
      },
      {
        "inicio": 185.406,
        "fim": 189.118,
        "cantor": "dueto",
        "letra": "Qual era o nome daquela mulher",
        "alvoHz": 0
      },
      {
        "inicio": 189.118,
        "fim": 192.829,
        "cantor": "dueto",
        "letra": "A flor da noite na boate azul",
        "alvoHz": 0
      },
      {
        "inicio": 192.829,
        "fim": 200,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
  {
    "id": "balada",
    "titulo": "Balada",
    "artista": "Gusttavo Lima",
    "arquivo": "/musicas/balada.m4a",
    "duracao": 207.934694,
    "trechos": [
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
        "fim": 42,
        "cantor": "dueto",
        "letra": "Tchêrere, tchê, tchê",
        "alvoHz": 0
      },
      {
        "inicio": 42,
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
        "fim": 51,
        "cantor": "dueto",
        "letra": "Tchê, tchê, tchê",
        "alvoHz": 0
      },
      {
        "inicio": 51,
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
        "fim": 87,
        "cantor": "dueto",
        "letra": "Tchêrere, tchê, tchê",
        "alvoHz": 0
      },
      {
        "inicio": 87,
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
        "fim": 141,
        "cantor": "dueto",
        "letra": "Tchê, tchê, tchê",
        "alvoHz": 0
      },
      {
        "inicio": 141,
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
        "fim": 190,
        "cantor": "dueto",
        "letra": "Gusttavo Lima e você",
        "alvoHz": 0
      },
      {
        "inicio": 190,
        "fim": 207.934694,
        "cantor": "intro",
        "letra": "♪ Final ♪",
        "alvoHz": 0
      }
    ],
    "afinacao": false,
    "letraSincronizada": true
  },
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
        "fim": 8.4,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 8.4,
        "fim": 11.7,
        "cantor": 1,
        "letra": "Ela não vai pro rodeio pra ver montaria",
        "alvoHz": 0
      },
      {
        "inicio": 11.7,
        "fim": 15.36,
        "cantor": 1,
        "letra": "Ela não vai pro rodeio pra beber cachaça",
        "alvoHz": 0
      },
      {
        "inicio": 15.36,
        "fim": 18.41,
        "cantor": 2,
        "letra": "Sabe o que que ela tá interessada?",
        "alvoHz": 0
      },
      {
        "inicio": 18.41,
        "fim": 22.35,
        "cantor": 2,
        "letra": "Sabe o que que ela quer? Ha-ha-ha",
        "alvoHz": 0
      },
      {
        "inicio": 22.35,
        "fim": 26.44,
        "cantor": "dueto",
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 26.44,
        "fim": 29.61,
        "cantor": "dueto",
        "letra": "Beijo de paieiro, perfume de mato",
        "alvoHz": 0
      },
      {
        "inicio": 29.61,
        "fim": 32.93,
        "cantor": "dueto",
        "letra": "Me pega de jeito, me prende no laço",
        "alvoHz": 0
      },
      {
        "inicio": 32.93,
        "fim": 35.02,
        "cantor": "dueto",
        "letra": "Eu adoro",
        "alvoHz": 0
      },
      {
        "inicio": 35.02,
        "fim": 38.97,
        "cantor": "dueto",
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 38.97,
        "fim": 42.07,
        "cantor": "dueto",
        "letra": "Beijo de paieiro, perfume do mato",
        "alvoHz": 0
      },
      {
        "inicio": 42.07,
        "fim": 45.52,
        "cantor": "dueto",
        "letra": "Me pega de jeito, me prende no laço",
        "alvoHz": 0
      },
      {
        "inicio": 45.52,
        "fim": 47.91,
        "cantor": "dueto",
        "letra": "Eu adoro",
        "alvoHz": 0
      },
      {
        "inicio": 47.91,
        "fim": 51.49,
        "cantor": 1,
        "letra": "Dentro da caminhonete, embaixo do chapéu de palha",
        "alvoHz": 0
      },
      {
        "inicio": 51.49,
        "fim": 54.21,
        "cantor": 1,
        "letra": "O chicote estrala, e chicote estrala",
        "alvoHz": 0
      },
      {
        "inicio": 54.21,
        "fim": 57.76,
        "cantor": 2,
        "letra": "Quando acaba o rodeio, aí começa a cavalgada",
        "alvoHz": 0
      },
      {
        "inicio": 57.76,
        "fim": 60.01,
        "cantor": 2,
        "letra": "O chicote estrala, o chicote estrala",
        "alvoHz": 0
      },
      {
        "inicio": 60.01,
        "fim": 64.04,
        "cantor": 1,
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 64.04,
        "fim": 76.18,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 76.18,
        "fim": 79.39,
        "cantor": 1,
        "letra": "Ela não vai pro rodeio pra ver montaria",
        "alvoHz": 0
      },
      {
        "inicio": 79.39,
        "fim": 82.85,
        "cantor": 2,
        "letra": "Ela não vai pro rodeio pra beber cachaça",
        "alvoHz": 0
      },
      {
        "inicio": 82.85,
        "fim": 86.13,
        "cantor": 2,
        "letra": "Sabe o que que ela tá interessada?",
        "alvoHz": 0
      },
      {
        "inicio": 86.13,
        "fim": 89.89,
        "cantor": 1,
        "letra": "Sabe o que que ela quer? Ha-ha-ha",
        "alvoHz": 0
      },
      {
        "inicio": 89.89,
        "fim": 93.94,
        "cantor": "dueto",
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 93.94,
        "fim": 96.88,
        "cantor": "dueto",
        "letra": "Beijo de paieiro, perfume de mato",
        "alvoHz": 0
      },
      {
        "inicio": 96.88,
        "fim": 100.33,
        "cantor": "dueto",
        "letra": "Me pega de jeito, me prende no laço",
        "alvoHz": 0
      },
      {
        "inicio": 100.33,
        "fim": 101.36,
        "cantor": "dueto",
        "letra": "Eu adoro",
        "alvoHz": 0
      },
      {
        "inicio": 101.36,
        "fim": 102.42,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 102.42,
        "fim": 106.5,
        "cantor": "dueto",
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 106.5,
        "fim": 109.51,
        "cantor": "dueto",
        "letra": "Beijo de paieiro, perfume do mato",
        "alvoHz": 0
      },
      {
        "inicio": 109.51,
        "fim": 112.78,
        "cantor": "dueto",
        "letra": "Me pega de jeito, me pega de laço",
        "alvoHz": 0
      },
      {
        "inicio": 112.78,
        "fim": 115.11,
        "cantor": "dueto",
        "letra": "Eu adoro",
        "alvoHz": 0
      },
      {
        "inicio": 115.11,
        "fim": 118.98,
        "cantor": 1,
        "letra": "Dentro da caminhonete, embaixo do chapéu de palha",
        "alvoHz": 0
      },
      {
        "inicio": 118.98,
        "fim": 121.67,
        "cantor": 2,
        "letra": "O chicote estrala, e chicote estrala",
        "alvoHz": 0
      },
      {
        "inicio": 121.67,
        "fim": 124.75,
        "cantor": 2,
        "letra": "Quando acaba o rodeio, aí começa a cavalgada (e aí?)",
        "alvoHz": 0
      },
      {
        "inicio": 124.75,
        "fim": 128.06,
        "cantor": 1,
        "letra": "O chicote estrala, o chicote estrala",
        "alvoHz": 0
      },
      {
        "inicio": 128.06,
        "fim": 132.66,
        "cantor": 1,
        "letra": "Peão todo tatuado",
        "alvoHz": 0
      },
      {
        "inicio": 132.66,
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
        "fim": 40,
        "cantor": 2,
        "letra": "Que história é essa que aconteceu?",
        "alvoHz": 0
      },
      {
        "inicio": 40,
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
        "fim": 98,
        "cantor": "dueto",
        "letra": "Não finja que eu não tô falando com você",
        "alvoHz": 0
      },
      {
        "inicio": 98,
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
        "fim": 32.19,
        "cantor": 2,
        "letra": "Mas não fui pra você",
        "alvoHz": 0
      },
      {
        "inicio": 32.19,
        "fim": 36.19,
        "cantor": 1,
        "letra": "Tentei ser um cara perfeito",
        "alvoHz": 0
      },
      {
        "inicio": 36.19,
        "fim": 39.17,
        "cantor": 1,
        "letra": "Eu fiz as coisas do seu jeito",
        "alvoHz": 0
      },
      {
        "inicio": 39.17,
        "fim": 43.27,
        "cantor": 2,
        "letra": "Queria ser mais importante",
        "alvoHz": 0
      },
      {
        "inicio": 43.27,
        "fim": 46.81,
        "cantor": 2,
        "letra": "Mas não fui pra você",
        "alvoHz": 0
      },
      {
        "inicio": 46.81,
        "fim": 48.73,
        "cantor": 1,
        "letra": "Até que durou",
        "alvoHz": 0
      },
      {
        "inicio": 48.73,
        "fim": 50.97,
        "cantor": 1,
        "letra": "Me diz o porquê",
        "alvoHz": 0
      },
      {
        "inicio": 50.97,
        "fim": 53.87,
        "cantor": 2,
        "letra": "Perdeu tanto tempo aqui",
        "alvoHz": 0
      },
      {
        "inicio": 53.87,
        "fim": 56.01,
        "cantor": 2,
        "letra": "Te faço um favor",
        "alvoHz": 0
      },
      {
        "inicio": 56.01,
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
        "fim": 99.289328,
        "cantor": 2,
        "letra": "Tentei ser um cara perfeito",
        "alvoHz": 0
      },
      {
        "inicio": 99.289328,
        "fim": 102.827815,
        "cantor": 1,
        "letra": "Eu fiz as coisas do seu jeito",
        "alvoHz": 0
      },
      {
        "inicio": 102.827815,
        "fim": 106.59,
        "cantor": 1,
        "letra": "Queria ser mais importante",
        "alvoHz": 0
      },
      {
        "inicio": 106.59,
        "fim": 110.22,
        "cantor": 2,
        "letra": "Mas não fui pra você",
        "alvoHz": 0
      },
      {
        "inicio": 110.22,
        "fim": 112.16,
        "cantor": 2,
        "letra": "Até que durou",
        "alvoHz": 0
      },
      {
        "inicio": 112.16,
        "fim": 114.42,
        "cantor": 1,
        "letra": "Me diz o porquê",
        "alvoHz": 0
      },
      {
        "inicio": 114.42,
        "fim": 117.4,
        "cantor": 1,
        "letra": "Perdeu tanto tempo aqui",
        "alvoHz": 0
      },
      {
        "inicio": 117.4,
        "fim": 119.55,
        "cantor": 2,
        "letra": "Te faço um favor",
        "alvoHz": 0
      },
      {
        "inicio": 119.55,
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
        "fim": 155,
        "cantor": "dueto",
        "letra": "Fui mais um nas suas mãos",
        "alvoHz": 0
      },
      {
        "inicio": 155,
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
        "fim": 6.68,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 6.68,
        "fim": 11.44,
        "cantor": 1,
        "letra": "Se quer saber de mim",
        "alvoHz": 0
      },
      {
        "inicio": 11.44,
        "fim": 15.0,
        "cantor": 1,
        "letra": "Pergunte para mim",
        "alvoHz": 0
      },
      {
        "inicio": 15.0,
        "fim": 18.98,
        "cantor": 2,
        "letra": "Se for falar do que passou",
        "alvoHz": 0
      },
      {
        "inicio": 18.98,
        "fim": 22.62,
        "cantor": 2,
        "letra": "Conta a parte que você errou",
        "alvoHz": 0
      },
      {
        "inicio": 22.62,
        "fim": 25.82,
        "cantor": 1,
        "letra": "Não pergunte se estou bem",
        "alvoHz": 0
      },
      {
        "inicio": 25.82,
        "fim": 30.4,
        "cantor": 1,
        "letra": "Não quero ser assunto seu pra mais ninguém",
        "alvoHz": 0
      },
      {
        "inicio": 30.4,
        "fim": 33.91,
        "cantor": 2,
        "letra": "Não estrague as minhas canções",
        "alvoHz": 0
      },
      {
        "inicio": 33.91,
        "fim": 38.41,
        "cantor": 2,
        "letra": "Vá pro inferno com suas recordações",
        "alvoHz": 0
      },
      {
        "inicio": 38.41,
        "fim": 41.7,
        "cantor": "dueto",
        "letra": "Quem me deixou no mar",
        "alvoHz": 0
      },
      {
        "inicio": 41.7,
        "fim": 45.61,
        "cantor": "dueto",
        "letra": "Não tem direito de me perguntar",
        "alvoHz": 0
      },
      {
        "inicio": 45.61,
        "fim": 49.57,
        "cantor": "dueto",
        "letra": "O que rolou comigo e os tubarões",
        "alvoHz": 0
      },
      {
        "inicio": 49.57,
        "fim": 51.905,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 51.905,
        "fim": 54.24,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 54.24,
        "fim": 56.88,
        "cantor": "dueto",
        "letra": "Cê me deixou voar",
        "alvoHz": 0
      },
      {
        "inicio": 56.88,
        "fim": 61.2,
        "cantor": "dueto",
        "letra": "Agora quer saber aonde eu vou pousar",
        "alvoHz": 0
      },
      {
        "inicio": 61.2,
        "fim": 64.99,
        "cantor": "dueto",
        "letra": "Cancela as suas investigações",
        "alvoHz": 0
      },
      {
        "inicio": 64.99,
        "fim": 68.26,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 68.26,
        "fim": 71.53,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 71.53,
        "fim": 84.83,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 84.83,
        "fim": 87.82,
        "cantor": 2,
        "letra": "Não pergunte se estou bem",
        "alvoHz": 0
      },
      {
        "inicio": 87.82,
        "fim": 92.17,
        "cantor": 2,
        "letra": "Não quero ser assunto seu pra mais ninguém",
        "alvoHz": 0
      },
      {
        "inicio": 92.17,
        "fim": 95.88,
        "cantor": 1,
        "letra": "Não estrague as minhas canções",
        "alvoHz": 0
      },
      {
        "inicio": 95.88,
        "fim": 100.27,
        "cantor": 1,
        "letra": "Vá pro inferno com suas recordações",
        "alvoHz": 0
      },
      {
        "inicio": 100.27,
        "fim": 103.66,
        "cantor": "dueto",
        "letra": "Quem me deixou no mar",
        "alvoHz": 0
      },
      {
        "inicio": 103.66,
        "fim": 107.44,
        "cantor": "dueto",
        "letra": "Não tem direito de me perguntar",
        "alvoHz": 0
      },
      {
        "inicio": 107.44,
        "fim": 111.36,
        "cantor": "dueto",
        "letra": "O que rolou comigo e os tubarões",
        "alvoHz": 0
      },
      {
        "inicio": 111.36,
        "fim": 113.72,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 113.72,
        "fim": 116.08,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 116.08,
        "fim": 118.82,
        "cantor": "dueto",
        "letra": "Cê me deixou voar",
        "alvoHz": 0
      },
      {
        "inicio": 118.82,
        "fim": 123.2,
        "cantor": "dueto",
        "letra": "Agora quer saber aonde eu vou pousar",
        "alvoHz": 0
      },
      {
        "inicio": 123.2,
        "fim": 126.97,
        "cantor": "dueto",
        "letra": "Cancela as suas investigações",
        "alvoHz": 0
      },
      {
        "inicio": 126.97,
        "fim": 131.07,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 131.07,
        "fim": 135.17,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 135.17,
        "fim": 142.43,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 142.43,
        "fim": 147.285,
        "cantor": "dueto",
        "letra": "Cê não me deve amor",
        "alvoHz": 0
      },
      {
        "inicio": 147.285,
        "fim": 152.14,
        "cantor": "dueto",
        "letra": "Eu não te devo explicações",
        "alvoHz": 0
      },
      {
        "inicio": 152.14,
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
        "fim": 8.11,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 8.11,
        "fim": 11.65,
        "cantor": 1,
        "letra": "Tu gosta, né? De correr perigo",
        "alvoHz": 0
      },
      {
        "inicio": 11.65,
        "fim": 14.33,
        "cantor": 1,
        "letra": "Gosta, né? De um sexo proibido",
        "alvoHz": 0
      },
      {
        "inicio": 14.33,
        "fim": 17.78,
        "cantor": 2,
        "letra": "Só quem vai ver sou eu e os golfinho",
        "alvoHz": 0
      },
      {
        "inicio": 17.78,
        "fim": 20.92,
        "cantor": 2,
        "letra": "As onda batendo, ai, que delícia o barulhinho",
        "alvoHz": 0
      },
      {
        "inicio": 20.92,
        "fim": 22.46,
        "cantor": "dueto",
        "letra": "Em cima (em cima)",
        "alvoHz": 0
      },
      {
        "inicio": 22.46,
        "fim": 24.29,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski",
        "alvoHz": 0
      },
      {
        "inicio": 24.29,
        "fim": 28.54,
        "cantor": "dueto",
        "letra": "Vou rebolar pra tu (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 28.54,
        "fim": 30.4,
        "cantor": "dueto",
        "letra": "Nessa onda sexy",
        "alvoHz": 0
      },
      {
        "inicio": 30.4,
        "fim": 34.96,
        "cantor": "dueto",
        "letra": "Te deixo maluco (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 34.96,
        "fim": 36.57,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski",
        "alvoHz": 0
      },
      {
        "inicio": 36.57,
        "fim": 41.02,
        "cantor": "dueto",
        "letra": "Vou rebolar pra tu (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 41.02,
        "fim": 42.79,
        "cantor": "dueto",
        "letra": "Nessa onda sexy",
        "alvoHz": 0
      },
      {
        "inicio": 42.79,
        "fim": 49.1,
        "cantor": "dueto",
        "letra": "Te deixo maluco (deixa, sim, haha, deixa, sim) (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 49.1,
        "fim": 52.2,
        "cantor": "dueto",
        "letra": "(Ah)",
        "alvoHz": 0
      },
      {
        "inicio": 52.2,
        "fim": 55.3,
        "cantor": "dueto",
        "letra": "(Ah)",
        "alvoHz": 0
      },
      {
        "inicio": 55.3,
        "fim": 60.38,
        "cantor": "dueto",
        "letra": "(Ah)",
        "alvoHz": 0
      },
      {
        "inicio": 60.38,
        "fim": 63.29,
        "cantor": 1,
        "letra": "Barulho do mar, o tempo voa por aqui",
        "alvoHz": 0
      },
      {
        "inicio": 63.29,
        "fim": 66.7175,
        "cantor": 1,
        "letra": "Confesso, se eu precisar, te levo de novo pra mim",
        "alvoHz": 0
      },
      {
        "inicio": 66.7175,
        "fim": 69.5,
        "cantor": 2,
        "letra": "Pa ver você dançar nessa brisa da praia",
        "alvoHz": 0
      },
      {
        "inicio": 69.5,
        "fim": 72.22,
        "cantor": 2,
        "letra": "Vendo o Sol raiar, então vai, moça, baila",
        "alvoHz": 0
      },
      {
        "inicio": 72.22,
        "fim": 75.57,
        "cantor": 1,
        "letra": "Se tu vai, eu também vou, não vou ficar sozinho aqui",
        "alvoHz": 0
      },
      {
        "inicio": 75.57,
        "fim": 78.54,
        "cantor": 1,
        "letra": "O verão chegou, vem montar no meu jet-ski (aham)",
        "alvoHz": 0
      },
      {
        "inicio": 78.54,
        "fim": 81.71,
        "cantor": 2,
        "letra": "Se tu vai, eu também vou, pa mim, fico melhor assim",
        "alvoHz": 0
      },
      {
        "inicio": 81.71,
        "fim": 84.34,
        "cantor": 2,
        "letra": "Solteiro e ser feliz, solteiro e ser feliz",
        "alvoHz": 0
      },
      {
        "inicio": 84.34,
        "fim": 85.9,
        "cantor": "dueto",
        "letra": "Em cima (em cima)",
        "alvoHz": 0
      },
      {
        "inicio": 85.9,
        "fim": 87.75,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski (uh-uh)",
        "alvoHz": 0
      },
      {
        "inicio": 87.75,
        "fim": 92.03,
        "cantor": "dueto",
        "letra": "Vou rebolar pra tu (ah) (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 92.03,
        "fim": 93.88,
        "cantor": "dueto",
        "letra": "Nessa onda sexy (ahn)",
        "alvoHz": 0
      },
      {
        "inicio": 93.88,
        "fim": 97.91,
        "cantor": "dueto",
        "letra": "Te deixo maluco (deixa, sim, haha, deixa, sim)",
        "alvoHz": 0
      },
      {
        "inicio": 97.91,
        "fim": 100.03,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski",
        "alvoHz": 0
      },
      {
        "inicio": 100.03,
        "fim": 104.53,
        "cantor": "dueto",
        "letra": "Vou rebolar pra tu (oh-oh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 104.53,
        "fim": 106.24,
        "cantor": "dueto",
        "letra": "Nessa onda sexy",
        "alvoHz": 0
      },
      {
        "inicio": 106.24,
        "fim": 113.9,
        "cantor": "dueto",
        "letra": "Te deixo maluco (hahaha, Melody, PEDRO SAMPAIO, vai)",
        "alvoHz": 0
      },
      {
        "inicio": 113.9,
        "fim": 118.55,
        "cantor": "dueto",
        "letra": "(Ahn-ahn-ahn-uh-oh)",
        "alvoHz": 0
      },
      {
        "inicio": 118.55,
        "fim": 122.69,
        "cantor": "dueto",
        "letra": "(É o K na voz) (ah)",
        "alvoHz": 0
      },
      {
        "inicio": 122.69,
        "fim": 124.794286,
        "cantor": 2,
        "letra": "Então vai (vai)",
        "alvoHz": 0
      },
      {
        "inicio": 124.794286,
        "fim": 127.6,
        "cantor": 1,
        "letra": "Rebolo e tu pede mais (mais)",
        "alvoHz": 0
      },
      {
        "inicio": 127.6,
        "fim": 131.09,
        "cantor": 1,
        "letra": "Nós dois suando sozinho, a onda subindo",
        "alvoHz": 0
      },
      {
        "inicio": 131.09,
        "fim": 134.09,
        "cantor": 2,
        "letra": "O biquíni caindo, o corpo molhadinho",
        "alvoHz": 0
      },
      {
        "inicio": 134.09,
        "fim": 135.005,
        "cantor": "intro",
        "letra": "♪ Instrumental ♪",
        "alvoHz": 0
      },
      {
        "inicio": 135.005,
        "fim": 135.92,
        "cantor": 2,
        "letra": "E você faz",
        "alvoHz": 0
      },
      {
        "inicio": 135.92,
        "fim": 137.75,
        "cantor": 1,
        "letra": "(Em cima do jet)",
        "alvoHz": 0
      },
      {
        "inicio": 137.75,
        "fim": 138.95,
        "cantor": "dueto",
        "letra": "Vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 138.95,
        "fim": 140.6,
        "cantor": "dueto",
        "letra": "Vem, vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 140.6,
        "fim": 142.15,
        "cantor": "dueto",
        "letra": "Vem, vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 142.15,
        "fim": 144.02,
        "cantor": "dueto",
        "letra": "Em cima do, em cima do jet",
        "alvoHz": 0
      },
      {
        "inicio": 144.02,
        "fim": 145.19,
        "cantor": "dueto",
        "letra": "Vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 145.19,
        "fim": 146.76,
        "cantor": "dueto",
        "letra": "Vem, vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 146.76,
        "fim": 148.03,
        "cantor": "dueto",
        "letra": "Vem, vem e me maceta",
        "alvoHz": 0
      },
      {
        "inicio": 148.03,
        "fim": 149.43,
        "cantor": "dueto",
        "letra": "Em cima do, em cima do",
        "alvoHz": 0
      },
      {
        "inicio": 149.43,
        "fim": 152.25,
        "cantor": "dueto",
        "letra": "Em cima do jet-ski",
        "alvoHz": 0
      },
      {
        "inicio": 152.25,
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
        "fim": 9.91991,
        "cantor": "intro",
        "letra": "♪ Introdução ♪",
        "alvoHz": 0
      },
      {
        "inicio": 9.91991,
        "fim": 12.56991,
        "cantor": 1,
        "letra": "Num futuro perto",
        "alvoHz": 0
      },
      {
        "inicio": 12.56991,
        "fim": 16.29991,
        "cantor": 1,
        "letra": "Quero atender sua chamada",
        "alvoHz": 0
      },
      {
        "inicio": 16.29991,
        "fim": 19.10991,
        "cantor": 2,
        "letra": "Batendo a hora das agendas",
        "alvoHz": 0
      },
      {
        "inicio": 19.10991,
        "fim": 24.72991,
        "cantor": 2,
        "letra": "Pro nosso fight se concretizar",
        "alvoHz": 0
      },
      {
        "inicio": 24.72991,
        "fim": 27.95991,
        "cantor": "dueto",
        "letra": "Na imaginação, já fiz coisas com você",
        "alvoHz": 0
      },
      {
        "inicio": 27.95991,
        "fim": 32.14991,
        "cantor": "dueto",
        "letra": "Cê não mensura o quanto foi bom",
        "alvoHz": 0
      },
      {
        "inicio": 32.14991,
        "fim": 35.26991,
        "cantor": "dueto",
        "letra": "E a cada ação mais virava seu fã",
        "alvoHz": 0
      },
      {
        "inicio": 35.26991,
        "fim": 39.45991,
        "cantor": "dueto",
        "letra": "Conteúdo exclusivo, mostrando seu dom",
        "alvoHz": 0
      },
      {
        "inicio": 39.45991,
        "fim": 44.02991,
        "cantor": 1,
        "letra": "Cê é apelação, não é à toa que é tão cobiçada",
        "alvoHz": 0
      },
      {
        "inicio": 44.02991,
        "fim": 46.60991,
        "cantor": 1,
        "letra": "Qual é a boa? Me explica essa charada",
        "alvoHz": 0
      },
      {
        "inicio": 46.60991,
        "fim": 49.95991,
        "cantor": 2,
        "letra": "Receba essa botada, toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 49.95991,
        "fim": 51.79991,
        "cantor": 2,
        "letra": "Toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 51.79991,
        "fim": 54.16991,
        "cantor": 1,
        "letra": "Toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 54.16991,
        "fim": 57.42991,
        "cantor": "dueto",
        "letra": "Na imaginação, já fiz coisas com você",
        "alvoHz": 0
      },
      {
        "inicio": 57.42991,
        "fim": 61.55991,
        "cantor": "dueto",
        "letra": "Cê não mensura o quanto foi bom",
        "alvoHz": 0
      },
      {
        "inicio": 61.55991,
        "fim": 64.83991,
        "cantor": "dueto",
        "letra": "E a cada ação mais virava seu fã",
        "alvoHz": 0
      },
      {
        "inicio": 64.83991,
        "fim": 68.05991,
        "cantor": "dueto",
        "letra": "Conteúdo exclusivo, mostrando seu dom",
        "alvoHz": 0
      },
      {
        "inicio": 68.05991,
        "fim": 71.60991,
        "cantor": 1,
        "letra": "Num fut—, num fut—, num futuro perto",
        "alvoHz": 0
      },
      {
        "inicio": 71.60991,
        "fim": 75.26991,
        "cantor": 2,
        "letra": "Quero atender sua chamada",
        "alvoHz": 0
      },
      {
        "inicio": 75.26991,
        "fim": 78.07991,
        "cantor": 2,
        "letra": "Batendo a hora das agendas",
        "alvoHz": 0
      },
      {
        "inicio": 78.07991,
        "fim": 83.85991,
        "cantor": 1,
        "letra": "Pro nosso fight se concretizar",
        "alvoHz": 0
      },
      {
        "inicio": 83.85991,
        "fim": 86.77991,
        "cantor": "dueto",
        "letra": "Na imaginação, já fiz coisas com você",
        "alvoHz": 0
      },
      {
        "inicio": 86.77991,
        "fim": 90.98991,
        "cantor": "dueto",
        "letra": "Cê não mensura o quanto foi bom",
        "alvoHz": 0
      },
      {
        "inicio": 90.98991,
        "fim": 94.16991,
        "cantor": "dueto",
        "letra": "E a cada ação mais virava seu fã",
        "alvoHz": 0
      },
      {
        "inicio": 94.16991,
        "fim": 98.29991,
        "cantor": "dueto",
        "letra": "Conteúdo exclusivo, mostrando seu dom",
        "alvoHz": 0
      },
      {
        "inicio": 98.29991,
        "fim": 103.11991,
        "cantor": 1,
        "letra": "Cê é apelação, não é à toa que é tão cobiçada",
        "alvoHz": 0
      },
      {
        "inicio": 103.11991,
        "fim": 105.56991,
        "cantor": 2,
        "letra": "Qual é a boa? Me explica essa charada",
        "alvoHz": 0
      },
      {
        "inicio": 105.56991,
        "fim": 108.88991,
        "cantor": 2,
        "letra": "Receba essa botada, toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 108.88991,
        "fim": 110.71991,
        "cantor": 1,
        "letra": "Toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 110.71991,
        "fim": 113.18991,
        "cantor": 1,
        "letra": "Toma, toma catucada (me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 113.18991,
        "fim": 116.42991,
        "cantor": "dueto",
        "letra": "Na imaginação, já fiz coisas com você",
        "alvoHz": 0
      },
      {
        "inicio": 116.42991,
        "fim": 120.66991,
        "cantor": "dueto",
        "letra": "Cê não mensura o quanto foi bom",
        "alvoHz": 0
      },
      {
        "inicio": 120.66991,
        "fim": 123.85991,
        "cantor": "dueto",
        "letra": "E a cada ação mais virava seu fã",
        "alvoHz": 0
      },
      {
        "inicio": 123.85991,
        "fim": 127.91991,
        "cantor": "dueto",
        "letra": "Conteúdo exclusivo, mostrando seu dom",
        "alvoHz": 0
      },
      {
        "inicio": 127.91991,
        "fim": 129.522767,
        "cantor": 2,
        "letra": "Cê é apelação",
        "alvoHz": 0
      },
      {
        "inicio": 129.522767,
        "fim": 131.65991,
        "cantor": 2,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 131.65991,
        "fim": 133.45991,
        "cantor": 1,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 133.45991,
        "fim": 135.25991,
        "cantor": 1,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 135.25991,
        "fim": 136.914196,
        "cantor": 2,
        "letra": "Cê é apelação",
        "alvoHz": 0
      },
      {
        "inicio": 136.914196,
        "fim": 139.11991,
        "cantor": 2,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 139.11991,
        "fim": 140.51491,
        "cantor": 1,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 140.51491,
        "fim": 141.90991,
        "cantor": 1,
        "letra": "(Me explica essa charada)",
        "alvoHz": 0
      },
      {
        "inicio": 141.90991,
        "fim": 143.91991,
        "cantor": 2,
        "letra": "(E aê, DJ Topo?)",
        "alvoHz": 0
      },
      {
        "inicio": 143.91991,
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
