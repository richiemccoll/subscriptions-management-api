import { Router } from 'express';
import asyncWrapper from '../utilities/async-wrapper';
import PlansService from '../services/plans-service';

const router = new Router();
const plansService = new PlansService();

// GET api/plans/
router.get('/', asyncWrapper(async (req, res) => {
    let userId = null;
    let plans = await plansService.findAll(userId);
    res.send(plans);
}));

// GET api/plans/:id
router.get('/:id', asyncWrapper(async (req, res) => {
    let id = req.params.id;
    let userId = null;
    let plan = await plansService.findOne(id);
    res.send(plan);
}));

// POST api/plans/
router.post('/', asyncWrapper(async (req, res) => {
    let plan = await plansService.create(req.body);
    res.send(plan);
}));

// DELETE api/plans/
router.delete('/:id', asyncWrapper(async (req, res) => {
    let id = req.params.id;
    await plansService.deleteOne(id);
    res.sendStatus(200);
}));

export default router;