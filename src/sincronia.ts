export type AjusteSincronia = { atraso: number; escala: number };
export type AjustesSincronia = Record<string, AjusteSincronia>;
const CHAVE = "karaokaos.sincronia.v1";
const PADRAO: AjusteSincronia = Object.freeze({ atraso: 0, escala: 1 });
// Correção inicial de dois segundos para as faixas relatadas como adiantadas.
// É uma aproximação, ajustável; não equivale a validação fonética do áudio.
const ATRASO_INICIAL: AjusteSincronia = Object.freeze({ atraso: 2, escala: 1 });

export function ajusteInicial(id: string): AjusteSincronia {
  return id === "infiel" || id === "fio-de-cabelo" ? ATRASO_INICIAL : PADRAO;
}

export function normalizarAjuste(valor: unknown): AjusteSincronia {
  const v = valor as Partial<AjusteSincronia> | null;
  const atraso = typeof v?.atraso === "number" && Number.isFinite(v.atraso) ? v.atraso : 0;
  const escala = typeof v?.escala === "number" && Number.isFinite(v.escala) ? v.escala : 1;
  return { atraso: Math.round(Math.max(-15, Math.min(15, atraso)) * 100) / 100,
    escala: Math.round(Math.max(0.9, Math.min(1.1, escala)) * 1000) / 1000 };
}

export function carregarAjustes(): AjustesSincronia {
  try {
    const dados: unknown = JSON.parse(localStorage.getItem(CHAVE) ?? "{}");
    if (!dados || typeof dados !== "object" || Array.isArray(dados)) return {};
    return Object.fromEntries(Object.entries(dados).map(([id, valor]) => [id, normalizarAjuste(valor)]));
  } catch { return {}; }
}

export function salvarAjustes(ajustes: AjustesSincronia): boolean {
  try { localStorage.setItem(CHAVE, JSON.stringify(ajustes)); return true; }
  catch { return false; }
}

// Usa o relógio real do áudio sem criar um segundo cronômetro.
// A mesma grade controla letras, turnos e pontuação; o fim da música nunca se move.
export function ajustarTrechos<T extends { inicio: number; fim: number; cantor: string | number }>(
  trechos: T[], duracao: number, valor: AjusteSincronia,
): T[] {
  const ajuste = normalizarAjuste(valor);
  const tempo = (t: number) => Math.max(0, Math.min(duracao, t * ajuste.escala + ajuste.atraso));
  return trechos.map((t, i) => ({ ...t,
    inicio: i === 0 && t.cantor === "intro" && t.inicio === 0 ? 0 : tempo(t.inicio),
    fim: tempo(t.fim),
  })).filter(t => t.fim > t.inicio);
}
