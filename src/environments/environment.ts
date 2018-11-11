// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    // IP_STACK: {
    //   URL: 'http://api.ipstack.com/',
    //   KEY: '9351ebc2e1586d6c43e1600ba395b7ca',
    //   HOSTNAME: '1',
    //   FIELDS: 'main,ip,location,country_code'
    // },
    ipApi: {
      url: 'http://ip-api.com/json'
    }
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
