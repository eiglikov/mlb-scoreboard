
# mlb-scoreboard

#### Brief Description:
MLB scoreboard that displays the team names and scores for each of the games on a given day.


#### Development Process:
1. Research on gb2.mlb API
2. Choose Framework. I was choosing between (React and Meteor, React and Redux, React and React-Router)
3. Create basic mockups for pages and overall design for integrations
4. Research on project structure
5. Setup project structure
6. Develope features one by one in iterative manner.
7. Code cleanup and minor improvements

This project was developed with React and React-Router
* https://facebook.github.io/react/
* https://www.npmjs.com/package/react-router



#### Tech-Stack overview:
* React 
* React-Router
* Webpack
* Bootstrap



#### How to run application?

* clone this application from github: git clone git@github.com:eiglikov/mlb-scoreboard.git
* open cloned repo
* from command line run "npm i"
* wait for packages to be downloaded and installed
* from command line run "npm start"
* open localhost:8080



#### General Application Structure Overview


```
src/
  components/
    Detail/
      BatsmenDetail.js          # prints Batsmen table
      Detail.js                 # top component that creates DetailViewUI
      DetailStyles.js           # styles
      DetailViewUI.js           # creates layout with InningsTable and TeamView
      InningsTable.js           # prints Inning table
      TeamViewButton.js         # switch between batsmen team details
      TeamView.js               # team scores + batsmen top component
    Game/
      FavFilter.js              # favorite team compoenent
      Game.js                   # top component that creates GameUI, date picker and fav team changer
      GameItem.js               # single Game in the list
      GameStyles.js             # styles
      GameUI.js                 # creates layout with GameItem

  containers/ 
      DetailContainer.js        # detail page container holds all methods and states of Detail
      GameDateContainer.js      # Games page container holds all methods and states of Games
      MainContainer.js          # router wrapper for app

  helpers/
    mlbApiHelper.js             # MLB API helper

  routes/
    routes.js                   # set up all routes in the app

  App.js                        # entry point that sets up router and attach it to DOM
  index.html                    # static html template
```
