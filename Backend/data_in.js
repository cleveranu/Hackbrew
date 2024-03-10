const mongoose = require('mongoose');

async function fetchDataFromMongoDB() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost/data_ngo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Define a schema for your collection
    const yourSchema = new mongoose.Schema({
      img: String,
      title: String,
      reviews: String,
      prevPrice: String,
      newPrice: String,
      One_line: String,
      description: String,
      color: String,
      category: String,
    });

    const YourModel = mongoose.model('Ngo', yourSchema);

  
    const data = await YourModel.find({}).exec();
    
    
    console.log(data);
    
   
    return data;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    
    throw error;
  } finally {
  
    await mongoose.connection.close();
  }
}


fetchDataFromMongoDB()
  .then((result) => {
    // Process the result or perform further actions
    console.log('Data fetched successfully:', result);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });
