import Collection from "@discordjs/collection";
import { IBotEvent } from './../interfaces/IBotEvent';
import { IBotCommand } from './../interfaces/IBotCommand';
import { IBotMonitor } from './../interfaces/IBotMonitor';

export const cache = {
	commands: new Collection<string, IBotCommand>(),
	events: new Collection<string, IBotEvent>(),
	monitors: new Collection<string, IBotMonitor>()
};