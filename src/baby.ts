// Letra fornecida pela Maya, marcada na grade musical do MP3 local.
// O áudio não contém voz principal: não há referência vocal para medir afinação.
export type TrechoBaby = { inicio: number; fim: number; cantor: 1 | 2 | "dueto" | "intro"; letra: string; alvoHz: number };
export const BABY_DURACAO = 150;
export const BABY_BPM = 130;
export const BABY_TRECHOS: TrechoBaby[] = [
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
];
