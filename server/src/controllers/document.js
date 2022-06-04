const {Document: DocumentModel } = require("../models/models");

class DocumentController {
  async create(req, res, next) {}
  async update(req, res, next) {}
  async getOne(req, res, next) {
    const documentId = req.params.id;
    try {
      const {dataValues} = await DocumentModel.findOne({where: {id: documentId}});
      res.json({
        data: {...dataValues}
      });
    } catch {
      res.status(400).json({error: "Документ не найден"});
    }
  }
  async getAll(req, res, next) {
    try {
      const documents = await (await DocumentModel.findAll());
      res.json({
        data: documents,
      });
    } catch (error) {
      res.status(500).json({error: "Ошибка при запросе списка документов"})
    }
  }
}


module.exports = new DocumentController();
