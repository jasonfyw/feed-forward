# feed-forward


> Giving low-income communities accessibility to fresh, nutritious, and affordable food.

[Video Demo](https://youtube.com/shorts/o9Ra8mdLgG0)

Feed Forward is a marketplace app providing low-income individuals with dignified access to low-cost food.

We connect low-income individuals to "edible but soon-to-be waste" food from local businesses.

---

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Usage

In the project directory, install dependencies for the frontend and backend:
```
$ npm i; cd api; npm i; cd ..
```
And add the following Firebase API keys:
- `api/serviceAccountKey.json`: Firebase private keys
- `.env`: Firebase API credentials in the following format:

```.env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=G-
```

In the project directory, after installing dependencies, you can run:
```
$ npm start
```
This runs the frontend app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.


To start the Node API, navigate into the `api` directory and start the dev server
```
$ cd api
$ npm run dev
```

