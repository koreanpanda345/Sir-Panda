import { Message } from "discord.js";
import { cache } from "../../constants/cache";
import { createBotEvent } from "../../utils/helpers";

createBotEvent({
	name: "messageCreate",
	invoke: async (message: Message) => {
		if(message.author.bot) return;

		const commandHandler = cache.monitors.get("command_handler");

		try {
			await commandHandler?.invoke(message);
		} catch (error) {
			console.error(error);
		}
	}
});