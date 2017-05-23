
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

This project was developed with Meteor.js
* https://facebook.github.io/react/
* https://www.npmjs.com/package/react-router

#### Tech-Stack overview:
* React 
* React-Router
* Bootstrap (styles)

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
      BatsmenDetail.js          # import client startup through a single index entry point
      Detail.js                 # top component that creates DetailViewUI
      DetailStyles.js           # component style
      DetailViewUI.js           # creates layout with DisplayInning, LineScore, TeamView
      DisplayInning.js          # prints innings in Inning table
      LineScore.js              # prints scores in Inning table
      TeamViewButton.js         # switch between batsmen team details
      TeamView.js               # team scores + batsmen top component
    Game/
      FavFilter.js              # fill the DB with example data on startup
      Game.js                   # import server startup through a single index entry point
      GameItem.js               # single Game in the list
      GameStyles.js             # component style
      GameUI.js                 # Game top component

  containers/
      DetailContainer.js        # detail page container
      GameDateContainer.js      # main page container
      MainContainer.js          # router wrapper for app

  helpers/
    mlbApiHelper.js             # MLB API helper

  routes/
    routes.js                   # set up all routes in the app

  App.js                        # entry point that sets up router and attach it to DOM
  index.html                    # static html template
```
