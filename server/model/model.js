const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    roll_no : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required: true
    },
    sem : {
        type : String,
        required: true
    },

    DBMS : {
        type : Number,
        required : true
    },
    
    CNCC : {
        type : Number,
        required : true
    },
    DAA : {
        type : Number,
        required : true
    },
    CG : {
        type : Number,
        required : true
    },
    JAVA : {
        type : Number,
        required : true
    },
    DBMS_LAB : {
        type : Number,
        required : true
    },
    CG_JV_LAB : {
        type : Number,
        required : true
    },
    TOTAL_M_M :
    {
        type : Number
    },
    TOTAL_O_M :
    {
        type : Number
    }
  
})

const Marksdb = mongoose.model('marksdb', schema);

module.exports = Marksdb;

