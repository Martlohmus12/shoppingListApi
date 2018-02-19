# Shoppinglist api

## To run the API navigate to project root folder and:
    npm install
    npm start

## Local database:
Install mongodb `https://docs.mongodb.com/manual/installation/`
In terminal run: `mongod`

## API is also hosted using heroku (https://dashboard.heroku.com/)
`https://shoppinglistapitest.herokuapp.com/api/items`

## Routes
###### POST api/items
    Adds new item to database - has only json value: name
###### GET api/items
    Retrieves all the items in shoppinglist
###### PUT api/items:id/:status
    Changes the item status to true or false
###### DELETE api/:id/
    Delete item by id
###### PUT api/items:id/:status
    Changes the item status to true or false
