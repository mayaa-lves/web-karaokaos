type Trecho = { inicio: number; fim: number; cantor: 1 | 2 | "intro" | "dueto"; letra: string; alvoHz: number };
// Letra fornecida pela Maya; LRC 36842701. Deslocamento aproximado 7,30s a partir do reconhecimento; subdivisões em linhas de vivir/bailar/tener e último oh são estimadas. Validação fonética completa pendente.
export const BAILANDO_TRECHOS: Trecho[] = [
  {
    "inicio": 0,
    "fim": 33.845551,
    "cantor": "intro",
    "letra": "♪ Introdução ♪",
    "alvoHz": 0
  },
  {
    "inicio": 33.845551,
    "fim": 39.195551,
    "cantor": 1,
    "letra": "Yo te miro y se me corta la respiración",
    "alvoHz": 0
  },
  {
    "inicio": 39.195551,
    "fim": 42.015551,
    "cantor": 2,
    "letra": "Cuando tú me miras, se me sube el corazón",
    "alvoHz": 0
  },
  {
    "inicio": 42.015551,
    "fim": 44.515551,
    "cantor": 1,
    "letra": "(Me palpita lento el corazón)",
    "alvoHz": 0
  },
  {
    "inicio": 44.515551,
    "fim": 49.645551,
    "cantor": 2,
    "letra": "Y en un silencio, tu mirada dice mil palabras",
    "alvoHz": 0
  },
  {
    "inicio": 49.645551,
    "fim": 54.415551,
    "cantor": 1,
    "letra": "La noche en la que te suplico que no salga el Sol",
    "alvoHz": 0
  },
  {
    "inicio": 54.415551,
    "fim": 57.055551,
    "cantor": "dueto",
    "letra": "Bailando (bailando)",
    "alvoHz": 0
  },
  {
    "inicio": 57.055551,
    "fim": 59.195551,
    "cantor": "dueto",
    "letra": "Bailando (bailando)",
    "alvoHz": 0
  },
  {
    "inicio": 59.195551,
    "fim": 61.685551,
    "cantor": "dueto",
    "letra": "Tu cuerpo y el mío, llenando el vacío",
    "alvoHz": 0
  },
  {
    "inicio": 61.685551,
    "fim": 64.845551,
    "cantor": "dueto",
    "letra": "Subiendo y bajando (subiendo y bajando)",
    "alvoHz": 0
  },
  {
    "inicio": 64.845551,
    "fim": 67.475551,
    "cantor": "dueto",
    "letra": "Bailando (bailando)",
    "alvoHz": 0
  },
  {
    "inicio": 67.475551,
    "fim": 69.685551,
    "cantor": "dueto",
    "letra": "Bailando (bailando)",
    "alvoHz": 0
  },
  {
    "inicio": 69.685551,
    "fim": 72.255551,
    "cantor": "dueto",
    "letra": "Ese fuego por dentro me va enloqueciendo",
    "alvoHz": 0
  },
  {
    "inicio": 72.255551,
    "fim": 74.735551,
    "cantor": "dueto",
    "letra": "Me va saturando",
    "alvoHz": 0
  },
  {
    "inicio": 74.735551,
    "fim": 77.535551,
    "cantor": 2,
    "letra": "Con tu física y tu química, también tu anatomía",
    "alvoHz": 0
  },
  {
    "inicio": 77.535551,
    "fim": 80.235551,
    "cantor": 1,
    "letra": "La cerveza y el tequila, y tu boca con la mía",
    "alvoHz": 0
  },
  {
    "inicio": 80.235551,
    "fim": 82.645551,
    "cantor": 2,
    "letra": "Y ya no puedo más (ya no puedo más)",
    "alvoHz": 0
  },
  {
    "inicio": 82.645551,
    "fim": 85.675551,
    "cantor": 1,
    "letra": "Ya no puedo más (ya no puedo más)",
    "alvoHz": 0
  },
  {
    "inicio": 85.675551,
    "fim": 88.245551,
    "cantor": 2,
    "letra": "Con esta melodía, tu color, tu fantasía",
    "alvoHz": 0
  },
  {
    "inicio": 88.245551,
    "fim": 90.405551,
    "cantor": 1,
    "letra": "Con tu filosofía, mi cabeza está vacía",
    "alvoHz": 0
  },
  {
    "inicio": 90.405551,
    "fim": 93.465551,
    "cantor": 2,
    "letra": "Y ya no puedo más (ya no puedo más)",
    "alvoHz": 0
  },
  {
    "inicio": 93.465551,
    "fim": 95.815551,
    "cantor": 1,
    "letra": "Ya no puedo más (ya no puedo más)",
    "alvoHz": 0
  },
  {
    "inicio": 95.815551,
    "fim": 98.925551,
    "cantor": "dueto",
    "letra": "Yo quiero estar contigo, vivir contigo",
    "alvoHz": 0
  },
  {
    "inicio": 98.925551,
    "fim": 101.375551,
    "cantor": "dueto",
    "letra": "Bailar contigo, tener contigo",
    "alvoHz": 0
  },
  {
    "inicio": 101.375551,
    "fim": 103.855551,
    "cantor": "dueto",
    "letra": "Una noche loca (una noche loca)",
    "alvoHz": 0
  },
  {
    "inicio": 103.855551,
    "fim": 106.465551,
    "cantor": "dueto",
    "letra": "Ay, besar tu boca (y besar tu boca)",
    "alvoHz": 0
  },
  {
    "inicio": 106.465551,
    "fim": 109.530551,
    "cantor": "dueto",
    "letra": "Yo quiero estar contigo, vivir contigo",
    "alvoHz": 0
  },
  {
    "inicio": 109.530551,
    "fim": 111.955551,
    "cantor": "dueto",
    "letra": "Bailar contigo, tener contigo",
    "alvoHz": 0
  },
  {
    "inicio": 111.955551,
    "fim": 114.115551,
    "cantor": "dueto",
    "letra": "Una noche loca",
    "alvoHz": 0
  },
  {
    "inicio": 114.115551,
    "fim": 117.115551,
    "cantor": "dueto",
    "letra": "Con tremenda nota",
    "alvoHz": 0
  },
  {
    "inicio": 117.115551,
    "fim": 119.575551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 119.575551,
    "fim": 122.275551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 122.275551,
    "fim": 124.895551,
    "cantor": "dueto",
    "letra": "(Oh, oh, ooh, oh)",
    "alvoHz": 0
  },
  {
    "inicio": 124.895551,
    "fim": 128.895551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 128.895551,
    "fim": 131.855551,
    "cantor": 2,
    "letra": "Tú me miras y me llevas a otra dimensión",
    "alvoHz": 0
  },
  {
    "inicio": 131.855551,
    "fim": 134.025551,
    "cantor": 1,
    "letra": "(Estoy en otra dimensión)",
    "alvoHz": 0
  },
  {
    "inicio": 134.025551,
    "fim": 137.055551,
    "cantor": 2,
    "letra": "Tus latidos aceleran a mi corazón",
    "alvoHz": 0
  },
  {
    "inicio": 137.055551,
    "fim": 139.425551,
    "cantor": 1,
    "letra": "(Tus latidos aceleran a mi corazón)",
    "alvoHz": 0
  },
  {
    "inicio": 139.425551,
    "fim": 143.545551,
    "cantor": 2,
    "letra": "Qué ironía del destino no poder tocarte",
    "alvoHz": 0
  },
  {
    "inicio": 143.545551,
    "fim": 149.345551,
    "cantor": 1,
    "letra": "Abrazarte y sentir la magia de tu olor",
    "alvoHz": 0
  },
  {
    "inicio": 149.345551,
    "fim": 151.985551,
    "cantor": "dueto",
    "letra": "Bailando (bailando)",
    "alvoHz": 0
  },
  {
    "inicio": 151.985551,
    "fim": 154.175551,
    "cantor": "dueto",
    "letra": "Bailando (bailando)",
    "alvoHz": 0
  },
  {
    "inicio": 154.175551,
    "fim": 156.855551,
    "cantor": "dueto",
    "letra": "Tu cuerpo y el mío, llenando el vacío",
    "alvoHz": 0
  },
  {
    "inicio": 156.855551,
    "fim": 159.775551,
    "cantor": "dueto",
    "letra": "Subiendo y bajando (subiendo y bajando)",
    "alvoHz": 0
  },
  {
    "inicio": 159.775551,
    "fim": 162.465551,
    "cantor": "dueto",
    "letra": "Bailando (bailando)",
    "alvoHz": 0
  },
  {
    "inicio": 162.465551,
    "fim": 164.525551,
    "cantor": "dueto",
    "letra": "Bailando (bailando)",
    "alvoHz": 0
  },
  {
    "inicio": 164.525551,
    "fim": 167.105551,
    "cantor": "dueto",
    "letra": "Ese fuego por dentro me va enloqueciendo",
    "alvoHz": 0
  },
  {
    "inicio": 167.105551,
    "fim": 169.755551,
    "cantor": "dueto",
    "letra": "Me va saturando",
    "alvoHz": 0
  },
  {
    "inicio": 169.755551,
    "fim": 172.535551,
    "cantor": 2,
    "letra": "Con tu física y tu química, también tu anatomía",
    "alvoHz": 0
  },
  {
    "inicio": 172.535551,
    "fim": 175.375551,
    "cantor": 1,
    "letra": "La cerveza y el tequila, y tu boca con la mía",
    "alvoHz": 0
  },
  {
    "inicio": 175.375551,
    "fim": 177.845551,
    "cantor": 2,
    "letra": "Y ya no puedo más (ya no puedo más)",
    "alvoHz": 0
  },
  {
    "inicio": 177.845551,
    "fim": 180.585551,
    "cantor": 1,
    "letra": "Ya no puedo más (ya no puedo más)",
    "alvoHz": 0
  },
  {
    "inicio": 180.585551,
    "fim": 183.215551,
    "cantor": 2,
    "letra": "Con esta melodía, tu color, tu fantasía",
    "alvoHz": 0
  },
  {
    "inicio": 183.215551,
    "fim": 185.675551,
    "cantor": 1,
    "letra": "Con tu filosofía, mi cabeza está vacía",
    "alvoHz": 0
  },
  {
    "inicio": 185.675551,
    "fim": 188.325551,
    "cantor": 2,
    "letra": "Y ya no puedo más (ya no puedo más)",
    "alvoHz": 0
  },
  {
    "inicio": 188.325551,
    "fim": 190.975551,
    "cantor": 1,
    "letra": "Ya no puedo más (ya no puedo más)",
    "alvoHz": 0
  },
  {
    "inicio": 190.975551,
    "fim": 193.785551,
    "cantor": "dueto",
    "letra": "Yo quiero estar contigo, vivir contigo",
    "alvoHz": 0
  },
  {
    "inicio": 193.785551,
    "fim": 196.305551,
    "cantor": "dueto",
    "letra": "Bailar contigo, tener contigo",
    "alvoHz": 0
  },
  {
    "inicio": 196.305551,
    "fim": 198.665551,
    "cantor": "dueto",
    "letra": "Una noche loca (una noche loca)",
    "alvoHz": 0
  },
  {
    "inicio": 198.665551,
    "fim": 201.365551,
    "cantor": "dueto",
    "letra": "Ay, besar tu boca (y besar tu boca)",
    "alvoHz": 0
  },
  {
    "inicio": 201.365551,
    "fim": 204.300551,
    "cantor": "dueto",
    "letra": "Yo quiero estar contigo, vivir contigo",
    "alvoHz": 0
  },
  {
    "inicio": 204.300551,
    "fim": 206.855551,
    "cantor": "dueto",
    "letra": "Bailar contigo, tener contigo",
    "alvoHz": 0
  },
  {
    "inicio": 206.855551,
    "fim": 209.255551,
    "cantor": "dueto",
    "letra": "Una noche loca",
    "alvoHz": 0
  },
  {
    "inicio": 209.255551,
    "fim": 212.145551,
    "cantor": "dueto",
    "letra": "Con tremenda nota",
    "alvoHz": 0
  },
  {
    "inicio": 212.145551,
    "fim": 214.555551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 214.555551,
    "fim": 217.215551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 217.215551,
    "fim": 219.985551,
    "cantor": "dueto",
    "letra": "(Oh, oh, ooh, oh)",
    "alvoHz": 0
  },
  {
    "inicio": 219.985551,
    "fim": 222.625551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 222.625551,
    "fim": 225.045551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 225.045551,
    "fim": 227.735551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 227.735551,
    "fim": 230.475551,
    "cantor": "dueto",
    "letra": "(Oh, oh, ooh, oh)",
    "alvoHz": 0
  },
  {
    "inicio": 230.475551,
    "fim": 233.125551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 233.125551,
    "fim": 235.615551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh) bailando, amor",
    "alvoHz": 0
  },
  {
    "inicio": 235.615551,
    "fim": 238.335551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh) bailando, amor",
    "alvoHz": 0
  },
  {
    "inicio": 238.335551,
    "fim": 241.295551,
    "cantor": "dueto",
    "letra": "(Oh, oh, ooh, oh) es que se me va el dolor",
    "alvoHz": 0
  },
  {
    "inicio": 241.295551,
    "fim": 242.475551,
    "cantor": "dueto",
    "letra": "(Oh, oh, oh, ooh)",
    "alvoHz": 0
  },
  {
    "inicio": 242.475551,
    "fim": 259.065034,
    "cantor": "intro",
    "letra": "♪ Final ♪",
    "alvoHz": 0
  }
];
