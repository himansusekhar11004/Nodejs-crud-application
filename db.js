let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<User name>:<password>@<cluster name>.jotgn.mongodb.net/User?retryWrites=true&w=majority',  { useNewUrlParser: true , useUnifiedTopology: true } );
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Please use your user name,password and cluster name which you'll get from monngo cloud console,follow the steps on readme.md file