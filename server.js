const express = require('express');

const path = require('path');

const app = express();

const port = 3001;

const routes = require('./controllers/api/index');

//middleware
app.use(express.static('public'));

//routes 
app.get('/hi', (req, res)=>{
res.send('Task Manager')
})

app.use("./api/v1/index", tasks)


// app.get('/api/v1/tasks') - get all the tasks 
// app.post('/api/v1/tasks') -create a new task
// app.get('/api/v1/tasks/: id') - get single task
// app.patch('/api/v1/tasks/: id') - update task
// app.delete('/api/v1/tasks/: id') - delete task




app.listen(port, console.log(`Server listening on ${port}...`))

