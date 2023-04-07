import express from 'express';
import posts from './data/posts.json';
import { Post } from './types/post';

const app = express();

app.use(express.json());

app.post('/posts', (request,response) => {
  const body: Post = request.body;

  if (body.description.length < 4 || body.title.length < 4 || body.url.length < 4) {
    response.status(400).send("Body is not a valid post");
  } else {
    posts.blogs.push(body);
    response.status(201).send(body);
  }
});

app.get('/posts', (request, response) => {
  response.send(posts);
});

app.get('/posts', (request , response) => {
    response.json(posts)
});

app.get('/posts/:Id', (request, response) => {
    const {Id} = request.params
    response.json({ post: posts.blogs.filter(post => post.id === +Id) })
});

app.get('/posts/:id', (request, response) => {
  const blog = posts.blogs.find((blog) => String(blog.id) == String(request.params.id));
  if (blog) {
    response.send(blog);
  } else {
    response.status(404).send({ "error": 'Blog not found' });
  }
});

app.put('/posts/:id',(request, response) => {
    const postId = Number(request.params.id);
    const blogIndex = posts.blogs.findIndex((blog) => blog.id === postId);
    const body: Post = request.body;
    
    if (body.description.length < 4 || body.title.length < 4 || body.url.length < 4) {
        response.status(400).send("Body is not a valid post");
    } else {
        posts.blogs[blogIndex] = body;
        response.status(202).send("user updated");
    }
})

app.delete("/posts/:id", (request, response) => {
    const postId = Number(request.params.id);
    const blogIndex = posts.blogs.findIndex((blog) => blog.id === postId);
  
    if (blogIndex !== -1) {
      posts.blogs.splice(blogIndex, 1);
      response.status(204).send("deleted");
    } else {
      response.status(404).send({ error: 'Blog not found' });
    }
  });
  

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
