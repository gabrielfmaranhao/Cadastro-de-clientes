import express from 'express';
import cors from 'cors';
import appRoutes from './routes';
import { handleErrorMiddleware } from './middlewares/handleError.middleware';

const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))
appRoutes(app)
app.use(handleErrorMiddleware)


export default app