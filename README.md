## Summary
This is an assessment task for the Senior Frontend Developer role at Azerion. 

**Exercuse**
We want to implement an awesome new weather dashboard for our clients. Please help us designing and implementing the frontend. Specifically, we need a tiny dashboard providing information about the expected rainfall in the upcoming days. It is called the “weather service dashboard”.
The weather service dashboard consist of two sliders („pressure“ and „temperature“) and two charts („chance of rain“ and „amount of rainfall“).

![ezgif com-video-to-gif (10)](https://user-images.githubusercontent.com/6104164/79104373-bed92d80-7d6e-11ea-84b2-6e0d19ab07ce.gif)

## Install
```js
git clone [PROJECT_URL]
cd azerion-assessement
npm install
-- or --
yarn install
```

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Deploy
After executing the `yarn build` command the production build can be found in the `/build` folder. Use a HTTP server to host it.

```
yarn global add http-server
cd build
http-server ./
```

