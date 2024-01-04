import mongoose from "mongoose";

const Connention = async (url) => {
    try{
        await mongoose.connect(url,{});
        console.log('Connected to Database')
    }catch(error){
        console.log(error);
    }
}

export default Connention;

// 