const { AugurClient } = require("augurbot");
const Discord = require("discord.js");

type TimeStampStyle = "t" | "T" | "d" | "D" | "f" | "F" | "R";
type DiscordTime = `<t:${bigint}:${TimeStampStyle}>`;

function createTimeStamp(date: Date, timeStampStyle: TimeStampStyle): DiscordTime {
    const unixTime: bigint = Math.round(date.getTime()/1000);
    return `<t:${unixTime}:${timeStampStyle}>`;
}

