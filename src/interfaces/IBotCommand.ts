import { Message } from "discord.js";

export interface IBotCommand {
	name: string;
	aliases?: string[];
	description?: string;
	disabled?: boolean;
	
	invoke: (message: Message, args: string[]) => Promise<unknown>;
}