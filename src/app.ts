import express from 'express'
// rest of the code remains same
/* import bodyParser from 'body-parser' */
import router from './routes'
const app = express()

/* app.use(bodyParser.json()) */
app.use(router);

export default app