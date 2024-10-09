import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app =express()
app.use(express.json())
const users = []

app.post('/usuarios', async (req , res) => {

  await  prisma.user.create({
    where:{


    },
        data: {
          name: req.body.name,
          age: req.body.age,  // Certifique-se de que 'idade' seja do tipo correto, possivelmente um número
          email: req.body.email
          
        }
      })
      
   users.push(req.body)

   res.status(201).json(req.body)

})

app.get('/usuarios', async (req, res)=>{
   
    const users = await prisma.user.findMany
    res.status(200).json(users)
})

app.listen(3000)

/*
 Criando nossa API de Usuarios

 -Criando usuarios
 -Listando dosos os usuarios
 -Editar um usuario
 -Deletando usuarios

*/
 