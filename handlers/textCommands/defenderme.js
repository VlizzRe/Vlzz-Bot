const defenderme = [
  "mau gay", "mau gei", "mau es gei", "mau es gay",
  "mau es tremendo gay", "mau pendejo", "mau estupido"
];

module.exports = async (message, entrada) => {
  if (defenderme.includes(entrada)) {
    await message.reply("Tú lo eres");
    return true;
  }
  return false;
};
