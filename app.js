const connectDB = require('./db/connect')


const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks',tasks)




//app.get('/api/v1/tasks')       -get all tasks
//app.post('/api/v1/tasks')          -create a new task
//app.get('/api/v1/tasks/:id')        -get single link
//app.patch('/api/v1/tasks/:id')      -update task
//app.delete('/api/v1/tasks/:id')        -delete task



const port = 8000;


const start = async () =>{
    try{
            await connectDB(process.env.MONGO_URI)
            app.listen(port,console.log(`server is listening on port ${port}.......`)
)
    }
    catch(error){
        console.log(error);
    }
}

start()

