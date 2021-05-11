# Shopping List  
Simple Shopping App with react-native(db using cosmosDB)  
## Run Project  
> npm install  
npm install -g nodemon(if nodemon does not installed on ur machine yet)  
cd server  
npm install  
### Start Express Server  
> cd server  
nodemon app  
### Run React Native App  
> npx react-native run-android  

## Generate the debug-app.apk and Connect to localhost server  
### Dependencies  
> npm install ngrok -g  
### Run ngrok server  
> ngrok http 3000  

![alt text](https://i.ibb.co/J27JkCK/Screenshot-107.png)  
### Use ngrok server in react native project  
replace the redbox with the ngrok url (e.g https://83f920623ef3.ngrok.io)  
![alt text](https://i.ibb.co/Yd8LdKH/Screenshot-108.png)  
### Run Express Server
> cd server  
nodemon app 
  
### Build APK file
step 1:  Go to the root of the project in the terminal and run the below command:  
  
> react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res  
  
step 2:  
  
> cd android  
  
step 3:  run this command:  
  
> ./gradlew assembleDebug  
  
apk file generated in ShoppingList/android/app/build/outputs/apk/debug/app-debug.apk
