# WCS Weather

Air pollution is an actual subject of concern. \
According to the OMS, continuous exposure with an air pollution indice \
(AQI) greater than 2 presents a health hazard.

This application display the AQI of cities having a Wild Code School \
campus and the European capitales. A weather display \
is also present with a 3 days forecast.

## Authentification

To acces the application, an authentification is require. \
Login ou signin with your email adress and a password.

This authentification is made with supabase.

## API utilisés
We use the [OpenWeatherMap](https://openweathermap.org/) API to acces aqi and weather datas.

## language
As the Wild Code School have internationals campus, we choose to made the application in English.

## Development
This project is a ReactJS application. \
The application is deployed with... \
Any evolution is to be made on the dev branch.

After cloning, \
you need to create at the project root a .env.local file \
This file will contain :
- the supabase URL (REACT_APP_SUPABASE_URL=https://psytuxswzezjupoojnnz.supabase.co/)
- the supabase Key(REACT_APP_SUPABASE_ANON_KEY) will need to be asked to the initial developmet team.
- the API key (REACT_APP_AIR_WEATHER_KEY)

To obtain an API key, you need to signin to the OpenWeatherMap API, choose the free subcription et generate the key.

### Install dependencies
`npm install`
### Run project
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Build the project
`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Syntaxes
Components name : PascalCase \
Components folder, files : camelCase \
this application is code in a fonctionnal way : new fonctionalities are wrote
funtion() {}

### ESLINT
the eslint is define on the AIRBNB rules.
### Evolution possibilies
- Creation of a change language toggle (i18n ?)
- Language detection
- Join WCS campus and European capitals on 1 page, but separate on different tabs. The spots on the map changing in function of the selected tab

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

