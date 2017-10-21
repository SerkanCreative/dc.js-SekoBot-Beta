// Load up the discord.js library
const Discord = require("discord.js");
const config = require("./config2.json"); 
//-------------------------------------------------------------
const client = new Discord.Client();
//-------------------------------------------------------------
client.on('ready', () => {
  console.log(`Giriş yapıldı ${client.user.tag}!`);
  console.log(`${client.users.size} Kullanıcı.`);
  console.log(`${client.channels.size} Kanal.`);
  console.log(`${client.guilds.size} Server.`);
  console.log(` `);
  console.log(`Konsol:`);
  client.user.setGame(`.yardim | Şuan ${client.guilds.size} server hizmetimizde.`);
});

client.on('message', message => {
  if(message.author.id !== "187949753412222978") return;
  const prefix = ".";
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + "exec")) {
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`Yeni server'e katildi: ${guild.name} (id: ${guild.id}). Kullanici: ${guild.memberCount} `);
  message.channel.send(`Server ismi: ${guild.name}`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Server'dan silindi: ${guild.name} (id: ${guild.id})`);
});


client.on("message", message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "faceit") { 
    const sayMessage = args.join(" "); 
    message.delete().catch(O_o=>{});
    message.channel.send(`Faceit ProLeague / Profile Background`, {
    files: [
      "./img/faceit.jpg"
    ]
  });
}; 
  
  if(command === "yaz") { 
    const sayMessage = args.join(" "); 
    message.delete().catch(O_o=>{}); 
    message.reply(`yazdi:
Mesaj: *${sayMessage}*`);
  }
   
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}
  
  if(command === "bilgi") { 
    const sayMessage = args.join(" "); 
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  "content": "Bot Bilgileri",
  "embed": {
   "color": 111111,
   "fields": [
      {
        "name": ":flag_tr: Bot Bilgileri",
        "value": "-> Bot yeri: `AZ`/n-> Kulanımda olan RAM: `14MB`/n-> Tüm RAM: `8GB`/n-> Bot motoru: `Discord.JS 6.11.4`"
      },
	  {
        "name": ":flag_tr: Server Bilgileri",
        "value": "-> Server yeri: `EU`/n-> Kulanımda olan DISK: `6971GB`/n-> Tüm DISK: `16TB`/n-> Server motoru: `Debian 7.1`"
      }
    ]
  }});
  }
  
  if(command === "yardim") { 
    const sayMessage = args.join(" "); 
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  "content": "Yardim",
  "embed": {
   "color": 1111111,
   "fields": [
      {
        "name": "Hes kes kullanabilir.",
        "value": "- .davet - Botun davet linki.\n- .bilgi - Bot bilgileri.\n- .dil - Botun destekledigi diller.\n- .yaz - Bot bilgileri.\n- .csgo - CSGO'da Bedava Skin Kazan."
      },
	  
	  {
        "name": "Bot yapimcisina ait komutlar",
        "value": "- ..exec - Script calistirir.\n- ..cmd - Konsol komutlarini `#cmdlogs` odasina yazar.\n- ..root - Bot reboot/restart/stop."
      }
    ]
  }});
  }
  
  if(command === "csgo") { 
    const sayMessage = args.join(" "); 
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  "content": "CSGO Free Skins",
  "embed": {
   "color": 111111,
   "fields": [
      {
        "name": ":flag_us: Bot CSGO Free Skins",
        "value": "https://csgo-case.com/code/ \n1. You need to have Counter Strike: Global Offensive on your steam account for the code to work.\n2. Click to Free > Enter Code\n3. Refferal-code: `MSeko`\nFinally: Get Free 0.15$ Money, No Deposit`)",
        "inline": true
      }
    ]
  }});
  }
  
  //###################################################
  if(command === "satilik") { 
    const sayMessage = args.join(" "); 
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  "content": "Steam Profili Satilik.",
  "embed": {
   "color": 111111,
   "fields": [
	{
        "name": "Steam Profili Satilik.",
        "value": "Fiyat: 150 TL\nProfil ismi: csgonuru1\nCounter-Strike GO: VAC BAN\nLink: http://steamcommunity.com/id/csgonuru1",
        "inline": true
	},
	{
        "name": "Oyunlar",
        "value": "Counter-Strike Full Pack\nGrand Theft Auto V\nDead by Daylight\nDead by Daylight: Deluxe Edition\nPressure\nRust\nDiRT 3 Complete Edition\nGRID\nDiRT Showdown",
        "inline": true
	}
    ]
  }});
	
	message.channel.send({
  "content": "Steam Profili Satilik.",
  "embed": {
   "color": 111111,
   "fields": [
	{
        "name": "Steam Profili Satilik.",
        "value": "Fiyat: 45 TL\nProfil ismi: prosmurffear\nLink: http://steamcommunity.com/id/prosmurffear",
        "inline": true
	},
	{
        "name": "Oyunlar",
        "value": "Counter-Strike Full Pack\nDiRT 3 Complete Edition\nGRID\nDiRT Showdown",
        "inline": true
	}
    ]
  }});
  
  message.channel.send({
  "content": "feedback",
  "embed": {
   "color": 888888,
   "fields": [
	{
        "name": "Steam Profili Satilik.",
        "value": " "
	}
    ]
  }});
  }
  //###################################################
  
  if(command === "31cek") {
	const dc = args.join(" ");
    message.delete().catch(O_o=>{});
	message.channel.send(`
:ok_hand:            :weary:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8=:punch: = D :sweat_drops:
             :trumpet:      :eggplant:                 :sweat_drops:
             :boot:         :boot:
	`);
	console.log(`31cek emoji`);
  }
 
  if(command === "davet") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(`== **Discord Bot Invite Link** ==
**Beta sürümü v0.2 | Komut: .yardim
https://discordapp.com/oauth2/authorize?client_id=292595261937680384&scope=bot&permissions=204991495`);
	console.log(`Discord Bot Invite Link | Beta v0.2`);
  }
  
  if(command === "oyun") {
	const setgamer = args.join(" ");
    message.delete().catch(O_o=>{});
	client.user.setGame(`${setgamer}`);
    message.channel.send(`Oyun ismi duzenlendi: ${setgamer}`);
	console.log(`Oyun ismi duzenlendi: ${setgamer}`);
  }
  
  if(command === "dil") { 
    const sayMessage = args.join(" "); 
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  "content": "Bot dil secenekleri",
  "embed": {
   "color": 8975082,
   "fields": [
      {
        "name": ":flag_az:",
        "value": "Azərbaycan dil paketi yapimda."
      },
    
      {
        "name": ":flag_tr:",
        "value": "Türkce dil paketi var."
      },
  
      {
        "name": "WebPanel",
        "value": "Yok",
        "inline": true
      },

      {
        "name": "Bot koruması",
        "value": "Var",
        "inline": true
      }
    ]
  }});
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["MSeko", "SuperAdmin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    // Now, time for a swift kick in the nuts!
     member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["MSeko"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("BAN sebebi yaziniz!");
    
     member.ban(reason)
      .catch(error => message.reply(`Uzgunum. ${message.author} sadece MSeko banlama yapa bilir. : ${error}`));
    message.reply(`${member.user.tag} Kullanici BANLANDI. ${message.author.tag} tarafindan. sebeb: ${reason}`);
  }
  
  if(command === "sil") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply("Please provide a number between 1 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(config.token);
