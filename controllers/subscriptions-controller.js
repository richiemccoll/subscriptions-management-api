import { Router } from 'express';
import asyncWrapper from '../utilities/async-wrapper';

const router = new Router();

// GET api/subscriptions/
router.get('/', asyncWrapper(async (req, res) => {

}));

// GET api/subscriptions/:id
router.get('/:id', asyncWrapper(async (req, res) => {

}));

// POST api/subscriptions/
router.post('/', asyncWrapper(async (req, res) => {

}));

// DELETE api/subscriptions/
router.delete('/:id', asyncWrapper(async (req, res) => {

}));

export default router;