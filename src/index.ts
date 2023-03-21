import express from 'express';
import posts from './data/posts.json'


const app = express();

app.get('/', (request , response) => {
    response.send("Hello world")
});


app.listen(3000, () => console.log(`server listening on port 3000`));