// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
  	 apiKey: "AIzaSyD5VwvjQYF2cYcEoBrXjMd2jl00V8P-y_A",
    authDomain: "todolistapp-977f9.firebaseapp.com",
    databaseURL: "https://todolistapp-977f9.firebaseio.com",
    projectId: "todolistapp-977f9",
    storageBucket: "todolistapp-977f9.appspot.com",
    messagingSenderId: "323204933237"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
