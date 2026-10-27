import { META_PONTOS, METAS_ESTRELAS, estrelasPara } from "./pontuacao";

export function BarraEstrelas({ pontos, nome }: { pontos: number; nome: string }) {
  const estrelas = estrelasPara(pontos);
  const atual = Math.max(0, Math.min(META_PONTOS, pontos));
  return <div className="star-meter">
    <div className="star-meter-heading"><span>ESTRELAS</span><strong>{estrelas}<small> / 5</small></strong></div>
    <div className="star-meter-body" role="progressbar" aria-label={`Estrelas de ${nome}`}
      aria-valuemin={0} aria-valuemax={META_PONTOS} aria-valuenow={atual}
      aria-valuetext={`${estrelas} de 5 estrelas, ${Math.round(pontos)} pontos`}>
      <div className="star-meter-track"><div className="star-meter-fill" style={{ width: `${atual / META_PONTOS * 100}%` }} /></div>
      {METAS_ESTRELAS.map((meta, i) => <span key={meta}
        className={`star-stop ${pontos >= meta ? "star-earned" : ""}`}
        style={{ left: `${meta / META_PONTOS * 100}%` }} aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z" /></svg>
        <b>{i + 1}</b>
      </span>)}
    </div>
    <small className="star-next">{estrelas === 5 ? "5 ESTRELAS!" : `Próxima: ${METAS_ESTRELAS[estrelas].toLocaleString("pt-BR")} pontos`}</small>
  </div>;
}
