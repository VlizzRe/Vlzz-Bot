const { SlashCommandBuilder, EmbedBuilder, Colors } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('siono')
        .setDescription('Responde Sí o No a tu pregunta')
        .addStringOption(option =>
            option.setName('pregunta')
                .setDescription('Escribe tu pregunta')
                .setRequired(true)
        ),

    async execute(interaction) {
        const pregunta = interaction.options.getString('pregunta');
        const respuestas = ["Sí", "No"];
        const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];

        const embed = new EmbedBuilder()
            .setTitle('Verdadero o falso')
            .setColor(Colors.DarkBlue)
            .addFields(
                { name: ' Pregunta', value: pregunta },
                { name: ' Respuesta', value: respuesta }
            )
            .setFooter({ text: `Solicitado por ${interaction.user.tag}` })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};
