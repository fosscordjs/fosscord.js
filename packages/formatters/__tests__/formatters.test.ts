/* eslint-disable no-template-curly-in-string */
import { URL } from 'node:url';
import { describe, test, expect, vitest } from 'vitest';
import {
	chatInputApplicationCommandMention,
	blockQuote,
	bold,
	channelLink,
	channelMention,
	codeBlock,
	Faces,
	formatEmoji,
	hideLinkEmbed,
	hyperlink,
	inlineCode,
	italic,
	messageLink,
	quote,
	roleMention,
	spoiler,
	strikethrough,
	time,
	TimestampStyles,
	underscore,
	userMention,
} from '../src/index.js';

describe('Message formatters', () => {
	describe('codeBlock', () => {
		test('GIVEN "spacebar.js" with no language THEN returns "```\\nspacebar.js```"', () => {
			expect<'```\nspacebar.js\n```'>(codeBlock('spacebar.js')).toEqual('```\nspacebar.js\n```');
		});

		test('GIVEN "spacebar.js" with "js" as language THEN returns "```js\\nspacebar.js```"', () => {
			expect<'```js\nspacebar.js\n```'>(codeBlock('js', 'spacebar.js')).toEqual('```js\nspacebar.js\n```');
		});
	});

	describe('inlineCode', () => {
		test('GIVEN "spacebar.js" THEN returns "`spacebar.js`"', () => {
			expect<'`spacebar.js`'>(inlineCode('spacebar.js')).toEqual('`spacebar.js`');
		});
	});

	describe('italic', () => {
		test('GIVEN "spacebar.js" THEN returns "_spacebar.js_"', () => {
			expect<'_spacebar.js_'>(italic('spacebar.js')).toEqual('_spacebar.js_');
		});
	});

	describe('bold', () => {
		test('GIVEN "spacebar.js" THEN returns "**spacebar.js**"', () => {
			expect<'**spacebar.js**'>(bold('spacebar.js')).toEqual('**spacebar.js**');
		});
	});

	describe('underscore', () => {
		test('GIVEN "spacebar.js" THEN returns "__spacebar.js__"', () => {
			expect<'__spacebar.js__'>(underscore('spacebar.js')).toEqual('__spacebar.js__');
		});
	});

	describe('strikethrough', () => {
		test('GIVEN "spacebar.js" THEN returns "~~spacebar.js~~"', () => {
			expect<'~~spacebar.js~~'>(strikethrough('spacebar.js')).toEqual('~~spacebar.js~~');
		});
	});

	describe('quote', () => {
		test('GIVEN "spacebar.js" THEN returns "> spacebar.js"', () => {
			expect<'> spacebar.js'>(quote('spacebar.js')).toEqual('> spacebar.js');
		});
	});

	describe('blockQuote', () => {
		test('GIVEN "spacebar.js" THEN returns ">>> spacebar.js"', () => {
			expect<'>>> spacebar.js'>(blockQuote('spacebar.js')).toEqual('>>> spacebar.js');
		});
	});

	describe('hideLinkEmbed', () => {
		test('GIVEN "https://spacebar.js.org" THEN returns "<https://spacebar.js.org>"', () => {
			expect<'<https://spacebar.js.org>'>(hideLinkEmbed('https://spacebar.js.org')).toEqual('<https://spacebar.js.org>');
		});

		test('GIVEN new URL("https://spacebar.js.org") THEN returns "<https://spacebar.js.org>"', () => {
			expect<`<${string}>`>(hideLinkEmbed(new URL('https://spacebar.js.org/'))).toEqual('<https://spacebar.js.org/>');
		});
	});

	describe('hyperlink', () => {
		test('GIVEN content and string URL THEN returns "[content](url)"', () => {
			expect<'[spacebar.js](https://spacebar.js.org)'>(hyperlink('spacebar.js', 'https://spacebar.js.org')).toEqual(
				'[spacebar.js](https://spacebar.js.org)',
			);
		});

		test('GIVEN content and URL THEN returns "[content](url)"', () => {
			expect<`[spacebar.js](${string})`>(hyperlink('spacebar.js', new URL('https://spacebar.js.org'))).toEqual(
				'[spacebar.js](https://spacebar.js.org/)',
			);
		});

		test('GIVEN content, string URL, and title THEN returns "[content](url "title")"', () => {
			expect<'[spacebar.js](https://spacebar.js.org "Official Documentation")'>(
				hyperlink('spacebar.js', 'https://spacebar.js.org', 'Official Documentation'),
			).toEqual('[spacebar.js](https://spacebar.js.org "Official Documentation")');
		});

		test('GIVEN content, URL, and title THEN returns "[content](url "title")"', () => {
			expect<`[spacebar.js](${string} "Official Documentation")`>(
				hyperlink('spacebar.js', new URL('https://spacebar.js.org'), 'Official Documentation'),
			).toEqual('[spacebar.js](https://spacebar.js.org/ "Official Documentation")');
		});
	});

	describe('spoiler', () => {
		test('GIVEN "spacebar.js" THEN returns "||spacebar.js||"', () => {
			expect<'||spacebar.js||'>(spoiler('spacebar.js')).toEqual('||spacebar.js||');
		});
	});

	describe('Mentions', () => {
		describe('userMention', () => {
			test('GIVEN userId THEN returns "<@[userId]>"', () => {
				expect(userMention('139836912335716352')).toEqual('<@139836912335716352>');
			});
		});

		describe('channelMention', () => {
			test('GIVEN channelId THEN returns "<#[channelId]>"', () => {
				expect(channelMention('829924760309334087')).toEqual('<#829924760309334087>');
			});
		});

		describe('roleMention', () => {
			test('GIVEN roleId THEN returns "<&[roleId]>"', () => {
				expect(roleMention('815434166602170409')).toEqual('<@&815434166602170409>');
			});
		});

		describe('chatInputApplicationCommandMention', () => {
			test('GIVEN commandName and commandId THEN returns "</[commandName]:[commandId]>"', () => {
				expect(chatInputApplicationCommandMention('airhorn', '815434166602170409')).toEqual(
					'</airhorn:815434166602170409>',
				);
			});

			test('GIVEN commandName, subcommandName, and commandId THEN returns "</[commandName] [subcommandName]:[commandId]>"', () => {
				expect(chatInputApplicationCommandMention('airhorn', 'sub', '815434166602170409')).toEqual(
					'</airhorn sub:815434166602170409>',
				);
			});

			test('GIVEN commandName, subcommandGroupName, subcommandName, and commandId THEN returns "</[commandName] [subcommandGroupName] [subcommandName]:[commandId]>"', () => {
				expect(chatInputApplicationCommandMention('airhorn', 'group', 'sub', '815434166602170409')).toEqual(
					'</airhorn group sub:815434166602170409>',
				);
			});
		});
	});

	describe('formatEmoji', () => {
		test('GIVEN static emojiId THEN returns "<:_:${emojiId}>"', () => {
			expect<`<:_:851461487498493952>`>(formatEmoji('851461487498493952')).toEqual('<:_:851461487498493952>');
		});

		test('GIVEN static emojiId WITH animated explicitly false THEN returns "<:_:[emojiId]>"', () => {
			expect<`<:_:851461487498493952>`>(formatEmoji('851461487498493952', false)).toEqual('<:_:851461487498493952>');
		});

		test('GIVEN animated emojiId THEN returns "<a:_:${emojiId}>"', () => {
			expect<`<a:_:827220205352255549>`>(formatEmoji('827220205352255549', true)).toEqual('<a:_:827220205352255549>');
		});
	});

	describe('channelLink', () => {
		test('GIVEN channelId THEN returns "https://discord.com/channels/@me/${channelId}"', () => {
			expect<'https://discord.com/channels/@me/123456789012345678'>(channelLink('123456789012345678')).toEqual(
				'https://discord.com/channels/@me/123456789012345678',
			);
		});

		test('GIVEN channelId WITH guildId THEN returns "https://discord.com/channels/${guildId}/${channelId}"', () => {
			expect<'https://discord.com/channels/987654321987654/123456789012345678'>(
				channelLink('123456789012345678', '987654321987654'),
			).toEqual('https://discord.com/channels/987654321987654/123456789012345678');
		});
	});

	describe('messageLink', () => {
		test('GIVEN channelId AND messageId THEN returns "https://discord.com/channels/@me/${channelId}/${messageId}"', () => {
			expect<'https://discord.com/channels/@me/123456789012345678/102938475657483'>(
				messageLink('123456789012345678', '102938475657483'),
			).toEqual('https://discord.com/channels/@me/123456789012345678/102938475657483');
		});

		test('GIVEN channelId AND messageId WITH guildId THEN returns "https://discord.com/channels/${guildId}/${channelId}/${messageId}"', () => {
			expect<'https://discord.com/channels/987654321987654/123456789012345678/102938475657483'>(
				messageLink('123456789012345678', '102938475657483', '987654321987654'),
			).toEqual('https://discord.com/channels/987654321987654/123456789012345678/102938475657483');
		});
	});

	describe('time', () => {
		test('GIVEN no arguments THEN returns "<t:${bigint}>"', () => {
			vitest.useFakeTimers();
			vitest.setSystemTime(1_566_424_897_579);

			expect<`<t:${bigint}>`>(time()).toEqual('<t:1566424897>');

			vitest.useRealTimers();
		});

		test('GIVEN a date THEN returns "<t:${bigint}>"', () => {
			expect<`<t:${bigint}>`>(time(new Date(1_867_424_897_579))).toEqual('<t:1867424897>');
		});

		test('GIVEN a date and a style from string THEN returns "<t:${bigint}:${style}>"', () => {
			expect<`<t:${bigint}:d>`>(time(new Date(1_867_424_897_579), 'd')).toEqual('<t:1867424897:d>');
		});

		test('GIVEN a date and a format from enum THEN returns "<t:${bigint}:${style}>"', () => {
			expect<`<t:${bigint}:R>`>(time(new Date(1_867_424_897_579), TimestampStyles.RelativeTime)).toEqual(
				'<t:1867424897:R>',
			);
		});

		test('GIVEN a date THEN returns "<t:${time}>"', () => {
			expect<'<t:1867424897>'>(time(1_867_424_897)).toEqual('<t:1867424897>');
		});

		test('GIVEN a date and a style from string THEN returns "<t:${time}:${style}>"', () => {
			expect<'<t:1867424897:d>'>(time(1_867_424_897, 'd')).toEqual('<t:1867424897:d>');
		});

		test('GIVEN a date and a format from enum THEN returns "<t:${time}:${style}>"', () => {
			expect<'<t:1867424897:R>'>(time(1_867_424_897, TimestampStyles.RelativeTime)).toEqual('<t:1867424897:R>');
		});
	});

	describe('Faces', () => {
		test('GIVEN Faces.Shrug THEN returns "¯\\_(ツ)\\_/¯"', () => {
			expect<'¯\\_(ツ)\\_/¯'>(Faces.Shrug).toEqual('¯\\_(ツ)\\_/¯');
		});

		test('GIVEN Faces.Tableflip THEN returns "(╯°□°）╯︵ ┻━┻"', () => {
			expect<'(╯°□°）╯︵ ┻━┻'>(Faces.Tableflip).toEqual('(╯°□°）╯︵ ┻━┻');
		});

		test('GIVEN Faces.Unflip THEN returns "┬─┬ ノ( ゜-゜ノ)"', () => {
			expect<'┬─┬ ノ( ゜-゜ノ)'>(Faces.Unflip).toEqual('┬─┬ ノ( ゜-゜ノ)');
		});
	});
});
