###Note: Deploy app via terminal `npm run deploy`

# Converted to next.js

This guide will help you migrate an existing Create React App (CRA) site to Next.js.

[How to migrate from Create React App to Next.js](https://nextjs.org/docs/app/guides/migrating/from-create-react-app)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm start`

Serves the application... for DEV better to use npm run dev.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

Github actions have been setup in .github/workflows/nextjs.yml. Site should publish when pushed to github.
