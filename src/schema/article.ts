/// <reference path="../../typings/node/node.d.ts" />
var mongoose = require('mongoose');


var ArticleSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    created_at: Number,
    updated_at: Number
});

ArticleSchema.pre('save', function(next) {
    this.updated_at = new Date().getTime();
    if (!this.created_at) {
        this.created_at = new Date().getTime();
    }
    next();
});


module.exports = mongoose.model('Article', ArticleSchema);
