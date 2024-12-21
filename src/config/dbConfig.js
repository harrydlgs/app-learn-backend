const mongoose = require('mongoose');
const dbConfig = 'mongodb+srv://hsdelg:MWRVjhho6VCYd5af@learning-storage-mongod.mbrzm.mongodb.net/?retryWrites=true&w=majority&appName=learning-storage-mongodb'

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTppology: true
});

module.exports = connection;