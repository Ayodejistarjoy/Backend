const userModel = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary"); 
const nodemailer = require('nodemailer');

// import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

require("dotenv").config();
const secretKey = process.env.SECRET;

const WelcomeUser = (req, res) => {
    res.send("Welcome to the user page");
};

const About = (req, res) => {
    res.send("This is the about page");
};

const Dahboard = async (req, res) => {
    let token = req.headers.authorization.split(" ")[1]
    console.log(token);
    jwt.verify(token, secretKey, (err, result) => {
        if (err) {
            console.log(err);
            res.send({ status: false, message: "Token is not valid", result })
        }
        else {
            console.log(result);
            res.send({ status: true, message: "Welcome", result })
        }
    })
}


const Register = (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRound);
    
    const newUser = new userModel({ firstName, lastName, email, password: hashedPassword });
    newUser.save()
        .then(() => {
            console.log("User registered successfully");
            res.status(201).json({ message: "User registered successfully" });
            Sendmail()
        })
        .catch((err) => {
            console.error("Error registering user:", err);
            res.status(500).json({ message: "Failed to register user" });
        });
};

const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ message: "User not found. Please sign up" });
        }

        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "2d" });
        res.status(200).json({
            message: "Login successful",
            token: token,
            user: user
        });
        console.log("User logged in successfully");
    } catch (error) {
        console.error("Error occurred during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const Upload = (req, res) => {
   
    let Thefile = (req.body.file);
    console.log("successfully uploaded");
    cloudinary.uploader.upload(Thefile, 
    (result, err) => {
        if (result) {
            console.log(result);
            res.send({ status: false, message: "Image uploaded successfully", result })
        }
        else {
            console.log(err);
            res.send({ status: true, message: "Failed to upload", err })
        }
  })}

  const Sendmail = (req, res) => {
   const  transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: process.env.EMAIL,
           pass: process.env.PASSWORD
       }
   })
   
   let mailOptions = {
       from: process.env.EMAIL,
       to: "johnforney69@gmail.com",
       subject: 'Sending Email using Node.js',
       text: 'That was easy!'
   }
   transporter.sendMail(mailOptions, (err, data) => {
       if (err) {
           console.log(err);
           res.send({ status: false, message: "Failed to send mail", err })
       }
       else {
           
           console.log("Email sent successfully");
           res.send({ status: true, message: "Email sent successfully", data })
       }
   })

}

module.exports = { WelcomeUser, About, Register, Login, Dahboard ,Upload, Sendmail};
