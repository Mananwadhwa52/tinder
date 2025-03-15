const express = require("express")
const { authRouter } = require("./routes/auth")


// const { requestRouter } = require("./routes/feed")
const { profileRouter } = require("./routes/profile")

const { requestRouter } = require("./routes/request")
const app = express()
app.use(express.json())

app.use("/", authRouter)
app.use("/", profileRouter)

app.use("/", requestRouter)




app.listen(3000, () => {
    console.log("page is live at 3000port ")
})