import mongoose from "mongoose";

const UserSchema=new mongoose.Schema(
    {
        username :{
            type: String,
            required: [true, "User name wajib dii si"],
            unique: true, // biar gak sama 
            trim: true // menghapus spasi di awal dan akhir 
        },
        email : {
            type:String,
            required : [true, "Email wajib di isi"],
            unique : true,
            trim: true,
        },
        password: {
            type: String,
            required :[true, "Password wajib di isi"]
        }
    },
    {
        timestamps : true
    }
)

const UserModel=mongoose.model("User", UserSchema)

export default UserModel 