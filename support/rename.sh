#!/usr/bin/env bash

newAppName=$1
appRoot=`dirname $0`/..

[ -z "${newAppName}" ] && echo 'Missing required parameter newAppName' && exit 1

grep -rI 'PepperoniAppTemplate' --exclude='rename.sh' $appRoot/* | tr ':' ' ' | awk '{print $1}' | uniq | xargs -I{} sed -i.bak "s/PepperoniAppTemplate/${newAppName}/g" {}
grep -rI 'pepperoniapptemplate' --exclude='rename.sh' $appRoot/* | tr ':' ' ' | awk '{print $1}' | uniq | xargs -I{} sed -i.bak "s/pepperoniapptemplate/`echo $newAppName | tr '[:upper:]' '[:lower:]'`/g" {}
find . -name '*.bak' -exec rm {} \;

for fileToMove in `find $appRoot/ios -depth -name '*PepperoniAppTemplate*'`; do
  mv $fileToMove `echo $fileToMove | sed "s/\(.*\)PepperoniAppTemplate/\1$newAppName/g"`
done
