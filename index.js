const express = require('express');
const app = express();
const moment = require('moment')


app.get('/api',(req,res)=>{
let track = req.query.track
let slack_name = req.query.slack_name
const Day = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDay = days[Day.getDay()]
const date = moment();
const utcTime  = date.toISOString().slice(0, -5) + "Z"
console.log(utcTime)

res.status(200).json({
    "slack_name":slack_name,
    "current_day":currentDay,
    "utc_time":utcTime,
    "track":track,
    "github_file_url":"https://github.com/Sbtech24/Hng-first-task/blob/main/index.js",
    "github_repo_url":"https://github.com/Sbtech24/Hng-first-task/tree/main",
    "status_code":200


})
})
app.listen(5001,()=>{
    console.log('The server is listeninig on port 5001')
    
})


