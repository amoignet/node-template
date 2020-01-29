import { User } from './../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class UserService {

    private repository = getCustomRepository(UserRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async create(user: any) {
        user = this.repository.create(user);
        return await this.repository.save(user);
    }

    async remove(id: number) {
        return await this.repository.delete(id);
    }

    // async getUserTickets() {
    //     const userRepository = connection.getRepository(User);
    //     const users = await userRepository.find({ relations: ['tickets'] });
    // }
}
