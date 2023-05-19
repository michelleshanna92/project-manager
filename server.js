const express = require('express');

const path = require('path');

const app = express();

const PORT = 3001;

const routes = require('./controllers/api/index');

//middleware
app.use(express.static('public'));

//Sending html file
app.get('/', (req, res) => {
    res.send(
      `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
    );
  });

  // sending JSON
  app.get('/api', (req, res) => {
    res.json({
      term: 'api',
      description:
        'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
    });
  });

app.get('/index', (req, res) => 
    res.sendFile(path.join(__dirname), 'public/index.html')
);

app.get('/task', (req, res) => 
    res.sendFile(path.join(__dirname), 'public/task.html'));

app.listen(PORT, () =>
    console.log(`App listeting at http://localhost:${PORT}`)
);




// app.get('/api/v1/tasks') - get all the tasks 
// app.post('/api/v1/tasks') -create a new task
// app.get('/api/v1/tasks/: id') - get single task
// app.patch('/api/v1/tasks/: id') - update task
// app.delete('/api/v1/tasks/: id') - delete task


