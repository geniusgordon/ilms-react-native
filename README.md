# iLMS React Native App

![icon](screenshots/icon.png)

## What Is It?

This is a mobile version of [NTHU iLMS](http://lms.nthu.edu.tw), an online course system for NTHU.
It's an UNOFFICIAL app, all data are parsed from the HTML tags.

[![App Store Button](http://imgur.com/y8PTxr9.png "App Store Button")](https://itunes.apple.com/us/app/id1058257079)
[![Play Store Button](http://imgur.com/utWa1co.png "Play Store Button")](https://play.google.com/store/apps/details?id=com.geniusgordon.ilms)

## Features

* Latest news
* Timetable
* Announcements
* Materials
* Assignments
* Forum
* Send email to professor/TA
* Grading

## Technologies

* [React](https://facebook.github.io/react/docs/getting-started.html)
* [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
* [Redux](http://redux.js.org/)
* [Redux Saga](http://yelouafi.github.io/redux-saga/)

## Development Setup

```shell
git clone https://github.com/geniusgordon/ilms-react-native.git
cd ilms-react-native
npm install
```

## Run in Emulator

```shell
# install the React Native command line interface
npm install -g react-native-cli

# install app into your emulator
react-native run-android
react-native run-ios
```
## Contributing

### I found a bug!

Great, but before you [report it to us](https://github.com/geniusgordon/ilms-react-native/issues/new), make sure to [check whether this has already been reported](https://github.com/geniusgordon/ilms-react-native/issues).

If not, [open a new issue](https://github.com/geniusgordon/ilms-react-native/issues/new) that contains:

1. Steps to reproduce the bug
2. Some screenshots
3. Error message if shown

### I have some important changes!

1. Fork this repo to your own git
2. Make your changes
3. Submit a pull request with full remarks documenting your changes
4. Pull request MAY then be accepted by project creators
