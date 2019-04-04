const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = (args) => {
const express = require('./express.js');
express(args);
    };

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
      client.user.setActivity(`S_help | ${client.guilds.size} servers | v1.3`);
});
	
client.on("message", (message) => {
  if (message.content.startsWith("S_ping")) {
    let ping = new Discord.RichEmbed()
    .setColor("#2441e2")
    .addField("Shifter Ping", "Pong!")
    .addField("Response time", new Date().getTime() - message.createdTimestamp + " ms");

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("S_updates")) {
    let ping = new Discord.RichEmbed()
    .setColor("#ffab43")
    .addField("Shifter Update", ":white_check_mark: Shifter is up-to-date!");

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("S_updatelog")) {
    let log = new Discord.RichEmbed()
    .setDescription("Shifter Updatelog")
    .setColor("#12b629")
    .addField("Version", "1.3")
    .addField("Last update date", "April 4 2019")
    .addField("Created on", "Sunday, June 16 2018")
    .addField("What is in this update?", "Added (dutch)memes, added the updatelog command to the help and updated the support command");

message.channel.send(log);
  }
});


client.on("message", (message) => {
  if (message.content.startsWith("goedemorgen")) {
    let ping = new Discord.RichEmbed()
    .setColor("#ffab43")
    .addField("Shifter Good Morning", `Goedemorgen ${message.author}`);

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Goedemorgen")) {
    let ping = new Discord.RichEmbed()
    .setColor("#ffab43")
    .addField("Shifter Good Morning", `Goedemorgen ${message.author}`);

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("morguh")) {
    let ping = new Discord.RichEmbed()
    .setColor("#ffab43")
    .addField("Shifter Good Morning", `Goedemorgen ${message.author}`);

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Morguh")) {
    let ping = new Discord.RichEmbed()
    .setColor("#ffab43")
    .addField("Shifter Good Morning", `Goedemorgen ${message.author}`);

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Good morning")) {
    let ping = new Discord.RichEmbed()
    .setColor("#ffab43")
    .addField("Shifter Good Morning", `Good morning ${message.author}`);

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("good morning")) {
    let ping = new Discord.RichEmbed()
    .setColor("#ffab43")
    .addField("Shifter Good Morning", `Good morning ${message.author}`);

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("mornin")) {
    let ping = new Discord.RichEmbed()
    .setColor("#ffab43")
    .addField("Shifter Good Morning", `Good morning ${message.author}`);

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Mornin")) {
    let ping = new Discord.RichEmbed()
    .setColor("#ffab43")
    .addField("Shifter Good Morning", `Good morning ${message.author}`);

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("S_about")) {
    let about = new Discord.RichEmbed()
    .setDescription("Shifter About")
    .setColor("#12b629")
    .addField("Name", "Shifter")
    .addField("Created by", "Fermion#3927")
    .addField("Created on", "Sunday, June 16 2018")
    .addField("Servers running", `${client.guilds.size}`)
    .addField("Amount users", `${client.users.size}`)
    .addField("Commands", "39");

message.channel.send(about);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("S_vote")) {
    let vote = new Discord.RichEmbed()
    .setColor("#12b629")
    .addField("Shifter Vote", "Vote me here: https://discordbots.org/bot/446750923222417428/vote");
    
    message.channel.send(vote);
  }
});

client.on("message", (message) => {
	if (message.content.startsWith("S_1purge")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 1 message");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_2purge")) {
      let messagecount = parseInt(2);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 2 messages");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_3purge")) {
      let messagecount = parseInt(3);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 3 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_4purge")) {
      let messagecount = parseInt(4);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 4 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_5purge")) {
      let messagecount = parseInt(5);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
   .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 5 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_6purge")) {
      let messagecount = parseInt(6);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 6 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_7purge")) {
      let messagecount = parseInt(7);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 7 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_8purge")) {
      let messagecount = parseInt(8);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
  .setColor("000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 8 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_9purge")) {
      let messagecount = parseInt(9);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 9 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_10purge")) {
      let messagecount = parseInt(10);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 10 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_11purge")) {
      let messagecount = parseInt(11);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 11 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_12purge")) {
      let messagecount = parseInt(12);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 12 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_13purge")) {
      let messagecount = parseInt(10);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 13 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_14purge")) {
      let messagecount = parseInt(14);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 14 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_15purge")) {
      let messagecount = parseInt(15);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 15 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_16purge")) {
      let messagecount = parseInt(16);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 16 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_17purge")) {
      let messagecount = parseInt(17);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 17 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_18purge")) {
      let messagecount = parseInt(18);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 18 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_19purge")) {
      let messagecount = parseInt(19);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 19 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("S_20purge")) {
      let messagecount = parseInt(20);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#000000")
    .addField("Shifter Purge", ":wastebasket: I deleted the last 20 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {

  if (message.content.startsWith("S_kick")) {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: Can't find user! Please check it and try again.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: That person can't be kicked! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");
    if(kUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: That person can't be kicked! Reason: The user has the same permissions, it is a bot or it is not a valid reason");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Shifter Kick")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "general");
    if(!kickChannel) return message.channel.send(":x: Can't find general channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }
}); 

client.on("message", (message) => {

  if (message.content.startsWith("S_warn")) {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: Can't find user! Please check it and try again.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: That person can't be warned! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");

    let warned = new Discord.RichEmbed()
    .setDescription("Shifter Warn")
    .setColor("#ff0000")
    .addField("Warned User", `${kUser} with ID ${kUser.id}`)
    .addField("Warned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Warned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    message.channel.send(":white_check_mark: The user got a warning in dm. I send also a copy of the warning here");
    message.channel.send(warned);
    kUser.send(warned);

    return;
  }
}); 

client.on('message', (message) => {
  if (message.content.startsWith("S_help")) {
    message.channel.send(':white_check_mark: Check your dm with my commands!');
  let embed = new Discord.RichEmbed()
  .setDescription("Shifter Help v2.0")
  .setColor("#15f153")
  .addField("S_help", 'Gets help page')
  .addField("S_funhelp", 'Gets the help page for fun commands')
  .addField("S_ping", 'Checks if the bot responds')
  .addField("S_servers", 'Display how many server the bot runs')
  .addField("S_serverinfo", 'Displays info about your server')
  .addField("S_about", 'Gets info about the bot')
  .addField("S_invite", 'Gets invite link for your server')
  .addField("S_support", 'Link to support server')
  .addField("S_vote", 'Vote for the bot')
  .addField("S_<number>purge", 'Deletes some messages. Do not use the <>. You can choose between 1 and 20. Example: S_4purge')
  .addField("S_kick <@user> <reason>", 'Kick an user. Do not use the <>. Example: S_kick @user#0000 angry')
  .addField("S_ban <@user> <reason>", 'Ban an user. Do not use the <>. Example: S_ban @user#0000 stupid')
  .addField("S_warn <@user> <reason>", 'Warn an user. Do not use the <>. Example: S_warn @user#0000 rude to people')
  .addField("S_updates", 'Check if Shifter has updates. The updates does he download automatically')
  .addField("S_updatelog", 'Gives information about the latest update')
  .addField("Shifter Good Morning", 'Shifter says good morning to you when you type Goedemorgen, Morning, Good morning. It supports only Dutch and English now. Later more languages!')

    message.member.send(embed);
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("S_funhelp")) {
    message.channel.send(':white_check_mark: Check your dm with my fun commands!');
    let fun = new Discord.RichEmbed()
    .setDescription("Shifter Fun Help v1.1")
    .setColor("#15f153")
    .addField("S_avatar", 'Get your avatar')
  .addField("S_dice", 'Dice roll')
  .addField("S_2dices", '2 dices roll')
  .addField("S_win", 'Test if you can win from Shifter')
  .addField("S_anime", 'Shows random anime pictures')
  .addField("S_pat @<user>", 'Pat an user. Do not use the <>. Example: S_pat @user#0000')
  .addField("S_meme", 'Shows random memes')
  .addField("S_dutchmeme", 'Shows random memes in Dutch')
  .addField("S_cat", 'Shows random cats')
  .addField("S_lottery", 'A lottery. Earn money or lose')
  .addField("S_ask <your question>", 'Ask shifter a YES or NO question. Do not use the <>')
  .addField("S_card <your card>", 'Play a card game with Shifter. Do not use the <>. Example: S_card Hearts 5')
  .addField("S_gay", 'Test how much gay you are')
  .addField("S_lesbian", 'Test how much lesbian you are')
  .addField("S_shoot @<user>", 'Shoot to someone. Do not use the <>. Example: S_shoot @user#0000')
  .addField("S_kill @<user>", 'Kill someone. Do not use the <>. Example: S_kill @user#0000')
  .addField("S_uq", 'Get a useless question from Shifter')
  .addField("S_digit", 'Get a digit from Shifter. Hopefully a good one!');
    
  message.member.send(fun)
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("S_shop")) {
    let shop = new Discord.RichEmbed()
    .setDescription("Shifter Online Shop V1.0")
    .setColor("0x00AE86")
    .addField(":gift: Gift", `Price: $15`) 
    .addField(":lock: Lock", `Price: $5`)
    .addField(":tangerine: Tangerine", `Price: $2`)
    .addField(":green_apple: Green apple", `Price: $2`)
    .addField(":cookie: Cookie", `Price: $2`)
    .addField(":doughnut: Doughnut", `Price: $2`) 
    .addField(":tickets: Ticket", `Price $20`)
    .addField(":iphone: iPhone", `Price: $750`)
    .addField(":camera: Camera", `Price: $60`)
    .addField(":hammer: Hammer", `Price: $25`)
    .addField(":desktop: Computer", `Price: $500`)
    .addField(":printer: Printer", `Price: $100`)
    .addField(":tv: TV", `Price: $300`);
    
message.channel.send(shop);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("S_ban")) {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":x: Can't find user! Please check it and try again");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: That person can't be banned! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: That person can't be banned! Reason: The user has the same permissions, it is a bot or it is not a valid reason.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Shifter Ban")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);
    


    let incidentchannel = message.guild.channels.find(`name`, "general");
    if(!incidentchannel) return message.channel.send("Can't find general channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("S_shoot")) {
    let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
   let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let shoot = new Discord.RichEmbed()
    .setColor("#15f153")
    .addField("Shifter Shoot", `${kUser} has been shot by ${message.author}`);
    
    message.channel.send(shoot);
  }
});

client.on("message", function(message) {
    if (message.content == "S_win") {
      
var answers = [ 

  'You won! :smiley: ', 

  'You lost. Try again later :frowning: ',
  
  'It is a draw. :no_entry:',
  
];

let win = answers[Math.floor(Math.random() * answers.length)];
let win2 = new Discord.RichEmbed()
    .setColor("#ffff66")
    .addField("Shifter Win", `${win}`);

message.channel.send(win2);
    }
});

client.on("message", function(message) {
    if (message.content == "S_uq") {
      
var answers = [ 

  'How to read a book?',
  'How to walk forward or backwards?',
  'Why are traffic light the colors red, orange/yellow and green?',
  'How can I have sex?',
  'How to stop gangbang?',
  'Is it possible to swim in lava?',
  'What is a luigiboard?',
  'What is a car?',
  'What is a dog?',
  'How long is a piece of string?',
  'Why is the word dictionary in the dictionary?',
  'Why is it you must wait until night to call it a day?',
  'Can I have sex with 2 womens at the same time?',
  'Why is it called lipstick if you can still move your lips?',
  'Why is it called a "building" when it is already built?',
  'Why is it that doctors call what they do "practice"?',
  'Why does not Tarzan have a beard?',
  'Why is a boxing ring square?',
  'If Superman is so smart why does he wear his underpants over his trousers?',
  'If swimming is good for your shape, then why do the whales look like the way they do?',
  'Why do wise guy and wise man mean entirely different things?',
  'Why does Goofy stand erect while Pluto remains on all fours? They are both dogs!',
  'Why does it take 15 minutes to cook minute rice?',
  'Why does the sun lighten our hair, but darken our skin? 91. If I save time, when do I get it back?',
  'Why do they make scented toilet paper?',
  'Why do they cotton swab the guys arm with rubbing alcohol before a lethal injection?',
  'Why do Aliens abduct Humans if we are an inferior race?',
  'If 4 out of 5 people suffer from diarrhea does the 5th one enjoy it?',
  'Can a vegetarian eat animal crackers?',
  'If you stay awake all night do you still have morning breath?',
  'What is the speed of dark?',
  'How fast is a car?',
  'What happens if a black cat carrying a rabbit’s foot crosses your path?',
  'If I die, can I still watching porn?',
  'If I die, can I still watching anime?',
  'What is Internet Explorer?',
  'Why are black people black?',
  'What kind of bees produce milk?',
  'Does dreams comes out?',
  'How were unicorns made?',
  'How to stop eating my skin?',
  'Can games bite my ears?',
  'If evolution is true then why do pigs not have wings?',
  'Am I out of shape if a turtle can outrun me?',
  'What does the leaning tower of pizza taste like?',
  'Is an egg a fruit or vegetable?',
  'Is it possible to make toast in a microwave?',
  'Who is the father or the internet?',
  'Should my dog learn to drive?',
  'Donuts business?',
  'Why does not McDonalds sell hotdogs?',
  'Is it still illegal to park next to a fire hydrant, even if your car is on fire?',
  'Can you daydream at night?',
  'What is a picture of a thousand words worth?',
  'Why does quicksand work slowly?',
  'Can animals commit suicide?',
  'Why is vanilla ice cream white when vanilla extract is brown?',
  'Why do people think that swaying their arm back and forth would change the direction of a bowling ball?',
  'How can something be "new" and "improved"? if it is new, what was it improving on?',
  'If money does not grow on trees then why do banks have branches?',
  'Why does the Easter bunny carry eggs? Rabbits do not lay eggs.',
  'Can a short person "talk down" to a taller person?',
  'Since bread is square, then why is sandwich meat round?',
  'Why are they called Jolly Ranchers? Who said that the ranchers were jolly?',
  'What is the difference between normal ketchup and fancy ketchup?',
  'Is a pessimists blood type B-negative?',
  'If pro and con are opposites, would not the opposite of progress be congress?',
  'If ghosts can walk through walls and glide down stairs, why do not they fall through the floor?',
  'If a mime is arrested, do they tell him he has a right to talk?',
  'If a bunch of cats jump on top of each other, is it still called a dog pile?',
  'If God sneezes, what should you say?',
  
];

let win = answers[Math.floor(Math.random() * answers.length)];
let win2 = new Discord.RichEmbed()
    .setColor("#ff7f19")
    .addField("Shifter Useless Questions", `${win}`);

message.channel.send(win2);
    }
});
client.on('message', (message) => {
  if (message.content.startsWith("S_kill")) {
    let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
   let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  
  var answers = [ 

  `${kUser} tried to run away from ${message.author} but failed and died`, 

  `${message.author} killed ${kUser} with a knife he/she bought yesterday. I thought he/she bought it for fun but not I see`,
    
  `${kUser} was waiting for the bus. ${message.author} was driving a bus and driven against someone and ${kUser} died. Why was he/she driving a bus without a bus driver licence?`,

  `${kUser} thought he/she was smarter then ${message.author} but it was not. ${message.author} had a bodyguard. The bodyguard killed ${kUser}. I do not know why. Ask ${message.author}`,
    
  `Sorry, I do not want to kill someone. Try again later.`,
    
  `${message.author} gave ${kUser} a teleporter. ${kUser} did not know how it works and was teleported to Mars. Because there is no atmosphere, ${kUser} died.`,
    
  `${kUser} died. End.`,
    
  `${message.author} you thought I am going to kill someone? Okay I use my chainsaw. Shifter killed ${kUser} with a chainsaw.`,
  
  `${message.author} bought a hammer. He used the hammer to kill ${kUser}.`,
    
  `${message.author} was walking with his/her fiancé. ${kUser} was his/her ex. ${message.author} killed ${kUser} to secure his/her fiancé.`,
    
  `${kUser} died. There was a sign with "LOOK OUT. BIG HOLE'. ${kUser} did not seen that and fallen in the big hole. What an idiot.`,
    
  `${message.author} has exploded the house in which ${kUser} lives. ${kUser} was at home and died while the house has exploded.`,
  
  `${kUser} was on a boat. The boat has sunk and ${kUser} drowned.`,
    
  `${kUser} and ${message.author} were driving a motor. ${kUser} fell on the ground and did not survive it.`,
  
  `Shifter told ${kUser} how he/she can survive the dead. ${kUser} did that and ${message.author} died. What did Shifter told him?`,
    
  `${message.author} threw a big stone to ${kUser}. ${kUser} did not survive it.`,
    
  `${message.author} called the police. 5 minutes later the police arrived and shot ${kUser} down.`,
    
  `${kUser} ran away from ${message.author} and did not die.`,
    
  `${kUser} was very annoyed about ${message.author} and his/her head has exploded.`,
    
  `Someone called the police. Police shot both down. Nobody wins now.`,
    
  `${message.author} made a bomb. He/she threw the bomb to ${kUser} and ${kUser} died while the bomb has exploded.`,
    
  `${kUser} was hit by thunder. Sorry you are not Thor.`,
    
  `${message.author} called the Hulk. He/she asked the Hulk for help. The Hulk smashed ${kUser}.`,
    
  `${kUser} has been killed by a bear.`,
    
  `${message.author} teleported ${kUser} to a war game. ${kUser} has been shot by a shotgun.`,
  
  `${kUser} watched too much porn and died.`,
  
  `${kUser} had the music to max volume. ${kUser}s head exploded by the volume of the music.`,
    
  `${message.author} killed ${kUser} with his car.`,
    
  `${kUser} was swimming in the sea. A shark attacked ${kUser} and ${kUser} died.`,
    
  `${kUser} was hit by a piano that had fallen from the sky. ${kUser} did not survive it.`,
  
  `${kUser} has been killed by a virus on Windows 10.`,
    
  `${kUser} asked ${message.author} if he/she may borrow his/her horse. No problem said ${message.author}. The horse did not like ${kUser} and attacked him/her. ${kUser} did not survive it.`,
    
  `${kUser} fell in the water, fell off a waterfall and fell on a stone. That hurts a lot. ${kUser} got so much hits that he/she did not survive it.`,
    
  `${kUser} was hit by an explosion that ${message.author} made.`

  `${message.author} was just fishing at a river. ${kUser} was swimming in the river and hit by a ship.`
	  
  `${kUser} tried to kill ${message.author} with a sneaky face. Sorry but you failed my friend.`
	 
  `${kUser} was killed by a demon. Did you not know they exist? I believe they exist....`

  `I have a story for you. Just not a normal story. I was walking with ${kUser} in the forest. I heard something. Some seconds later ${kUser} was killed by a monster. I did not see which kind of monster it was.`

  
];

let kill2 = answers[Math.floor(Math.random() * answers.length)];
    let kill = new Discord.RichEmbed()
    .setColor("#e56b00")
    .addField("Shifter Kill", `${kill2}`);
  
  message.channel.send(kill);
}
});

client.on('message', (message) => {
  if (message.content.startsWith("S_pat")) {
    let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
   let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  
  var answers = [
	  'https://media.giphy.com/media/N0CIxcyPLputW/giphy.gif',
	  'https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853',
	  'http://gifimage.net/wp-content/uploads/2018/04/pat-pat-gif-11.gif',
	  'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/2/2e/Jake_pat.gif/revision/latest?cb=20110822162728',
	  'http://gifimage.net/wp-content/uploads/2018/04/pat-gif-5.gif',
	  'https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif',
	  'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif',
	  'https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-size_restricted.gif',
	  'https://i.imgur.com/So4WHpF.gif?noredirect',
	  'https://media1.tenor.com/images/398c9c832335a13be124914c23e88fdf/tenor.gif?itemid=9939761',
	  'http://gifimage.net/wp-content/uploads/2018/04/pat-gif-9.gif',
	  'https://animatedit.files.wordpress.com/2017/01/omake-gif-anime-gate-episode-15-tuka-head-pat.gif',
	  'https://i.imgur.com/LUypjw3.gif',
	  'https://giffiles.alphacoders.com/248/2482.gif',
	  'https://giant.gfycat.com/BlankGiftedBurro.gif',
	  'https://cdn155.picsart.com/227838839007202.gif?r1024x1024',
	  'https://i.kym-cdn.com/photos/images/newsfeed/000/962/743/76d.gif',
	  'https://78.media.tumblr.com/b4d110b98079b935512467aad091f068/tumblr_myki5bzz0U1shdfeho1_500.gif',
	  'http://24.media.tumblr.com/e6713de4cab8a28711835b6a339928b4/tumblr_mp0yr2VHQQ1rvdjx0o4_500.gif',
	  'https://ci.memecdn.com/4408183.gif',
	  'https://lh3.googleusercontent.com/-Nhv1fkZsmIg/VbFlxiHtIqI/AAAAAAAAAcg/z0Fe_7Wci2U/w480-h270/1372623291856.gif',
	  'http://30.media.tumblr.com/bde29ae19fa160f0fc7bc8f0dcf5308b/tumblr_n7t4ioLycK1rbnx7io1_500.gif',
	  'http://www.thebakingspoon.com/wp-content/uploads/2013/12/patt.gif',
	  'https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif?itemid=7394758',
	  'https://i.pinimg.com/originals/a0/6d/65/a06d65ad49f019aaae3f30fb872df619.gif',
	  'https://i.kym-cdn.com/photos/images/newsfeed/000/962/743/76d.gif',
	  'https://i.makeagif.com/media/7-25-2014/yprfox.gif',
	  'https://vignette.wikia.nocookie.net/date-a-live/images/4/49/Tumblr_n6gbzqv4VX1so56pco2_500.gif/revision/latest?cb=20150607053039',
	  'https://hypixel.net/attachments/pat-pat-gif.836631/',
	  'https://78.media.tumblr.com/1cebb497f0f43e09221b40c0903e29ae/tumblr_nuf0l7TWxe1uwzy53o1_500.gif',
	  'https://archive-media-0.nyafuu.org/c/image/1483/55/1483553008493.gif',
	  'http://gifimage.net/wp-content/uploads/2017/09/anime-pat-gif-3.gif',
	  'https://media.tenor.com/images/f48ffb8cf033d1aefe4693045aedad5a/tenor.gif',
	  'http://31.media.tumblr.com/da9a1ea1e8eab9b48647266277f1aa4c/tumblr_miurofstk31rhyx92o1_500.gif',
	  'http://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-10.gif',
	  'https://media1.tenor.com/images/291ea37382e1d6cd33349c50a398b6b9/tenor.gif?itemid=10204936',
	  'https://vignette.wikia.nocookie.net/loli8353/images/f/f3/Petting_Renge.gif/revision/latest?cb=20180301081056',
	  'http://farm4.staticflickr.com/3776/9187590619_3cf831b4fa_o.gif',
	  'https://memestatic.fjcdn.com/gifs/Headpat_17fcf6_6500559.gif',
	  'https://uploads.disquscdn.com/images/635f054ddde01f87240a9a59148f873d3964a390fe519e5001ae16bdda72452e.gif',
	  'https://lh3.googleusercontent.com/-FRlK4kmOtNg/WcnEBFjPumI/AAAAAAACJp8/aw1WFnE9e68GQL3uP_1e6cGLP4ya96zDQCJoC/w414-h304/d5e9260c-ecea-4d43-95a8-54e94c33bcd6.gif',
	  'https://78.media.tumblr.com/1cebb497f0f43e09221b40c0903e29ae/tumblr_nuf0l7TWxe1uwzy53o1_500.gif',
	  'https://67.media.tumblr.com/f4ad55e5000971774f9df8905eabf110/tumblr_oa7t1gUNOq1u21ng6o2_540.gif',
	  
  ];
  
let pat1 = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`**${message.author} pats ${kUser}**`);
message.channel.send(`${pat1}`);
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("S_digit")) {
  var answers = [ 
	 '1.0. That hurts I think :worried:',
	 '1.1. That hurts I think :worried:',
	 '1.2. That hurts I think :worried:',
	 '1.3. That hurts I think :worried:',
	 '1.4. That hurts I think :worried:', 
	 '1.5. That hurts I think :worried:',
	 '1.6. That hurts I think :worried:',
	 '1.7. That hurts I think :worried:',
	 '1.8. That hurts I think :worried:',
	 '1.9. That hurts I think :worried:',
	 '2.0. That hurts I think :worried:',
	 '2.1. That hurts I think :worried:',
	 '2.2. That hurts I think :worried:',
	 '2.3. That hurts I think :worried:',
	 '2.4. That hurts I think :worried:',
	 '2.5. That is very low :frowning:',
	 '2.6. That is very low :frowning:',
	 '2.7. That is very low :frowning:',
	 '2.8. That is very low :frowning:',
	 '2.9. That is very low :frowning:',
	 '3.0. That is very low :frowning:',
	 '3.1. That is very low :frowning:',
	 '3.2. That is very low :frowning:',
	 '3.3. That is very low :frowning:',
	 '3.4. That is very low :frowning:',
	 '3.5. That is very low :frowning:',
	 '3.6. That is very low :frowning:',
	 '3.7. That is very low :frowning:',
	 '3.8. That is very low :frowning:',
	 '3.9. That is very low :frowning:',
	 '4.0. This is not that kind high, but it could be worse am I right? :thinking:',
	 '4.1. This is not that kind high, but it could be worse am I right? :thinking:',
	 '4.2. This is not that kind high, but it could be worse am I right? :thinking:',
	 '4.3. This is not that kind high, but it could be worse am I right? :thinking:',
	 '4.4. This is not that kind high, but it could be worse am I right? :thinking:',
	 '4.5. This is not that kind high, but it could be worse am I right? :thinking:',
	 '4.6. This is not that kind high, but it could be worse am I right? :thinking:',
	 '4.7. This is not that kind high, but it could be worse am I right? :thinking:',
	 '4.8. This is not that kind high, but it could be worse am I right? :thinking:',
	 '4.9. This is not that kind high, but it could be worse am I right? :thinking:',
	 '5.0. You are almost there! Do not give up! :wink:',
	 '5.1. You are almost there! Do not give up! :wink:',
	 '5.2. You are almost there! Do not give up! :wink:',
	 '5.3. You are almost there! Do not give up! :wink:',
	 '5.4. You are almost there! Do not give up! :wink:',
	 '5.5. It is risky but at leat it is sufficient :no_mouth:',
	 '5.6. It is risky but at leat it is sufficient :no_mouth:',
	 '5.7. It is risky but at leat it is sufficient :no_mouth:',
	 '5.8. It is risky but at leat it is sufficient :no_mouth:',
	 '5.9. It is risky but at leat it is sufficient :no_mouth:',
	 '6.0. It is a suffiecient, try to get higher! :flushed:',
	 '6.1. It is a suffiecient, try to get higher! :flushed:',
	 '6.5. It is a suffiecient, try to get higher! :flushed:',
	 '6.6. It is a suffiecient, try to get higher! :flushed:',
	 '6.7. It is a suffiecient, try to get higher! :flushed:',
	 '6.8. It is a suffiecient, try to get higher! :flushed:',
	 '6.9. It is a suffiecient, try to get higher! :flushed:',
	 '7.0. You are on the way! :slight_smile:',
	 '7.1. You are on the way! :slight_smile:',
	 '7.2. You are on the way! :slight_smile:',
	 '7.3. You are on the way! :slight_smile:',
	 '7.4. You are on the way! :slight_smile:',
	 '7.5. You are on the way! :slight_smile:',
	 '7.6. You are on the way! :slight_smile:',
	 '7.7. You are on the way! :slight_smile:',
	 '7.8. You are on the way! :slight_smile:',
	 '7.9. You are on the way! :slight_smile:',
	 '8.0. Good job! Well done! :grin:',
	 '8.1. Good job! Well done! :grin:',
	 '8.2. Good job! Well done! :grin:',
	 '8.3. Good job! Well done! :grin:',
	 '8.4. Good job! Well done! :grin:',
	 '8.5. Good job! Well done! :grin:',
	 '8.6. Good job! Well done! :grin:',
	 '8.7. Good job! Well done! :grin:',
	 '8.8. Good job! Well done! :grin:',
	 '8.9. Good job! Well done! :grin:',
	 '9.0. Great job! Almost a 10! :grinning:',
	 '9.1. Great job! Almost a 10! :grinning:',
	 '9.2. Great job! Almost a 10! :grinning:',
	 '9.3. Great job! Almost a 10! :grinning:',
	 '9.4. Great job! Almost a 10! :grinning:',
	 '9.5. Great job! Almost a 10! :grinning:',
	 '9.6. Great job! Almost a 10! :grinning:',
	 '9.7. Great job! Almost a 10! :grinning:',
	 '9.8. Great job! Almost a 10! :grinning:',
	 '9.9. Great job! Almost a 10! :grinning:',
	 '10.0. You got a 10! You are the perfect one! Who also got a 10? :relaxed:',
  ];
	  
let number = answers[Math.floor(Math.random() * answers.length)];
let diceroll = new Discord.RichEmbed()
    .setColor("#15f153")
    .addField("Shifter Digit", `I give you as digit ${number}`);
	  
message.channel.send(diceroll);
	  
  }
});


client.on('message', (message) => {
	if (message.content.startsWith("S_servers")) {
    let servers = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Servers", `**${client.guilds.size}**` + ' server(s) I am running ');
    
    message.channel.send(servers);
	}
});

client.on('message', (message) => {
	if (message.content.startsWith("S_invite")) {
    let invite = new Discord.RichEmbed()
    .setColor("#12b629")
    .addField("Shifter Invite", "Invite me here: https://discordapp.com/oauth2/authorize?&client_id=446750923222417428&scope=bot&permissions=8");
    
    message.channel.send(invite);
	}
});

client.on('message', (message) => {
	if (message.content.startsWith("S_support")) {
    let support = new Discord.RichEmbed()
    .setColor("#12b629")
    .addField("Shifter Support", "If you have any question or you have a problem you can join this server: https://discord.gg/6rzUtyf");
    
    message.channel.send(support);
	}
});

client.on('message', (message) => {
	if (message.content.startsWith("S_avatar")) {
     message.channel.send(message.author.avatarURL);
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("S_serverinfo")) {
   let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }
});

client.on("message", function(message) {
    if (message.content == "S_dice") {

var answers = [ 

  '1', 

  '2',

  '3',
  
  '4',
  
  '5',
  
  '6',

];

let dice = answers[Math.floor(Math.random() * answers.length)];
let diceroll = new Discord.RichEmbed()
    .setColor("#15f153")
    .addField("Shifter Diceroll", `You rolled ${dice} :game_die:`);

message.channel.send(diceroll);

}

});

client.on('message', (message) => {
	if (message.content.startsWith("S_ask")) {

var answers = [ 

  ':speech_left: Yes', 

  ':speech_left: No',


];

let yesno = answers[Math.floor(Math.random() * answers.length)];
let ask = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Ask", `${yesno}`);

message.channel.send(ask);

}

});

client.on('message', (message) => {
	if (message.content.startsWith("S_card")) {

var answers = [ 

  ':spades: A', 
  
  ':spades: K',
  
  ':spades: Q',
  
  ':spades: J',
  
  ':spades: 10',
  
  ':spades: 9',
  
  ':spades: 8',
  
  ':spades: 7',
  
  ':spades: 6',

  ':spades: 5',
  
  ':spades: 4',
  
  ':spades: 3',
  
  ':spades: 2',
  
  ':clubs: A', 
  
  ':clubs: K',
  
  ':clubs: Q',
  
  ':clubs: J',
  
  ':clubs: 10',
  
  ':clubs: 9',
  
  ':clubs: 8',
  
  ':clubs: 7',
  
  ':clubs: 6',

  ':clubs: 5',
  
  ':clubs: 4',
  
  ':clubs: 3',
  
  ':clubs: 2',
  
  ':hearts: A', 
  
  ':hearts: K',
  
  ':hearts: Q',
  
  ':hearts: J',
  
  ':hearts: 10',
  
  ':hearts: 9',
  
  ':hearts: 8',
  
  ':hearts: 7',
  
  ':hearts: 6',

  ':hearts: 5',
  
  ':hearts: 4',
  
  ':hearts: 3',
  
  ':hearts: 2',
  
  ':diamonds: A', 
  
  ':diamonds: K',
  
  ':diamonds: Q',
  
  ':diamonds: J',
  
  ':diamonds: 10',
  
  ':diamonds: 9',
  
  ':diamonds: 8',
  
  ':diamonds: 7',
  
  ':diamonds: 6',

  ':diamonds: 5',
  
  ':diamonds: 4',
  
  ':diamonds: 3',
  
  ':diamonds: 2',
  
  'I have lost my card :sweat_smile: ',

];

let card = answers[Math.floor(Math.random() * answers.length)];
    let cardgame = new Discord.RichEmbed()
    .setColor("#7b72b6")
    .addField("Shifter Card", `I had ${card}`);

message.channel.send(cardgame);

}

});

client.on("message", function(message) {
    if (message.content == "S_2dices") {

var answers = [  

  '2',

  '3',
  
  '4',
  
  '5',
  
  '6',
  
  '7',
  
  '8',
  
  '9', 
  
  '10', 
  
  '11', 
  
  '12',

];

let dice2 = answers[Math.floor(Math.random() * answers.length)];
      let diceroll2 = new Discord.RichEmbed()
    .setColor("#15f153")
    .addField("Shifter 2 Dices", `You rolled ${dice2} :game_die: :game_die:`);

message.channel.send(diceroll2);

}

});

client.on("message", function(message) {
    if (message.content == "S_gay") {

var answers = [ 

 '1', 

  '2',

  '3',
  
  '4',
  
  '5',
  
  '6',
  
  '7',
  
  '8',
  
  '9',
  
  '10',
  
  '11',
  
  '12',
  
  '13',
  
  '14',
  
  '15',
  
  '16',
  
  '17',
  
  '18',
  
  '19',
  
  '20',
  
  '21',
  
  '22',
  
  '23',
  
  '24',
  
  '25',
  
  '26',
  
  '27',
  
  '28',
  
  '29',
  
  '30',
  
  '31',
  
  '32',
  
  '33',
  
  '34',
  
  '35',
  
  '36',
  
  '37',
  
  '38',
  
  '39',
  
  '40',
  
  '41',
  
  '42',
  
  '43',
  
  '44',
  
  '45',
  
  '46',
  
  '47',
  
  '48',
  
  '49',
  
  '50',
  
  '51',
  
  '52',
  
  '53',
  
  '54',
  
  '55',
  
  '56',
  
  '57',
  
  '58',
  
  '59',
  
  '60',
  
  '61',
  
  '62',
  
  '63',
  
  '64',
  
  '65',
  
  '66',
  
  '67',
  
  '68',
  
  '69',
  
  '70',
  
  '71',
  
  '72',
  
  '73',
  
  '74',
  
  '75',
  
  '76',
  
  '77',
  
  '78',
  
  '79',
  
  '80',
  
  '81',
  
  '82',
  
  '83',
  
  '84',
  
  '85',
  
  '86',
  
  '87',
  
  '88',
  
  '89',
  
  '90',
  
  '91',
  
  '92',
  
  '93',
  
  '94',
  
  '95',
  
  '96',
  
  '97',
  
  '98',
  
  '99',
  
  '100',
  
  '200',
];

let gay = answers[Math.floor(Math.random() * answers.length)];
      let gayresult = new Discord.RichEmbed()
    .setColor("#f21890")
    .addField("Shifter Gay", `:gay_pride_flag: You are ${gay}% gay`);

message.channel.send(gayresult);

}

});

client.on("message", function(message) {
    if (message.content == "S_lesbian") {

var answers = [ 

  '1', 

  '2',

  '3',
  
  '4',
  
  '5',
  
  '6',
  
  '7',
  
  '8',
  
  '9',
  
  '10',
  
  '11',
  
  '12',
  
  '13',
  
  '14',
  
  '15',
  
  '16',
  
  '17',
  
  '18',
  
  '19',
  
  '20',
  
  '21',
  
  '22',
  
  '23',
  
  '24',
  
  '25',
  
  '26',
  
  '27',
  
  '28',
  
  '29',
  
  '30',
  
  '31',
  
  '32',
  
  '33',
  
  '34',
  
  '35',
  
  '36',
  
  '37',
  
  '38',
  
  '39',
  
  '40',
  
  '41',
  
  '42',
  
  '43',
  
  '44',
  
  '45',
  
  '46',
  
  '47',
  
  '48',
  
  '49',
  
  '50',
  
  '51',
  
  '52',
  
  '53',
  
  '54',
  
  '55',
  
  '56',
  
  '57',
  
  '58',
  
  '59',
  
  '60',
  
  '61',
  
  '62',
  
  '63',
  
  '64',
  
  '65',
  
  '66',
  
  '67',
  
  '68',
  
  '69',
  
  '70',
  
  '71',
  
  '72',
  
  '73',
  
  '74',
  
  '75',
  
  '76',
  
  '77',
  
  '78',
  
  '79',
  
  '80',
  
  '81',
  
  '82',
  
  '83',
  
  '84',
  
  '85',
  
  '86',
  
  '87',
  
  '88',
  
  '89',
  
  '90',
  
  '91',
  
  '92',
  
  '93',
  
  '94',
  
  '95',
  
  '96',
  
  '97',
  
  '98',
  
  '99',
  
  '100',
  
  '200',
];

let lesbian = answers[Math.floor(Math.random() * answers.length)];
      let lesbianresult = new Discord.RichEmbed()
    .setColor("#f21890")
    .addField("Shifter Lesbian", `:couple_ww: You are ${lesbian}% lesbian`);

message.channel.send(lesbianresult);

}

});

client.on("message", function(message) {
    if (message.content == "S_lottery") {

var answers = [ 

  '0', 
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0', 
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0', 
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0', 
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '0',
  
  '1',
  
  '2',

  '5',

  '10',
  
  '15',
  
  '20',
  
  '25',
  
  '30',
  
  '50',
  
  '75',
  
  '100',
  
  '150',
  
  '200',
  
  '250',
  
  '300',
  
  '500',
  
  '750',
  
  '1000',
  
  '5000',
  
  '10000',
  
  '25000',
  
  '50000',
  
  '100000',
  
  '250000',
  
  '500000',
  
  '1000000',

];

let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
      let lottery = new Discord.RichEmbed()
    .setColor("#ffff66")
    .addField("Shifter Lottery", `You bought a ticket for €5. You won €${randomAnswerPicker}! Were you lucky or was it not your day? :moneybag:`);

message.channel.send(lottery);

}

});

client.on("message", function(message) {
    if (message.content == "S_dutchmeme") {

var answers = [ 

  'https://images7.memedroid.com/images/UPLOADED36/53a608b023bf6.jpeg', 
  'https://i.pinimg.com/originals/e8/91/50/e891502c5c3838def91eb8b730f26677.jpg',
  'http://4.bp.blogspot.com/-Ntjz6uO6YE8/USiisef0iaI/AAAAAAAAGRg/AM_lWFcEMHc/s1600/Coca%C3%AFne+beer.png',
  'http://m.memegen.com/vhkzzw.jpg',
  'http://m.memegen.com/wwai00.jpg',
  'https://in02.hostcontrol.com/resources/d0b710e2c7cb0b/9aa94fe21f.JPEG',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbykLahN9f6qOgcztcgpYEmGkOaOOWxTuSQBT1HH6U3fpJbW4VBg',
  'https://i.pinimg.com/originals/4f/79/a9/4f79a976b7dc425997ccd1dae5367b85.jpg',
  'https://img.memecdn.com/netherlands-rage_c_1002213.jpg',
  'https://cdn.discordapp.com/attachments/364762742235594752/453872516231069696/IMG-20180530-WA0000.jpg',
  'https://cdn.discordapp.com/attachments/364762742235594752/453872428431572996/IMG-20180526-WA0000.jpg',
  'https://media.discordapp.net/attachments/364762742235594752/453872427748032533/IMG-20180603-WA0003.jpg?width=364&height=474',
  'https://cdn.discordapp.com/attachments/367387968446660618/417706199379869696/1016072_386662198122731_1887225998_n-221x300.png',
  'https://i.pinimg.com/originals/2a/91/fa/2a91fa46756724a69b65c4af513df5ca.jpg',
  'https://cdn.discordapp.com/attachments/440232478242897933/459043262561255424/image.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886355302645790/FB_IMG_1531146292428.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886354429968405/FB_IMG_1531146300001.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886354429968404/FB_IMG_1531146321333.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886353889034241/FB_IMG_1531146268735.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886353889034240/FB_IMG_1531146288809.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/487575534105133056/FB_IMG_1536317452374.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/486856678763921409/FB_IMG_1536146070287.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/486497555065077760/FB_IMG_1536060442837.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/486283693963608096/FB_IMG_1536009441295.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/495259089111220224/FB_IMG_1538149350725.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/494468850469830657/FB_IMG_1537960948629.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/494430447800025088/FB_IMG_1537951785909.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/490599468463423508/FB_IMG_1537038416527.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/490567933941121024/FB_IMG_1537030891993.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/490204995757539329/FB_IMG_1536944370699.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/533735969921302529/FB_IMG_1547322953683.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/531137207344300042/FB_IMG_1546703367896.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/530505456540450867/FB_IMG_1546552748801.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/530505455416639498/FB_IMG_1546552726524.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/530505454753677313/FB_IMG_1546552713003.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/530504847741681665/FB_IMG_1546552599730.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/529589476851187732/FB_IMG_1546334191099.jpg',
  'https://media.discordapp.net/attachments/440234179440148481/528629478969180161/FB_IMG_1546105401070.jpg?width=276&height=466',
  'https://media.discordapp.net/attachments/440234179440148481/528629479581417472/FB_IMG_1546105330563.jpg?width=296&height=473',
  'https://media.discordapp.net/attachments/440234179440148481/528629479581417476/FB_IMG_1546105343901.jpg?width=277&height=473',
  'https://media.discordapp.net/attachments/440234179440148481/528629480231796736/FB_IMG_1546105385765.jpg?width=255&height=474',
  'https://media.discordapp.net/attachments/440234179440148481/528629531024556042/FB_IMG_1546105239514.jpg?width=494&height=473',
  'https://media.discordapp.net/attachments/440234179440148481/528629531024556044/FB_IMG_1546105257436.jpg?width=396&height=473',
  'https://media.discordapp.net/attachments/440234179440148481/528629531683323914/FB_IMG_1546105288211.jpg?width=310&height=473',
  'https://media.discordapp.net/attachments/440234179440148481/528629532249423872/FB_IMG_1546105299846.jpg?width=367&height=473',
  'https://media.discordapp.net/attachments/440234179440148481/528629563534606339/FB_IMG_1546105231904.jpg?width=385&height=473',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49564105_1269358129870064_1261872515530096640_n.jpg?_nc_cat=102&_nc_ht=scontent-amt2-1.xx&oh=86ccdb3919e35a7d4fa58f4c304d1d3c&oe=5C8B64C6',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49761535_1273859016086642_5023816438608035840_n.jpg?_nc_cat=1&_nc_ht=scontent-amt2-1.xx&oh=abaaabfd2615f1bc799e19b6efb216ea&oe=5CD9E72B',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/50340766_1274274832711727_7916795830965633024_n.jpg?_nc_cat=1&_nc_ht=scontent-amt2-1.xx&oh=c468b18cc68a1e4b82a9413b16a99923&oe=5CCD857C',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49896043_1271307683008442_4559876098518679552_n.jpg?_nc_cat=111&_nc_ht=scontent-amt2-1.xx&oh=1c7c57c42eaca619a1aa5c7224f30a39&oe=5CB989CF',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49573201_1269261643213046_742297037399130112_n.jpg?_nc_cat=105&_nc_ht=scontent-amt2-1.xx&oh=80e266a46957c1340a9df870fb122c63&oe=5CCE0C3D',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49789409_1269855749820302_8822129865575628800_n.jpg?_nc_cat=104&_nc_ht=scontent-amt2-1.xx&oh=05a6f501de81ad83a9368879e194bdea&oe=5CCC1128',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49351212_1267236760082201_7643361681573150720_n.jpg?_nc_cat=104&_nc_ht=scontent-amt2-1.xx&oh=8a936ea656f5912c9905cf3976cee038&oe=5CBA88B5',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/50236774_1270814053057805_803438714356236288_n.jpg?_nc_cat=1&_nc_ht=scontent-amt2-1.xx&oh=a6337a0fb7503e8505463f175bc3c1b6&oe=5CB56335',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/50286215_1271558369650040_4994755891019382784_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=3f2022bcc2799a03d49f9449dcdf6782&oe=5CBE3A1D',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49581094_1272061216266422_6697701116689252352_n.jpg?_nc_cat=110&_nc_ht=scontent-amt2-1.xx&oh=ac157ec54639048a881e4763040a98de&oe=5CCF84B6',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49133153_1266731460132731_9018527106430140416_n.jpg?_nc_cat=109&_nc_ht=scontent-amt2-1.xx&oh=4ad31bb581a6fdb09689def725fae70d&oe=5CD95EA3',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49708640_1270077366464807_4085888807721762816_n.jpg?_nc_cat=101&_nc_ht=scontent-amt2-1.xx&oh=cea916458baf41d5ab5970af0a653af6&oe=5CCDB581',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49555785_1268439239961953_3215963724745539584_n.jpg?_nc_cat=105&_nc_ht=scontent-amt2-1.xx&oh=417ccb31dde6f25e6668ae0fffe9e5f3&oe=5CB4A4C7',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49730718_1270183729787504_24801533463887872_n.jpg?_nc_cat=110&_nc_ht=scontent-amt2-1.xx&oh=6b56ad80ba3ab51b3b2efb152fa12941&oe=5CD3DCBF',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49723906_1272832032856007_2467102319460745216_n.jpg?_nc_cat=107&_nc_ht=scontent-amt2-1.xx&oh=807433e0fac7261bbbf24e27bceb4d94&oe=5CD85E90',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/49739272_1273479479457929_3635504406620798976_n.jpg?_nc_cat=1&_nc_ht=scontent-amt2-1.xx&oh=e89ad4a73dddc36912b7a2b9fa6bf90e&oe=5CCCC553',
  
];

let dutch = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`Here is your meme from the Netherlands! ${dutch}`);

}

});

client.on("message", function(message) {
    if (message.content == "S_meme") {

var answers = [ 
'https://pixel.nymag.com/imgs/daily/selectall/2016/08/10/wholesome_00.nocrop.w710.h2147483647.jpg',
'http://worldwideinterweb.com/wp-content/uploads/2016/03/best-meme-of-all-time.jpg',
'https://vignette.wikia.nocookie.net/trollpasta/images/1/10/Frisky-fred-meme.jpg/revision/latest?cb=20150501035607',
'https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
'https://imageresizer.static9.net.au/qifWHWByMwnsA068tqYbnw_nFz8=/396x0/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2017%2F05%2F24%2F13%2F27%2FChloe-meme-imgflip.jpg',
'https://steemitimages.com/DQmQXCQet8VXjmSofxLnmXRq8fGDxaVGQG69GnZMTvg8yHX/unnamed.jpg',
'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2015/04/13/14/Putin-Ukraine-meme.jpg',
'https://d2pu2bk1b66iw6.cloudfront.net/photos/2014/08/01/6-74677-mm_babymeme3-1406927575.jpg',
'https://imgix.bustle.com/lovelace/uploads/448/95dc8a50-88fb-0133-b2de-0e438b3b98d1.jpg?w=614&fit=max&auto=format&q=70',
'https://s3.amazonaws.com/vice_asset_uploader/files/1399229204ET_drake_meme.jpg',
'http://www.fullredneck.com/wp-content/uploads/2017/03/Funny-Starbucks-Meme-1.jpg',
'http://www.digitalwiki.de/wp-content/uploads/2017/02/That-would-be-great-meme.jpg',
'https://tr2.cbsistatic.com/hub/i/2017/05/30/bf63d9d4-0cfe-423c-935e-df4fa858c592/ae6197c296d559914c4d10479929ed09/maury-meme.jpg',
'https://i.imgflip.com/11bhhq.jpg',
'https://i.pinimg.com/736x/ed/f5/00/edf500e9bd77e4979f14b68830c302fe--funny-memes-funny-pics.jpg',
'https://vignette.wikia.nocookie.net/wingsoffire/images/e/e8/False-Age-Is-A-Word-Meme-For-Birthday.jpg/revision/latest?cb=20161022225521',
'https://fthmb.tqn.com/iroPHgM_OxHDgR-adYnpxGryUdA=/450x346/filters:fill(auto,1)/kim-jong-un-floppy-disk-58b8f4e33df78c353c45334c.jpg',
'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/21/10/asset/buzzfeed-prod-fastlane-02/anigif_sub-buzz-18548-1513869411-5.gif?downsize=715:*&output-format=auto&output-quality=auto',
'https://www.instagram.com/p/BcdgAkLgRCm/?utm_source=ig_embed',
'https://instagram.com/p/BbI5MI6gNIO/?utm_source=ig_embed',
'https://instagram.com/p/BcQbveGgaqr/?utm_source=ig_embed',
'https://instagram.com/p/BbAWy9dgFgO/?utm_source=ig_embed',
'https://instagram.com/p/Bau7TILAdyT/?utm_source=ig_embed',
'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/21/10/asset/buzzfeed-prod-fastlane-03/sub-buzz-23202-1513869340-1.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://www.instagram.com/p/BZRB4MbAQKk/?utm_source=ig_embed',
'https://instagram.com/p/Bb7urOchJhh/?utm_source=ig_embed',
'https://instagram.com/p/BcpzImog-fl/?utm_source=ig_embed',
'https://instagram.com/p/Bc5eUiOgcdT/?utm_source=ig_embed',
'https://instagram.com/p/Bc418p3nFQD/?utm_source=ig_embed',
'https://instagram.com/p/BYMXYcNASZx/?utm_source=ig_embed',
'https://cdn.discordapp.com/attachments/374227967221432330/455332307700678673/image.jpg',
'https://cdn.discordapp.com/attachments/374227967221432330/455329100291244032/image.jpg',
'https://cdn.discordapp.com/attachments/440234197093842985/455339297990770704/9099e6b.jpg',
'https://cdn.discordapp.com/attachments/440234197093842985/452131747916939274/FB_IMG_1527866929794.jpg',
'https://cdn.discordapp.com/attachments/440234197093842985/452131747916939275/FB_IMG_1527866944525.jpg',
'https://cdn.discordapp.com/attachments/440234197093842985/452131748558536704/FB_IMG_1527866923484.jpg',
'https://cdn.discordapp.com/attachments/440234197093842985/452131749346934785/FB_IMG_1527866938881.jpg',
'https://images-ext-2.discordapp.net/external/pzfokAQSH8Ypz85CBWi4SFkqgKlT26mCztQa5jc7aUM/https/cdn.discordapp.com/attachments/255261422919876609/454343681764360195/image.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-funniest.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-hilarious.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-humor.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-images.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-Cool-Kristen.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-humor.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-humorous.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-very-funny.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-famous.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-hilarious.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-humor-pics.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-humor.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-jokes.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-very-funny.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-pic.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-pictures.jpg',
'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection.jpg',
'http://www.dumpaday.com/wp-content/uploads/2012/01/tumblr_lve0ihcfgK1qewacoo1_500.jpg',
'http://www.dumpaday.com/wp-content/uploads/2012/01/355kup.jpg',
'http://www.dumpaday.com/wp-content/uploads/2012/01/funniest-meme02.jpg',
'http://www.dumpaday.com/wp-content/uploads/2012/01/funniest-meme27.jpg',
'http://www.dumpaday.com/wp-content/uploads/2012/01/tumblr_lqquppZOXR1qe11kdo1_500.jpg',
'http://www.dumpaday.com/wp-content/uploads/2012/01/December-30-2011-01-27-37-1DhQA.jpeg',
'https://cdn.discordapp.com/attachments/440232478242897933/459043472532570123/image.jpg',
'https://cdn.discordapp.com/attachments/440232478242897933/459043578304266251/image.jpg',
'https://cdn.discordapp.com/attachments/440232478242897933/459043660110233611/image.jpg',
'https://cdn.discordapp.com/attachments/440232478242897933/459050499048603668/Q_Vx5jGBlbYe0DXvExHkaLRB9h4GJxBPPojbECZgiwE.png',
'https://cdn.discordapp.com/attachments/440232478242897933/459051644559163393/XslI_wm7Ea5cAjY0kDsOyhKYNaBdGjcWR-dKz0QdaYs.png',
'https://cdn.discordapp.com/attachments/440234197093842985/459059064542855194/MbdBl_BrP7tgBANjDoJ3nG1Z3MQ5U0kNVG0_JFBnpbQ.png',
'https://cdn.discordapp.com/attachments/440232478242897933/459060921093062666/pugporn.jpg',
'https://cdn.discordapp.com/attachments/440232478242897933/460205044889813009/eJwlyEEOgyAQAMC_8AAQdl3EYw82PfQNhiBBExUC21Pj323Sw1zmKz51F6NYmUsblVq2FnJdZONcfYoy5Zz26MvWZMiH8sw-rEc8.png',
'https://cdn.discordapp.com/attachments/440232478242897933/460204170314514432/File_006.jpeg',
'https://cdn.discordapp.com/attachments/440232478242897933/460203883558469652/0513034a8c16dd6ab1dfe492fee34220--creepy-sloth-sloth-memes.png',
'https://cdn.discordapp.com/attachments/440232478242897933/460203374315438091/image.jpg',
'https://cdn.discordapp.com/attachments/440234197093842985/486856917382070272/FB_IMG_1536146129248.jpg',
'https://img-9gag-fun.9cache.com/photo/aKjRrw3_700bwp.webp',
'https://img-9gag-fun.9cache.com/photo/abM776r_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/aLjxZoP_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/adKEEQB_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/aDxyyR9_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/aAxjj29_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/aeMLvNQ_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/ax15L4L_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/am73ejd_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/a9pogGo_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/aN1NEb4_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/aV3AAqy_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/a5o4Ozr_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/awXwW8D_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/aDxyyDN_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/a0KBrDL_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/ap2OWLb_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/aBxpByN_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/avONK8b_460swp.webp',
'https://img-9gag-fun.9cache.com/photo/ajEpzRg_460swp.webp',
'https://cdn.discordapp.com/attachments/477815608139055104/490177475004071948/XihW8jEb4CE.png',
'https://cdn.discordapp.com/attachments/477815608139055104/490177451721228288/XeHs95RDbvc.png',
'https://cdn.discordapp.com/attachments/477815608139055104/482550482565595156/LOCATE_MEME.jpg',
'https://cdn.discordapp.com/attachments/477815608139055104/481389301620539392/image.jpg',
'https://cdn.discordapp.com/attachments/440234179440148481/529604946312560650/FB_IMG_1546338042427.jpg',
'https://cdn.discordapp.com/attachments/440234179440148481/529590840646041601/FB_IMG_1546334672289.jpg',
'https://i.redd.it/edwsac1czooz.jpg',
'https://i.imgur.com/MPdd4yp.jpg',
'https://i.imgur.com/oEq3HkD.jpg',
'https://i.imgur.com/67PfwU9.png',
'https://i.imgur.com/JxBSZXs.jpg',
'https://i.imgur.com/CQhbtmZ.jpg',
'https://i.imgur.com/eVE8lj3.jpg',
'https://i.imgur.com/PbYMSh6.png',
'https://i.imgur.com/YsyT6Eb.png',
'http://quotesnhumor.com/wp-content/uploads/2016/12/25-Hilarious-Dank-Memes-5-Hilarious-Memes.jpg',
'https://i.ytimg.com/vi/lHo-GhAr_g0/hqdefault.jpg',
'https://pm1.narvii.com/6999/0ba809a9a5af3b126f822e247d5aeb4d1f3c5b80r1-884-1024v2_hq.jpg',
'https://i.imgflip.com/1w35qg.jpg',
'https://i.imgflip.com/1w35p0.jpg',
'https://i.imgflip.com/1w35l3.jpg',
'https://i.imgflip.com/1w356l.jpg',
'https://i.imgflip.com/1w356b.jpg',
'https://i.imgflip.com/1w352k.jpg',
'https://i.imgflip.com/1w34yj.jpg',
'https://i.imgflip.com/1w34ik.jpg',
'https://i.imgflip.com/1w34i9.jpg',
'https://i.imgflip.com/1w34ag.jpg',
'https://i.imgflip.com/1w346f.jpg',
'https://i.imgflip.com/1w33bo.jpg',
'https://i.imgflip.com/1w338m.jpg',
'https://i.imgflip.com/1w32yd.jpg',
'https://i.imgflip.com/1w32tk.jpg',
'https://i.imgflip.com/1w32nv.jpg',
'https://i.imgflip.com/1w32ga.jpg',
	
  
]

let meme = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`Here is your meme! ${meme}`);

}

});

client.on("message", function(message) {
    if (message.content == "S_cat") {

var answers = [ 
'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
'http://pembrokeshire-herald.com/wp-content/uploads/2018/01/cat.jpeg',
'https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg',
'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg',
'http://a57.foxnews.com/images.foxnews.com/content/fox-news/lifestyle/2017/11/09/how-to-keep-cat-from-scratching-your-sofa-to-shreds/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510172827500.jpg?ve=1&tl=1&text=big-top-image',
'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg',
'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
'https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYh1R8qA-akJf2XqmdUOgSblc1yzR91M5D4DVu3412a-DvekYyqg',
'http://www.cbc.ca/cbcdocspov/content/images/episodes/lohlala.jpg',
'http://letme-know.com/wp-content/uploads/2018/02/banana-cat-1.png',
'https://www.argospetinsurance.co.uk/assets/uploads/2017/10/pexels-photo-416160.jpeg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSIyFKG6jm6hqlMIAXtguMNuCXWKqR2kjm83xDzEgzcia0yfpdA',
'http://live105.ca/wp-content/uploads/2018/02/small-kitten-meowing.jpg',
'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782',
'http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg',
'http://media.socastsrm.com/wordpress/wp-content/blogs.dir/886/files/2018/01/PICTURE-OF-CUTE-CAT.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjS8nZ2dQuQQQca3oPRGN18LJqidEkjIqbVbDyv4mTCq8xYtoGQ',
'http://cdn.newsapi.com.au/image/v1/c944e4f873b2cd50c1ab93eaf8010750?width=650',
'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-06/6/12/enhanced/webdr08/original-21313-1402070821-13.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/4/16/original-16439-1396642689-17.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr03/4/16/enhanced-26552-1396642701-1.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/4/16/enhanced-16354-1396642706-25.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr04/10/12/enhanced-buzz-29081-1397145781-14.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr02/9/12/enhanced-buzz-11844-1397060009-22.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/9/12/enhanced-buzz-28527-1397060122-10.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/9/14/original-631-1397069471-21.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr04/10/17/enhanced-buzz-7745-1397164006-9.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr08/9/14/enhanced-11714-1397069467-10.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/9/18/enhanced-buzz-19557-1397082576-4.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/9/14/original-18798-1397069417-28.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/9/14/enhanced-18799-1397069418-11.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr08/9/14/enhanced-11623-1397069418-9.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr03/4/16/original-26311-1396642686-3.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr02/4/16/original-12370-1396642688-10.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr03/9/14/enhanced-buzz-20809-1397069988-12.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/10/11/enhanced-buzz-10134-1397143232-12.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr03/4/16/enhanced-27654-1396643150-2.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/9/12/enhanced-buzz-17297-1397060247-22.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-21232-1396642706-13.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/9/14/enhanced-buzz-18793-1397069650-11.jpg?downsize=715:*&output-format=auto&output-quality=auto',
'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr02/4/16/original-12054-1396642685-25.jpg?downsize=715:*&output-format=auto&output-quality=auto',
  

]

let cat = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`Here is your cat! ${cat}`);

}

});

client.on("message", function(message) {
    if (message.content == "S_anime") {

var answers = [ 
  'https://cdn.discordapp.com/attachments/440234179440148481/459032249048760330/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459032340476198952/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459032445409558538/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459032697872973854/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459032951729160192/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459033002773708810/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459033201260625941/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459045736718401539/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459045830855491615/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459045913885933568/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459045967166177284/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459046040956567572/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459046077610328064/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459046137853247490/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459046187488772099/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459046313238069248/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459046392657346580/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459046458545537025/unknown.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/459046935618256897/unknown.png',
  'https://vignette.wikia.nocookie.net/thehundred/images/b/b8/99fcabbb16e931f2d839a311174f9468--anime-manga-girl-moe-anime.jpg/revision/latest?cb=20180121211017',
  'https://cdn.inquisitr.com/wp-content/uploads/2017/11/Date-A-Live-Season-3-Release-Date-SS3-Anime-Focused-On-Kurumi-Tokisaki-And-Date-A-Bullet-Light-Novel.jpg',
  'https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/029192.jpg',
  'https://vignette.wikia.nocookie.net/cf7ca938-b27e-4209-8d50-2a45289a1c29/scale-to-width-down/800',
  'https://nerdist.com/wp-content/uploads/2018/02/20180212_n_dancave_romanceanime_1x1.jpg',
  'https://data.whicdn.com/images/167007589/superthumb.jpg?t=1425791022',
  'https://data.whicdn.com/images/166694624/superthumb.jpg?t=1425655873',
  'https://data.whicdn.com/images/164465881/superthumb.jpg?t=1424553490',
  'https://data.whicdn.com/images/164399710/superthumb.jpg?t=1424533811',
  'https://data.whicdn.com/images/163810918/superthumb.png?t=1424255751',
  'https://data.whicdn.com/images/152914697/superthumb.png?t=1419323904',
  'https://data.whicdn.com/images/152425018/superthumb.jpg?t=1419099011',
  'https://data.whicdn.com/images/152325356/superthumb.png?t=1419044294',
  'https://data.whicdn.com/images/163071424/superthumb.jpg?t=1423917823',
  'https://data.whicdn.com/images/119110867/superthumb.png?t=1401726645',
  'https://data.whicdn.com/images/160778416/superthumb.jpg?t=1422804559',
  'https://data.whicdn.com/images/160597932/superthumb.jpg?t=1422730735',
  'https://images2.alphacoders.com/748/thumb-350-748148.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziuwBmZLMXId6sIN2yPkO3wCJCyE2bE7DH8auPhdP1dXNOo91pw',
  'https://media.proprofs.com/images/QM/user_images/1452023/1488347079.png',
  'https://wallpapersite.com/images/pages/pic_w/3864.jpg',
  'https://i.ytimg.com/vi/aICUDVA1ZiA/maxresdefault.jpg',
  'http://sfwallpaper.com/images/anime-girl-background-11.jpg',
  'https://images2.alphacoders.com/677/thumb-1920-677670.jpg',
  'http://orig02.deviantart.net/6553/f/2013/086/e/d/anime_girl_vocaloid_beautiful_by_opty_face-d5zghsf.png',
  'http://globalmedicalco.com/photos/globalmedicalco/1/4397.jpg',
  'https://atgbcentral.com/data/out/132/5112222-cute-anime-girl-wallpaper.jpg',
  'http://www.wallpapers-web.com/data/out/59/4238391-cute-anime-girl-wallpapers.jpg',
  'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460105784-4f9a24690d8406ed6c588a7eea221044.jpeg',
  'http://7-themes.com/data_images/collection/3/4445628-anime-girl-wallpapers.jpg',
  'http://files.all-free-download.com//downloadfiles/wallpapers/1280_1024/anime_girl_wallpaper_japanese_characters_anime_animated_641.jpg',
  'https://www.picstatio.com/large/e55041/Virtual-Youtuber-cute-anime.jpg',
  'http://www.wallpaperbetter.com/wallpaper/626/670/428/girl-smile-angel-cute-anime-girl-1080P-wallpaper.jpg',
  'http://eskipaper.com/images/hope-anime-girl-1.jpg',
  'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461568592-9c6322be1c8c315fb04830f16c31819a.jpeg',
  'http://7-themes.com/data_images/out/63/6988297-anime-girl-pink-hair.jpg',
  'https://img1.ak.crunchyroll.com/i/spire1/09282008/c/d/4/b/cd4b45e8670090_full.jpg',
  'http://images6.fanpop.com/image/photos/38700000/esdeath-akame-ga-kill-anime-girl-art-picture-sword-edsese-esdeath-38784542-1920-1080.jpg',
  'https://i.ytimg.com/vi/5KeAlXkw8M0/maxresdefault.jpg',
  'https://imgix.ranker.com/user_node_img/3831/76616868/original/akeno-himejima-tv-characters-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces',
  'https://imgix.ranker.com/user_node_img/50035/1000687070/original/y-ki-asuna-photo-u1?w=650&q=60&fm=jpg&fit=crop&crop=faces',
  'https://imgix.ranker.com/user_node_img/493/9846980/original/moka-akashiya-fictional-characters-photo-u3?w=650&q=60&fm=jpg&fit=crop&crop=faces',
  'https://imgix.ranker.com/user_node_img/50035/1000687650/original/saber-photo-u1?w=650&q=60&fm=jpg&fit=crop&crop=faces',
  'https://imgix.ranker.com/user_node_img/50043/1000853986/original/kuroka-photo-u1?w=650&q=60&fm=jpg&fit=crop&crop=faces',
  'https://imgix.ranker.com/user_node_img/50040/1000798659/original/holo-photo-u1?w=650&q=60&fm=jpg&fit=crop&crop=faces',
  'https://imgix.ranker.com/user_node_img/50040/1000797771/original/izumi-akazawa-photo-u1?w=650&q=60&fm=jpg&fit=crop&crop=faces',
  'https://cdn.discordapp.com/attachments/440232478242897933/459058900994359298/zRuMjUe.png',
  'https://cdn.discordapp.com/attachments/440232478242897933/459058945051328512/YJDvJ3m.png',
  'https://cdn.discordapp.com/attachments/440232478242897933/459060135357317121/zaYuAdKXUEoQ0FlqSrYyLCENIFq4ykkEJUrw6NY2iBM.png',
  'https://cdn.discordapp.com/attachments/440232478242897933/459060921122160641/maxresdefault_2.jpg',
  'https://cdn.discordapp.com/attachments/440232478242897933/459061425122312192/Ldri0T7yoHVrfB4GVco08h6nvEe8CdDOoO6DBGJkqWk.jpg',
  'https://cdn.discordapp.com/attachments/440232478242897933/459061448082194443/gMqXqQHhSv6oTMzYGVUO8jz6IC0PcDisXH35ssZyCJs.png',
  'https://cdn.discordapp.com/attachments/440232478242897933/459061448556019734/InVJvPxcSVsDu5KtlHxUUuWjbwrWq7WMQ1_EUWJijNo.jpg',
  'https://cdn.discordapp.com/attachments/440232478242897933/459061454511931392/KWoKO1GpG0yqCIi7x0JhYiYI9akWnDIdQSezVN0uFso.png',
  'https://cdn.discordapp.com/attachments/440232478242897933/459061460799062038/mAJVj5vKYnFiIVxoTATuNPPRWeXenDOyRg3v2tZ-f-s.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/464155070045487104/qq.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/464155075565322240/tumblr_ot7lt3sqN31w3rqyeo4_400.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/464155077116952577/render__super_sonico_valentine_by_xbunnygoth-d9zf2fj.png',
  'https://cdn.discordapp.com/attachments/440234179440148481/464155079608500224/f4cbc26914c041ca16f68184206b94c5--charlotte-anime-amnesia-anime.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/464155079654768641/e6rSsY8.jpg',
  'https://cdn.discordapp.com/attachments/440234179440148481/464155105651064832/32257441_1682941185129642_7281427222785687552_n.jpg',
  
  
  ]

let anime = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`Here is your anime picture: ${anime}`);

}

});

client.on("message", function(message) {
    if (message.content == "@everyone") {

var answers = [ 
         'https://cdn.discordapp.com/attachments/475015228304785434/481508483305308171/who_pinged_me.gif',  
	'https://cdn.discordapp.com/attachments/440232478242897933/481508732455354373/everyone.gif',
	'WHO PINGED?! WHY DID YOU FUCKING PING ME?!',
	'https://i.kym-cdn.com/photos/images/original/001/336/892/79a.png',
	'https://pixteller.com/assets/storage/designs_images/2018-01-14/05/discord-pings-meme-1-5a5aef502eac5.png',
	'https://i.ytimg.com/vi/keCDsD_GvAQ/maxresdefault.jpg',
	'I AM A BOT. WHY DID YOU PING ME?',
	'https://i.kym-cdn.com/photos/images/newsfeed/001/352/202/d9d.gif',
	'https://i.redd.it/3jhbi9w57fw01.gif',
	'https://derpicdn.net/img/2018/3/31/1695073/full.gif',
	'I got a ping. Something interesting?',
	'Do not ping me!',
	'WHO PINGED ME? WHY DID YOU DO THIS TO EVERYONE?',
	
  ]

let pingedme = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${pingedme}`);

}

});

client.on("message", function(message) {
    if (message.content == "@here") {

var answers = [ 
         'https://cdn.discordapp.com/attachments/475015228304785434/481508483305308171/who_pinged_me.gif',  
	'https://cdn.discordapp.com/attachments/440232478242897933/481508732455354373/everyone.gif',
	'WHO PINGED?! WHY DID YOU FUCKING PING ME?!',
	'https://i.kym-cdn.com/photos/images/original/001/336/892/79a.png',
	'https://pixteller.com/assets/storage/designs_images/2018-01-14/05/discord-pings-meme-1-5a5aef502eac5.png',
	'https://i.ytimg.com/vi/keCDsD_GvAQ/maxresdefault.jpg',
	'I AM A BOT. WHY DID YOU PING ME?',
	'https://i.kym-cdn.com/photos/images/newsfeed/001/352/202/d9d.gif',
	'https://i.redd.it/3jhbi9w57fw01.gif',
	'https://derpicdn.net/img/2018/3/31/1695073/full.gif',
	'I got a ping. Something interesting?',
	'Do not ping me!',
	'WHO PINGED ME? WHY DID YOU DO THIS TO EVERYONE?',
	
  ]

let pingedme = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${pingedme}`);

}

});
client.login(process.env.BOT_TOKEN);


  
