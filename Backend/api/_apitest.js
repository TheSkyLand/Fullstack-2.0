import {createRequire} from "module"
const require = createRequire(import.meta.url)
const data = require('../data/test.json')



export const apiTest = (app) => {

    app.get("/shop/data", (req, res) => {
        return (
            res.json(data.products)
        )
    })

    app.get("/shop/data/:id", (req, res) =>{
        return(
            res.json(data.products)
        )
    })

    app.post("/shop/data/", (req, res) => {
        let idCreatedData = 0;

        if (data.products.length !== 0){
            idCreatedData = data.products[data.products.length - 1].id + 1
        }

        

    })


}