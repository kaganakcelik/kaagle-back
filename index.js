import express from 'express'
import cors from 'cors'
import searchRoutes from './routes/search.route.js'


const app = express()

app.use(express.json())

app.use(cors())

app.use('/api', searchRoutes)

app.listen(3001, () => console.log('Listening on port 3001'))