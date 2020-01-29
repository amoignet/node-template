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

    @ManyToOne(type => User, user => user.tickets)
    user?: User;
}
