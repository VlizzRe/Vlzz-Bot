const palabraclav = [
 "Vlzz agua de coco con piña"
];

module.exports = async (message, entrada) => {
  if (palabraclav.includes(entrada)) {
    await message.reply("AAAAAAA ");
    return true;
  }
  return false;
};