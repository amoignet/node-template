import { User } from './user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('ticket')
export class Ticket {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'int', nullable: true})
    nombreTickets!: number;

    @Column({type: Date, nullable: true})
    date!: Date;

    @ManyToOne(type => User, user => user.tickets, {
        onDelete:'CASCADE'
    })
    user?: User;
}

// async create(user: User) {

//     const ticketsPromises = user.tickets.map((ticket) => {
//         ticket = this.ticketRepository.create(ticket);
//         return this.ticketRepository.save(ticket);
//     });

//     const tickets = await Promise.all(ticketsPromises);

//     user.tickets = tickets;
//     user = this.repository.create(user);
//     return await this.repository.save(user);
// }

// async remove(id: number) {

//     return await this.repository.delete(id);
// }
// }

