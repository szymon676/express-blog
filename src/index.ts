import express from 'express';

const app = express();

app.get('/', (request , response) => {
    response.send("Hello world")
});


app.listen(3000, () => console.log(`server listening on port 3000`));