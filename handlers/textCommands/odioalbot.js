const odioalbot = [
  "vlzz te odio", "te odio bot", "te odio vlzz", "bot te odio",
  "bot me cagas", "vlzz me cagas", "me cagas vlzz"
];

module.exports = async (message, entrada) => {
  if (odioalbot.includes(entrada)) {
    await message.reply("Sí ok entiendo ");
    return true;
  }
  return false;
};
