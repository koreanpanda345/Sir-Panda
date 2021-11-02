import { cache } from "../constants/cache";
import { client } from "../constants/client";
import { IBotCommand } from "../interfaces/IBotCommand";
import { IBotEvent } from "../interfaces/IBotEvent";
import { IBotMonitor } from "../interfaces/IBotMonitor";

export function createBotEvent(event: IBotEvent) {
	if(cache.events.has(event.name)) return;

	if(event.disabled) return;

	if(event.once) client.once(event.name, async (...params) => await event.invoke(...params));
	else client.on(event.name, async (...params) => await event.invoke(...params));

	cache.events.set(event.name, event);

	console.log(`Event ${event.name} has been loaded.`);
}

export function createBotMonitor(monitor: IBotMonitor) {
	if(cache.monitors.has(monitor.name)) return;
	
	if(monitor.disabled) return;

	cache.monitors.set(monitor.name, monitor);

	console.log(`Monitor ${monitor.name} has been loaded.`);
}

export function createBotCommand(command: IBotCommand) {
	if(cache.commands.has(command.name)) return;

	if(command.disabled) return;

	cache.commands.set(command.name, command);

	console.log(`Command ${command.name} has been loaded.`);
}