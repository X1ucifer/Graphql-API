import express from "express"
import pool from './DataSource/DataSource'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphQl/typeDef";
import { resolvers } from "./graphQl/resolver";


const main = () => {
    pool.connect()
        .then(() => console.log('connected with the database'))
        .catch((err) => console.log(err))

    const app = express() 
    

    const excecutableSchema = makeExecutableSchema({
        typeDefs: typeDefs,  
        resolvers: resolvers
    })

    app.use('/graphql', graphqlHTTP({
        schema : excecutableSchema,
        graphiql: true
    })
    )

    app.listen(3000 , () => console.log('localhost:3000'))
}

main()