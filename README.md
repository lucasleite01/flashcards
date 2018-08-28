This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app) and tested for Android using Genymotion emulator.

## How to run
- Open your terminal and run Genymotion
- Go to the project's folder and run:
 - `yarn install`
 - `yarn start`
When the Packager was loaded, press `a` to start the Android emulator

If you nedd to configure Genymotion see the follow instructions

## Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

## Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.
