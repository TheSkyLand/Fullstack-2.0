import {createRequire } from "module"

const require = createRequire(import.meta.url)

import { apiTest } from "./api/_apitest.js";

const express = require("express")

const app = express();

const port = process.env.PORT || 3001

const cors = require("cors")

app.use(cors())

app.use(express(express.json()))

apiTest(app)

app.get("/api/shop", (req, res) =>
{
    res.json({message: "data from backend"})
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

