import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() { // vai ser chamado sempre que a gente sempre instanciar um objeto -> toda vez que chamar o New
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User }