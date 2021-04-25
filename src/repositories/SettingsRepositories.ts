import { Repository, EntityRepository } from "typeorm";

import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingsRepositories extends Repository<Setting> { } //esse Repositories tem várias funções já padroes uteis nativas

export { SettingsRepositories };