const express = require('express');
const pool = require('../modules/pool');
const axios = require ('axios');
const router = express.Router();

// return all favorite images
router.get('/:tag', (req, res) => {
  const tag = req.params.tag;
    //make a request to the giphy api
    axios.get(`https://api.giphy.com/v1/gifs/api_key=${process.env.GIPHY_API_KEY}&tag=${tag}`)
    .then((response) => {
        //send the response from giphy to the client
        res.send(response.data);
    })
    .catch((e) => {
        console.log(e);
        res.sendStatus(500)
    });

  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  console.log(req.body);
  const insertGifQuery =`
  INSERT INTO "category" ("name")
VALUES ($1, $2, $3, $4, $5)
RETURNING "id"; `

pool.query(insertGifQuery, [req.body.name])
.then(result => {
  console.log('New gif id:', result.rows[0].id);
  res.sendStatus(200);
}).catch(error => {
  console.log(error);
  res.sendStatus(500)

})
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const favId = req.body//update favorites set category 
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
