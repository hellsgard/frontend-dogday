
# Software Fundamental project
## Doggie Daycare


Helen Gardner

## Introduction

The project spec was to create a CRUD application with the utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training.
Including but not limited to:
 * Project management using a Jira board, use cases and tasks needed to complete the project.
 * Clear Documentation from a design phase describing the architecture you will use for your project.
 * A relational Database for storage
 * A functional application created in the OOP language, following best practices and design principles
 * The application must have a functioning front-end website and integrated API.
 * A full test suite on the back-end with an acceptable level of coverage.
 * Code integrated into a version control system

### Technology Stack and pre-requisites for deployment

The application was created using the following stack, including peripherals:
* Project management - Jira
* Database - mySQL
* Backend programming - Java (Eclipse IDE)
* Frontend programming - JavaScript, HTML and CSS
* Integration Tests - MockMVC
* Version control - Git


### Planning and Design

My project idea was to create a register of dogs for a Doggie daycare, consisting of some of the data which they would capture.

The first step was to create a Jira board with the requisite user stories, these were organised into three epics:
* Backend Architecture
* Frontend Architecture
* Styling and Documentation


![image](https://user-images.githubusercontent.com/85687000/146375982-fe325dcc-7ffc-487e-bea7-7528ad96becb.png)

![image](https://user-images.githubusercontent.com/85687000/146376080-9b7b3342-9272-4aa9-a22d-b608ca037780.png)


These were then done in two sprints, sprint goal one consisting of mostly laying out the functional architecture, with sprint two consisting of the documentation and styling


Here is the basic design I envisioned.


![image](https://user-images.githubusercontent.com/85687000/146376118-31ea1726-4514-445b-b49c-68b0df496f32.png)

## Version control

Two repositories were created, one for the backend and testing, and one for the frontend.
Both were managed using the dev-feature branch method.
My repositories were linked with Jira using smart commits so the version control could be tracked via the project management side.

https://github.com/hellsgard/backend-dog-day

https://github.com/hellsgard/frontend-dogday

JIRA SMART COMMITS:

![image](https://user-images.githubusercontent.com/85687000/146377561-32776908-895c-4583-89fa-0c3dfaff749c.png)


Some images showing the progression of both repos:

Front end:

![image](https://user-images.githubusercontent.com/85687000/146376282-1d0029b4-be93-47fc-bd3b-a95ef1381334.png)

![image](https://user-images.githubusercontent.com/85687000/146376511-7682bdd0-2d37-4195-9bd4-7f80401121ff.png)

![image](https://user-images.githubusercontent.com/85687000/146376733-f74eb335-bf7b-44b5-b2e2-7a5a9e60bfdf.png)

![image](https://user-images.githubusercontent.com/85687000/146376755-5da9bbf0-4cbe-435b-9b7b-6e41ea6e9cd1.png)



Back end:

![image](https://user-images.githubusercontent.com/85687000/146376473-c8842b21-63cb-4084-84e1-66f4141cdf5a.png)

![image](https://user-images.githubusercontent.com/85687000/146376617-5e864aa4-b6e6-4c4d-8c00-477d84fca794.png)





### Databases 

Production Database using mySQL

![image](https://user-images.githubusercontent.com/85687000/146376862-fbbbf0cd-ed66-43df-a686-d0ba830cdcf5.png)
![image](https://user-images.githubusercontent.com/85687000/146376890-a2423a7a-0969-4f41-a2ef-cd64ee135325.png)


H2 database for testing
Schema and test Data was included via the backend to create the table and insert an entry for testing

![image](https://user-images.githubusercontent.com/85687000/146377001-b63c0992-4a96-452c-9974-6927e127473c.png)


### Backend 
The back end of thee project was completed in Java, using a Spring boot framework.
The dependencies and class structure can be seen here:

![image](https://user-images.githubusercontent.com/85687000/146377052-e9db772c-db36-485f-842c-f9aaaee8d73a.png)

![image](https://user-images.githubusercontent.com/85687000/146377083-9d03433e-35a2-49f0-ae8e-957e41a7c10f.png)

### Testing

Integration testing was done on the back end with MockMVC to create a mocked controller class.
7 tests were run on the main folder covering all queries with a 98.3% coverage on src/main/java

![image](https://user-images.githubusercontent.com/85687000/146377156-c8824408-0661-4b92-8b7a-806e009d0360.png)

![image](https://user-images.githubusercontent.com/85687000/146377179-564acba5-3921-428d-a5df-1b0c16b6a7f4.png)


## Frontend

The Front end was built using Javascript, HTML and CSS.
Bootstrap was used for the grid layout, cards and the forms.
Axios handled the http requests with the front end functions coded in Javascript.

Progression from start to end of the week:

![image](https://user-images.githubusercontent.com/85687000/146377205-62638e41-802e-4c7f-b441-1e3fc1cbe92b.png)

![image](https://user-images.githubusercontent.com/85687000/146377393-afceb55f-9ae6-498e-8661-592d3cd2c0c8.png)


Some of the user convenience functions added include an update pop up modal, which pre-fills:

![image](https://user-images.githubusercontent.com/85687000/146436703-a5a592ee-325e-4ace-8ced-4adeeefb1f8e.png)


Toasts were used for notifications upon creation and update:

![image](https://user-images.githubusercontent.com/85687000/146436903-1cad1823-8915-4566-acbb-6f35a5cfeb94.png)




## Author

* **Helen Gardner** - *Full project* - [hellsgard](https://github.com/hellsgard)

## Acknowledgments

* Thankyou to Jordan and Pawel for their help with issues



