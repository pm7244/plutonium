const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/routes.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://RUPALIKUMARI:Ja8ibOldIbkNORKK@cluster0.wwhf9wj.mongodb.net/Team12-Project-Blogging", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
