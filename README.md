# Videos For Me

[![Build Status](https://dev.azure.com/nbkhope/videos-for-me/_apis/build/status/nbkhope.videos-for-me?branchName=master)](https://dev.azure.com/nbkhope/videos-for-me/_build/latest?definitionId=1&branchName=master)

Quickly search for videos on YouTube

![Screenshot](screenshot_md.png)

## Installation

Create a `.env` file in the root directory and define the YouTube API key:

```
YOUTUBE_API_KEY=VALUE_GOES_HERE
```

Run npm to install all the dependencies

```
npm install
```

## Development

Run the webpack development server using

```
npm start
```

The app will be available at <http://localhost:8080>

## Build

Run the following command to build files to the `build/` directory:

```sh
npm run build
```
