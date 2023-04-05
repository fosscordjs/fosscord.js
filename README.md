<div align="center">
	<br />
	<p>
		<a href="https://spacebarjs.github.io/"><img src="https://github.com/spacebarjs.png" width="100" alt="spacebar.js" /></a>
	</p>
	<br />
	<p>
		<a href="https://discord.com/invite/PESTjBKkr5"><img src="https://img.shields.io/discord/959215581364625458?color=CC4C00&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/spacebar.js"><img src="https://img.shields.io/npm/v/spacebar.js.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/spacebar.js"><img src="https://img.shields.io/npm/dt/spacebar.js.svg?maxAge=3600" alt="npm downloads" /></a>
		<a href="https://github.com/spacebarjs/spacebar.js/actions"><img src="https://github.com/spacebarjs/spacebar.js/actions/workflows/test.yml/badge.svg" alt="Tests status" /></a>
		<a href="https://codecov.io/gh/spacebarjs/spacebar.js" ><img src="https://codecov.io/gh/spacebarjs/spacebar.js/branch/main/graph/badge.svg?precision=2" alt="Code coverage" /></a>
	</p>
	<p>
		<a href="https://vercel.com/?utm_source=spacebarjs&utm_campaign=oss"><img src="https://raw.githubusercontent.com/spacebarjs/spacebar.js/main/.github/powered-by-vercel.svg" alt="Vercel" /></a>
	</p>
</div>

## About

spacebar.js is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[Spacebar API](https://docs.spacebar.chat/).

- Object-oriented
- Predictable abstractions
- Performant
- 100% coverage of the Spacebar API

## Installation

**Node.js 16.9.0 or newer is required.**

```sh
npm install spacebar.js
yarn add spacebar.js
pnpm add spacebar.js
```

### Optional packages

- [zlib-sync](https://www.npmjs.com/package/zlib-sync) for WebSocket data compression and inflation (`npm install zlib-sync`)
- [erlpack](https://github.com/spacebarchat/erlpack) for significantly faster WebSocket data (de)serialisation (`npm install spacebarchat/erlpack`)
- [bufferutil](https://www.npmjs.com/package/bufferutil) for a much faster WebSocket connection (`npm install bufferutil`)
- [utf-8-validate](https://www.npmjs.com/package/utf-8-validate) in combination with `bufferutil` for much faster WebSocket processing (`npm install utf-8-validate`)
- [@spacebarjs/voice](https://www.npmjs.com/package/@spacebarjs/voice) for interacting with the Spacebar Voice API (`npm install @spacebarjs/voice`)

## Example usage

Install spacebar.js:

```sh
npm install spacebar.js
yarn add spacebar.js
pnpm add spacebar.js
```

Register a slash command against the Spacebar API:

```js
const { REST, Routes } = require('spacebar.js');

const commands = [
	{
		name: 'ping',
		description: 'Replies with Pong!',
	},
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
```

Afterwards we can create a quite simple example bot:

```js
const { Client, GatewayIntentBits } = require('spacebar.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

client.login(TOKEN);
```

## Links

- [Website][website] ([source][website-source])
- [Documentation][documentation]
- [Guide][guide] ([source][guide-source])
  See also the [Update Guide][guide-update], including updated and removed items in the library.
- [spacebar.js Discord server][spacebar]
- [Spacebar API Discord server][spacebar-api]
- [GitHub][source]
- [npm][npm]
- [Related libraries][related-libs]

### Extensions

- [RPC][rpc] ([source][rpc-source])

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation][documentation].  
See [the contribution guide][contributing] if you'd like to submit a PR.

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [spacebar.js Server][spacebar].

[website]: https://spacebarjs.github.io/
[website-source]: https://github.com/spacebarjs/spacebarjs.github.io
[documentation]: https://spacebarjs.github.io/
[guide]: https://spacebarjs.github.io/
[guide-source]: https://github.com/spacebarjs/guide
[guide-update]: https://spacebarjs.github.io/
[spacebar]: https://discord.com/invite/PESTjBKkr5
[spacebar-api]: https://discord.com/invite/jcCJJNR7vc
[source]: https://github.com/spacebarjs/spacebar.js/tree/main/packages/spacebar.js
[npm]: https://www.npmjs.com/package/spacebar.js
[related-libs]: https://docs.spacebar.chat/setup/bots/#bot-libraries
[rpc]: https://www.npmjs.com/package/spacebar-rpc
[rpc-source]: https://github.com/spacebarjs/RPC
[contributing]: https://github.com/spacebarjs/spacebar.js/blob/main/.github/CONTRIBUTING.md
