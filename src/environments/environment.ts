// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'https://api.themoviedb.org/3',
  IMG_URL: 'https://image.tmdb.org/t/p/w500',
  API_KEY:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWNmNjI4N2M0MmZlM2QxNTZkZWQ4M2Y2YTFhNGJlZCIsInN1YiI6IjYxNzFmNmIyOTBmY2EzMDA2MWNlYjI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eAguvyirG-zIvQ4Zakc0f4H5ojOv2duetJ0NLobmMPA',
  API_KEY_v3: 'b9cf6287c42fe3d156ded83f6a1a4bed',
};

export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=b9cf6287c42fe3d156ded83f6a1a4bed&language=en-US&query=`;
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
