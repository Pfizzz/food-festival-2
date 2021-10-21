const APP_PREFIX = 'FoodFest-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./index.html",
    "./events.html",
    "./tickets.html",
    "./schedule.html",
    "./assets/css/style.css",
    "./assets/css/bootstrap.css",
    "./assets/css/tickets.css",
    "./dist/app.bundle.js",
    "./dist/events.bundle.js",
    "./dist/tickets.bundle.js",
    "./dist/schedule.bundle.js"
  ];
 // we need to define which files we'd like to cache to the top of the service-worker.js file.

// service workers run before the window object has even been created.
self.addEventListener('install', function (e) {
        //We use e.waitUntil to tell the browser to wait until the work is complete before terminating the service worker. This ensures that the service worker doesn't move on from the installing phase until it's finished executing all of its code.
        e.waitUntil(
            //We use caches.open to find the specific cache by name, then add every file in the FILES_TO_CACHE array to the cache.
          caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
          })
        )
      })