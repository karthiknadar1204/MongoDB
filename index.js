//mongoose is to connect our server with the data base.
const mongoose=require("mongoose");
// mongodb://127.0.0.1:27017==>27017 is the port number of the mongodb shell.--->on 4th line of terminal after typing mongo.
//.then() is a callback function for when the database is connected to the server.
//.catch() is the function that will be executed in case f any issues while connecting server to the database.
//                                         /Name_of_database or server,{useNewUrlParser:true,useUnifiedToplogy:true}
mongoose.connect("mongodb://localhost:27017/Sample").then(()=>{
    console.log("Connected to mongo db")
}).catch((err)=>{
    console.log("error")
})

//Above we have created a DataBase Sample.The Database has collection Student inside it.
//student schema only defines the type of data that has to be stored inside the collection. 


/*a schema is a blueprint that defines the structure and data types of documents that will be stored in a MongoDB collection. 
It defines the properties of the documents, their types, and any constraints or validation rules that should be applied to the data.*/
const student=new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

//model is like collections .
const Student=new mongoose.model("student",student);


const adder=async()=>{
    // const ss=new Student({
    //     name:"Abhi",
    //     workout:true,
    //     height:6
    // })
    // await ss.save()

    // const ss=await Student.create({
    //     name:"Abhi",
    //     workout:true,
    //     height:6
    // });

    //Above are the two ways to store data inside the collection.

    // const ss=await Student.find();

    //              $eq:any_value is the "equal to" operator i.e if height==6, then we print it.
    //              $gt:any_value is if height is greater that any_value,we print it.
    //               $lt:any_value is if height is lesser that any_value,we print it.
    const ss=await Student.find({height:{$eq:6}})
    console.log(ss)
}

adder()