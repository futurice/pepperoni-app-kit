#!/usr/bin/env bash

newAppName=$1

[ -z "${newAppName}" ] && echo 'Missing required parameter newAppName' && exit 1

grep -rI 'PepperoniAppTemplate' --exclude='rename.sh' ./* | tr ':' ' ' | awk '{print $1}' | uniq |xargs -I{} sed -i "s/PepperoniAppTemplate/${newAppName}/g" {}
grep -rI 'pepperoniapptemplate' --exclude='rename.sh' ./* | tr ':' ' ' | awk '{print $1}' | uniq |xargs -I{} sed -i "s/pepperoniapptemplate/`echo $newAppName | tr '[:upper:]' '[:lower:]'`/g" {}

for fileToMove in `find ios -name '*PepperoniAppTemplate*' -depth`; do
  mv $fileToMove `echo $fileToMove | sed "s/\(.*\)PepperoniAppTemplate/\1$newAppName/g"`
done
