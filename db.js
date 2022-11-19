import mongoose from 'mongoose';

const Connection = async (username, password) => {
const URL = `mongodb+srv://${username}:${password}@crud-app.6uerrc4.mongodb.net/?retryWrites=true&w=majority`;

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;