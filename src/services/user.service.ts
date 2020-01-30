import { User } from './../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { getCustomRepository } from 'typeorm';
import { TicketRepository } from '../repository/ticket.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class UserService {

    private repository = getCustomRepository(UserRepository);
        private ticketRepository = getCustomRepository(TicketRepository);
    // Business logic
    async getAll() {
        return await this.repository.find({relations: ['tickets']});
    }

    async create(user: User) {

        const ticketsPromises = user.tickets.map((ticket) => {
            ticket = this.ticketRepository.create(ticket);
            return this.ticketRepository.save(ticket);
        });

        const tickets = await Promise.all(ticketsPromises);

        user.tickets = tickets;
        user = this.repository.create(user);
        return await this.repository.save(user);
    }

    async remove(id: number) {

        return await this.repository.delete(id);
    }
}
