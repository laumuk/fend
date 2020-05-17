# Overview of the Project
We will be building web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.
Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.

An input of an URL is needed in the webpage. First the URL is checked if valid or not. In the case of an invalid URL, an error message is displayed. If the url is valid, an api call is performed and the result displayed on the web page.

# Running the project
1. Run the express server - **npm start**, which goes on port 8081
2. To generate the distribution folder for production, use **npm run build-prod**
3. Run webpack dev server  - **npm run build-dev**, which opens the web page on port 8080

# Webpack configurations
We use to config files:
  - webpack.dev.js => this is for development mode
  - webpack.prod.js => this is for production mode

# Dependencies
All the installed dependencies, for example like:
  - babel
  - clean-webpack
  - css-loader
  - node-sass
  - html-webpack-plugin
  - terser-plugin
  - etc.
can be found in the package.json file

# Testing
Testing is done with Jest. When running the test, you need to use this command line: **npm run test**

# Service Workers
Service workers are set up in webpack for offline functionality