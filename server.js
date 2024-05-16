const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// Calculates addition of two numbers, returns error message to user if one or more inputs are empty or NaN
app.post("/addition", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 + num2

    if (isNaN(result)) {
        res.send("ERROR! Input is not a number")
    }
    else if (req.body.num1.length == 0 || req.body.num2.length == 0) {
        res.send("ERROR! One or more inputs empty")
    }
    else {
        res.send(num1 + " + " + num2 + " = " + result.toString())
    }
})

// Calculates subtraction of two numbers, returns error message to user if one or more inputs are empty or NaN
app.post("/subtraction", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 - num2

    if (isNaN(result)) {
        res.send("ERROR! Input is not a number")
    }
    else if (req.body.num1.length == 0 || req.body.num2.length == 0) {
        res.send("ERROR! One or more inputs empty")
    }
    else {
        res.send(num1 + " - " + num2 + " = " + result.toString())
    }
})

// Calculates multiplication of two numbers, returns error message to user if one or more inputs are empty or NaN
app.post("/multiplication", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 * num2
    
    if (isNaN(result)) {
        res.send("ERROR! Input is not a number")
    }
    else if (req.body.num1.length == 0 || req.body.num2.length == 0) {
        res.send("ERROR! One or more inputs empty")
    }
    else {
        res.send(num1 + " x " + num2 + " = " + result.toString())
    }
})

// Calculates division of two numbers, returns error message to user if one or more inputs are empty or NaN
// Returns additional error message if user tries to divide by zero
app.post("/division", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 / num2

    if (isNaN(result)) {
        res.send("ERROR! Input is not a number")
    }
    else if (req.body.num1.length == 0 || req.body.num2.length == 0) {
        res.send("ERROR! One or more inputs empty")
    }
    else if (num2 == 0) {
        res.send("ERROR! Cannot divide by 0")
    }
    else {
        res.send(num1 + " / " + num2 + " = " + result.toString())
    }
})

// Calculates exponential of two numbers, returns error message to user if one or more inputs are empty or NaN
app.post("/exponent", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 ** num2

    if (isNaN(result)) {
        res.send("ERROR! Input is not a number")
    }
    else if (req.body.num1.length == 0 || req.body.num2.length == 0) {
        res.send("ERROR! One or more inputs empty")
    }
    else {
        res.send(num1 + " to the power of " + num2 + " = " + result.toString())
    }
})

// Calculates square root of first input number, returns error message to user if input is empty or NaN
app.post("/sqrroot", (req, res) => {
    var num1 = Number(req.body.num1)

    var result = Math.sqrt(num1)

    if (isNaN(result)) {
        res.send("ERROR! Input is not a number")
    }
    else if (req.body.num1.length == 0) {
        res.send("ERROR! One or more inputs empty")
    }
    else {
        res.send("Square root of " + num1 + " = " + result.toString())
    }
})

// Calculates modulo of two numbers, returns error message to user if one or more inputs are empty or NaN
app.post("/modulo", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 % num2

    if (isNaN(result)) {
        res.send("ERROR! Input is not a number")
    }
    else if (req.body.num1.length == 0 || req.body.num2.length == 0) {
        res.send("ERROR! One or more inputs empty")
    }
    else {
        res.send(num1 + " modulo " + num2 + " = " + result.toString())
    }
})

port = 3040
app.listen(port, function() {
    console.log("Server listening on port " + port)
})