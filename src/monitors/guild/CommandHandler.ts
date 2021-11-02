import { Message } from "discord.js";
import { cache } from "../../constants/cache";
import { createBotMonitor } from "../../utils/helpers";

createBotMonitor({
	name: "command_handler",
	invoke: async (message: Message) => {
		const prefix = process.env.DISCORD_BOT_PREFIX as string;
		
		if(!message.content.toLowerCase().trim().startsWith(prefix)) return;
		
		const args = message.content.trim().slice(prefix.length).split(/ +g/);
		const commandName = args.shift()?.toLowerCase() as string;

		const command = cache.commands.get(commandName) || cache.commands.find((c) => c.aliases! && c.aliases?.includes(commandName));

		try {
			await command?.invoke(message, args);
		} catch (error) {
			console.error(error);
		}
	}
});