import mongoose from "mongoose"
import productModel from "./src/models/products.model.js"

const uri = 'mongodb+srv://agus1:45057895@cluster1.cvxzndr.mongodb.net/'

const main = async() => {
    await mongoose.connect(uri, { dbName: 'ecommerce'})  /* Se conecta a la base de datos o se crea */
    console.log('DB connected!')

    // const users = await UserModel.find({ gender: "Female"})
                                                /* Filtro */      /* Limit a mostrar por pagina y la page que es la pagina en la que estoy */
    const users = await productModel.paginate({}, {limit: 5, page: 2}       )
    console.log(users)
}

main()