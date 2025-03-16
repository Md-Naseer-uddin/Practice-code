const express = require("express")

const app = express()


app.listen("5000", () => console.log("Server is up and running"))

app.use(express.json())

app.use("/", require("./routes/routes"))