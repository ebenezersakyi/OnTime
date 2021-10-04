const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();
const path = require('path');
const { ensureAuthenticated } = require('../config/authenticate');

//Welcome Page
router.use(express.static('./public'))

//Dashboard
router.use(express.static('./public2'))

//BECE Science Quiz
router.use(express.static('./Becepublic'))


router.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'../views/index/homepage.html'))
});

//Dashboard
router.get('/dashboard',ensureAuthenticated, (req,res) => {
    res.render('../views/index/dashboard2.ejs', {
        name : req.user.name
} )
}
);


//Array for bece science questions
const arrPaths = []
arrPaths[0] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECESCI1.html"
arrPaths[1] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECESCI 2.html"

//Send BECE Science QUiz
router.get('/becesciencequiz',(req,res) => {
    var chosenPath = arrPaths[Math.floor(Math.random() * (arrPaths.length))];  

    res.sendFile(path.resolve(__dirname,chosenPath))
});

//Array for bece math questions
const arrMath = []
arrMath[0] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECEMath1.html"
arrMath[1] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECEMath2.html"
arrMath[2] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECEMath3.html"
arrMath[3] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECEMath4.html"



//Send BECE Math Quiz
router.get('/bece-math-quiz',(req,res) => {
    var mathPath = arrMath[Math.floor(Math.random() * (arrMath.length))];  

    res.sendFile(path.resolve(__dirname,mathPath))
});


//Array for bece english questions
const arrEnglish = []
arrEnglish[0] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECEEnglish1.html"
arrEnglish[1] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECEEnglish2.html"
arrEnglish[2] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECEEnglish3.html"


//Send BECE English Quiz
router.get('/bece-english-quiz',(req,res) => {
    var englishPath = arrEnglish[Math.floor(Math.random() * (arrMath.length))];  

    res.sendFile(path.resolve(__dirname,englishPath))
});

//Array for bece social questions
const arrSocial = []
arrSocial[0] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECESocial1.html"
arrSocial[1] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECESocial2.html"
arrSocial[2] = "../Quiz Questions/BECE/BECE Science Quiz/BeceQuiz/BECESocial3.html"


//Send BECE social Quiz
router.get('/bece-social-quiz',(req,res) => {
    var socialPath = arrSocial[Math.floor(Math.random() * (arrSocial.length))];  

    res.sendFile(path.resolve(__dirname,socialPath))
});



module.exports = router;