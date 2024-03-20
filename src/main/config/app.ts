import express from 'express'
import cookieParser from 'cookie-parser'
// import router from '../routes'
import cors from 'cors'
// setupExpressSession(app)
import session from 'express-session'

// import { setupExpressSession } from './express-session'
const app = express()
app.use(express.json())
// app.use(router)
app.use(express.json())
app.use(cookieParser('keyboard cat'))
app.use(cors({
  origin: 'http://127.0.0.1:5173',
  credentials: true
}))

app.use(
  session({
    // store:
    secret: process.env.SESSION_SECRET ?? 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 3
    }
  })
)
export default app
