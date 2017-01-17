# Setting up the Starter Kit

## Requirements

Firstly, you need a Mac computer for iOS development. If you want to build an Android app only, you can try [experimental Linux and Windows support](https://facebook.github.io/react-native/docs/linux-windows-support.html). These instructions presume an OS X installation.

Before you get started, make sure you have the following dependencies installed on your machine:

- [NodeJS](https://nodejs.org) `>=5` with `yarn` or `npm 3`. **npm 2 is not supported.**
- [Homebrew](http://brew.sh/) (or an alternative way to install OSX packages)
- Latest React Native CLI

          $ npm install -g react-native-cli

## Installation

Install dependencies from NPM

    $ npm install

Create a blank configuration file

    $ cp env.example.js env.js

### Running the iOS application

1. Install Xcode for iOS development (download from Mac App Store)

2. Build the app and run the simulator:

        $ react-native run-ios

**Note: When you want to run the app with Xcode, open the `.xcodeproj` file**

### Running the Android application

More details here: [React Native Android Setup](https://facebook.github.io/react-native/docs/android-setup.html)

1. Install latest JDK
2. Install the Android SDK

          $ brew install android-sdk

3. Set ANDROID_HOME environment variable in .bashrc, .zshrc or similar:

          $ export ANDROID_HOME=/usr/local/opt/android-sdk

4. Start Android SDK Manager

          $ android

5. Add SDK tools via Android sdk manager

  - Android SDK tools
  - Android SDK Platform-tools
  - Android SDK Build-tools (**Important**: Rev. 23.0.1)
  - SDK Platform
  - Intel x86 Atom_64 System Image
  - Intel x86 Atom System Image
  - Android Support Repository
  - Android Support Library
  - Intel x86 Emulator Accelerator (HAXM installer)

6. Configure and install hardware acceleration

          $ open /usr/local/opt/android-sdk/extras/intel/Hardware_Accelerated_Execution_Manager/IntelHAXM_<version>.dmg

7. Open Android Virtual Device manager

          $ android avd

8. Add new virtual device

  - name: reactnative
  - Device: Nexus 5
  - Target: Android 6 - API Level 23
  - CBU: Intel Atom x86
  - check Use Host GPU

9. Build app and run emulator:

        $ react-native run-android

### Auth0

Pepperoni used to be bundled with [Auth0](https://auth0.com/) but it has been removed by popular request.

However instructions on how to set it up are available [here](AUTH0.md).

### Windows UWP

Windows not yet supported.
