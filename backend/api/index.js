import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to social app')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server runing on port : ${PORT}`))

