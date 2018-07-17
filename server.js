const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = (args) => {
const express = require('./express.js');
express(args);
    };

module.exports = (args) => {
const leaderboard = require('./leaderboard.js');
leaderboard(args);
    };

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
      client.user.setActivity(`Shifter_help | ${client.guilds.size} servers`);
});

client.on("message", message => {
  if (!message.author.send(message.content)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.5 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    let level = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter levelup!", `:arrow_up: You've leveled up to level **${curLevel}**!`);
    message.channel.send(level);
  }

  if (message.content.startsWith(prefix + "level")) {
    let levelcheck = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter levelcheck", `You are currently level ${userData.level}, with ${userData.points} points.`);
    message.channel.send(levelcheck);
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  }
});
	
client.on("message", (message) => {
  if (message.content.startsWith("Shifter_ping")) {
    let ping = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Ping", "Pong!");

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Shifter_vote")) {
    let vote = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Vote", "Vote me here: https://discordbots.org/bot/446750923222417428/vote");
    
    message.channel.send(vote);
  }
});

client.on("message", (message) => {
	if (message.content.startsWith("Shifter_2purge")) {
      let messagecount = parseInt(2);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 2 messages");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("Shifter_3purge")) {
      let messagecount = parseInt(3);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 3 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("Shifter_4purge")) {
      let messagecount = parseInt(4);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 4 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("Shifter_5purge")) {
      let messagecount = parseInt(5);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
   .setColor("#bc0000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 5 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("Shifter_6purge")) {
      let messagecount = parseInt(6);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 6 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("Shifter_7purge")) {
      let messagecount = parseInt(7);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 7 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("Shifter_8purge")) {
      let messagecount = parseInt(8);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
  .setColor("#bc0000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 8 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("Shifter_9purge")) {
      let messagecount = parseInt(9);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 9 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("Shifter_10purge")) {
      let messagecount = parseInt(10);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
 .setColor("#bc0000")
    .addField("Shifter Purge", ":wastebasket: I have deleted the last 10 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {

  if (message.content.startsWith("Shifter_kick")) {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: Can't find user! Please check it and try again.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: That person can't be kicked! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: That person can't be kicked! Reason: It is a bot or it is not a valid reason");

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

client.on('message', (message) => {
  if (message.content.startsWith("Shifter_help")) {
    message.channel.send(':white_check_mark: Check your dm with my commands!');
  let embed = new Discord.RichEmbed()
  .setDescription("Shifter Help v2.0")
  .setColor("#15f153")
  .addField("Shifter_help", 'Gets help page')
  .addField("Shifter_funhelp", 'Gets the help page for fun commands')
  .addField("Shifter_ping", 'Checks if the bot responds')
  .addField("Shifter_servers", 'Display how many server the bot runs')
  .addField("Shifter_serverinfo", 'Displays info about your server')
  .addField("Shifter_invite", 'Gets invite link for your server')
  .addField("Shifter_support", 'Link to support server')
  .addField("Shifter_vote", 'Vote for the bot')
  .addField("Shifter_<number>purge", 'Deletes some messages. Do not use the <>. You can choose between 2 and 10. Example: Shifter_4purge')
  .addField("Shifter_kick <@user> <reason>", 'Kick a user. Do not use the <>. Example: Shifter_kick @user#0000 angry')
  .addField("Shifter_ban <@user> <reason>", 'Ban a user. Do not use the <>. Example: Shifter_ban @user#0000 stupid')

    message.member.send(embed);
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("Shifter_funhelp")) {
    message.channel.send(':white_check_mark: Check your dm with my fun commands!');
    let fun = new Discord.RichEmbed()
    .setDescription("Shifter Fun Help v1.1")
    .setColor("#15f153")
    .addField("Shifter_avatar", 'Get your avatar')
  .addField("Shifter_dice", 'Dice roll')
  .addField("Shifter_2dices", '2 dices roll')
  .addField("Shifter_win", 'Test if you can win from Shifter')
  .addField("Shifter_anime", 'Shows random anime pictures')
  .addField("Shifter_meme", 'Shows random memes')
  .addField("Shifter_dutchmeme", 'Shows random memes in Dutch')
  .addField("Shifter_cat", 'Shows random cats')
  .addField("Shifter_lottery", 'A lottery. Earn money or lose')
  .addField("Shifter_ask <your question>", 'Ask shifter a YES or NO question. Do not use the <>')
  .addField("Shifter_card <your card>", 'Play a card game with Shifter. Do not use the <>. Example: Shifter_card Hearts 5')
  .addField("Shifter_gay", 'Test how much gay you are')
  .addField("Shifter_lesbian", 'Test how much lesbian you are')
  .addField("Shifter_shoot @<user>", 'Shoot to someone. Do not use the <>. Example: Shifter_shoot @user#0000')
  .addField("Shifter_kill @<user>", 'Kill someone. Do not use the <>. Example: Shifter_kill @user#0000')
  .addField("Shifter_uq", 'Get a useless question from Shifter')
  .addField("Shifter_level", 'Check which level you are. NOTE: the command does not work because faults.')
  .addField("Shifter_points", 'Check how much points you have. NOTE: the command does not work because faults.');
    
  message.member.send(fun)
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Shifter_ban")) {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":x: Can't find user! Please check it and try again");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: That person can't be banned! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: That person can't be banned! Reason: It is a bot or it is not a valid reason.");

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
  if (message.content.startsWith("Shifter_shoot")) {
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
    if (message.content == "Shifter_win") {
      
var answers = [ 

  'You won! :smiley: ', 

  'You lost. Try again later :frowning: ',
  
  'It is a draw. :no_entry:',
  
];

let win = answers[Math.floor(Math.random() * answers.length)];
let win2 = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Win", `${win}`);

message.channel.send(win2);
    }
});

client.on("message", function(message) {
    if (message.content == "Shifter_uq") {
      
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
    .setColor("#bc0000")
    .addField("Shifter Useless Questions", `${win}`);

message.channel.send(win2);
    }
});
client.on('message', (message) => {
  if (message.content.startsWith("Shifter_kill")) {
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
    
   
];

let kill2 = answers[Math.floor(Math.random() * answers.length)];
    let kill = new Discord.RichEmbed()
    .setColor("#e56b00")
    .addField("Shifter Kill", `${kill2}`);
  
  message.channel.send(kill);
}
});


client.on('message', (message) => {
	if (message.content.startsWith("Shifter_servers")) {
    let servers = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Servers", `**${client.guilds.size}**` + ' server(s) I am running ');
    
    message.channel.send(servers);
	}
});

client.on('message', (message) => {
	if (message.content.startsWith("Shifter_invite")) {
    let invite = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Invite", "Invite me here: https://discordapp.com/oauth2/authorize?&client_id=446750923222417428&scope=bot&permissions=0");
    
    message.channel.send(invite);
	}
});

client.on('message', (message) => {
	if (message.content.startsWith("Shifter_support")) {
    let support = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("Shifter Support", "https://discord.gg/6rzUtyf");
    
    message.channel.send(support);
	}
});

client.on('message', (message) => {
	if (message.content.startsWith("Shifter_avatar")) {
     message.channel.send(message.author.avatarURL);
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("Shifter_serverinfo")) {
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
    if (message.content == "Shifter_dice") {

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
	if (message.content.startsWith("Shifter_ask")) {

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
	if (message.content.startsWith("Shifter_card")) {

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
    .setColor("#bc0000")
    .addField("Shifter Card", `I had ${card}`);

message.channel.send(cardgame);

}

});

client.on("message", function(message) {
    if (message.content == "Shifter_2dices") {

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
    if (message.content == "Shifter_gay") {

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
    if (message.content == "Shifter_lesbian") {

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
    if (message.content == "Shifter_lottery") {

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
    .setColor("#bc0000")
    .addField("Shifter Lottery", `You bought a ticket for €5. You won €${randomAnswerPicker}! Were you lucky or was it not your day? :moneybag:`);

message.channel.send(lottery);

}

});

client.on("message", function(message) {
    if (message.content == "Shifter_dutchmeme") {

var answers = [ 

  'https://images7.memedroid.com/images/UPLOADED36/53a608b023bf6.jpeg', 
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35289629_1090985501040662_2001054838351200256_n.jpg?_nc_cat=0&oh=883d1e431b760029b7bf962edfb2c456&oe=5BB7184D',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35270261_1090701934402352_4477461869451280384_n.jpg?_nc_cat=0&oh=1072dcaf3648715f8f2bb86c4309f358&oe=5BB00BA2',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35247701_1090260784446467_541518599190216704_n.jpg?_nc_cat=0&oh=de7ea74f34504b516465476b5306e01d&oe=5BC23DA5',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34963661_1089940337811845_2551033243214282752_n.jpg?_nc_cat=0&oh=f7e9db34de7b8d8fbbd6de29b80e6f94&oe=5BA7558A',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34934428_1088656337940245_3542843609650823168_n.jpg?_nc_cat=0&oh=2d2c64c5a99e8f9a8bbba5b0a29a252d&oe=5BA4841F',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/13346459_673594602779756_8742188357333368347_n.jpg?_nc_cat=0&oh=a4b5f2ae04f3ef755a64028f91145bad&oe=5BB1AB0D',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34511261_1791487210939029_4393947394316697600_n.jpg?_nc_cat=0&oh=17f3c73c414dbd2727ba5681cf12b96a&oe=5BA700EA',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35265786_1800130813408002_2029954556594487296_n.jpg?_nc_cat=0&oh=209916e4e42f0be39bf8dbb098d0fbab&oe=5BAC77E6',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35089293_1799293293491754_8705603687688437760_n.jpg?_nc_cat=0&oh=d587bb618a43a14ccd7cbd008a910ce7&oe=5B76C5E5',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35076758_1798802863540797_4535573051844067328_n.jpg?_nc_cat=0&oh=80ac002f3dff2947f1fd9e2f32865f90&oe=5BB62CC6',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35102699_1798667313554352_1094170668439699456_n.png?_nc_cat=0&oh=6d4ca3b811c9e46e55a5af980fd6baa2&oe=5BB3AC79',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35113972_1798663350221415_4312852154000867328_n.jpg?_nc_cat=0&oh=331acaa0cec0defc1bf3b3e38a3cb98b&oe=5B7AE88E',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34984261_1797526433668440_6221695255687725056_n.jpg?_nc_cat=0&oh=0b18f023dbba747bf9051372ff084f2d&oe=5BAC224B',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35043573_173242516860976_6134482775056580608_n.png?_nc_cat=0&oh=a9e153b683116fe06cc8637ee27dbddf&oe=5BB50DFF',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34837169_172721100246451_8170686698045308928_n.png?_nc_cat=0&oh=80c0f4fd00cd378dcfe37f74c357809f&oe=5B78F388',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34881875_1796131980474552_9152551200124567552_n.png?_nc_cat=0&oh=8ab469d2dabd160748966f4fa6d63458&oe=5BA93CE8',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35066245_1796131397141277_619231990847111168_n.jpg?_nc_cat=0&oh=1a0a54ea8bd21edcd2d325f92716288c&oe=5BB05E70',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34928706_1796130533808030_9040149075604799488_n.jpg?_nc_cat=0&oh=0227319b465ace378a79893a5d034026&oe=5BA725BF',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34962314_172387403613154_246901052618571776_n.png?_nc_cat=0&oh=3678d5db58d733d4a4fc8b21b443b16b&oe=5BC220AB',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34704827_1794342283986855_1518517633467547648_n.jpg?_nc_cat=0&oh=ff78f08d5252537088e7b249f0768aba&oe=5BBC5000',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34687494_171095147075713_5702345117310910464_n.jpg?_nc_cat=0&oh=9c44ac45606bf5df41e2077bf4d0c499&oe=5BB248BB',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30414524_162800014384267_4246298113925153647_n.jpg?_nc_cat=0&oh=eaa9617ac54b56b60c8ae47c769fb183&oe=5BADC675',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30261262_162799787717623_3449246257275425609_n.jpg?_nc_cat=0&oh=fe2143f0702a4010d4a4f916184376e5&oe=5BB73027',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30222284_162799267717675_7028370776768846558_n.jpg?_nc_cat=0&oh=eced13d61f1f3ebad0176174e6b48510&oe=5BAEDF3F',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30123953_162021014462167_5263626984954842989_n.jpg?_nc_cat=0&oh=44276163b8521db2ad4f947e0dcfeec4&oe=5BB190F0',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/29790360_162017747795827_2925954366853714546_n.jpg?_nc_cat=0&oh=6d55046622ad317e28233f9497e615d5&oe=5B7754DA',
  'https://i.pinimg.com/originals/e8/91/50/e891502c5c3838def91eb8b730f26677.jpg',
  'http://4.bp.blogspot.com/-Ntjz6uO6YE8/USiisef0iaI/AAAAAAAAGRg/AM_lWFcEMHc/s1600/Coca%C3%AFne+beer.png',
  'http://m.memegen.com/vhkzzw.jpg',
  'http://m.memegen.com/wwai00.jpg',
  'https://in02.hostcontrol.com/resources/d0b710e2c7cb0b/9aa94fe21f.JPEG',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbykLahN9f6qOgcztcgpYEmGkOaOOWxTuSQBT1HH6U3fpJbW4VBg',
  'https://i.pinimg.com/originals/4f/79/a9/4f79a976b7dc425997ccd1dae5367b85.jpg',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/35362305_1863083773770624_403227811969499136_n.jpg?_nc_cat=0&oh=5d4c600ce46390a887cc31a75dea0e87&oe=5BA3DD89',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/35226191_1861979057214429_84891952750788608_n.jpg?_nc_cat=0&oh=5f2ed0d49f30c9974977d5d8f6c850a8&oe=5BA7AF81',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/35145351_1861367500608918_6083216417618919424_n.jpg?_nc_cat=0&oh=a0b39e0a6aa897e398e42b6ef0cff59e&oe=5BA23281',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/35080983_1860495514029450_4307017483878924288_n.jpg?_nc_cat=0&oh=9d6301ee0304d77a8618179f9ac53ea9&oe=5BBD07F2',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/35050953_1858939140851754_8018575242936975360_n.jpg?_nc_cat=0&oh=07b7d3c06d4578eb06224938a5cb29ff&oe=5BAE2935',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/34726525_1855468111198857_7553261093133484032_n.jpg?_nc_cat=0&oh=8e2cbc7e28d0ce83f99f711f0728d20f&oe=5BC2047C',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/34877837_1855237387888596_8728522861540540416_n.jpg?_nc_cat=0&oh=b8396794874d3a0424d42e965467d324&oe=5B78D8DD',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/34101036_1087587024740913_7578520899607855104_n.png?_nc_cat=0&oh=670944cfbed829bfc80b6a4ff5a15a40&oe=5BB21E47',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/34701800_1090393274460288_469917104909320192_n.png?_nc_cat=0&oh=61d3ab756f418d63d61761ae81dabdb0&oe=5BC268CA',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/34557306_1089265421239740_1494532852459503616_n.png?_nc_cat=0&oh=a5f51814495b83549f1d71dfd4d71f7c&oe=5BB11573',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/34725790_1091006747732274_668594659865395200_n.png?_nc_cat=0&oh=85eabd5c865312215bce65f0893e9545&oe=5BC1BB5F',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/33824422_1084523128380636_3275081290990223360_n.png?_nc_cat=0&oh=997e1ef532c199767b34b926f68fd549&oe=5BA7CDC5',
  'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/33116192_1080751922091090_5075898448989913088_n.png?_nc_cat=0&oh=ee9225941aa09d553012de49c9ed9a8d&oe=5BB15653',
  'https://img.memecdn.com/netherlands-rage_c_1002213.jpg',
  'https://cdn.discordapp.com/attachments/364762742235594752/453872516231069696/IMG-20180530-WA0000.jpg',
  'https://cdn.discordapp.com/attachments/364762742235594752/453872428431572996/IMG-20180526-WA0000.jpg',
  'https://media.discordapp.net/attachments/364762742235594752/453872427748032533/IMG-20180603-WA0003.jpg?width=364&height=474',
  'https://cdn.discordapp.com/attachments/367387968446660618/417706199379869696/1016072_386662198122731_1887225998_n-221x300.png',
  'https://i.pinimg.com/originals/2a/91/fa/2a91fa46756724a69b65c4af513df5ca.jpg',
  'https://hauntedmc.nl/forum/proxy.php?image=https%3A%2F%2Fimage.prntscr.com%2Fimage%2Ff025f910552c46fc99d26030c2336324.jpg&hash=b302014266881ee3c8f685d3d3e2bf4d',
  'https://hauntedmc.nl/forum/proxy.php?image=http%3A%2F%2Fi67.tinypic.com%2Fa10oew.png&hash=a7884f517010698f1fdf97937c6eefb9',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/35349586_477179159404464_4036635518635606016_n.jpg?_nc_cat=0&oh=d5c923000eafe19f95f41496a63ad869&oe=5B9EC83F',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/34284479_470101990112181_4205455886879031296_n.jpg?_nc_cat=0&oh=8873abce7e9f8e28cfaa699d0ada4ed7&oe=5BEC0325',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/33584504_465725630549817_1480980658682593280_n.jpg?_nc_cat=0&oh=6213bf9aa8a77f0b095b9c438c41e816&oe=5BAF39E3',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/33101395_464207687368278_5304921120418299904_n.jpg?_nc_cat=0&oh=88b03f669f2f36cfd46865254e56bfc1&oe=5BA7E678',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/33377691_465787460543634_1092055676219293696_n.jpg?_nc_cat=0&oh=9aea1b4120d07c5040b20c072e09c221&oe=5BBD1D07',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/32927720_462919640830416_2056970759879786496_n.jpg?_nc_cat=0&oh=b72e7edb889afcec34a33f0d3fe9789f&oe=5BBBA028',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/32498288_460553931066987_500194073135546368_n.jpg?_nc_cat=0&oh=81554293480efb5337411aa546938897&oe=5BABA2B6',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/32239614_459509014504812_6785000450149056512_n.jpg?_nc_cat=0&oh=0fa3dea80bfa3f395cc7286c872ea0d9&oe=5BB1F897',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/32156041_458602314595482_3604860141381353472_n.png?_nc_cat=0&oh=f84922459614a4a6ad1cb02ec9da6d14&oe=5BEAB572',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/31337776_452993918489655_332073286345162752_n.jpg?_nc_cat=0&oh=943394633942b8790ddbe9e0632f902b&oe=5BBB2850',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30716051_449077042214676_9132894771193315328_n.jpg?_nc_cat=0&oh=50a1ba7e4444d46802911b3403d4e296&oe=5BAC35F8',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30572097_446153622507018_4189102300683304960_n.jpg?_nc_cat=0&oh=9f91c61721a49e3ee6d0652d3e243afd&oe=5B9DC315',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30443471_445297159259331_3730339479244767232_n.jpg?_nc_cat=0&oh=2e256f43b39179a8cbb1d80a2ff5532a&oe=5BB02023',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30127783_444601789328868_5603512911898083328_n.jpg?_nc_cat=0&oh=a56dbb3cfe2179903621e19d027c5c46&oe=5BA2418B',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/29792696_443273656128348_8046287117982762617_n.png?_nc_cat=0&oh=0ecf1d0d9aad968f7641dadaad074d29&oe=5BA9E307',
  'https://cdn.discordapp.com/attachments/440232478242897933/459043262561255424/image.jpg',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/29595324_442982459490801_6516085306468244020_n.png?_nc_cat=0&oh=dcc2d692b85a70b171fae8648609fbed&oe=5BEB2727',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/29496927_437419540047093_8567403906529755136_n.jpg?_nc_cat=0&oh=2b2e907b269bd9b3de26fcd12a58e754&oe=5BBF884A',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/29187180_434609693661411_4001759525198626816_n.jpg?_nc_cat=0&oh=76210e53159e36ad6582b7f9219813de&oe=5BC1805D',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/28378824_428988580890189_1169285623180044667_n.jpg?_nc_cat=0&oh=44a7b877d148c1ae0611bf0b4bff38b2&oe=5BAA5838',
  'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/28378319_428684967587217_2826917747445926562_n.jpg?_nc_cat=0&oh=68795d7477883be77b7db244b8a9e4a6&oe=5BA7CCEF',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886355302645790/FB_IMG_1531146292428.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886354429968405/FB_IMG_1531146300001.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886354429968404/FB_IMG_1531146321333.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886353889034241/FB_IMG_1531146268735.jpg',
  'https://cdn.discordapp.com/attachments/440234197093842985/465886353889034240/FB_IMG_1531146288809.jpg',
  
];

let dutch = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`Here is your meme from the Netherlands! ${dutch}`);

}

});

client.on("message", function(message) {
    if (message.content == "Shifter_meme") {

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
  
  
]

let meme = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`Here is your meme! ${meme}`);

}

});

client.on("message", function(message) {
    if (message.content == "Shifter_cat") {

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
    if (message.content == "Shifter_anime") {

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
  
  ]

let anime = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`Here is your anime picture: ${anime}`);

}

});
                                        

client.login(process.env.BOT_TOKEN);


  
