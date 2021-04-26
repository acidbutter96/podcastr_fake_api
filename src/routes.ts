import e, { response, Router } from 'express';

var fakedb = require('./appjson/fakedb.json');

const routes = Router();

routes.get('/', (req, res) => res.send('Express + TypeScript Server'))

routes.get('/podcasts', (req, res) => {
    setTimeout(() => {
        return res.json({ aqui: 'deu bom' });
    }, 300)
})

routes.get('/episodes', (req, res) => {

    setTimeout(() => {
        const retorno = fakedb.episodes.slice(0, 12).sort((a: { published_at: string }, b: { published_at: string }) => {
            if (new Date(a.published_at).getTime() > new Date(b.published_at).getTime()) return -1
            if (new Date(a.published_at).getTime() < new Date(b.published_at).getTime()) return 1

            return 0
        })
        return res.json(retorno)
    }, 750)
})

routes.get('/episodes/:id', (req, res) => {
    fakedb.episodes.map((el: any) => {
        if (el.id == req.params.id) {
            return res.json(el)
        }

    })
})

export default routes;