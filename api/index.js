const express = require('express')
const swaggerJSDoc = require ( 'swagger-jsdoc' );
const swaggerUI = require ( 'swagger-ui-express' );
const mongoose = require('mongoose')
const userRouts = require('./routes/user')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3301

const password = '5Oy4h6BtJvcrkS9C';
const url = `mongodb+srv://dbUser:${password}@tabledb.j7cag.mongodb.net/tableDB?retryWrites=true&w=majority`;

//Swagger Configuration
const swaggerOptions = {
    definition: {
        info: {
            title:'Table API',
            version:'1.0.0',
            description: "A simple express table api"
        },
    },
    apis: ["./routes/*js"]
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));


app.use(cors())
app.use(express.json())
app.use('/user', userRouts)

async function start() {
    try{
        mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const connection = mongoose.connection;

        connection.once('open', () => {
            console.log('MongoDB connection established successfully')
        })

        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()