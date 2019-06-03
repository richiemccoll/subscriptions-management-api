import models from "../models/";

const { Plan } = models;

export default class PlansService {
  async findAll(userId) {
    return await Plan.findAll({ where: { userId } });
  }

  async findOne(id) {
    return await Plan.findOne({ where: { id } });
  }

  async create(plan) {
    return await Plan.create(plan);
  }

  async deleteOne(id) {
    return await Plan.destroy({ where: { id } });
  }
}
