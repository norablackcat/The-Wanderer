const Augur = require("augurbot"),
    u = require("../utils/utils"),
    snowflakes = require('../config/snowflakes.json');
const mee6 = "848863263218728980"
const Module = new Augur.Module()
.addEvent("messageCreate", async (msg) => {
    if(msg.author.id != mee6 || msg.content.indexOf("2.5k birthday xp.") < 0) return;
    else {
        msg.channel.send("Radiance wishes you a happy day of cake. 🎂")
    }

});




module.exports = Module;