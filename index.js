const express = require('express');
const app = express();

const Day = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDay = days[Day.getDay()]

const date  = new Date().toISOString().split('.')[0] + "Z"
console.log(date)

app.get('/api',(req,res)=>{
let track = req.query.track
let slack_name = req.query.slack_name

res.status(200).json({
    "slack_name":slack_name,
    "current_day":currentDay,
    "utc_time":date,
    "track":track,
    "github_repo_url":""


})
})
app.listen(5001,()=>{
    console.log('The server is listeninig on port 5001')
})