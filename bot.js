const Discord = require("discord.js")
const client = new Discord.Client()

client.on("message",msg=>{
if(msg.content.startsWith('세린아 연타테스트')){
        msg.client.api.channels[msg.channel.id].messages().post({
            data:{
                content:"연타 테스트입니다. 버튼을 연타해주세요.",
                components:[
                    {type:1,components:[{type:2,style:4,custom_id:'speedTest',label:'연타!'}]}
                ]
            }
        })
}
else if(msg.content.startsWith('마법의 세린님 ')){
     const list = ["안돼.","그래.","다시 한번 물어봐.","아니.","맞아."];
    msg.reply(list[Math.floor(Math.random() * list.length)]);
 }
})
client.login()
