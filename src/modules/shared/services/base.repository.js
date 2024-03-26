export class BaseRepository {
  constructor(model) {
    this.model = model;
  }
  async create(entity) {
    return await this.model.create(entity);
  }
  async get(id) {
    return await this.model.findById(id);
  }
  async update(id) {
    return await this.model.update(id);
  }

  async delete(id) {
    return await this.model.delete(id);
  }
}
