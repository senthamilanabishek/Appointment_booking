import express from 'express';
import { getAllDoctor,getSingleDoctor,updateDoctor,deleteDoctor, getDoctorProfile } from '../Controllers/doctorController.js';
import { authenticate,restrict } from '../auth/verifytoken.js';
import reviewRouter from './review.js';

const router=express.Router();

// nested route 
router.use("/:doctorId/reviews",reviewRouter);

router.get('/profile/me',authenticate,restrict(["doctor"]),getDoctorProfile)
router.get('/:id',getSingleDoctor);
router.get('/',getAllDoctor);
router.put('/:id',authenticate,restrict(["doctor"]),updateDoctor);
router.delete('/:id',authenticate,restrict(["doctor"]),deleteDoctor);

export default router;