<div align="center">
	<br />
	<p>
		<a href="https://spacebar.js.org"><img src="https://spacebar.js.org/static/logo.svg" width="546" alt="spacebar.js" /></a>
	</p>
	<br />
	<p>
		<a href="https://discord.gg/djs"><img src="https://img.shields.io/discord/222078108977594368?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://hub.docker.com/r/spacebarjs/proxy"><img src="https://img.shields.io/docker/v/spacebarjs/proxy.svg?sort=semver&maxAge=3600" alt="dockerhub version" /></a>
		<a href="https://hub.docker.com/r/spacebarjs/proxy"><img src="https://img.shields.io/docker/pulls/spacebarjs/proxy.svg?maxAge=3600" alt="dockerhub pulls" /></a>
		<a href="https://github.com/spacebarjs/spacebar.js/actions"><img src="https://github.com/spacebarjs/spacebar.js/actions/workflows/test.yml/badge.svg" alt="Build status" /></a>
	</p>
	<p>
		<a href="https://vercel.com/?utm_source=discordjs&utm_campaign=oss"><img src="https://raw.githubusercontent.com/spacebarjs/spacebar.js/main/.github/powered-by-vercel.svg" alt="Vercel" /></a>
	</p>
</div>

## About

`@discordjs/proxy-container` - Lightweight HTTP proxy for Discord's API, brought to you as a container 📦

## Usage

Quickly spin up an instance:

`docker run -d --restart unless-stopped --name proxy -p 127.0.0.1:8080:8080 -e DISCORD_TOKEN=abc discordjs/proxy`

Use it:

```ts
import { Client } from 'spacebar.js';

const client = new Client({
	// other options,
	rest: {
		api: 'http://localhost:8080/api',
	},
});
```

Or with just `@discordjs/rest`:

```ts
import { REST } from '@discordjs/rest';

const rest = new REST({
	api: 'http://localhost:8080/api',
});
```

## Links

- [Website][website] ([source][website-source])
- [Documentation][documentation]
- [Guide][guide] ([source][guide-source])
  See also the [Update Guide][guide-update], including updated and removed items in the library.
- [spacebar.js Discord server][discord]
- [Discord API Discord server][discord-api]
- [GitHub][source]
- [Related libraries][related-libs]

## Contributing

See [the contribution guide][contributing] if you'd like to submit a PR.

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [spacebar.js Server][discord].

[website]: https://spacebar.js.org/
[website-source]: https://github.com/spacebarjs/spacebar.js/tree/main/apps/website
[documentation]: https://spacebar.js.org/
[guide]: https://spacebarjs.guide/
[guide-source]: https://github.com/spacebarjs/guide
[guide-update]: https://spacebarjs.guide/additional-info/changes-in-v14.html
[discord]: https://discord.gg/djs
[discord-api]: https://discord.gg/discord-api
[source]: https://github.com/spacebarjs/spacebar.js/tree/main/packages/proxy-container
[related-libs]: https://discord.com/developers/docs/topics/community-resources#libraries
[contributing]: https://github.com/spacebarjs/spacebar.js/blob/main/.github/CONTRIBUTING.md
