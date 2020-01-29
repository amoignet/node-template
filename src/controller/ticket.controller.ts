import express, { Router, Request, Response, Application } from 'express';
import { TicketService } from 'src/services/ticket.service';

export const TicketController = (app: Application) => {

   const ticketRouter: Router = express.Router();
   const ticketService = new TicketService();

   ticketRouter.get('/', async (req: Request, res: Response) => {
       res.send(await ticketService.getAll());
   });

   ticketRouter.post('/', async (req: Request, res: Response) => {
       const ticket = req.body;
       res.send(await ticketService.create(ticket));
   });

   ticketRouter.delete('/:id', async (req: Request, res: Response) => {
       const id = Number(req.params.id);
       res.send(await ticketService.remove(id));
   });

   app.use('/tickets', ticketRouter);
};
