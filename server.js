import Fastify from 'fastify'
import './db.js'
import { createLink, findUrlByCode } from './links.js'

const app = Fastify({ logger: true })

app.get('/healthz', async () => {
    return { status: 'ok' }
})

app.post('/shorten', async (request, reply) => {
    const { url } = request.body ?? {}

    if (typeof url !== 'string' || url.trim() === '') {
        return reply.code(400).send({ error: 'url é obrigatória' })
    }

    let parsed
    try {
        parsed = new URL(url)
    } catch {
        return reply.code(400).send({ error: 'url inválida' })
    }

    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
        return reply.code(400).send({ error: 'apenas http e https são permitidos' })
    }

    const code = createLink(parsed.toString())
    return reply.code(201).send({ code, short_url: `${request.protocol}://${request.host}/${code}` })
})

app.get('/:code', async (request, reply) => {
    const { code } = request.params
    const url = findUrlByCode(code)

    if (!url) {
        return reply.code(404).send({ error: 'link não encontrado' })
    }

    return reply.redirect(url)
})

try {
    await app.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
    app.log.error(err)
    process.exit(1)
}