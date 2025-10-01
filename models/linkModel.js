import mongoose from "mongoose";

const LinkSchema=new mongoose.Schema(
    {
        tittle :{
            type: String,
            required: [true, "Tittle name wajib di isi"],
            unique: true, // biar gak sama 
            trim: true // menghapus spasi di awal dan akhir 
        },
        icon : {
            type:String,
            required : [true, "Icon wajib di isi"],
            unique : true,
            trim: true,
        },
        Url: {
                   type: String,
                   required: [true, "Link wajib di isi"]
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

const LinkModel=mongoose.Model("Link", LinkSchema)

export default LinkModel 