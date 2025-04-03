import express from 'express'; //requiring express
const app = express(); //invoking the express
const PORT = 3000;


// define the route
app.get('/',(req, res) =>{
    res.send('Hello, world');
})

// dynamic routing
app.get('/user/:username',(req, res) =>{
    const username = req.params.username;
    res.send(`welcome ${username}`)
})


app.get('search/',(req,res)=>{
    const keyword=req.query.keyword;
    res.send(`searching for ${keyword}`)
})


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});