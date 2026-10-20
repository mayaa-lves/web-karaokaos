"""Experimento offline de ASR, não conectado ainda ao servidor Socket.IO.
Uso: python avaliar_letra.py voz.wav referencias.json --modelo tiny
Instale previamente: pip install faster-whisper
JSON: [{"inicio": 0, "fim": 6, "letra": "texto esperado"}, ...]
Os tempos do JSON referem-se ao WAV analisado (zero no início do arquivo).
"""
import argparse
import json
import re
import unicodedata
from difflib import SequenceMatcher
from pathlib import Path

def normalizar(s):
    s=''.join(c for c in unicodedata.normalize('NFD',s.lower()) if unicodedata.category(c)!='Mn')
    return ' '.join(re.findall(r'[a-z0-9]+',s))

def comparar(frase_esperada,frase_cantada):
    a=normalizar(frase_esperada).split()
    b=normalizar(frase_cantada).split()
    return round(100*SequenceMatcher(a=a,b=b,autojunk=False).ratio(),1) if a else 0.0

def avaliar_segmentos(segmentos,referencias,tolerancia=1.0):
    saida=[]
    for trecho in referencias:
        inicio=float(trecho['inicio']);fim=float(trecho['fim'])
        candidatos=[s['texto'] for s in segmentos if s['fim']>=inicio-tolerancia and s['inicio']<=fim+tolerancia]
        texto=' '.join(candidatos)
        saida.append({'inicio':inicio,'fim':fim,'esperado':trecho['letra'],'reconhecido':texto,'similaridade_pct':comparar(trecho['letra'],texto)})
    return saida

def main():
    cli=argparse.ArgumentParser()
    cli.add_argument('audio',type=Path)
    cli.add_argument('referencias',type=Path)
    cli.add_argument('--modelo',default='tiny')
    args=cli.parse_args()
    from faster_whisper import WhisperModel
    model=WhisperModel(args.modelo,device='cpu',compute_type='int8')
    segmentos,_=model.transcribe(str(args.audio),language='pt',vad_filter=True,beam_size=3)
    lista=[{'inicio':x.start,'fim':x.end,'texto':x.text} for x in segmentos]
    refs=json.loads(args.referencias.read_text(encoding='utf-8'))
    print(json.dumps(avaliar_segmentos(lista,refs),ensure_ascii=False,indent=2))
    print('\nATENÇÃO: similaridade textual experimental, não precisão comprovada do canto.')
if __name__=='__main__':main()
