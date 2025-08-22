const code_obj = require("./code.json")
const code = code_obj.code  
//Code is unique for your bot, make sure to keep it safe. You can create your own code.json file or directly use it here
// console.log(code)

const {Client, GatewayIntentBits} = require("discord.js")
//Here we required the discord.js module -> two objects : Client and GatewayIntentBits
//Client represents the bot itself and GatewayIntentBits represents the different events the bot can listen to

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,//allows bot to recieve guild events happening on server
        GatewayIntentBits.GuildMessages,//allows bot to receive messages in guilds
        GatewayIntentBits.MessageContent//allows bot to receive message content
    ]
});
//Intents can basically be considered as permissions

//All code is basically written in form of event listeners
let temp = 1;
if(temp==1){
client.on("clientReady", () => {
    console.log(`Logged in as ${client.user.tag}`);
});//ready is a basic event that is emitted when the bot is ready
//client.user.tag represents the tag of the user (bot) that is logged in
temp++;
}


client.on("messageCreate",(message)=>//This is an event listener that is triggered when a new message is created by any user, even if created by bot itself it will get triggered
{
    if(message.author.bot) return; // Ignore bot messages


    //message is basically a message object that is passed everytime a message is created in the server
    // console.log(message);
    console.log(message.content);//content is a property of message object that contains the actual text of the message


    //for giving a reply when message is triggered
    message.reply("Hello, " + message.author.username);//NOTE : this will even reply to itself. so you have to use a condition at the start to return null if bot message.
})


//a NEW listener for slash commands
client.on("interactionCreate", async (interaction) => {
    // console.log(interaction);
    interaction.reply("Pong!");
});

client.login(code);//logging in with token of our bot