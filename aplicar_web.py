from pathlib import Path
import sys
p=Path(sys.argv[1]) if len(sys.argv)>1 else Path('src/App.tsx')
if not p.exists(): raise SystemExit(f'Arquivo não encontrado: {p}. Execute dentro da pasta web-karaokaos.')
s=p.read_text(encoding='utf-8')
if 'INICIO_DESAFIO' in s: raise SystemExit('Alterações parecem já aplicadas. Nada foi modificado.')

def replace(old,new):
 global s
 n=s.count(old)
 if n!=1: raise SystemExit(f'Esperava 1 ocorrência, achei {n}: {old[:65]!r}. Nenhum arquivo alterado.')
 s=s.replace(old,new,1)

replace('const DURACAO_ARQUIVO = 180.14;', '''const DURACAO_ARQUIVO = 180.14;
const INICIO_DESAFIO = 14.5;
const DURACAO_DESAFIO = 120;
const FIM_DESAFIO = Math.min(DURACAO_ARQUIVO, INICIO_DESAFIO + DURACAO_DESAFIO);
const PONTOS_ESTRELA = 1000;''')
replace('useState(DURACAO_ARQUIVO);','useState(DURACAO_DESAFIO);\n  const [buscaMusica, setBuscaMusica] = useState("");')
replace('''      const atual = audio.currentTime;

      tempoRef.current = atual;
      setTempo(atual);''','''      const atual = audio.currentTime;
      if (atual >= FIM_DESAFIO) {
        audio.pause();
        terminou();
        return;
      }
      tempoRef.current = atual - INICIO_DESAFIO;
      setTempo(atual - INICIO_DESAFIO);''')
replace('setDuracao(audio.duration);','setDuracao(Math.min(DURACAO_DESAFIO, Math.max(0, audio.duration - INICIO_DESAFIO)));')
replace('setTempo(audio.duration || DURACAO_ARQUIVO);','setTempo(DURACAO_DESAFIO);')
replace('''    audio
      .play()''','''    audio.currentTime = INICIO_DESAFIO;
    audio
      .play()''')
replace('''tempo >= trecho.inicio &&
          tempo < trecho.fim''','''tempo + INICIO_DESAFIO >= trecho.inicio &&
          tempo + INICIO_DESAFIO < trecho.fim''')
replace('''tempo >= evento.inicio &&
        tempo < evento.fim''','''tempo + INICIO_DESAFIO >= evento.inicio &&
        tempo + INICIO_DESAFIO < evento.fim''')
replace('chaosAtual.fim - tempo','chaosAtual.fim - (tempo + INICIO_DESAFIO)')
replace('const agoraMusica = tempoRef.current;','const agoraMusica = tempoRef.current + INICIO_DESAFIO;')
replace('Música preparada para a demonstração.','Pesquise entre as músicas prontas para jogar.')
expr='("fio de cabelo chitãozinho xororó").normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").includes(buscaMusica.trim().toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, ""))'
replace('''          <div className="song-card">''','''          <input aria-label="Pesquisar música" value={buscaMusica} onChange={e => setBuscaMusica(e.target.value)} placeholder="Pesquisar título ou artista..." style={{width:"100%",padding:14,borderRadius:12,marginBottom:16}} />
          {'''+expr+''' ? <div className="song-card">''')
replace('''          </div>

          <button
            className="big-primary"''','''          </div> : <p>Nenhuma música preparada encontrada. Novas músicas serão adicionadas após os testes.</p>}

          <button
            className="big-primary"''')
replace('''            onClick={iniciarContagem}
          >
            COMEÇAR PARTIDA''','''            onClick={iniciarContagem}
            disabled={!'''+expr+'''}
          >
            COMEÇAR PARTIDA''')
replace('<span>3:00</span>','<span>2:00</span>')
replace('Frequência analisada em tempo real pelos celulares.','Versão inicial: 2 minutos e afinação. Reconhecimento de palavras ainda em desenvolvimento.')
for n in (1,2):
 replace('''              <small>pontos</small>''','''              <small>pontos · {"⭐".repeat(Math.min(5, Math.floor(pontos'''+str(n)+''' / PONTOS_ESTRELA)))}{"☆".repeat(5 - Math.min(5, Math.floor(pontos'''+str(n)+''' / PONTOS_ESTRELA)))}</small>''')
# combo lines appear only once per player
for n in (1,2):
 replace('🔥 COMBO x{combo'+str(n)+'}', '⭐ {"⭐".repeat(Math.min(5, Math.floor(pontos'+str(n)+' / PONTOS_ESTRELA)))}{"☆".repeat(5 - Math.min(5, Math.floor(pontos'+str(n)+' / PONTOS_ESTRELA)))} · 🔥 COMBO x{combo'+str(n)+'}')
backup=p.with_suffix('.tsx.bak')
if backup.exists(): raise SystemExit(f'Backup existente em {backup}. Não sobrescrevi nada.')
backup.write_text(p.read_text(encoding='utf-8'),encoding='utf-8')
p.write_text(s,encoding='utf-8')
print('OK: atualizado',p,'| backup:',backup)
print('Próximo passo: npm run build')
