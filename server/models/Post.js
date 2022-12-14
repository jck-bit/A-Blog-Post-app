import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    
    userId:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:new Date()
    },
    location:String,
    title:String,
    description:String,
    picturePath:String,
    userPicturePath:String,
    
    likes: {
        type: Map,
        of:Boolean
    },
    comments:{
        type:Array,
        default:[]
    }
},{timestamps:true}
)

const Post = mongoose.model("Post", PostSchema);
export default Post;