import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import Category from "./Category.js";
import Brand from "./Brand.js";

const Vehicle = sequelize.define('Vehicle', {
    name: { type: DataTypes.STRING, allowNull: false },
    capacity: { type: DataTypes.STRING },
    transmission: { type: DataTypes.STRING },
    year: { type: DataTypes.INTEGER },
    reg_code: { type: DataTypes.STRING },
    price_a_plus: { type: DataTypes.DECIMAL(15, 2) },
    price_a: { type: DataTypes.DECIMAL(15, 2) },
    price_b: { type: DataTypes.DECIMAL(15, 2) },
}, { timestamps: false });

// Thiết lập mối quan hệ
Category.hasMany(Vehicle, { foreignKey: 'category_id' });
Vehicle.belongsTo(Category, { foreignKey: 'category_id' });

Brand.hasMany(Vehicle, { foreignKey: 'brand_id' });
Vehicle.belongsTo(Brand, { foreignKey: 'brand_id' });

export default Vehicle;