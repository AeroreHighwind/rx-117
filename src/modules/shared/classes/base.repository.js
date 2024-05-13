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
    return await this.repository.update(
      { ...dto },
      {
        where: { id },
      }
    );
  }
  async delete(id) {
    return await this.repository.destroy(id);
  }
}
