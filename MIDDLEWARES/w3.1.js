const express = require('express');
const app = express();
const zod = require('zod');
// Zod schema's
const schema = zod.array(zod.number());
// const schema2 = zod.object({
//     email:zod.string(),
//     password:zod.string(),
//     country:zod.literal("IN").or(z.literal("US"))
// });
app.use(express.json());
function usernameValidator(req, res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="Gyan" || password!="pass"){
        res.status(400).json({msg: "Somethings up with your inputsss"});
        return;
    }
    else{
        next();
    }
}

function kidneyIdValidator(req, res,next) {
    
    const kidneyId = req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({msg: "Somethings up with your inputs"});
        return;
    }
    else{
        next();
    }


}
app.get("/health-checkup",usernameValidator,kidneyIdValidator,function(req,res){
    res.json({
        msg:"your Kidney is fine!"
    })
});
app.post("/health-checkup",usernameValidator,function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    // const kidneyLength = kidneys.length;
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
        return;
    }
    res.json({response});
});
app.use(function(err,req,res,next){
    res.json(
        
        {msg:"Sorry something is up with our server"}
    );
});

app.listen(3000);
