// In the folder where your bot's code is, create a JSON file and name it "exp.json"

var exp = "D:\\Discord\\SekoBot\\exp.json";
var fs = require("fs");
function editExp(id, ammount) {
    a = require(exp);
    if (typeof ammount == "string") ammount = JSON.parse(ammount);
    if (!a[id]) {
        a[id] = 0;
    }
    a[id] += ammount;
    fs.writeFile(exp, JSON.stringify(a));
}

client.on('message', message => {

    if (message.author.bot) return;

    var prefix = "$";   // Please don't use this. I'm a fan of the 2-character prefixes.
                        // My bot uses "x!" by default (it can be changed based on the server). 
                        // I'd recommend going by something like that, maybe
                        // [first character of your bot's name] + '/'
                        // I've had too many experiences with chat bots on other apps/programs that all had the same prefix.
	var args = message.content.split(/ {1,}/);
	var cmd = args[0].toLowerCase();
	var input = args.join(' ').substring(cmd.length + 1);

    function sendChat(content, options) {
        if (typeof content == "string") {
            content = content.replace("$user$", "<@" + message.author.id + ">");
        }
        if (!options) {
            message.channel.send(content);
        } else {
            message.channel.send(content, options);
        }
    }

    if ([prefix + "givexp"].includes(cmd)) {
        if (!input) {
            sendChat("Usage: " + cmd + " [@user] [ammount]");
        } else if (!/^<@!?[0-9]{1,}$/.test(args[1])) {
            sendChat("Please use a mention to specify which user you wish to give it to.");
        } else if (isNaN(args[2])) {
            sendChat('"' + args[2] + "\" is not a number.");
        } else {
            user = message.channel.guild.members.get(args[1].match(/[0-9]{1,}/)[0]);
            if (!user) {
                sendChat("User not found.");
            } else {
                editExp(user.user.id, args[2]);
                sendChat((args[2] > 0 ? "Given" : "Taken") + ' ' + args[2] + " EXP from " + args[1] + ".");
            }
        }
    }

});