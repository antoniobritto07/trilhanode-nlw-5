import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Messages"
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}



class MessagesService {
  private messagesRepository: Repository<Message>
  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository) //referenciando o messagesrepository da classe que está
  }
  async create({ admin_id, text, user_id }: IMessageCreate) {
    const message = await this.messagesRepository.create({
      admin_id,
      text,
      user_id
    })

    await this.messagesRepository.save(message)
    return message;
  }
  async listByUser(user_id: string) {
    const list = this.messagesRepository.find({
      where: { user_id },
      relations: ["user"],

    })
    return list;
  }
}

export { MessagesService }