const express=require('express');
const { getAllContact, getContactById } = require('../controllers/getContact');
const router=express.Router();

router.route('/getContact').get(getAllContact)
router.route('/getContactById/:id').get(getContactById)

module.exports=router