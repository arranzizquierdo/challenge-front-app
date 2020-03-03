const express = require("express");
const bodyParser  = require("body-parser");

const app = express();

const data = require("./phoneList");
const port = 3000;
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/phoneList', (req, res) => {
  const itemPerPage = 4;
  const totalPage = Math.ceil(data.length / 4 );
  let currentPage = parseInt(req.query.page);
  if (!currentPage || currentPage === undefined) { currentPage = 1;}
  if (currentPage > totalPage) {
    currentPage = totalPage
  }

  res.header('Access-Control-Allow-Origin', '*');
  res.send({
    'currentPage': currentPage,
    'totalPage': totalPage,
    'phoneList': data.slice(currentPage * itemPerPage - itemPerPage, currentPage * itemPerPage)
  });
});
app.use(router);
app.listen(port, function() {
  console.log("Node server running on http://localhost:3000");
});



