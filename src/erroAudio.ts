export function mensagemErroAudio(codigo?: number) {
  switch (codigo) {
    case 1: return "A reprodução foi interrompida. Você pode tentar novamente do mesmo ponto.";
    case 2: return "A conexão com o áudio foi interrompida. Tente novamente para continuar do mesmo ponto.";
    case 3: return "O navegador não conseguiu decodificar o áudio. Tente recarregar a faixa.";
    case 4: return "O áudio não foi encontrado ou o navegador recusou o formato. Confira se todos os arquivos do pacote foram copiados.";
    default: return "Não foi possível continuar o áudio. Tente novamente para retomar a faixa.";
  }
}
