const mongoose = require("mongoose");

const URI = "mongodb+srv://testwefans:mQeXJGl0VNyPl8MN@cluster0.rgkgdwo.mongodb.net/testwefan";

// const URI =process.env.DB_URL;
// mongoose.connect(URI);

const connectDB = async () => {
    try {

       await mongoose.connect(URI);
       console.log('connection successful to DB');
        
    } catch (error) {

        console.error(error,"databse connection failed");
        process.exit(0);
        
    }
};

module.exports = connectDB; 
