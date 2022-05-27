const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userData') // library is the name of the database given


const Schema = mongoose.Schema; //acessing the schema in the mongoose package

// creating a schema for a single book 
// ie specifying how you r storing the book data in database

const sigschema = new Schema({ 
    uname : String,
    ads : String,
    pn : String,
    pwd  : String  // image is saved including the name given to image (image name), [HERE WE ARE USING STRING TYPE]
                     // you are acessing the image using the image name 
                     // THIS IS THE SCHEMA FOR THE SINGLE DOCUMENT FOR A COLLECTION IN DATABASE
                     // MONGOOSE JS .COM FOR MORE INFO

});


// INSTANCE OF A MODEL IS CALLED DOCUMENT -->WE KNOW INSTANCE OF A CLASS IS CALLED OBJECT


//TO USE THE SCHEMA WE HAVE TO CONVERT INTO MODEL
var udetails = mongoose.model('prouser',sigschema); // bookdata is the collection name
                                                     // bookdata--> in mongodb you can see it as bookdatas --> they are converting it to plural automatically (thats the only info i know )
module.exports = udetails;  // you are exporting the instance of a document in a collection 
