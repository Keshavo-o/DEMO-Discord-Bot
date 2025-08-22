const code_obj = require("./code.json")
const code = code_obj.code  
const OPENAI_API_KEY = code_obj.api;


const {Client, GatewayIntentBits} = require("discord.js")

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

let temp = 1;
if(temp==1){
client.on("clientReady", () => {
    console.log(`Logged in as ${client.user.tag}`);
});
temp++;
}

client.on("messageCreate",async (message)=>{
    if(message.author.bot) return; 
    try{
        const response = await fetch("https://api.openai.com/v1/chat/completions",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: message.content
                    }
                ]
            })
        });

        const data = await response.json();
        console.log(data);
        if(data.choices)
        return message.reply(data.choices[0].message.content);
        message.reply("Sorry, something went wrong.");

    } 
    catch (error) {
        console.error("Error:", error);
        message.reply("Sorry, something went wrong.");
    }


});

client.on("interactionCreate", async (interaction) => {
    interaction.reply("Pong!");
});

client.login(code);
