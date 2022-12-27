const express = require('express');
const router = express.Router();
const MyBookController = require('../controllers/bookController')


router.post("/createAuthor", MyBookController.createAuthor)
router.post("/createPublisher", MyBookController.createPublisher)
router.post("/createBook", MyBookController.createBook)
router.get("/allBookDetailes", MyBookController.getBooksWithDetailes)
router.put("/findId", MyBookController.findId)
//router.get("/increase", MyBookController.increase)
module.exports = router; 