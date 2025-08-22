// Importing the bot token (and other data) from code.json file
// Example structure of code.json: { "code": "BOT_TOKEN", "client": "APPLICATION_ID" }
const token_obj = require("./code.json");

// Extracting the bot token from the JSON file
const token = token_obj.code;

// Importing REST and Routes from discord.js
// REST is used for interacting with Discord’s REST API
// Routes provides API route methods (for registering commands, etc.)
const { REST, Routes } = require("discord.js");

// Defining the commands we want to register
// Each command object must contain at least a "name" and "description"
const commands = [
    {
        name: "ping",              // Command name (what user types in Discord: /ping)
        description: "Replies with Pong!" // Short description shown in Discord
    }
];

// Creating a REST client with version 10 (latest Discord API)
// Then we set our bot token so Discord knows which bot is registering commands
const rest = new REST({ version: '10' }).setToken(token);

// Async function to register slash commands to Discord
async function registerCommands() {
    try {
        console.log("Started registering application commands...");

        // Using Discord's REST API to register commands
        // Routes.applicationCommands() requires the APPLICATION_ID (client id of your bot)
        // "commands" array is sent in the body so Discord knows which commands to add
        await rest.put(
            Routes.applicationCommands(token_obj.client),
            { body: commands }
        );

        console.log("Successfully registered application commands ✅");
    } catch (err) {
        // If something goes wrong (wrong token, client id, etc.), log the error
        console.log("Error while registering commands ❌:", err);
    }
}

// Calling the function to actually run the registration
registerCommands();

// Note: This script only registers commands globally on Discord.
// It does not make the bot respond — you need separate code with Client & events for handling commands.
// You can run this script once to register commands, then run your bot code separately.

//THIS REGISTERS A COMMAND FOR YOUR BOT IN THE DISCORD SERVER