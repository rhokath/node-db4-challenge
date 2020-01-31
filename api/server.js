const express = require('express');
const RecipesRouter = require('../recipes/recipe-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter)

//sanity check
server.get('/', (req,res)=>{
    res.send('it is working')
})

module.exports = server;