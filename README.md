# ImmuTrack-Frontend
Both the web and mobile are using React and Node. Make sure you have node.js installed. For questions concerning the frontend please contact; 

David Murga (React-native) `davidrmurga@gmail.com`

Cameron Macdonald (Styling and Material-ui) `macdoc26@mcmaster.ca`

## To run
1. Clone the repository either using GitHub or downloading the repository
2. Open the directory at the level you wish to run (web folder for web, likewise for mobile)
3. ```npm install```
4. ```npm start```

## File Structure
### Mobile
`App.js` App file for mobile
#### Containers
`LoginPage.js` mobile login file

### Web
`App.js` File that includes the main features of the app
#### src
##### components
`Auth` Component files for authentication including the login page and the security disclosure

`Immunization` Component files or all of the patient and provider pages related to immunisation including the home page and the record page

`Shared` Includes the header components

#### containers
`Auth` Authentication container including; Forgot password, login and signup

`Immunization` Container pages for the healthcare and patient pages