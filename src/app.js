import express from 'express'
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import productRouter from './routers/products.router.js'


const app = express();

// Codigo para conectarse a MongoDb
const uri = 'mongodb+srv://coder:<password>@cluster0.px3edgc.mongodb.net/'

const port = 8080


app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


// Static
app.use(express.static( __dirname  + '/public'))


app.use('/products', productRouter)


mongoose.set('strictQuery', false)
// Conectarse a MongoDB
    try {
        await mongoose.connect(uri)
        console.log('Db connected')
    } catch (error) {
        console.log('error al conectar con la BD')
        }



app.listen(port, ()=>{
    console.log(`Server Up ${port}`)
})





// socketServer.on('connection', (socket)=>{
//     console.log('New connection', socket.id);
//     socket.on('message', data=>{
//         console.log(data)
//     })
// })

// socketServer.on('connection', ()=> console.log('Cliente conectado'))



// socketServer.on('connection', (socket) => {
//     console.log(`Cliente ${socket.id} conectado`)
//     socket.on('newProduct', (data)=>{
//         console.log(`Producto: ${data.title} nuevo`);
//         manager.addProduct(data);
//         socketServer.emit('getAllProducts', manager.getProduct())
//     })
//     socket.on('deleteProduct',(id)=>{
//         manager.deleteProduct(id)
//         socketServer.emit('getAllProducts', manager.getProduct())
//     } )
//     socketServer.emit('getAllProducts', manager.getProduct())
// } )

// ioServer.on('connection')
