import { existsSync, writeFileSync, readFileSync, mkdirSync } from "fs";
import { join } from "path";
import getUuid from "uuid-by-string";

class Cache<Scheme> {
	private path: string;
	private enabled: boolean;
	constructor(type: string) {
		this.path = join(process.cwd(), "cache", type);
		this.enabled = !process.env.disable_cache;

		if (this.enabled && !existsSync(this.path)) {
			mkdirSync(this.path, { recursive: true });
		}
	}

	private file(key: string): string {
		return join(this.path, getUuid(key)) + ".json";
	}

	get(key: string): Scheme {
		return JSON.parse(readFileSync(this.file(key)).toString());
	}

	has(key: string): boolean {
		if (!this.enabled) {
			return false;
		}
		return existsSync(this.file(key));
	}

	set(key: string, data: Scheme): Scheme {
		if (this.enabled) {
			writeFileSync(
				this.file(key),
				JSON.stringify(data, null, process.env.pretty_cache ? "\t" : undefined)
			);
		}
		return data;
	}
}
export default Cache;
