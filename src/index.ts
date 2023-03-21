import express from 'express';
import posts from './data/posts.json'


const app = express();

app.get('/', (request , response) => {
    response.json(posts)
});

app.get('/:Id', (request, response) => {
    const {Id} = request.params
    response.json({ post: posts.blogs.filter(post => post.id === +Id) })
})


app.listen(3000, () => console.log(`server listening on port 3000`));