# fileName=test
# title="moataz mohammady2"
# category=category
# tag=tag
# youtube=https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux
# cover=https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux
# site=site
fileName="${title// /_}"
cp content/template.md content/$fileName.md
sed -i "s/{title}/$title/"  content/$fileName.md 
sed -i "s/{category}/$category/"  content/$fileName.md 
sed -i "s/{date}/$(date +'%Y-%m-%d')/" content/$fileName.md
sed -i "s/{tag}/$tag/"  content/$fileName.md 
sed -i "s~{youtube}~$youtube~g" content/$fileName.md 
sed -i "s~{cover}~$cover~g" content/$fileName.md 
