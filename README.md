# Musicq

## Mission
Create a mediocre client/server system for home usage,
using the wi-fi so that the guests of the host can choose
(curriate) the music and set the party mood.

## Architecture
For the purposes of a prototype

# Backend
* Music service(Popular streaming services providers, and catalogs) aggregator core.
* Duplex streaming of data to and from mobile clients, depending on the information - different API designs for different purposes.
* NodeJS + TS (coding styles heavily influenced by verbose staticly typed languages - JAVA and C# )

# FRONTEND
* SPA Angular client
* Mobile friendly - Ionic or some other "Native" substitution for the time being
* Desktop app - Electron
* Browser enabled option
* Gamification


NOTES
===========================================================
* Using tutorial from [here](http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WTa8GGiGNhE)
    and [here](http://brianflove.com/2016/11/08/typescript-2-express-node/)
    to build the Express server.

* Using tutorial from [here](http://pauldbergeron.com/articles/streaming-youtube-to-mp3-audio-in-nodejs.html)
    to build the youtube-stream.

* Test youtube-stream after switching on the server with VLC player [tutorial](https://www.youtube.com/watch?v=u0bhD9nWZJ0)

* For youtube-dl to work for Windows users:
    1. download [youtube-dl](https://rg3.github.io/youtube-dl/)
    2. [install ffmpeg in prefered folder](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg)
    3. place contents of ffmpeg/bin/ folder where the youtube-dl.exe is.
    4. run `.\youtube-dl.exe --extract-audio --audio-format mp3 https://www.youtube.com/watch?v=${VIDEO_ID}` in prompt

* Must check out Gulp [tutorial](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
    can't get Gulp properly configure * sadpandaface *

* Some Angular know-how is needed. [tutorial](https://www.edureka.co/blog/angular-tutorial/)
    [tutorial2](https://www.concretepage.com/angular-2/angular-2-property-binding-example)

* I thnink that I've selected a [html5 audio player](https://521dimensions.com/open-source/amplitudejs).
    One big plus to this player is the Soundcloud integration with the player.
    [Consuming streams exmaple](https://m.serversideup.net/amplitudejs-for-live-stream-html5-audio-10f12a84df09)

* [Angular module for the audioplayer](https://github.com/gregorifaroux/angular-amplitudejs)

Prerequisites
=============================================================
* Use at least node v.6
* Run `npm install -g @angular/cli@latest` to install angular-cli globally

* In project folder run `npm install` to add node modules
* Navigate to `bin/www/` and run npm install again.

How to start
=============================================================

Server:
* `npm run watch-node` to start nodemon development server
* `gulp watch` to build scripts on changed server files
*NB!* Server runs on port 8080 by default.

App:
* In a different console navigate to the `rootDirectory/bin/www`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Progress and Knowhow
=============================================================
- Added working DI on the server
- Learning how to debug with VSCode.
- Trying to reshape the project like in source [here](https://github.com/microsoft/TypeScript-Node-Starter)

