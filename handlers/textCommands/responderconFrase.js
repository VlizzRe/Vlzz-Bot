module.exports = async (message, entrada) => {
  if (!message.reference) return false; // Solo funciona si es respuesta

  let frase = null;

  // Opción 1: "vlzz dile que es ___"
  if (entrada.startsWith("vlzz dile que es ")) {
    const resto = entrada.replace("vlzz dile que es ", "").trim();

    if (resto === "feo") {
      frase = "Eres feo";
    } else {
      frase = `Eres ${resto}`;
    }
  }

  // Opción 2: "vlzz dile que ___"
  else if (entrada.startsWith("vlzz dile que ")) {
    const resto = entrada.replace("vlzz dile que ", "").trim();

    if (resto === "tonto") {
      frase = "Tonto";
    } else {
      frase = resto;
    }
  }

  // Opción 3: "vlzz dile ___"
  else if (entrada.startsWith("vlzz dile ")) {
    frase = entrada.replace("vlzz dile ", "").trim();
  }

  // Si no coincide con ningún formato
  if (!frase) return false;

  try {
    const mensajeOriginal = await message.channel.messages.fetch(message.reference.messageId);
    const usuario = mensajeOriginal.author;
    await message.reply(`${usuario} ${frase} `);
    return true;
  } catch (err) {
    console.error("Error al obtener el mensaje original:", err);
    await message.reply("No encontré el mensaje al que estás respondiendo.");
    return true;
  }
};
