import mongoose from "mongoose";
import { messageModel } from "./models/messages.model.js";

export default class MessageManager {
  connection = mongoose.connect('mongodb+srv://martinpolese12:Rn46YL9aT2b7p0FD@ecommerce.bpmbcoi.mongodb.net/')

  async getMessages() {
    let result = await messageModel.find({})
    return result
  }

  async addMessage(message) {
    let result = await messageModel.create(message)
    return result
  }


}