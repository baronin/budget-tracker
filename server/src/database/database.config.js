import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'admin', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false, // отключение вывода SQL запросов в терминал
});

(async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error('Не удалось подключиться к базе данных:', error);
  }
  try {
    await sequelize.sync({ alter: true, paranoid: true });
    // await sequelize.sync({ force: true, paranoid: true });
    // Принудительно обновляет БД, ФОРМАТИРУЯ ЕЁ!
  } catch (error) {
    console.error('Не удалось выполнить синхронизацию в базе данных:', error);
  }
})();

export { sequelize, DataTypes };
