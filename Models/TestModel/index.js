const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  

});
    
const testSchema = new mongoose.Schema({
  testName: { type: String, required: true },
  testAbout: { type: String, required: true },
  testQuestions: [questionSchema],
  testSubject: { type: String, required: true },
  testData :{type:Array,default:[]}
  
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
