import mongoose from 'mongoose';
//conectar ao MongoDB pelo Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://andviana:6QaeF@82fTpKQ!v@bootcamp.v8sop.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conexão ao MongoDB Atlas realizda com sucesso');
  } catch (e) {
    console.log('Ocorreu uma falha ao conectar com o MongoDB Atlas: ' + e);
  }
};

export { connectDB };
