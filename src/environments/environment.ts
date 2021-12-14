// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDW1MVBni6ZKE5E4jKNgBKwdstNm8GZNKI",
    authDomain: "dppcliente.firebaseapp.com",
    projectId: "dppcliente",
    storageBucket: "dppcliente.appspot.com",
    messagingSenderId: "956766141565",
    appId: "1:956766141565:web:e69d23d8256cb97a14c514",
    measurementId: "${config.measurementId}"
  }
};


// function firebaseConfig(firebaseConfig: any) {
//   throw new Error("Function not implemented.");
// }
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
