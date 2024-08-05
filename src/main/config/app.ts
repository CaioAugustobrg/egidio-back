import express from 'express'
import cookieParser from 'cookie-parser'
// import router from '../routes'
import cors from 'cors'
// setupExpressSession(app)
import session from 'express-session'
import router from '../routes'
import bodyParser from 'body-parser'
// import { setupExpressSession } from './express-session'
const app = express()
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], 
  credentials: true, 
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});
app.use(express.json())
app.use(router)
app.use(bodyParser.json())
app.use(express.json())
app.use(cookieParser('keyboard cat'))
// app.use(cors({
//   origin: true,
//   credentials: true
// }))
// app.use(
//     cors({
//       credentials: true,
//       origin: true
//     })
//   )
//   app.use((req, res, next) => {
//     res.header(
//       'Access-Control-Allow-Origin',
//       'http://127.0.0.1:5173'
//     )
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     res.header(
//       'Access-Control-Allow-Methods',
//       'GET,PUT,PATCH,POST,DELETE,OPTIONS'
//     )
//     next()
//   })
app.use(
  session({
    //store:
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
