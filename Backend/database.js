const mongoose = require('mongoose')

const URI = 'mongodb://0.0.0.0:27017/Centro_de_ayuda'
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
})
    .then(db=> console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose; 