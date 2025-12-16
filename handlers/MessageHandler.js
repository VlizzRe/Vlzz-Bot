const saludos = require('./textCommands/saludos');
const defenderme = require('./textCommands/defenderme');
const ulisesgay = require('./textCommands/ulisesgay');
const odioalbot = require('./textCommands/odioalbot');
const calculadora = require('./textCommands/calculadora');
const responderConFrase = require('./textCommands/responderConFrase'); // Opcional

module.exports = async function handleMessages(message) {
  if (message.author.bot) return;

  const entrada = message.content.toLowerCase().trim();

  if (await saludos(message, entrada)) return;
  if (await defenderme(message, entrada)) return;
  if (await ulisesgay(message, entrada)) return;
  if (await odioalbot(message, entrada)) return;
  if (await calculadora(message, entrada)) return;
  if (await responderConFrase(message, entrada)) return; // Opcional
};
