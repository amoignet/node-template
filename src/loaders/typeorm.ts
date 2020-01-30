import { Ticket } from './../entity/ticket.entity';
import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';

export default async () => {

await createConnection({
    type: 'mysql',
    host: 'localhost',
    username: process.env.user4,
    password: process.env.password4,
    database: process.env.database4,
    entities: [
        User,
        Ticket,
    ],
    synchronize: true,
});
};
