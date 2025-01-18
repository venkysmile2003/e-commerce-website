//const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rajveersinghkhinchi2003:t4ZsvEKGA2zOD6sk@cluster0.ha9ahvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});
