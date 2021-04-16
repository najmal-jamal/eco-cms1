const mauthor = require('../models/author');
const mblog = require('../models/blog');

// ********* BLOG **********
exports.getBlogs = (req, res, next) => {
    mblog.findAll({
        include: {
            model: mauthor.Authors
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.getBlogsbyid = (req, res, next) => {
    mblog.findOne({
        where: author_id= req.author_id,
        include: {model:mauthor.Authors}
        
    
}).then(data => {
        
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.postBlogs = (req, res, next) => {
    mblog.create(
        {
            title: req.body.title,
            image: req.body.image,
            content:req.body.content,
            author_id:req.body.author_id,
            meta_tags:req.body.meta_tags,
            meta_title:req.body.meta_title,
            meta_description:req.body.meta_description,
            extra_meta:req.body.extra_meta
        }
    ).then(data => {
        res.send({
            message: 'BLOG Added Succesfully!', status: true
        });
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.putBlogs = (req, res, next) => {

    mblog.findByPk(req.body.id).then(blog => {
        blog.update({
            title: req.body.title,
            image: req.body.image,
            content:req.body.content,
            meta_tags:req.body.meta_tags,
            meta_title:req.body.meta_title,
            meta_description:req.body.meta_description,
            extra_meta:req.body.extra_meta
        }).then(data => {
            res.send({
                message: 'BLOG Updated Succesfully!', status: true
            });
        }).catch(err => {
            res.status(400).send(err);
        })
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.deleteBlogs = (req, res, next) => {

    mblog.findByPk(req.params.id).then(blog => {
        blog.destroy().then(data => {
            res.send({
                message: 'BLOG Deleted Succesfully!', status: true
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

// ********* AUTHOR **********
exports.getAuthors = (req, res, next) => {
    mauthor.Authors.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.getAuthorsbyid = (req, res, next) => {
    mauthor.Authors.findByPk(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.postAuthors = (req, res, next) => {
    mauthor.Authors.create(
        {
            author_name: req.body.author_name,
            image: req.body.image,
            email:req.body.email,
            phone:req.body.phone
        }
    ).then(data => {
        res.send({
            message: 'AUTHOR Added Succesfully!', status: true
        });
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.putAuthors = (req, res, next) => {

    mauthor.Authors.findByPk(req.body.id).then(slider => {
        author.update({
            author_name: req.body.author_name,
            image: req.body.image,
            mail:req.body.mail,
            phone:req.body.phone
        }).then(data => {
            res.send({
                message: 'AUTHOR Updated Succesfully!', status: true
            });
        }).catch(err => {
            res.status(400).send(err);
        })
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.deleteAuthors = (req, res, next) => {

    mauthor.Authors.findByPk(req.params.id).then(author => {
        author.destroy().then(data => {
            res.send({
                message: 'AUTHOR Deleted Succesfully!', status: true
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