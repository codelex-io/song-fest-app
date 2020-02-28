# Song Fest App

## Build Android debug *apk*

`npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`

`cd android`

`./gradlew assembleDebug`

Locate *apk* at `android/app/build/outputs/debug` and install it on your device.

## Build & Release iPhone App

Build an application: `bundle exec fastlane build`

Upload an *ipa* to *Test Flight*: `bundle exec fastlane pilot upload --ipa ./fastlane/builds/SongFestApp.ipa`