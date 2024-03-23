const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());
const users = [{
    name: 'John',
    kidneys:[{
        healthy:false
    }]
}];
// Query Parameters use to send data
app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });

})
// Body used to send data
app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg:"Done!"
    });
});
// making all the kidney replace with healthy kidneys
app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
});
// making all the unhealthy kidneys removed
app.delete('/',function(req,res){
    if(isThereAtleastOneBadKidney()){
        let newKidneys = [];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({healthy:true});
            }
        }
        users[0].kidneys=newKidneys;
        res.json({msg:"Done!"});

    }
    else{
        res.status(411).json({msg:"There is no Unhealthy Kidneys!!!"});
    }
    
})

function isThereAtleastOneBadKidney(){
    let badKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            badKidney = true;
            return badKidney;
        }
    }
    return badKidney;
}

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});