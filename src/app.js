import express from 'express'
import ProductManager from './classes/ProductManager.js'

const app = express()

let path = "./files/products.json"

let productManager = new ProductManager(path)

// async function imprimir_productos(limit = null) {

//   console.log(await productManager.getProducts(3))
// }

//imprimir_productos()

app.get('/products', async (req, res) => {
  let limit = Number(req.query.limit)

  let products = await productManager.getProducts(limit)

  res.send({products}) // Se envian los productos en forma de objeto como pide la consigna
})

app.get('/products/:pid', async (req, res) => {
  let id = parseInt(req.params.pid)

  let product = await productManager.getProductById(id)

  if (!product) {
    res.send("No se encontró el producto")
    return
  }

  res.send(product) // Se envian los productos en forma de objeto como pide la consigna
})

app.listen(8080, () => console.log("Servidor levantado"))