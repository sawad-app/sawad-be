import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: 3306,
        dialect: 'mysql',
        logging: false,
    }
);

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Kết nối MySQL thành công");
    } catch (error) {
        console.error("Không thể kết nối MySQL", error);
    }
}