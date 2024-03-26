const express = require("express");
const mongoose = require('mongoose');
const port = 3000;
app.use(express.json());
mongoose.connect("mongodb+srv://gyanendrajsp2001:gyana123@gyanendra.bqtyfro.mongodb.net/userappnew");
const User = mongoose.model('users', { name: String, email: String, password: String });
app.post("/signup",async function(req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await User.findOne({email:username});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }
    // const user = new User({ name: 'harkirat singh', email: 'harkirat@gmail.com', password: '123' });
    const user = new User({ name: name, email: username, password: password });
    user.save(); // Save the user
    res.send("User created successfully");

})
app.listen(port);
// Connect to MongoDB Atlas cluster without deprecated options

