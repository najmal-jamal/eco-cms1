const mservice = require('../models/service');

// ********* SERVICE **********

exports.getServices = (req, res, next) => {
    mservice.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.getServicesbyid = (req, res, next) => {
    mservice.findByPk(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.postServices = (req, res, next) => {
    mservice.create(
        {
            title: req.body.title,
            image: req.body.image,
            description:req.body.description,
            meta_tags:req.body.meta_tags,
            meta_title:req.body.meta_title,
            meta_description:req.body.meta_description,
            extra_meta:req.body.extra_meta
        }
    ).then(data => {
        res.send({
            message: 'SERVICE Added Succesfully!', status: true
        });
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.putServices = (req, res, next) => {

    mservice.findByPk(req.body.id).then(service => {
        service.update({
            title: req.body.title,
            image: req.body.image,
            description:req.body.description,
            meta_tags:req.body.meta_tags,
            meta_title:req.body.meta_title,
            meta_description:req.body.meta_description,
            extra_meta:req.body.extra_meta
        }).then(data => {
            res.send({
                message: 'SERVICE Updated Succesfully!', status: true
            });
        }).catch(err => {
            res.status(400).send(err);
        })
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.deleteServices = (req, res, next) => {

    mservice.findByPk(req.params.id).then(service => {
        service.destroy().then(data => {
            res.send({
                message: 'SERVICE Deleted Succesfully!', status: true
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