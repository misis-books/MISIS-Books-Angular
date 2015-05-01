#MISIS Books Angular

###An application based on Node.js + Angular + Angular Material + Express + Jade + Sass and MISIS Books API.

### Development environment setup
####1. Prerequisites

* [Nodejs](http://www.nodejs.org/)
* [Node Package Manager](https://npmjs.org/) (NPM)
* [Git](http://git-scm.com/) (Git-scm)
* [Ruby](http://www.ruby-lang.org/en/downloads/) (Sass runtime environment)

####2. Dependencies
* [Grunt](http://gruntjs.com/) (task automation)
* [Bower](http://bower.io/) (Web package management)
* [Sass](http://sass-lang.com/) (css tool)
```
npm install bower -g
npm install grunt-cli -g
gem install sass
```
####3. Installation
#####1. Install required **node** modules
```
npm install
```
#####2. **Bower** modules installation:
```
bower install
```
#####3. Running **Grunt**
```
grunt 
```
####4. Running application
To start the web server, run:
```
npm start
```
or
```
node app.js
```
To access the local server, enter the following URL into your web browser:
```
http://localhost:3000/
```