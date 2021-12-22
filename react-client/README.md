# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


split project folder into two folders ( client and server)

client--
npx create-react-app ./
--
npm install 
    axios (for making api req.)
    moment (library for working with time and day)
    react-file-base-64 (convert images)
    redux-thunk (async actions using redux)
refer to index.js file in client
then refer to app.js file in client
connect to mongodb server, connect to database
--
//npm install 
    @material-ui/core 
    react-redux
create components folder, and corresponding elements
create API folder, refer to that folder
add "proxy": "http://localhost:5000", to package.json (client), above dependencies


server--
create file named index.js
npm init -y 
npm install 
    body-parser (enabling post req. )
    cors (enabling cross origin req.)
    express (framework for creating routing of app.)
    mongoose (create models for posts)
    nodemon (auto makes changes to server)
refer to index.js file in server
go to package.json and add below 'main', "type": "module" && 
replace testscript with "start": "nodemon index.js"
--
create file named posts.js. refer to this file in server
--


---Google auth---
client--
npm install
    jwt-decode
    react-google-Login
--
create auth folder, with styles. then input file if needed
get own clientId ( console.developers.google.com) -> oauth censent.  ->credentials. 
'?.' is an optional chaining operator -> not going to throw an error if not having access to res object.
constant folder->actionTypes are optional
reducers folder ->auth file

server--
npm install
    bcryptjs
    jsonwebtoken
create modular components in client folder
--

---reg auth---
client--
(components -> auth)
handleSubmit is needed
state is also decalred inside the auth function as [formData, setFormData] = useState() &&
also initial state is decalred inside useState before the auth function with inital values for all states (all inputs for components -> auth)
inside actions folder ->auth.js
--

server--
index.js: app.use, import userRoutes
create file under routes called users.js, 
then under controllers create a user file, 
then under models create user.
//loggedin user then can be allow to do all kinds of actions; using middleware.
create middleware folder with auth file
make sure you are using axios instance within API index.js (baseURL) 
// to use more complicated features of axios ^^. 
//the api is getting different calls not just to one type of route (the beginning route is stated on top.)


---maps---
npm install @material-ui/lab @react-google-maps/api google-map-react
