// This is the executable file

import { config } from "dotenv";
import { client } from "./constants/client";
import { loadFiles } from "./utils/loader";
config();

const startBot = () => {
	Promise.all([
		"events",
		"monitors",
		"commands"
	].map(async (x) => await loadFiles(x)));
	client.login(process.env.DISCORD_BOT_TOKEN);
};

startBot();