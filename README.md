# WebFrameworkLess
no framework-ish web development

---------------------------------------------------------------------------------
* Todd: 20190706: no framework website via webcomponents & minimum libraries.
*   This was heavily based on an awesome set of training courses into 
*   ditching 'framework madness' :). Thanks Barry @ work.
---------------------------------------------------------------------------------

1. added readme

2. added .gitignore

3. added routing
https://apifriends.com/api-streaming/exploring-riot-js-part4/
npm install --save riot-route

4. added RX - cause life without RX isn't worth it...
npm install rxjs

5. run npm init to create the package.json
npm init

6. install webpack
[webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, 
yet it is also capable of transforming, bundling, or packaging]
https://webpack.js.org/guides/getting-started/
npm install --save-dev webpack
npm install webpack-dev-server --save
npm install webpack-cli --save-dev
npm install html-webpack-plugin --save-dev
npm install style-loader --save-dev
npm install css-loader --save-dev
npm install html-loader --save-dev

7. W3.CSS is a modern CSS framework with built-in responsiveness:
https://www.npmjs.com/package/w3-cs
npm install w3-css

8. added index.html

9. added src/index.js

10. added to scripts
  "scripts": {
    "start": "webpack-dev-server",
    "webpack-dev-server": "webpack-dev-server",
    "build": "webpack",
    "dev": "webpack --mode development",

11. added webpack.config.js 

12. npm start

13. => started mucking around :)
    todo: wire up a basic RX based Broker
            - add tests
          wire up toast notifications
          shell out to microsite(s)
            - play around with iFrame comms
          add a login / auth
            - play around with json based claims (want to compare to SAML)
    compare this with AngularJS, React, Vue
    

