import { Ticket } from './ticket.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: true})
    name!: string;

    @Column({type: 'varchar', length: 25, nullable: true})
    email!: string;

    @OneToMany(type => Ticket, ticket => ticket.user)
    tickets!: Ticket[];
}
