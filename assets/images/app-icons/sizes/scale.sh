#!/bin/bash

if [ -z "$1" ]; then
  echo "Please provide the size as an argument, e.g., ./resize_images.sh 256"
  exit 1
fi

size=$1

image_directory="./1024"

cd "$image_directory"

output_directory="../$size"
mkdir -p "$output_directory"

for image in *.png; do
  magick "$image" -scale $sizex$size "${output_directory}/${image}"
done
