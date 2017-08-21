# Eclipse Day!!!

 * [Top 10 Things You Need to Know About Eclipse Day](https://www.youtube.com/watch?v=yoMEbDcFK7U)

# MVC Architecture

* MVC Video: https://youtu.be/lEBm6gSF4RU
* Testing Video: 
* Demo Notes: https://github.com/tiy-greenville-july-2017/6.1-mvc-and-testing

Trygve Reenskaug introduced MVC into Smalltalk-76 while visiting the Xerox Palo Alto Research Center (PARC) in the 1970s. And a later version of Smalltalk 80 also included MVC in it's class library. Smalltalk 80's MVC structure is generally what I hear people talk about as the starting point of MVC.

Martin Fowler includes Smalltalk 80 in his article on [GUI Architectures](https://martinfowler.com/eaaDev/uiArchs.html)

But the first journal article published detailing MVC as a general idea wasn't until 1988. 


Trygve Reenskaug: https://vimeo.com/43536416

## Parts of MVC

 * Model: code responsible for data
 * View: code responisble for what's displayed (templates)
 * Controller: code responsible for user requests (glue between models and views)

### Diagram:

![image](https://betterexplained.com/wp-content/uploads/rails/mvc-rails.png)

## Disadvantages

 * Code navigability – The framework navigation can be complex because it introduces new layers of abstraction and requires users to adapt to the decomposition criteria of MVC.
 * Multi-artifact consistency – Decomposing a feature into three artifacts causes scattering. Thus, requiring developers to maintain the consistency of multiple representations at once.
 * Pronounced learning curve – Knowledge on multiple technologies becomes the norm. Developers using MVC need to be skilled in multiple technologies.

## Advantages

 * Simultaneous development – Multiple developers can work simultaneously on the model, controller and views.
 * High cohesion – MVC enables logical grouping of related actions on a controller together. The views for a specific model are also grouped together.
 * Low coupling – The very nature of the MVC framework is such that there is low coupling among models, views or controllers
 * Ease of modification – Because of the separation of responsibilities, future development or modification is easier
Multiple views for a model – Models can have multiple views


## Live Demo

Building a blog with MVC structure-

 * `require()`: commonJS modules
 * MVC folders: models, views, controllers
 * Express Router: used to setup routes for controllers
 * Blog Listing: setup router, setup controller, setup view, setup model

## Unit testing

Testing of individual units of code (with associated control data, usage procedures, and operating procedures).

 * Generally test functions/methods
 * Jest tests



