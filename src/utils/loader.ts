import { readdirSync } from "fs";

export async function loadFiles(dir: string) {
	const root = process.env.STATE === "DEVELOPMENT" ? "src" : "build";
	const ext = process.env.STATE === "DEVELOPMENT" ? ".ts" : ".js";
	
	const path = `./${root}/${dir}`;

	const folders = readdirSync(path);

	for(const folder of folders) {
		const files = readdirSync(`${path}/${folder}`).filter(file => file.endsWith(ext));
		for(const file of files) {
			await import(`../${dir}/${folder}/${file}`);
			console.log(`Loaded ${file}`);
		}
	}
}