#MISIS Books Angular [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
![MISIS Books logo](http://cs624029.vk.me/v624029446/2db97/VjlKJZLSRZ0.jpg)

###An application based on [Nodejs](http://nodejs.org/) + [Angular](http://angularjs.org/) + [Angular Material](http://material.angularjs.org/) + [Express](http://expressjs.com/) + [Jade](http://jade-lang.com/) + [Sass](http://sass-lang.com/) + [Grunt](http://gruntjs.com/) and [MISIS Books API](http://twosphere.ru/dev).

![NPM](https://img.shields.io/badge/npm-2.9.0-green.svg)

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
* **[Optional]** [PhantomJS](http://phantomjs.org/) (Full web stack on server) (Uses for search crawlers)
```
npm install bower -g
npm install grunt-cli -g
gem install sass
[optional] npm install phantomjs -g
```
####3. Installation
#####1. Cloning repo
```
$ git clone https://github.com/IPRIT/misis-books-angular.git
```
#####2. Install required **node** modules
```
npm install
```
#####3. **Bower** modules installation:
```
bower install
```
#####4. Running **Grunt**
```
grunt 
```
#####5. [Optional] Running **PhantomJS Server**
```
npm run-script seo
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