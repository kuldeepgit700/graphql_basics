import express from 'express';

import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();


app.get('/',(req, res, next)=>{
   
    res.send('Graph ql is amazing');
});

const root = {product:()=>{
    return {
       "id":"934931012",
       "name":"widget",
       "description":"this is awesome product",
       "price":30.6,
       "soldout": false

    }
}};

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));


app.listen(8080,()=>{

    console.log('Running port on localhost:8080/graphql');
});