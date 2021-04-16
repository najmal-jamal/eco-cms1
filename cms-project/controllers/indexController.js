const mslider = require('../models/slider');
const mpage = require('../models/page');
const mtestimonials= require('../models/testimonial');
   
// ********* SLIDER **********

exports.getSliders = (req, res, next) => {
    mslider.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.getSliderbyid = (req, res, next) => {
    mslider.findByPk(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.postSliders = (req, res, next) => {
    mslider.create(
        {
            tagline: req.body.tagline,
            image: req.body.image,
            description:req.body.description
        }
    ).then(data => {
        res.send({
            message: 'Slider Added Succesfully!', status: true
        });
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.putSliders = (req, res, next) => {

    mslider.findByPk(req.body.id).then(slider => {
        slider.update({
            tagline: req.body.tagline,
            image: req.body.image,
            description:req.body.description
        }).then(data => {
            res.send({
                message: 'Slider Updated Succesfully!', status: true
            });
        }).catch(err => {
            res.status(400).send(err);
        })
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.deleteSliders = (req, res, next) => {

    mslider.findByPk(req.params.id).then(slider => {
        slider.destroy().then(data => {
            res.send({
                message: 'Slider Deleted Succesfully!', status: true
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

// ********* PAGE **********

exports.getPages = (req, res, next) => {
    mpage.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.getPagesbyid = (req, res, next) => {
    mpage.findByPk(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.postPages = (req, res, next) => {
    mpage.create(
        {
            title: req.body.title,
            bgimage: req.body.bgimage,
            subtitle: req.body.subtitle,
            description: req.body.description,
            meta_tags:req.body.meta_tags,
            meta_title:req.body.meta_title,
            meta_description:req.body.meta_description,
            extra_meta:req.body.extra_meta

        }
    ).then(data => {
        res.send({
            message: 'Page Added Succesfully!', status: true
        });
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.putPages = (req, res, next) => {

    mpage.findByPk(req.body.id).then(page => {
        page.update({
            title: req.body.title,
            bgimage: req.body.bgimage,
            subtitle: req.body.subtitle,
            description: req.body.description,
            meta_tags:req.body.meta_tags,
            meta_title:req.body.meta_title,
            meta_description:req.body.meta_description,
            extra_meta:req.body.extra_meta
        }).then(data => {
            res.send({
                message: 'Page Updated Succesfully!', status: true
            });
        }).catch(err => {
            res.status(400).send(err);
        })
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.deletePages = (req, res, next) => {

    mpage.findByPk(req.params.id).then(page => {
        page.destroy().then(data => {
            res.send({
                message: 'Page Deleted Succesfully!', status: true
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

// ********* TESTIMONIAL **********

exports.getTestimonials = (req, res, next) => {
    mtestimonials.Testimonials.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.getTestimonialsbyid = (req, res, next) => {
    mtestimonials.Testimonials.findByPk(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.postTestimonials = (req, res, next) => {
    mtestimonials.Testimonials.create(
        {
            client_name: req.body.client_name,
            image: req.body.image,
            company: req.body.company,
            description: req.body.description

        }
    ).then(data => {
        res.send({
            message: 'TESTIMONIAL Added Succesfully!', status: true
        });
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.putTestimonials = (req, res, next) => {

    mtestimonials.Testimonials.findByPk(req.body.id).then(testimonial => {
        testimonial.update({
            client_name: req.body.client_name,
            image: req.body.image,
            company: req.body.company,
            description: req.body.description
        }).then(data => {
            res.send({
                message: 'TESTIMONIAL Updated Succesfully!', status: true
            });
        }).catch(err => {
            res.status(400).send(err);
        })
    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.deleteTestimonials = (req, res, next) => {

    mtestimonials.Testimonials.findByPk(req.params.id).then(testimonial => {
        testimonial.destroy().then(data => {
            res.send({
                message: 'TESTIMONIAL Deleted Succesfully!', status: true
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

