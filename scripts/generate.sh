fileName="${title// /_}"
cp template/template.md content/$fileName.md
formattedTags="${tags//,/'","'}"
excerpt=""

sed -i "s/{title}/$title/"  content/$fileName.md
sed -i "s/{category}/$category/"  content/$fileName.md
sed -i "s/{date}/$(date +'%Y-%m-%d')/" content/$fileName.md
sed -i "s/{tag}/$formattedTags/"  content/$fileName.md
sed -i "s~{youtube}~$youtube~g" content/$fileName.md
sed -i "s~{github}~$github~g" content/$fileName.md
sed -i "s~{linkedin}~$linkedin~g" content/$fileName.md
sed -i "s~{twitter}~$twitter~g" content/$fileName.md
sed -i "s~{site}~$site~g" content/$fileName.md
sed -i "s~{cover}~$cover~g" content/$fileName.md
sed -i "s~{excerpt}~$excerpt~g" content/$fileName.md
printf "\n\n\n"  >>    content/$fileName.md
echo $description >>    content/$fileName.md