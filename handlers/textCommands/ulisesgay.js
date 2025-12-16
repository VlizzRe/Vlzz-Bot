const ulisesgay = [
  "vlzz dile gay a ulises",
  "vlzz puedes decirle gay a ulises?",
  "vlzz dile gay a ulises por favor",
  "vlzz puedesle gay a ulises por favor",
  "vlzz dile gei a ulises",
  "vlzz puedes decirle gei a ulises?"
];

module.exports = async (message, entrada) => {
  if (ulisesgay.includes(entrada)) {
    await message.reply("<@709138421867610113> gay");
    return true;
  }
  return false;
};
