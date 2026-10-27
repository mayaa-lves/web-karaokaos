"""Execute com `python aplicar_catalogo.py` na raiz de web-karaokaos.
Cria cópia de segurança do App.tsx. Requer o App.tsx original do GitHub.
"""
from pathlib import Path
import shutil
import sys

ROOT = Path.cwd()
APP = ROOT / 'src' / 'App.tsx'
CAT = ROOT / 'src' / 'musicas.ts'
CSS = ROOT / 'src' / 'catalogo.css'
SOURCE = Path(__file__).resolve().parent

if not APP.exists() or not (ROOT / 'package.json').exists():
    sys.exit('ERRO: execute na pasta web-karaokaos (com App.tsx e package.json).')
text = APP.read_text(encoding='utf-8')
if 'import { MUSICAS } from "./musicas";' in text:
    sys.exit('Catálogo já aplicado neste App.tsx. Nenhuma alteração feita.')
# Somente na versão original, e nunca substitui partes desconhecidas.
checks = [
    'const socket = io("http://localhost:8000");',
    'const TRECHOS: Trecho[] = [',
    'const [tela, setTela] = useState<Tela>("home");',
    'new Audio("/musicas/fio-de-cabelo.mp3")',
    'if (tela === "musicas") {',
    '// ====================================================\n  // CONTAGEM\n  // ====================================================',
]
missing = [c for c in checks if c not in text]
if missing:
    sys.exit('ERRO: seu App.tsx está diferente da versão original. Não alterei nada. Falta: ' + repr(missing))

def replace_exact(old, new):
    global text
    if old not in text:
        raise ValueError('Trecho inesperado em App.tsx: ' + repr(old[:90]))
    text = text.replace(old, new, 1)

replace_exact('import "./App.css";', 'import "./App.css";\nimport "./catalogo.css";\nimport { MUSICAS } from "./musicas";')
replace_exact('  const [tela, setTela] = useState<Tela>("home");', '''  const [tela, setTela] = useState<Tela>("home");
  const [idMusica, setIdMusica] = useState("fio-de-cabelo");
  const [buscaMusica, setBuscaMusica] = useState("");
  const [arquivosDisponiveis, setArquivosDisponiveis] = useState<Record<string, boolean>>({});
  const musicaSelecionada = MUSICAS.find((m) => m.id === idMusica) ?? MUSICAS[0];
  const trechosDaMusica: Trecho[] = idMusica === "fio-de-cabelo" ? TRECHOS : musicaSelecionada.trechos;
  const eventosDaMusica: EventoChaos[] = idMusica === "fio-de-cabelo" ? EVENTOS_CHAOS : [];
  const musicaRef = useRef(musicaSelecionada);
  useEffect(() => { musicaRef.current = musicaSelecionada; }, [musicaSelecionada]);
  useEffect(() => {
    let ativo = true;
    Promise.all(MUSICAS.map(async m => {
      try {
        const resposta = await fetch(m.arquivo, { method: "HEAD", cache: "no-store" });
        const tipo = resposta.headers.get("content-type") ?? "";
        return [m.id, resposta.ok && !tipo.includes("text/html")] as const;
      } catch { return [m.id, false] as const; }
    })).then(pares => { if (ativo) setArquivosDisponiveis(Object.fromEntries(pares)); });
    return () => { ativo = false; };
  }, [tela]);''')
replace_exact('new Audio("/musicas/fio-de-cabelo.mp3")', 'new Audio(musicaSelecionada.arquivo)')
replace_exact('  }, [tela]);\n\n  // ====================================================\n  // LETRA', '  }, [tela, idMusica]);\n\n  // ====================================================\n  // LETRA')
replace_exact('      TRECHOS.find(', '      trechosDaMusica.find(')
replace_exact('      ) ?? TRECHOS[TRECHOS.length - 1]', '      ) ?? trechosDaMusica[trechosDaMusica.length - 1]')
replace_exact('const indiceTrecho = TRECHOS.findIndex(', 'const indiceTrecho = trechosDaMusica.findIndex(')
replace_exact('indiceTrecho > 0 ? TRECHOS[indiceTrecho - 1] : null;', 'indiceTrecho > 0 ? trechosDaMusica[indiceTrecho - 1] : null;')
replace_exact('indiceTrecho >= 0 && indiceTrecho < TRECHOS.length - 1\n      ? TRECHOS[indiceTrecho + 1]', 'indiceTrecho >= 0 && indiceTrecho < trechosDaMusica.length - 1\n      ? trechosDaMusica[indiceTrecho + 1]')
replace_exact('return EVENTOS_CHAOS.find(', 'return eventosDaMusica.find(')
replace_exact('const trecho = TRECHOS.find(', 'const trecho = (musicaRef.current.id === "fio-de-cabelo" ? TRECHOS : musicaRef.current.trechos).find(')
replace_exact('      if (!trecho || trecho.cantor === "intro") {', '      if (!musicaRef.current.calibrada || !trecho || trecho.cantor === "intro") {')
# Trocar apenas a tela de seleção, e preservar restante.
start = text.index('  if (tela === "musicas") {')
end = text.index('  // ====================================================\n  // CONTAGEM\n  // ====================================================', start)
selection = '''  if (tela === "musicas") {
    const filtro = buscaMusica.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").toLowerCase();
    const encontradas = MUSICAS.filter(m =>
      (m.titulo + " " + m.artista).normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").toLowerCase().includes(filtro)
    );
    return (
      <main className="game-shell">
        <button className="room-back" onClick={() => setTela("sala")}>← Voltar</button>
        <section className="song-selection">
          <div className="selection-heading">
            <span className="eyebrow">ESCOLHA A MÚSICA</span>
            <h2>Qual vai ser o caos de hoje?</h2>
            <p>Escolha uma música com áudio disponível. Sem download de terceiros incluído.</p>
          </div>
          <input className="karao-search" aria-label="Pesquisar música ou artista" value={buscaMusica}
            onChange={(e) => setBuscaMusica(e.target.value)} placeholder="🔎 Pesquisar música ou artista..." />
          <div className="karao-catalogo">
            {encontradas.map(m => {
              const pronta = arquivosDisponiveis[m.id] === true;
              return (
                <button key={m.id} className={`karao-item ${idMusica === m.id ? "karao-selected" : ""}`}
                  disabled={!pronta} onClick={() => setIdMusica(m.id)}>
                  <span className="karao-art">{m.emoji}</span>
                  <span className="karao-item-texto"><strong>{m.titulo}</strong><small>{m.artista}</small>
                    <small>{!pronta ? "Adicione o MP3 para liberar" : m.calibrada ? "Pronta para jogar" : "Áudio pronto · letra/notas em ajuste"}</small>
                  </span>
                  <span>{pronta ? idMusica === m.id ? "✓" : "▶" : "🔒"}</span>
                </button>
              );
            })}
            {encontradas.length === 0 && <p>Nenhuma música no catálogo com esse nome.</p>}
          </div>
          <button className="big-primary" disabled={!arquivosDisponiveis[idMusica]} onClick={iniciarContagem}>
            COMEÇAR PARTIDA →
          </button>
          <p className="dev-note">As músicas novas têm marcações temporárias. Calibre letras e notas em src/musicas.ts.</p>
        </section>
      </main>
    );
  }

'''
text = text[:start] + selection + text[end:]
replace_exact('            Fio de Cabelo\n          </p>', '            {musicaSelecionada.titulo}\n          </p>')
# prevent bogus target note from being shown as valid on uncalibrated songs
replace_exact('            {trechoAtual.cantor !== "intro" && (', '            {musicaSelecionada.calibrada && trechoAtual.cantor !== "intro" && (')
# Save only after all replacements succeed
shutil.copy2(APP, APP.with_name('App.tsx.backup-original'))
APP.write_text(text, encoding='utf-8')
shutil.copy2(SOURCE / 'src' / 'musicas.ts', CAT)
shutil.copy2(SOURCE / 'src' / 'catalogo.css', CSS)
(ROOT / 'public' / 'musicas').mkdir(parents=True, exist_ok=True)
print('OK: catálogo instalado! Backup em src/App.tsx.backup-original')
print('Agora rode: npm run build  e depois  npm run dev')
