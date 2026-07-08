# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## gradle commands

cd android
./gradlew clean


./gradlew assembleDebug


./gradlew assembleDebug

./gradlew assembleDebug --stacktrace

./gradlew assembleDebug --debug

./gradlew app:dependencies --configuration implementation --refresh-dependencies

   ./gradlew :app:externalNativeBuildCleanDebug --stacktrace --debug
   ./gradlew assembleRelease

   ./gradlew :app:assembleDebug -Pandroid.abis=armeabi-v7a

watchman shutdown-server

watchman

watchman watch-del-all

sudo sysctl -w kern.maxfilesperproc=100000

*          soft    nofile     100000
*          hard    nofile     100000

cd ios && pod install --repo-update

cd ios && pod install && cd ..

expo run:ios --device FAD781DF-E49E-4BE5-8F4B-65B880130EBA

npx react-native start --reset-cache
npm run ios

rm -rf node_modules ios/Pods ios/build

npm install
cd ios && pod install && cd ..
npm run ios

npm install expo@^49.0.0 expo-router@^2.0.0 expo-modules-core@~1.5.0 react-native-screens react-native-safe-area-context
rm -rf node_modules ios/Pods ios/build
rm -rf ios/Pods ios/build
npm install
cd ios && pod install --repo-update && cd ..
npm run ios

nvm install 18
nvm use 18


xcode install
androoid studion install

brew install openjdk

brew install cocoapods

pod --version


mkdir ~/.nvm


echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc && \
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc && \
echo '[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.zshrc


adb devices
brew install android-platform-tools

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH

source ~/.zshrc
~/Library/Android/sdk/emulator/emulator -list-avds

adb (Android Debug Bridge)
adb kill-server
adb start-server
adb devices
~/Library/Android/sdk/emulator/emulator -list-avds
Pixel_5_API_33
~/Library/Android/sdk/emulator/emulator -avd Pixel_5_API_33
avd stands for: Android Virtual Device
~/Library/Android/sdk/emulator/emulator -avd Medium_Phone  
    "android": "bash -c '~/Library/Android/sdk/emulator/emulator -avd Medium_Phone & sleep 10 && npx expo start --android'",

    Medium_Phone_API_36.0
    ~/Library/Android/sdk/emulator/emulator -list-avds


    coming soon , for extra functionality

    ~/Library/Android/sdk/emulator/emulator -avd Medium_Phone -no-snapshot-load

ios

sudo xcode-select --switch /Applications/Xcode.app
sudo xcodebuild -runFirstLaunch

xcrun simctl list devices

npx expo start --ios

Sometimes Expo caches the splash screen:
npx expo start -c
app.json
"ios": {
  "bundleIdentifier": "com.vkn.sonytv.remote",
  "supportsTablet": true,
  "infoPlist": {
    "NSCameraUsageDescription": "This app needs access to the camera to scan QR codes.",
    "NSMicrophoneUsageDescription": "This app needs access to the microphone to capture audio.",
    "NSLocationWhenInUseUsageDescription": "We use your location to show relevant content.",
    "NSBluetoothAlwaysUsageDescription": "This app uses Bluetooth to connect to your devices."
  }
},
"updates": {
      "enabled": true,
      "fallbackToCacheTimeout": 0
    },
⚠️ app.json Changes Won’t Auto-Apply After expo prebuild
❗ What happens:
Expo generates native Xcode and Android Studio projects in the /ios and /android folders.

Changes made to app.json will not sync to native code anymore unless you run expo prebuild again, which could overwrite manual native changes.

When app.json is ignored:
After expo prebuild:

iOS config is read from:

/ios/YourApp/Info.plist

/ios/YourApp.xcodeproj/project.pbxproj

Android config is read from:

/android/app/src/main/AndroidManifest.xml

/android/app/build.gradle

expo prebuild --clean

expo build doesn't support OTA (Over-The-Air) updates well anymore. Use EAS Build.

Install EAS CLI:

npm install -g eas-cli

eas build:configure
eas update --branch main --message "Quick fix"
eas build --platform android
eas build --platform ios
EAS Build (Expo Application Services).

npx create-expo-account

https://expo.dev/signup

npx expo login
eas build:configure

https://play.google.com/console/signup

pay indiviual , pay 25$

https://play.google.com/store/apps/details?id=com.google.android.apps.playconsole

https://play.google.com/console/

https://developer.apple.com/programs/

https://developer.apple.com/account

apple developer , apple store

https://account.apple.com/
https://appstoreconnect.apple.com/


rm -rf node_modules
rm -rf android/build
rm -rf android/app/build
rm -rf .expo
rm package-lock.json
rm yarn.lock

npm install

npx expo install --fix

npm install -g @expo/cli@latest

npx expo install expo-dev-client


# Clean everything      
rm -rf node_modules     
rm -rf android/app/.cxx 
rm -rf android/app/build
rm -rf android/.gradle

# Reinstall dependencies
npm install 

# Delete node_modules and package-lock.json
rm -rf node_modules
rm package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall with force flag
npm install --force

# Kotlin version - ADD THIS LINE
android.kotlinVersion=1.9.25

expo install expo-dev-client
npm install react-native-ble-plx
npx create-expo-module myeg-module --local
npx expo prebuild -p ios
npx create-expo-module@latest my-module

cd ..
rm -rf node_modules
rm -rf android/.gradle
npm install
npx pod-install
npm i -g expo-cli
npx expo install expo-modules-core
cd android
./gradlew assembleDebug --stacktrace --info

npx expo install --check
npx expo start -c
npx expo prebuild
npx expo run:android   # or npx expo run:ios

npm install -g eas-cli

eas build:configure

eas.json

{
  "build": {
    "production": {
      "ios": {
        "distribution": "app-store"
      }
    }
  }
}

https://appstoreconnect.apple.com/access/users

"my-modue": "file:module/my-module", package.json

npm install react-native-ssdp react-native-udp react-native-network-info

Google Service Account Keys

Google Service Account Keys can be found and downloaded securely via the Google Cloud Console under the IAM & Admin section on the Service Accounts page.

Steps to Find and Download Service Account Keys
Go to the Google Cloud Console.

Navigate to IAM & Admin → Service Accounts.

Select your project.

Click the email address of the service account for which you want keys.

Open the Keys tab.

Click Add Key → Create new key.

Select JSON as the key type and click Create.

The JSON key file will be downloaded to your system; it cannot be downloaded again after this step.



eas credentials , ios 

eas login --apple
eas logout --apple
eas metadata:pull
eas metadata:push
eas build:configure
npx eas build --profile development --platform ios
npx eas build --profile development --platform ios --clear-cache
npx eas build --profile preview --platform android
npx eas build --profile preview --platform android --clear-cache
npx eas build --profile production --platform android
npx eas submit --platform android


npx eas build --profile production --platform ios
npx eas submit --platform ios

npx eas build --platform android --profile production --auto-submit


npx eas build:configure
npx eas metadata:pull
store.config.json
npm install -g eas-cli

https://sites.google.com/view/sonytvapp/home


https://doc-hosting.flycricket.io/sony-tv-remote-terms-of-use/513a7513-458d-4fda-bf6d-c50bdf033e9b/terms