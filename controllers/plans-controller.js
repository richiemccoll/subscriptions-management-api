import { Router } from 'express';
import asyncWrapper from '../utilities/async-wrapper';

const router = new Router();

// GET api/plans/
router.get('/', asyncWrapper(async (req, res) => {

}));

// GET api/plans/:id
router.get('/:id', asyncWrapper(async (req, res) => {

}));

// POST api/plans/
router.post('/', asyncWrapper(async (req, res) => {

}));

// DELETE api/plans/
router.delete('/:id', asyncWrapper(async (req, res) => {

}));

export default router;