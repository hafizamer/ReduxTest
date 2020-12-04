import mongoose from 'mongoose'

const postSchema =mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
},{
    timestamps: true
});

const PostM = mongoose.model('PostM', postSchema)

export default PostM;