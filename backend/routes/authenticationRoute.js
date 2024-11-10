import express from 'express';

const express = require("express");
const router = express.Router();

const {login, register} = require("../controllers/authenticationController");

router.post('/login', login);
router.post('/register', register);

