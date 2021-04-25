import { Request, Response } from "express";
import { UsersService } from "../services/UserService";

class UsersController {
  async create(request: Request, response: Response): Promise<Response> { //aqui é a tipagem se que ele está prometendo o retornod o tipo response
    try {
      const { email } = request.body;
      const usersService = new UsersService();
      const user = await usersService.create(email);
      return response.json(user);
    } catch (error) {
      console.log(error);
      return response.json({ notification: "error while trying to create an user" })
    }
  }
}

export { UsersController };