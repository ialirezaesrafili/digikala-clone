const createHttpError = require("http-errors");
const { ProudctTypes } = require("../../common/constant/product.const");
const { Product, ProductSize, ProductDetail, ProductColor } = require("./product.model");

async function createProduct(req, res, next) {
    try {
        const {
            title,
            description,
            type,
            price = undefined ,
            discount = undefined,
            count = undefined ,
            active_discount = undefined ,
            colors,
            sizes,
            details
        } = req.body;
        
        if (!Object.values(ProudctTypes).includes(type)) {
            throw createHttpError(400, "Invalid product type");
        }
        const product = await Product.create({
            title,
            description,
            price,
            discount,
            active_discount,
            type,
            count
        });

        if (details && Array.isArray(details)) {
            let detailsList = [];
            for (const item of details) {
                detailsList.push({
                    key: item?.key,
                    value: item?.value,
                    productId: product.id
                })
            }
            if (detailsList.length > 0) {
                await ProductDetail.bulkCreate(detailsList);
            }
        }
        
        if (type === ProudctTypes.Coloring) {
            if (colors && Array.isArray(colors)) {
                let colorsList = [];
                for (const item of colors) {
                    colorsList.push({
                        color_name: item?.name,
                        color_code: item?.code,
                        price: product.price,
                        discount: item.discount,
                        active_discount: item.active_discount,
                        count: item?.count,
                        productId: product.id,
                    })
                }
                if (colorsList.length > 0) {
                    await ProductColor.bulkCreate(colorsList);
                }
            }
        }

        if (type === ProudctTypes.Sizing) {
            if (sizes && Array.isArray(sizes)) {
                let sizesList = [];
                for (const item of sizes) {
                    sizesList.push({
                        size: item?.size,
                        price: product.price,
                        discount: item.discount,
                        active_discount: item.active_discount,
                        count: item?.count,
                        productId: product.id,
                    })
                }
                if (sizesList.length > 0) {
                    await ProductSize.bulkCreate(sizesList);
                }
            }
        }

     }
    catch (error) {
        next(error);
    }
}