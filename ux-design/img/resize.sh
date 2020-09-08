#!/bin/bash

# Takes all images in current directory and creates standardized names and sizes
# Heights: 300px, 400px, 800px, original image height

if [[ $(find ./ -name 'ep-*.png' -print) ]]
then
    for f in ./ep-*.png; 
        do 
            original="${f%.png}.png"
            # image300="${f%.jpg}-300p.jpg"
            # image400="${f%.jpg}-400p.jpg"
            # image600="${f%.jpg}-600p.jpg"
            # image800="${f%.jpg}-800p.jpg"

            # cp $original $image300 
            # cp $original $image400 
            # cp $original $image600 
            # cp $original $image800 
            
            echo Resizing $original:
            
            echo $original
            convert $original -resize 600x600\> $original
            identify -format "%wx%h\n" $original

            # echo $image400
            # convert $image400 -resize 600x400\> $image400
            # identify -format "%wx%h\n" $image400
            
            # echo $image600
            # convert $image600 -resize 900x600\> $image600
            # identify -format "%wx%h\n" $image600

            # echo $image800
            # convert $image800 -resize 1200x800\> $image800
            # identify -format "%wx%h\n" $image800
        done
fi
