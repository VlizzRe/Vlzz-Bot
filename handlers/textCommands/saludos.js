const saludos = [
  "buen dia vlzz", "hola vlzz", "bonita tarde vlzz", "whats up vlzz",
    "vlzz buen dia ", "vlzz  ", "vlzz bonita tarde ", "vlzz whats up ",
    "vlzz hola", "que tal vlzz", "vlzz que tal"
];

module.exports = async (message, entrada) => {
  if (saludos.includes(entrada)) {
    await message.reply("Holaaa ¿En qué puedo ayudarlo?");
    return true;
  }
  return false;
};
