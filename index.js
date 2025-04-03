import express from 'express'; //requiring express
import { searchController, usernameController } from './controller';
const app = express(); //invoking the express
const PORT = 3000;


// define the route
app.get('/',(req, res) =>{
    res.send('Hello, world');
})

// dynamic routing
app.get('/user/:username',usernameController)


app.get('search/',searchController)


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});