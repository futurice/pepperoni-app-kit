#!/bin/bash

# adapted from: https://medium.com/@andr3wjack/versioning-react-native-apps-407469707661

PROJECT_DIR="ios/PepperoniAppTemplate"
INFOPLIST_FILE="Info.plist"
INFOPLIST_DIR="${PROJECT_DIR}/${INFOPLIST_FILE}"

# get package version from package.json
PACKAGE_VERSION=$(cat package.json | grep -m1 \"version\": | cut -d'"' -f4)

# get build number from plist, increment it
BUILD_NUMBER=$(/usr/libexec/PlistBuddy -c "Print CFBundleVersion" "${INFOPLIST_DIR}")
BUILD_NUMBER=$(($BUILD_NUMBER + 1))

# update plist with new values
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${PACKAGE_VERSION#*v}" "${INFOPLIST_DIR}"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $BUILD_NUMBER" "${INFOPLIST_DIR}"

# PlistBuddy re-indents Info.plist with tabs, revert this by replacing tabs with 2 spaces
sed -i '' $'s/\t/  /g' "${INFOPLIST_DIR}"

git add "${INFOPLIST_DIR}"
