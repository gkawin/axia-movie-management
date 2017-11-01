const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

const graphQLSchemas = require('./schemas')
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: graphQLSchemas }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })) // if you want GraphiQL enabled
//
app.listen(PORT, () => console.log('running'))
