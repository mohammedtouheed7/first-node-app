const express = require('express');

//Create app

const app = express();

const port = 9000;

//Route

app.use("/", (req, res)=>{
    res.json({message :'Hello From Express App'});
});

app.listen(9000, () => {
    console.log(`Server is running at Port Number ${port}`);
})

module.exports = app;