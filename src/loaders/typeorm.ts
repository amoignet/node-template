import { Ticket } from './../entity/ticket.entity';
import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';

export default async () => {

await createConnection({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'sean0615',
    database: 'wildCircus',
    entities: [
        User,
        Ticket,
    ],
    synchronize: true,
});
};
