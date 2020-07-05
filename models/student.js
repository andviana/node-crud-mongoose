import mongoose from 'mongoose';
//criação do modelo student
const studentSchema = mongoose.Schema({
  // name: String | Number | Date | Object
  name: { type: String, required: true },
  subject: { type: String, required: true },
  type: { type: String, required: true },
  value: {
    type: Number,
    require: true,
    validate(value) {
      if (value < 0) throw new Error('Valor negativo para anota não permitido');
    },
  },
  lastModified: { type: Date, default: Date.now },
});

const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
