var express = require('express');
var router = express.Router();
  
const indexController = require('../controllers/indexController');
const blogController = require('../controllers/blogController');
const productController= require('../controllers/productController');
const serviceController= require('../controllers/serviceController');

// ********* SLIDER **********
router.get('/sliders', indexController.getSliders);
router.get('/sliders/:id', indexController.getSliderbyid);
router.post('/sliders', indexController.postSliders);
router.put('/sliders', indexController.putSliders);
router.delete('/sliders/:id', indexController.deleteSliders);

// ********* PAGE **********
router.get('/pages', indexController.getPages);
router.get('/pages/:id', indexController.getPagesbyid);
router.post('/pages', indexController.postPages);
router.put('/pages', indexController.putPages);
router.delete('/pages/:id', indexController.deletePages);

// ********* TESTIMONIAL **********
router.get('/testimonials', indexController.getTestimonials);
router.get('/testimonials/:id', indexController.getTestimonialsbyid);
router.post('/testimonials', indexController.postTestimonials);
router.put('/testimonials', indexController.putTestimonials);
router.delete('/testimonials/:id', indexController.deleteTestimonials);

// ********* BLOG **********
router.get('/blogs', blogController.getBlogs);
router.get('/blogs/:id', blogController.getBlogsbyid);
router.post('/blogs', blogController.postBlogs);
router.put('/blogs', blogController.putBlogs);
router.delete('/blogs/:id', blogController.deleteBlogs);

// ********* AUTHOR **********
router.get('/authors', blogController.getAuthors);
router.get('/authors/:id', blogController.getAuthorsbyid);
router.post('/authors', blogController.postAuthors);
router.put('/authors', blogController.putAuthors);
router.delete('/authors/:id', blogController.deleteAuthors);

// ********* CATEGORY **********
router.get('/categories', productController.getCategories);
router.get('/categories/:id', productController.getCategoriesbyid);
router.post('/categories', productController.postCategories);
router.put('/categories', productController.putCategories);
router.delete('/categories/:id', productController.deleteCategories);

// // ********* PRODUCT **********
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductsbyid);
router.post('/products', productController.postProducts);
router.put('/products', productController.putProducts);
router.delete('/products/:id', productController.deleteProducts);

// // ********* SERVICE **********
router.get('/services', serviceController.getServices);
router.get('/services/:id', serviceController.getServicesbyid);
router.post('/services', serviceController.postServices);
router.put('/services', serviceController.putServices);
router.delete('/services/:id', serviceController.deleteServices);


module.exports = router;
