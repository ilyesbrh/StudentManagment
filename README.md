Introduction:
	In this application me and my colleges we developed a small web application to carry out the Objective of this mini-project then we created this brief report to explain our work.

 Objectives:

- Create student
- Delete student
- Update student
- search for student

Concepts and paradigms:

REST API It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it.

MVC The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application.

Functional programming  In computer science, functional programming is a programming paradigm and a style of building the structure and elements of computer programs that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

Dynamic pages  A dynamic web page is a web page that displays different content each time it's viewed.

SPA website design approach where each new page's content is served not from loading new HTML pages but generated dynamically through JavaScript.

CamelCase the practice of writing phrases such that each word or abbreviation in the middle of the phrase begins with a capital letter, with no intervening spaces or punctuation.

AJAX is a set of web development techniques using many web technologies on the client side to create asynchronous web applications.


Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. Recent work also considers the viewer proximity as part of the viewing context as an extension for RWD.

Tools AND Frameworks:

1) Tools for development
SAAS  is a CSS preprocessor a layer between the stylesheets you author and the . css files you serve to the browser. Sass (short for Syntactically Awesome Stylesheets) plugs the holes in CSS as a language, allowing you to write DRY code that'll be faster, more efficient, and easier to maintain.
VS code  Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring.
Filezilla is a free software, cross-platform FTP application, consisting of FileZilla Client and FileZilla Server. Client binaries are available for Windows, Linux, and macOS, server binaries are available for Windows only.
Chrome dev tool  Web development tools allow web developers to test and debug their code.
2) Frameworks and libraries
axios  is a very popular JavaScript library you can use to perform HTTP requests, that works in both Browser and Node. js platforms. It supports all modern browsers, including support for IE8 and higher. It is promise-based, and this lets us write async/await code to perform XHR requests very easily.


PDO is an acronym for PHP Data Objects and it’s a lean, consistent way to access databases. This means developers can write portable code much easier.


Bootstrap  is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.


 Animate.css  a lightweight css framework to perform cool animation with adding some css classes to your elements.


 Jquery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. 


 Material icons : Similar to other Google Web Fonts, the correct CSS will be served to activate the 'Material Icons' font specific to the browser. An additional CSS class will be declared called . material-icons .

Development Steps:

1 Development
Database
As it is specified in requirements we created a database named student with 7 column then we added id and createdAt for development purposes.
html/css
HTML and CSS are the very first thing to do in any web application so we started creating our static template using bootstrap to make it responsive , we divided our page into two main parts :
 navbar contain all modals and navigation buttons of our application like code source and search modal
body contain student card
student card that contain student name and ID 
Modals we created of them for search , edit/view and add student

javascript
 Data getter/sender functions is a set of functions we created to communicate with server api using axios library for example update student function

Create Student we used this function to create cards dynamically 
 
php
PHP code is the server side code that contain connection to database . In all PHP script we did key things :
Connect to Database.
Retrieve Parameters from request.
Query Database.
send result back to FrontEnd in a JSON format.
we created 4 php script/files for our application :
Add.php that handle insertion to database.
delete.php that delete student from database based on his ID.
update.php similar to add student but it update student based in his ID.
getData.php this script has two functionalities:
Get all data from Database without any filtering.
Get data based on parameters provided in request.
production
hosting database
		We hosted our Database inside 00webhost.com so it can be accessible from  
hosting website
		We hosted our website in 00webhost.com and we uploaded app files using ftp account and Filezilla 

Conclusion
It was an exciting project to work on and there is a lot I learnt from it, above and beyond its original scope. we were able to study and train on development in an environment that was almost completely foreign to us, which we believe we have been reasonably successful with. Although we were not able to complete some of the proposed functionality like authentification, the functionality related to the core purpose of the application is working as desired. we believe there is still a lot of potential for this application, and we will continue development in the future.

https://studentmanagmentbba.000webhostapp.com/







