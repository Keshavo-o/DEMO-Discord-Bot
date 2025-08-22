# Discord Bot Demo

This is a simple demo project showing how to create and register a Discord bot using discord.js.

It consists of two main files:

## 1. index.js (Bot Logic)

Imports bot token from code.json.

Creates a Client with necessary Gateway Intents (Guilds, Messages, MessageContent).

Sets up event listeners:

ready → Logs when the bot is online.

messageCreate → Replies to user messages.

interactionCreate → Responds to slash commands.

Logs in with the bot token.

## 2. command.js (Command Registration)

Uses Discord REST API to register commands.

Registers a sample /ping command.

Requires APPLICATION_ID (client id) and BOT_TOKEN from code.json.

3. code.json (Configuration File)

Example:

{
  "code": "YOUR_BOT_TOKEN",
  "client": "YOUR_APPLICATION_ID"
}

## Running the Project

### Install dependencies:

npm install discord.js

### Make code.json file with the syntax:
{
  "code": "YOUR_BOT_TOKEN",
  "client": "YOUR_APPLICATION_ID"
}


### Register slash commands (run once):

node registerCommands.js


### Start the bot:

node bot.js

## Features

Replies to normal text messages and to special commands.

Supports slash commands (/ping).

Demonstrates use of event listeners in Discord.js.
