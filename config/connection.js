const express = require('express')
const app = express()

//routes 
app.get('/hi', (req, res)=>{
res.send('Task Manager')
})

// app.get('/api/v1/tasks') - get all the tasks 
// app.post('/api/v1/tasks') -create a new task
// app.get('/api/v1/tasks/: id') - get single task
// app.patch('/api/v1/tasks/: id') - update task
// app.delete('/api/v1/tasks/: id') - delete task


const port = 3000

app.listen(port, console.log(`is the server listening on ${port}...`))


// sequelize scripts and requirements
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;