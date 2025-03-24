const express=require('express');
const { getAllContact, getContactById } = require('../controllers/getContact');
const { addContact } = require('../controllers/addContact');
const { updateContact } = require('../controllers/updateContact');
const { deleteContact } = require('../controllers/deleteContact');
const router=express.Router();

router.route('/getContact').get(getAllContact)
router.route('/getContactById/:id').get(getContactById)
router.route('/addContact').post(addContact)
router.route('/updateContact/:id').put(updateContact)
router.route('/deleteContact/:id').delete(deleteContact)

module.exports=router