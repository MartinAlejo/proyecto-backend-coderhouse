import { userModel } from "../models/users.model.js";

export default class UserManager {

  async addUser(user, cart) {
    try {
      user.cart = cart._id

      let result = await userModel.create(user)

      return result
    }
    catch(error) {
      throw new Error("User couldn't be created")
    }
  }

  async findUser(email) {
    let result = await userModel.findOne({email: email})

    return result
  }

  async findUserById(id) {
    let result = await userModel.findOne({_id: id})

    return result
  }

  async updatePassword(email, newPassword) {
    let user = await userModel.findOne({email});

    if (!user) {
      throw new Error("User wasn't found")
    }

    await userModel.updateOne({_id: user._id}, {$set: {password: newPassword}});
  }
  
}