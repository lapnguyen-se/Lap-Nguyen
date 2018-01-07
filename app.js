var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var nodeEmailer = require("nodemailer");



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/", function(req, res) {

    var transporter = nodeEmailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'noname.lapnguyen@gmail.com',
            pass: 'Lap123456'
        }
    });

    var emailText = '';
    emailText = "From ( " + req.body.email + " ): " + req.body.message;
    var mailOptions = {
        from: '"Lap Nguyen 👻" <noname.lapnguyen@gmail.com>',
        to: 'lapnguyen.se@gmail.com',
        subject: 'lapnguyen.herokuapp.com - ' + req.body.title,
        text: emailText
    };

    var mailOptions2 = {
        from: '"Lap Nguyen 👻" <noname.lapnguyen@gmail.com>',
        to: req.body.email,
        subject: 'Thank you for your email to lapnguyen.herokuapp.com',
        text: "Your Email has been sent successfully! I will get back to you soon."
    };


    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        }
        else {
            transporter.sendMail(mailOptions2);

            res.redirect("/");
        }
    });
});

// WEB PROJECTS
app.get("/webprojects", function(req, res) {
    res.render("webProjects");
});

app.get("/webprojects/1", function(req, res) {
    res.render("projects/1/index");
});

app.get("/webprojects/2", function(req, res) {
    res.render("projects/2/index");
});

app.get("/webprojects/3", function(req, res) {
    res.render("projects/3/index");
});

app.get("/webprojects/4", function(req, res) {
    res.render("projects/4/index");
});

app.get("/webprojects/5", function(req, res) {
    res.render("projects/5/index");
});

app.get("/webprojects/6", function(req, res) {
    res.render("projects/6/index");
});

app.get("/webprojects/7", function(req, res) {
    res.render("projects/7/index");
});

app.get("/webprojects/8", function(req, res) {
    res.render("projects/8/index");
});

app.get("/webprojects/9", function(req, res) {
    res.render("projects/9/index");
});

app.get("/webprojects/10", function(req, res) {
    res.render("projects/10/index");
});

app.get("/webprojects/11", function(req, res) {
    res.render("projects/11/index");
});

app.get("/webprojects/12", function(req, res) {
    res.render("projects/12/index");
});

app.get("/webprojects/13", function(req, res) {
    res.render("projects/13/index");
});

app.get("/webprojects/14", function(req, res) {
    res.render("projects/14/index");
});

app.get("/webprojects/15", function(req, res) {
    res.render("projects/15/index");
});

app.get("/webprojects/16", function(req, res) {
    res.render("projects/16/index");
});

app.get("/webprojects/17", function(req, res) {
    res.render("projects/17/index");
});

app.get("/webprojects/18", function(req, res) {
    res.render("projects/18/index");
});

app.get("/webprojects/19", function(req, res) {
    res.render("projects/19/index");
});
app.get("/webprojects/19/rooms", function(req, res) {
    res.render("projects/19/rooms");
});
app.get("/webprojects/19/contact", function(req, res) {
    res.render("projects/19/contact");
});

app.get("/webprojects/20", function(req, res) {
    res.render("projects/20");
});
app.get("/webprojects/20/rooms", function(req, res) {
    res.render("projects/20/rooms");
});
app.get("/webprojects/20/contact", function(req, res) {
    res.render("projects/20/contact");
});

app.get("/webprojects/21", function(req, res) {
    res.redirect("/webProjects");
});

app.get("/webprojects/22", function(req, res) {
    res.redirect("/webProjects");
});

app.get("/webprojects/23", function(req, res) {
    res.redirect("/webProjects");
});

app.get("/webprojects/24", function(req, res) {
    res.render("projects/24/index");
});

app.get("/webprojects/25", function(req, res) {
    res.render("projects/25/index");
});

// MOBILE PROJECT
app.get("/mobileprojects", function(req, res) {
    res.render("mobileProjects");
});

// GAME PROJECTS
app.get("/gameprojects", function(req, res) {
    res.render("gameProjects");
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("The server has started! " + process.env.PORT + " " + process.env.IP);
});
