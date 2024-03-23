const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 3000
// Parse JSON bodies
app.use(bodyParser.json());

app.post('/conversations',(req,res)=>{
    console.log(req.body);
    res.send({
        msg:"2+2=5"
    })
})
app.get('/', (req, res) => {
  res.send('<b>Hello World!!!</b>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

