## Get Started

to run the project you should follow the below steps:
 1. **Install dependencies**
 run `yarn` or `npm install` in your terminal to install the dependencies (be sure that you are in the root directory of the project) 

 2. **Define environment variables**
we have only one environment variable for the github access token which we use for authorization to increase the search  rate limit for github API
please follow this [guide](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to generate your access token
after generating the access token, create a new file in your root directory and name it `.env` and inside it add the following code
```
REACT_APP_GITHUB_TOKEN =  'your generated access token'
```
  then replace **your generated access token** with the access token that you have generated from github.
 ##### note:
 please be sure to restart your development server whenever you make any changes to the environment variables

 3.  **Run development server**
to run the development server run the following command in your terminal 
`yarn start` or `npm start`

there are some other available commands:
*  `yarn test` or `npm test` to run tests (we don't have tests yet, but we will add it later)
*  `yarn build` or `npm build` to build the app for the production
*  `yarn eject` or `npm eject` you can read more about this command [here](https://create-react-app.dev/docs/available-scripts/#npm-run-eject)

## Screenshots
![enter image description here](https://s2.gifyu.com/images/screenshot01.gif)

  Requests overview & Cancelling unnecessary requests
 ![enter image description here](https://s2.gifyu.com/images/screenshot02.gif)
 
 Redux Actions
 ![enter image description here](https://s2.gifyu.com/images/screenshot03.gif)

## Built With
- [Conventional Commits](https://www.conventionalcommits.org/) for commit messages conventions
- [BEM](http://getbem.com/) for naming conventions
- [SASS](https://sass-lang.com/) as a css preprocessor
- [Css Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) & [Css Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [React JS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/) & [React Redux](https://react-redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [axios](https://github.com/axios/axios)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)

  
## Main Features
  
- Search Users
- Search Repositories
- Search Issues
- Infinite Scrolling
- Cancelling unnecessary requests

## Changelog
[CHANGELOG](https://github.com/maherElsayed1/github-searcher/blob/main/CHANGELOG.md)