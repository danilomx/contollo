// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    // firebase settings
    apiKey: "AIzaSyB3NvDy2HJuLr7NXl6E-hsmd-2ymb6nVE8",
    authDomain: "contollo-test.firebaseapp.com",
    databaseURL: "https://contollo-test.firebaseio.com",
    projectId: "contollo-test",
    storageBucket: "contollo-test.appspot.com",
    messagingSenderId: "518479607874",
    appId: "1:518479607874:web:90c49be93c753f253695db",
    measurementId: "G-RH034LY04X"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
