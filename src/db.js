import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://martinpolese12:Rn46YL9aT2b7p0FD@ecommerce.bpmbcoi.mongodb.net/"
    );
    console.log("Conexión exitosa a la base de datos");
  } 
  catch (error) {
    console.error("Error al conectar a la base de datos", error);
  }
};

export default connectDB;