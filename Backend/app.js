const express = require("express")

const app = express();

const port = process.env.PORT || 3001

const cors = require("cors")

app.use(cors())

app.get("/api/shop", (req, res) =>
{
    res.json({message: "data from backend"})
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

