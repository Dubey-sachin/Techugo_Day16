import express from "express"
import {addData,deleteData,updateData} from '../controllers/userController.js'
import {validate} from '../middlewares/validateMiddleware.js'
import {addValidation,updateValidation} from '../validations/userValidations.js'

const router =express.Router();

router.post('/add',validate(addValidation),addData);

router.put('/update/:id',validate(updateValidation),updateData);

router.delete("/delete/:id",deleteData);

export default router;