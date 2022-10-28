const express = require('express');
const router = express.Router();

router.get('/content', (req, res) => {
  const str = [
    {
      name: 'Elvis',
      message: 'Getting better',
      username: 'elvisco201',
    },
  ];
  res.end(JSON.stringify(str));
});

module.exports = router;
