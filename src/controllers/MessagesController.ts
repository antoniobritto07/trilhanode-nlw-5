import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(request: Request, response: Response) {
    try {
      const { admin_id, text, user_id } = request.body;
      const messagesService = new MessagesService();

      const message = await messagesService.create({
        admin_id,
        text,
        user_id
      })

      return response.json(message)
    }
    catch (error) {
      return response.status(400).json({ notification: "Error while trying to create an menssage" })
    }
  }
  async showByUser(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const messagesService = new MessagesService()
      const list = await messagesService.listByUser(id)
      return response.json(list)
    } catch (error) {
      console.log(error)
      return response.status(400).json({ notification: "Error while trying to show by the user" })
    }
  }

}
export { MessagesController }