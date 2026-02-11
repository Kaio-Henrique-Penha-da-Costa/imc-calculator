export const calcularIMC = (peso, altura) => {
  if (!peso || !altura) return null;
  const alturaMetros = altura / 100;
  const imc = peso / (alturaMetros * alturaMetros);
  return parseFloat(imc.toFixed(2));
};

export const getClassificacaoIMC = (imc) => {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc >= 18.5 && imc < 25) return 'Peso normal';
  if (imc >= 25 && imc < 30) return 'Sobrepeso';
  if (imc >= 30 && imc < 35) return 'Obesidade grau I';
  if (imc >= 35 && imc < 40) return 'Obesidade grau II';
  if (imc >= 40) return 'Obesidade grau III';
  return '';
};

export const getCorClassificacao = (classificacao) => {
  switch (classificacao) {
    case 'Abaixo do peso': return '#3498db'; // Azul
    case 'Peso normal': return '#2ecc71'; // Verde
    case 'Sobrepeso': return '#f39c12'; // Laranja
    case 'Obesidade grau I': return '#e67e22'; // Laranja escuro
    case 'Obesidade grau II': return '#e74c3c'; // Vermelho
    case 'Obesidade grau III': return '#c0392b'; // Vermelho escuro
    default: return '#95a5a6'; // Cinza
  }
};