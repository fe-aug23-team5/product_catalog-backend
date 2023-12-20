#PRODUCT CATALOG DESCRIPTION
##Technologies used
- Node.js
- Express.js
- TypeScript
- PostgreSQL

##Commands
```npm run build```
Installs all packages and loads data to the database static JSONM files located in **public** folder

```npm run deploy```
Installs all packages and loads runs migrations and seeders to load data from JSON files  in **public** folder

```npm run dev```
Runs **nodemon** to autosave the development progress

```npm start```
Launches the server

##API Endpoints

###General Routes
**GET /discount**
* Retrieve discount information.

**GET /new**
* Get information about new items.

**GET /recommended**
* Get recommended items.


###Phone Routes
**GET /phones/**
* Retrieve all phones from the *products* DB table.

**GET /phones/:itemId**
* Get a specific phone by its itemID (descriptive slug) from the *products* DB table.

**GET /phones/details/:itemId**
* Get detailed information about a specific phone by its ID (descriptive slug) from the *phone_details* DB table.


###Tablet Routes
**GET /tablets/**
* Retrieve all tablets from the *products* DB table.

**GET /tablets/:itemId**
* Get a specific tablet by its itemID (descriptive slug) from the *products* DB table.

**GET /tablets/details/:itemId**
* Get detailed information about a specific tablet by its ID (descriptive slug) from *tablet_details* DB table.


###Accessory Routes
**GET /accessories/**
* Retrieve all accessories from the *products* DB table.

**GET /accessories/:itemId**
* Get a specific accessory by its itemID (descriptive slug) from the *products* DB table.

**GET /accessories/details/:itemId**
* Get detailed information about a specific accessory by its ID (descriptive slug) from *tablet_details* DB table.


###ENVIRONMENT VARIABLES
```DB_LINK = 'postgres://...'```
```PORT = '8000'```
```SERVER_URL = 'http://localhost:8000'```
```CLIENT_ORIGIN = 'https://fe-aug23-team5.github.io/product_catalog/'```

###CORS 
Current setting has CORS enabled for any origin. However ther is a commented code sample to enable CORS for one specific origin provided as an enviroment variable **CLIENT_ORIGIN**

