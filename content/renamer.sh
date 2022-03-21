#!/bin/bash
for filename in *.md; do
newFileName=`sed -n '2p' < $filename | sed -e 's/title://g'  -e "s/\"//g"   -e 's/^"//' -e 's/"$//'   ` 
echo "$newFileName.md"
mv $filename  "$newFileName.md"
done