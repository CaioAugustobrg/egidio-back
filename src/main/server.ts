
import express from 'express'
import app from '../main/config/app'

const port = process.env.PORT ?? 3000
import cors from 'cors'

// app.use(
//     cors({
//       credentials: true,
//       origin: true
//     })
//   )
const corsOptions = {
    origin: 'http://localhost:5173', // Substitua com o domínio do seu aplicativo
  };
  
  app.use(cors(corsOptions));




  
app.listen(port, () => console.log(
    `O servidor express está rodando em http://localhost:${port}; pressione CTRL + C para o finalizar`
))