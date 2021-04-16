const mproduct= require('../models/product');
const mcategory= require('../models/category');

// ********* PRODUCT **********
exports.getProducts = (req, res, next) => {
    mproduct.findAll({
        include: {
            model: mcategory.Categories
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.getProductsbyid = (req, res, next) => {
    mproduct.findByPk(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.postProducts = (req, res, next) => {
    mproduct.create(
        {
            product_name: req.body.product_name,
            image: req.body.image,
            price:req.body.price,
            rating:req.body.rating,
            description:req.body.description,
            category_id:req.body.category_id,
            meta_tags:req.body.meta_tags,
            meta_title:req.body.meta_title,
            meta_description:req.body.meta_description,
            extra_meta:req.body.extra_meta
        }
    ).then(data => {
        res.send({
            message: 'PRODUCT Added Succesfully!', status: true
        });
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.putProducts = (req, res, next) => {

    mproduct.findByPk(req.body.id).then(product => {
        product.update({
            product_name: req.body.product_name,
            image: req.body.image,
            price:req.body.price,
            rating:req.body.rating,
            description:req.body.description,
            meta_tags:req.body.meta_tags,
            meta_title:req.body.meta_title,
            meta_description:req.body.meta_description,
            extra_meta:req.body.extra_meta
        }).then(data => {
            res.send({
                message: 'PRODUCT Updated Succesfully!', status: true
            });
        }).catch(err => {
            res.status(400).send(err);
        })
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.deleteProducts = (req, res, next) => {

    mproduct.findByPk(req.params.id).then(product => {
        product.destroy().then(data => {
            res.send({
                message: 'PRODUCT Deleted Succesfully!', status: true
            });
        }).catch(err => {
            console.log(err);
            res.status(400).send(err);
        })
    }).catch(err => {
        console.log(err);
        res.status(400).send(err);
    })
}

// ********* CATEGORY **********

exports.getCategories = (req, res, next) => {
    mcategory.Categories.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.getCategoriesbyid = (req, res, next) => {
    mcategory.Categories.findByPk(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.postCategories = (req, res, next) => {
    mcategory.Categories.create(
        {
            category_name: req.body.category_name,
            image: req.body.image,
            description:req.body.description
        }
    ).then(data => {
        res.send({
            message: 'CATEGORY Added Succesfully!', status: true
        });
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.putCategories = (req, res, next) => {

    mcategory.Categories.findByPk(req.body.id).then(category => {
        category.update({
            category_name: req.body.category_name,
            image: req.body.image,
            description:req.body.description
        }).then(data => {
            res.send({
                message: 'CATEGORY Updated Succesfully!', status: true
            });
        }).catch(err => {
            res.status(400).send(err);
        })
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.deleteCategories = (req, res, next) => {

    mcategory.Categories.findByPk(req.params.id).then(category => {
        category.destroy().then(data => {
            res.send({
                message: 'CATEGORY Deleted Succesfully!', status: true
            });
        }).catch(err => {
            console.log(err);
            res.status(400).send(err);
        })
    }).catch(err => {
        console.log(err);
        res.status(400).send(err);
    })
}