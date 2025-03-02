const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1258311684334944286')
        .setType('PLAYING')
        .setURL('https://discord.gg/4C6dFG8tbx')
        .setState('Murah, Aman, Begaransi')
        .setName('Warmut Store')
        .setDetails('Menjual Berbagai App Premium')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1251479736715186228/1345660781248905287/20240609_172952_0000.png?ex=67c55bc3&is=67c40a43&hm=8a1883e9a7cd75f8d6b772dc1b5d40f52e094ed3fc2c343db37d544ee60b5044&=&format=webp&quality=lossless&width=480&height=480')
        .setAssetsLargeText('Testimoni 900+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1251479736715186228/1345660838727389194/1196765932119408711.gif?ex=67c55bd1&is=67c40a51&hm=7bfd377133dd66295f62ca35e4b1deedc385af9fcda6628334d282ae05c4d3c7&=')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/4C6dFG8tbx')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












