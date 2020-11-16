const { Schema, model} = require('mongoose');

const productSchema = new Schema({
    title: String,
    description: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

module.exports = model('Product', productSchema);

