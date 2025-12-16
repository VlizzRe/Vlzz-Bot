module.exports = async (message, entrada) => {
  const regex = /vlzz (?:dime|ahora dime|)?cu[aá]nto es (\d+(?:\.\d+)?)\s*([\+\-\*\/])\s*(\d+(?:\.\d+)?)/;
  const match = entrada.match(regex);

  if (match) {
    const a = parseFloat(match[1]);
    const operador = match[2];
    const b = parseFloat(match[3]);
    let resultado;

    switch (operador) {
      case '+': resultado = a + b; break;
      case '-': resultado = a - b; break;
      case '*': resultado = a * b; break;
      case '/':
        if (b === 0) return message.reply("No puedo dividir entre cero 💀");
        resultado = a / b;
        break;
      default:
        return message.reply("No entendí la operación.");
    }

    await message.reply(`Claro, el resultado es ${resultado}`);
    return true;
  }

  return false;
};
