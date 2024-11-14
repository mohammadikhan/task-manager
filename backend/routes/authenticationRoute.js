import express from 'express';

const app = express;
const router = express.Router();

const {login, register} = require("../controllers/authenticationController");

// router.post('/login', login);
// router.post('/register', register);

// module.exports = router;

app.get("/login", (req, res) => {
    res.send("Server is ready");
});

app.listen(3000, () => {
    console.log("SERVER START AT http://localhost:3000");
})