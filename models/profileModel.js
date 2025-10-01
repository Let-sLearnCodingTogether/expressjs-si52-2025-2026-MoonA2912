import mongoose from "mongoose";

const ProfileSchema=new mongoose.Schema(
    {
        displayName :{
            type: String,
            required: [true, "Display name wajib di isi"],
            unique: true, // biar gak sama 
            trim: true // menghapus spasi di awal dan akhir 
        },
        profilePicture : {
            type:String,
            required : [true, "Profile picture wajib di isi"],
            unique : true,
            trim: true,
        },
        bio: {
            type: String,
            minLength :[10, "minimal 10 karakter"],
            maxLength : [150, "maximal 150 karakter"],
            required: [true, "bio wajib di isi"]
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps : true
    }
)

const ProfileModel=mongoose.Model("Profile", ProfileSchema)

export default ProfileModel 