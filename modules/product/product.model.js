const { DataTypes } = require('sequelize');
const sequelizeDB = require('../../config/squelize.config');
const {ProudctTypes} = require('../../common/constant/product.const');
const Product = sequelizeDB.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    active_discount: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        wdefaultValue: false
    },
    type: {
        type: DataTypes.ENUM(...Object.values(ProudctTypes))
    },
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    description: {
        type: DataTypes.TEXT
    }
    

}, {
    modelName: 'product',
    createdAt: 'create_at',
    updatedAt: 'updated_at' 
});

const ProductDetail = sequelizeDB.define('product_detail', {
    id: {type: DataTypes.INTEGER, primaryKey: true,autoIncrement:true},
    key: {type: DataTypes.STRING},
    value: { type: DataTypes.STRING },
    productId: {type: DataTypes.INTEGER}
}, {
    timestamps: false,
    modelName: 'product_detail'
})


const ProductColor = sequelizeDB.define('product_color', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    color_name: {type: DataTypes.STRING},
    color_code: { type: DataTypes.STRING },
    productId: { type: DataTypes.INTEGER },
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    price: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    },
    discount: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    },
    active_discount: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false,
    modelName: 'product_color'
})

const ProductSize = sequelizeDB.define('product_size', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    size: {type: DataTypes.STRING},
    productId: { type: DataTypes.INTEGER },
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    price: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    },
    discount: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    },
    active_discount: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    
}, {
    timestamps: false,
    modelName: 'product_size'
})


module.exports = {
    Product,
    ProductDetail,
    ProductColor,
    ProductSize
}

