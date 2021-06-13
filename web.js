const express = require('express')
const {verifyKeyMiddleware} = require('discord-interactions')
const app = express()
let count = new Map();
const WEBPORT = 80;
const public_key = '';

app.get('/reset', (req, res) => {
count.clear();
  res.json({status:'CLEAR OK',data:Object.fromEntries(count)})
})
app.get('/list', (req, res) => {
  res.json({status:'OK',data:Object.fromEntries(count)}})
})

app.get('/', (req, res) => {
  res.json({hello:'world'})
})
app.post('/discord/buttons',verifyKeyMiddleware(public_key), async (req, res) => {
   const data = req.body;
   console.log(data);
    if(data.data.custom_id === "speedTest"){
       if(!count.has(data.message.id)) count.set(data.message.id,{val:0})
	const _count = count.get(data.message.id).val++;
      return res.status(200).json({
        data:{
          content:`연타 테스트입니다. 버튼을 연타해주세요. (수: ${_count})`,
	  components:[
		{type:1,components:[{type:2,style:(_count % 4)+1,custom_id:'speedTest',label:'연타!'}]}
		]
        },
        type:7
      });
    }
})

app.listen(WEBPORT, () => {
  console.log(`${WEBPORT}로 웹서버가 열렸습니다. 작동 시작합니다.`)
})
