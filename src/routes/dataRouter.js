const express = require('express')

const router = express.Router();
const {getData,postData} = require('../controllers/dataControllers');
const upload = require('../middleware/multer.middleware');


router.get('/',getData)
router.post('/',upload.single("avatar"),postData);

module.exports = router;