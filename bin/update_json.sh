#!/bin/bash

cd public/voice
JSONFILE=../../pages/components/Voices/voiceList.js

{
  printf "export const voiceList = ["
for folder in $(find . -type d -depth 1); do
echo {
      printf \"title\":
     printf "\""
     echo ${folder}\", | cut -c 3-
     echo \"list\":
     echo [
  for file in $(find ${folder} -type f | sort); do
  echo {
    printf \"title\":
    echo \"$(basename ${file%.*})\",
     printf \"path\":
    echo \"${file:2}\",
    echo },
    done
  echo ]
  echo },
done

echo ]
} > $JSONFILE