const { Product, ProductDetail, ProductColor, ProductSize } = require('../modules/product/product.model');
const squelizeDB = require('./squelize.config');



async function initDataBase() {
    
    // Product Detail
    Product.hasMany(ProductDetail,
        {
            foreignKey: 'productId',
            sourceKey: 'id',
            as: 'details'
        });
    ProductDetail.belongsTo(Product,
        {
            foreignKey: 'productId',
            targetKey: 'id'
        })
    
    // Product Color
    Product.hasMany(ProductColor,
        {
            foreignKey: 'productId',
            sourceKey: 'id',
            as: 'colors'
        })
    ProductColor.belongsTo(Product,
        {
            foreignKey: 'productId',
            targetKey: 'id'   
        }
    )

    // Product Size
    Product.hasMany(ProductSize,
        {
            foreignKey: 'productId',
            sourceKey: 'id',
            as: 'sizes'
        })
    ProductSize.belongsTo(Product,
        {
            foreignKey: 'productId',
            targetKey: 'id'   
        }
    )
    await squelizeDB.sync({ force: true });
}


module.exports = {initDataBase};