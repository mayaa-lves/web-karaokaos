# 🎤 KaraoKaos — Web

Aplicação web principal do **KaraoKaos**, responsável por executar a experiência do karaokê no computador.

A interface cria e gerencia a partida, reproduz a música, sincroniza as letras, recebe os dados captados pelos celulares e utiliza essas informações no sistema de pontuação.

## ✨ Principais funcionalidades

- Criação de salas;
- Geração de PIN para entrada dos jogadores;
- Lobby em tempo real;
- Sincronização com os celulares;
- Contagem regressiva;
- Reprodução da música;
- Letras sincronizadas;
- Alternância entre os jogadores;
- Recebimento da frequência e intensidade da voz;
- Comparação com frequências de referência;
- Sistema de pontuação;
- Sistema de combos;
- Indicador de afinação;
- Desafios especiais durante a música;
- Resultado final da partida.

## 🛠️ Tecnologias

- React
- TypeScript
- Vite
- Socket.IO Client
- HTML Audio API
- Web Audio API
- CSS

## 🏠 Sistema de salas

Ao criar uma partida, a aplicação web solicita uma nova sala ao servidor.

```text
WEB
 ↓
criar_sala
 ↓
SERVIDOR
 ↓
PIN de 4 dígitos
 ↓
WEB
```

O PIN é exibido na tela para que os jogadores possam entrar utilizando seus celulares.

Quando um jogador entra, a interface recebe uma atualização em tempo real e mostra seu nome no lobby.

## 🎮 Início da partida

Quando o host inicia o jogo, a aplicação envia um evento ao servidor.

O servidor retransmite o evento aos celulares para que todos iniciem aproximadamente juntos.

A contagem é:

```text
3
2
1
VAI!
```

## 🎵 Reprodução da música

A música é reproduzida utilizando a API de áudio do navegador.

O tempo atual da reprodução funciona como referência para sincronizar:

- letra;
- jogador da vez;
- progresso;
- desafios;
- término da partida.

## 📝 Letras sincronizadas

A música é dividida em diferentes trechos.

Cada trecho possui informações como:

```ts
{
  inicio,
  fim,
  cantor,
  letra,
  alvoHz
}
```

### `inicio` e `fim`

Determinam quando o trecho deve aparecer.

### `cantor`

Determina quem deve cantar:

```text
Jogador 1
Jogador 2
Dueto
Instrumental
```

### `letra`

Texto apresentado durante aquele momento da música.

### `alvoHz`

Frequência de referência utilizada pelo sistema de análise.

## 🎤 Dados recebidos dos celulares

Durante a partida, cada celular envia dados do microfone para o servidor.

A aplicação web recebe principalmente:

```text
jogador
volume
frequência
```

Esses dados são utilizados para atualizar a interface e calcular a pontuação.

## 🎯 Análise de frequência

A frequência recebida é comparada com a frequência de referência do trecho atual.

Antes da comparação, o sistema pode normalizar a frequência entre oitavas para facilitar a análise musical.

A diferença é calculada utilizando **cents**.

A fórmula utilizada é baseada em:

```text
1200 × log₂(frequência detectada / frequência alvo)
```

Quanto menor a diferença em cents, mais próxima a voz está da referência.

## 🏆 Sistema de pontuação

A pontuação considera a proximidade entre a frequência recebida e a frequência esperada.

Na implementação atual:

```text
≤ 55 cents
PERFEITO
+60 pontos

≤ 100 cents
ÓTIMO
+40 pontos

≤ 150 cents
BOM
+25 pontos
```

Leituras muito distantes da referência não geram pontos.

## 🎶 Estabilidade

O sistema não utiliza apenas uma leitura isolada.

Antes de conceder pontos, são verificadas leituras consecutivas para reduzir pontuações causadas por ruídos ou alterações instantâneas do sinal.

Também existe um pequeno intervalo entre novas pontuações para evitar a repetição excessiva de pontos pela mesma nota.

## 🔥 Combo

Acertos consecutivos aumentam o combo do jogador.

Caso a frequência fique muito distante do esperado, o combo pode ser interrompido.

## 🎚️ Indicador de afinação

A interface apresenta visualmente se a voz está próxima da frequência esperada.

Ela também pode indicar se o jogador precisa cantar:

```text
↑ MAIS AGUDO
```

ou:

```text
↓ MAIS GRAVE
```

## 🎲 KaraoKaos

Durante a música, desafios especiais podem aparecer para tornar a partida mais divertida.

Entre eles podem existir desafios como:

- cantar pulando;
- cantar girando;
- cantar agachado;
- cantar dançando;
- cantar com uma pose específica;
- desafios envolvendo os dois jogadores.

Cada evento possui um período específico dentro da música.

## 🏁 Final da partida

Quando a música termina:

```text
Música termina
      ↓
Web detecta o final
      ↓
Servidor é avisado
      ↓
Celulares recebem partida_finalizada
      ↓
Gravação pode ser reproduzida
      ↓
Web apresenta o resultado
```

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/mayaa-lves/web-karaokaos.git
cd web-karaokaos
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute

```bash
npm run dev
```

O Vite exibirá o endereço local da aplicação, normalmente semelhante a:

```text
http://localhost:5173
```

Abra o endereço no navegador.

> O servidor do KaraoKaos deve estar em execução para que salas e celulares funcionem corretamente.

## 🔗 Outros módulos

O KaraoKaos utiliza três aplicações independentes:

- [📱 Mobile](https://github.com/mayaa-lves/mobile-karaokaos)
- [🐍 Server](https://github.com/mayaa-lves/server-karaokaos)

## 👩‍💻 Projeto acadêmico

Projeto desenvolvido como atividade da disciplina de **Mobile**, no Curso Técnico em Desenvolvimento de Sistemas — SENAI.

A aplicação web complementa a experiência do sensor mobile, transformando os dados captados pelo celular em elementos interativos de um karaokê multiplayer.