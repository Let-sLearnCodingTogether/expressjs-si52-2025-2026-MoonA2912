import express from "express"
import* as profileController from "../controller/profileController.js"
import { showProfile } from '../controller/namaController.js';

const web = express.Router()

web.get('/', (req,res)=>{
    res.render('index')
})

web.get('/:username', profileController.publicProfile)

web.get('/profile/:username', showProfile);

export default web

