const { SlashCommandBuilder, EmbedBuilder, Colors } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Muestra la latencia del bot'),

  async execute(interaction) {
    const ping = Date.now() - interaction.createdTimestamp;
    const embed = new EmbedBuilder()
      .setColor(Colors.Red)
      .setDescription(`Ping: **${ping} ms**`);

    await interaction.reply({ embeds: [embed] });
  }
};
