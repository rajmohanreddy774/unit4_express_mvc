const mongoose= require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://RajMohanReddy:LUh3sl7jMzWSHGh1@cluster0.jg2fm.mongodb.net/express_mvc?retryWrites=true&w=majority")
}
