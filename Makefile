bundle:
	@deno bundle --import-map import_map.json src/mod.ts dist/mod.js

test:
	@deno test --import-map import_map.json