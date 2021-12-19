const timeout = requre(timeout.js)

fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err)
    var files = files.filter(f => f.split(".").pop() === "yml")
})

if (jsFiles.length <= 0) {
    console.log(`Some error with YML Length`);
    return;
}

jsFiles.forEach((f) =>{
     var fileGet = require(`./assets/${f}`)
     console.log(`The file ${f} is broken`)

     bot.commands.set(fileGet.help.name, fileGet)
});

client.on('ready', () => {
    console.log('User connected to AcidEyezZz.github.io/Acid/')
    client.user.setActivity("Help", {type: "Viewing"})
})

bot.on("message", async message => {
    var prefix = botConfig.prefix
    var messageArray = message.content.split(" ")
    var command = messageArray[0]
    var arguments = messageArray.slice(1)
    var commands = bot.commands.get(command.slice(prefix.length))
    if(commands) commands.run(bot, message, arguments)
})