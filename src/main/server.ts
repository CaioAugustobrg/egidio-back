
import express from 'express'
import app from '../main/config/app'
const port = process.env.PORT ?? 3000

app.listen(port, () => console.log(
    `O servidor express está rodando em http://localhost:${port}; pressione CTRL + C para o finalizar`
))