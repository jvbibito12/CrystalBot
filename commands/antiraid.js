exports.run = async (client, message, args) => {
  const roleA = await message.guild.roles.cache.find(role => role.id === "742150782358519808"); 

  if (
    !message.member.roles.cache.some(r =>
      [
        "768317440273940510",
        "768317441020919828",
        "768317439598395402"
      ].includes(r.id) )) {
    return message.channel.send(`${message.author.username} esse comando é restrito.`);
  } else if (message.content.includes("on")) {
    await roleA.setPermissions(66561).catch(console.error);
    await message.channel.send(`O sistema de Antiraid foi ligado por ${message.author.username}`);
  } else if (message.content.includes("off")) {
    await roleA.setPermissions(36768769).catch(console.error);
    await message.channel.send(
      `O sistema de Antiraid foi desligado por ${message.author.username}`);
  } else {
    return message.channel.send(`${message.author.username} a sintaxe correta é antiraid on | off`);
  }
};