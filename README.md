React Native 🔥 Starter Kit
===

**WORK IN PROGRESS**

* [ ] Always up-to-date React Native scaffolding
* [ ] State management with ImmutableJS + Redux
* [ ] Auth0 authentication
* [ ] Google Tag Manager analytics
* [ ] HockeyApp beta deployment and crash reporting
* [ ] Code Push live updates

#Requirements

- [rnpm](https://github.com/rnpm/rnpm)
- React Native 0.23.1
- NodeJS 5.4.1

#Setup

    $ git clone
    $ cd react-native-kindling/
    $ npm install
    $ cp env.example.js env.js

##Auth0

1. Before you start you need to create a new application in [Auth0](https://manage.auth0.com/#/applications/)
1. Set `AUTH0_CLIENT_ID` and `AUTH0_NAMESPACE` according to your application you created in Auth0

       AUTH0_CLIENT_ID: '<CLIENT_ID>',
       AUTH0_NAMESPACE: '<APP_NAME>.eu.auth0.com'
1. Follow the steps for your platform below. Check the (official instructions)[https://github.com/auth0/react-native-lock] for more information.

##iOS

1. Install Requirements:

  - Ruby (>2.2)
  - [Cocoa pods](https://cocoapods.org/)
  - Xcode (iOS 7+)


1. Install rnpm

        $ npm install rnpm -g

1. Link Auth0 with your iOS project:

        $ rnpm link react-native-lock (installs Pods)

1. Build the app and run the simulator:

        $ react-native run-ios

##Android

More details here: [React Native Android Setup](https://facebook.github.io/react-native/docs/android-setup.html)

1. Install latest JDK
1. Install the Android SDK

          $ brew install android-sdk

1. Set ANDROID_HOME environment variable in .bashrc:

          $ export ANDROID_HOME=/usr/local/opt/android-sdk

1. Start Android SDK Manager

          $ android

1. Add SDK tools via Android sdk manager

  - Android SDK tools
  - Android SDK Platform-tools
  - Android SDK Build-tools (**Important**: Rev. 23.0.1)
  - SDK Platform
  - Intel x86 Atom_64 System Image
  - Intel x86 Atom System Image
  - Android Support Repository
  - Android Support Library
  - Intel x86 Emulator Accelerator (HAXM installer)

1. Configure and install hardware acceleration

          $ open /usr/local/opt/android-sdk/extras/intel/Hardware_Accelerated_Execution_Manager/IntelHAXM_<version>.dmg

1. Open Android Virtual Device manager

          $ android avd

1. Add new virtual device

  - name: reactnative
  - Device: Nexus 5
  - Target: Android 6 - API Level 23
  - CBU: Intel Atom x86
  - check Use Host GPU

1. Build app and run emulator:

        $ react-native run-android

##Windows
WIP
