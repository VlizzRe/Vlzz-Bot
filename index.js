const { Client, GatewayIntentBits, Collection } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});
require('dotenv').config();

const { loadSlash } = require('./handlers/slashHandler');
const handleMessages = require('./handlers/MessageHandler'); 
client.slashCommands = new Collection();

// Listener de comandos slash
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const cmd = client.slashCommands.get(interaction.commandName);
  if (!cmd) return;

  try {
    await cmd.execute(interaction);
  } catch (err) {
    console.error(err);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: '❌ Hubo un error al ejecutar el comando.', ephemeral: true });
    } else {
      await interaction.reply({ content: '❌ Hubo un error al ejecutar el comando.', ephemeral: true });
    }
  }
});
client.on('messageCreate', handleMessages);


client.once('ready', async () => {
  await loadSlash(client)
    .then(() => {
      console.log("✅ | Comandos cargados con éxito");
    })
    .catch((err) => {
      console.error(`❌ | Error al cargar los comandos => ${err}`);
    });

  console.log(`✅ | Bot encendido como ${client.user.tag}`);
});

client.login(process.env.TOKEN);
