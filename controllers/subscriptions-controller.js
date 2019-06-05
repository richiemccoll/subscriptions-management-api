import { Router } from 'express';
import asyncWrapper from '../utilities/async-wrapper';
import SubscriptionsService from '../services/subscriptions-service';
import validator from '../middleware/validator';
import protectedRoute from '../middleware/protected-route';

const router = new Router();
const subscriptionsService = new SubscriptionsService();

router.use(protectedRoute());

// GET api/subscriptions/
router.get('/', asyncWrapper(async (req, res) => {
    let userId = null;
    let subscriptions = await subscriptionsService.findAll(userId);
    res.send(subscriptions);
}));

// GET api/subscriptions/:id
router.get('/:id', asyncWrapper(async (req, res) => {
    let id = req.params.id;
    let userId = null;
    let subscription = await subscriptionsService.findOne(id);
    res.send(subscription); 
}));

// POST api/subscriptions/
router.post('/', [validator('Subscription', 'default')], asyncWrapper(async (req, res) => {
    let subscription = await subscriptionsService.create(req.body);
    res.send(subscription);
}));

// DELETE api/subscriptions/
router.delete('/:id', asyncWrapper(async (req, res) => {
    let id = req.params.id;
    await subscriptionsService.deleteOne(id);
    res.sendStatus(200);
}));

export default router;