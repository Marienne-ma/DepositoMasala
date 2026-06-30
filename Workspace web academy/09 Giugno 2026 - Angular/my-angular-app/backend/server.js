const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const db = require('./db');
const { resolveForwardRef } = require('@angular/core');

const app = express();
const port = 8080;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParse.json());

(app.get('api/task'),
  async (req, res) => {
    try {
      console.log('tentativo di recupero tasks....');
      const [rows] = await db.query('select * from tasks');

      console.log('tasks recuperate: ', rows);
      res.json(rows);
    } catch (error) {
      console.error('errore get tasks ', error);
      res.status(500).json({ error: 'errore nel recupero tasks' });
    }
  });

  //post
  app.post('/api/tasks', async (req,res) => {
    const {title, description} = req.body
    try {
      const [result] = await db.query(
        'insert into tasks (title, description,completed) values (?,?,?))',
        [title, description, false ]
      )

      const newTask = {id = result.insertId, title, description, completed: false}
      res.json(newTask)

    } catch (error) {

      console.error("errore post task", error.message)
      res.status(500).json({error: "errore creazione task"})

    }
  })

async function startServer() {
  try {
    await db.initDatabase();
    console.log('database mysql pronto');
    console.log(`connessione db: ${db.config.user}@${db.config.host}:${db.config.port}`);

    app.listen(port, () => {
      console.log(`Server express su http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Errore inizializzazione database:', error.message);
    process.exit(1);
  }
}
startServer();
