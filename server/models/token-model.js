const {Schema, tokenModel} = require ('mongoose');

const TokenSchema = new Schema ({
    user: {type:Schema.Types.ObjectId, ref:'User'},
    refreshtoken: {type:String, required: true},
   
});

module.exports = tokenModel('Token', TokenSchema);