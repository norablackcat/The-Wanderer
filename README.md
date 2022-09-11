## The Wanderer - Custom Discord bot for The Enchanter discord community.

The Wanderer is built in Node.js for The Enchanter discord community. The bot is a modified fork of [The Climber's Court](https://discord.gg/dkCN462PvJ) [custom bot](https://github.com/chevyboys/Mizuchi). Big shutout to [chevyboys](https://github.com/chevyboys) the mainter of the climber's court bot for the help in getting this project running. It runs on the [Augur framework](https://github.com/Gaiwecoor/augurbot), utilizing the [Discord.js library](https://discord.js.org/). The name The Wanderer is based on a character from the short story "Death of the King" by Tobias Begley avaible to read in the [The Enchanter Discord](https://discord.gg/7MBxQhjhWT)


Pull requests from the community are welcome! Please be sure to follow programing best practices to the best of your ability (SOLID and DRY princples) there is a [thread](https://discord.com/channels/961984334808633425/1017257905768124426) in the discord under the General channel for bot discussion or questions and help.

When submitting a PR, please include the following questions with the appropriate answers:
* Migration to Typescript is in progress when contributing new code please use Typescript (rename files to .ts if neeeded)
* Are any changes to config.json necessary? If so, are they reflected in config-example.json?
* Are all referenced snowflakes contained in the config/snowflake.json file, rather than in the code directly?
* Are any changes to Interaction fingerprints needed? If so, are they reflected in the appropriate file in /registry?
* Have I used JSdoc style comments (at least) to properly document all of my functions? 
* Are there any new dependencies that need to be installed? If so, are they reflected in package.json?
