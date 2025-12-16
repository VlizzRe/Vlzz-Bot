const { readdirSync } = require('fs');

module.exports = {
  async loadSlash(client) {
    for (const category of readdirSync('./slashcommands')) {
      for (const subCategory of readdirSync(`./slashcommands/${category}`)) {
        for (const fileName of readdirSync(`./slashcommands/${category}/${subCategory}`).filter(file => file.endsWith('.js'))) {
          const command = require(`../slashcommands/${category}/${subCategory}/${fileName}`);
          client.slashCommands.set(command.data.name, command);
        }
      }
    }

    await client.application?.commands.set(client.slashCommands.map(cmd => cmd.data));
  }
};
