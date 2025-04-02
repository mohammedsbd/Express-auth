import express from 'express'; //requiring express
const app = express(); //invoking the express
const PORT=3000;


// define the route
app.get('/',(req, res) =>{
    res.send('Hello, world');
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});