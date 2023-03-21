import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send("Hello world")
});


app.listen(3000, () => console.log("3000"))