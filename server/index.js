require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const pg = require('pg');
const ClientError = require('./client-error');
const path = require('path');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
} else {
  app.use(express.static(publicPath));
}

app.use(express.json());

app.get('/api/characters', (req, res) => {
  const sql = `
    select *
      from "characters"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.get('/api/characters/:characterId', (req, res, next) => {
  const characterId = Number(req.params.characterId);
  if (!characterId) {
    throw new ClientError(400, 'characterId must exist');
  }
  const sql = `
    select *
      from "characters"
      where "characterId" = $1
  `;
  const params = [characterId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.delete('/api/characters/:characterId', (req, res, next) => {
  const characterId = Number(req.params.characterId);
  if (!characterId) {
    throw new ClientError(400, 'characterId must exist');
  }
  const sql = `
    delete from "characters"
 where "characterId" = $1
returning *;
  `;
  const params = [characterId];
  db.query(sql, params)
    .then(result => {
      res.status(201).json();
    })
    .catch(err => next(err));
});

app.patch('/api/characters/:characterId', (req, res, next) => {
  const characterId = Number(req.params.characterId);
  const { name, role, race, background } = req.body;
  if (!characterId) {
    throw new ClientError(400, 'characterId must exist');
  }
  const sql = `
    update "characters"
    set "name" = $1,
    "class" = $2,
    "race" = $3,
    "background" = $4
 where "characterId" = $5
returning *;
  `;
  const params = [name, role, race, background, characterId];
  db.query(sql, params)
    .then(result => {
      const [info] = result.rows;
      res.status(201).json(info);
    })
    .catch(err => next(err));
});

app.get('/api/classes', (req, res) => {
  const sql = `
    select *
      from "classes"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.get('/api/backgrounds', (req, res) => {
  const sql = `
    select *
      from "backgrounds"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.get('/api/races', (req, res) => {
  const sql = `
    select *
      from "races"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.get('/api/spells', (req, res) => {
  const sql = `
    select *
      from "spells"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.post('/api/characters', (req, res, next) => {
  const { name, role, race, background, str, dex, con, wis, int, cha } = req.body;
  if (!name || !role || !race || !background) {
    throw new ClientError(400, 'All info must be entered properly');
  }
  const sql = `
    insert into "characters" ("name", "class", "race", "background", "str", "dex", "con", "wis", "int", "cha")
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    returning *
  `;
  const params = [name, role, race, background, str, dex, con, wis, int, cha];
  db.query(sql, params)
    .then(result => {
      const [info] = result.rows;
      res.status(201).json(info);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
