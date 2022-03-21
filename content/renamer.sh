#!/bin/bash
for filename in *.md; do
newFileName=`sed -n '2p' < $filename  |  tr '\n' '\r' | sed -e 's/*$ *$//g'   -e 's/title://g'  -e "s/\ //g"  -e "s/\-//g"   -e 's//-/g' -e 's//  |  /g'   -e 's/|//g' -e 's/^|//' -e 's/"$//' -e "s/\"//g"   -e 's/^"//' -e 's/"$//' | tr '\r' '\n' `
# echo $filename
name=$newFileName.md
echo $name
mv $filename  $name
done