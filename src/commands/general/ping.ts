import { createBotCommand } from "../../utils/helpers";

createBotCommand({
	name: "ping",
	invoke: async (message, args) => {
		message.reply("Pong!");
	}
});