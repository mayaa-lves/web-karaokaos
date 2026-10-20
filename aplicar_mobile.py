from pathlib import Path
import sys
p=Path(sys.argv[1]) if len(sys.argv)>1 else Path('src/app/index.tsx')
if not p.exists(): raise SystemExit(f'Arquivo não encontrado: {p}. Execute dentro da pasta mobile-karaokaos.')
s=p.read_text(encoding='utf-8')
old='''      const hzParaEnviar =
        hzMantido ?? (rms > 0.006 ? 220 : null);'''
new='''      // Nunca atribua tom artificial: sem detecção confiável, informe null.
      const hzParaEnviar = hzMantido;'''
if s.count(old)!=1: raise SystemExit('Trecho esperado não encontrado. Nada foi alterado.')
b=p.with_suffix('.tsx.bak')
if b.exists(): raise SystemExit('Backup já existe. Nada alterado.')
b.write_text(s,encoding='utf-8');p.write_text(s.replace(old,new),encoding='utf-8')
print('Fallback 220Hz retirado. Backup em:',b)
