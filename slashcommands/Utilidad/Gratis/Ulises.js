const { SlashCommandBuilder, Colors } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hola')
    .setDescription('El bot te saluda'),

  async execute(interaction) {
    await interaction.reply('Hola, un gusto ');
  }
};
