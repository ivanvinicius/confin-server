import Sequelize, { Model } from 'sequelize';

class Estado extends Model {
  static init(sequelize) {
    super.init(
      {
        est_sigla: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Estado;
