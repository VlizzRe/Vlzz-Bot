const { SlashCommandBuilder, EmbedBuilder, Colors } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('league')
    .setDescription('Importantes cosas sobre League of Legends'),

  async execute(interaction) {
    const ping = Date.now() - interaction.createdTimestamp;
    const embed = new EmbedBuilder()
      .setColor(Colors.Gold)
      .setDescription(`**League of Legends**\n 
        Parches del LoL: https://www.leagueoflegends.com/es-mx/news/tags/patch-notes/ \n 
        Página de la LEC (Europe): https://gol.gg/tournament/tournament-picksandbans/LEC%202025%20Spring%20Season/ \n 
        OP.GG: https://op.gg/es \n
        League of graphs: https://www.leagueofgraphs.com/\n
        JungleMains: https://www.reddit.com/r/Jungle_Mains/ `);

    await interaction.reply({ embeds: [embed] });
  }
};