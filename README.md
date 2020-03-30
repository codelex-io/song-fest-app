# Song Fest App

## Build Android debug _apk_

`npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`

`cd android`

`./gradlew assembleDebug`

Locate _apk_ at `android/app/build/outputs/debug` and install it on your device.

## Secrets on Android

Obtain `secrets.xml` file and place it in the `android/app/src/main/res/values` directory.

## Build & Release iPhone App

Build an application: `bundle exec fastlane build`

Upload an _ipa_ to _Test Flight_: `bundle exec fastlane pilot upload --ipa ./fastlane/builds/SongFestApp.ipa`
