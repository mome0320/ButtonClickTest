const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!"

client.on("message",msg=>{
if(msg.content.startsWith(`${prefix}연타테스트`)){
        msg.client.api.channels[msg.channel.id].messages().post({
            data:{
                content:"연타 테스트입니다. 버튼을 연타해주세요.",
                components:[
                    {type:1,components:[{type:2,style:4,custom_id:'speedTest',label:'연타!'}]}
                ]
            }
        })
}
})
client.login()
