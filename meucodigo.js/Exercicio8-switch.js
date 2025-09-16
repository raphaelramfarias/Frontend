function verificarDiadaSemana(dia) {
  switch (dia) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
      return "Dia útil";
    case "sábado":
    case "domingo":
      return "Fim de semana";
    default:
      return "Feriado";
  }
}

// Exemplos de uso:
console.log(verificarDiadaSemana("segunda")); // Dia útil
console.log(verificarDiadaSemana("domingo")); // Fim de semana
console.log(verificarDiadaSemana("feriado")); // Dia feriado

//Node.js Exec
