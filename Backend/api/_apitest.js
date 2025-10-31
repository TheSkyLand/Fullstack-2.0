import {createRequire} from "module"
const require = createRequire(import.meta.url)
const data = require('../data/test.json')



export const apiTest = (app) => {

    app.get("/api/shop/data", (req, res) => {
        return (
            res.json(data.products)
        )
    })


}