export class BaseRepository {
  constructor(entity) {
    this.repository = entity;
  }
  async create(dto) {
    return await this.repository.create(dto);
  }
  async findOne(id) {
    return await this.repository.findOne({ where: { id: id } });
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
