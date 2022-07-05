const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://loft-database:eVpHF0EYJwZcBoZg@cluster0.kq3xc.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();