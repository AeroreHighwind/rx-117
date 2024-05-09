import { dataSource } from "../../../../data-source.js";

export class BaseRepository {
  constructor(entity) {
    this.repository = dataSource.getRepository(entity);
  }
  async create(dto) {
    return await this.repository.save(dto);
  }
  async findOne(id) {
    return await this.repository.findById(id);
  }
  async findAll() {
    return await this.repository.findAll();
  }
  async update(id, dto) {
    const updatedItem = { ...dto, id };
    return await this.repository.save(updatedItem);
  }
  async delete(id) {
    return await this.repository.delete(id);
  }
}
