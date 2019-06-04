import axios from 'axios';
import models from "../models/";
import ValidationError from '../errors/validation-error';

const { Subscription } = models;

export default class SubscriptionsService {
  async findAll(userId) {
    return await Subscription.findAll({ where: { userId } });
  }

  async findOne(id) {
    return await Subscription.findOne({ where: { id } });
  }

  async create(subscription) {
    const { data } = await axios.default.get(`http://localhost:3001/api/plans/${subscription.planId}`);
    if (!data) {
      throw new ValidationError('Plan is invalid');
    }
    return await Subscription.create(subscription);
  }

  async deleteOne(id) {
    return await Subscription.destroy({ where: { id } });
  }
}
