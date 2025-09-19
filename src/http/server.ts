import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { createPoll } from './routes/create-poll.js'
import { getPoll } from './routes/get-poll.js'
import { voteOnPoll } from './routes/vote-on-poll.js'

const app = fastify()

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

const prisma = new PrismaClient()

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
