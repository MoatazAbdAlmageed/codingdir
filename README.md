<div align="center">
    <img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>
</div>

# Coding Directory


## Scripts
### rename
you can use this script to bulk rename files
`yarn rename content/ " " "-"`


### Extract channel content
in browser console run 
```
copy  ; document.querySelector('#copy') && document.querySelector('#copy').remove();copy( [...document.querySelectorAll('#video-title')].sort((a, b) => a.innerHTML > b.innerHTML ? 1 : -1).map((item)=>{return `<p><a href='${item.href}'>${item.innerHTML}</a></p>` }))
```
then add it in html input in https://youtubechannels.gatsbyjs.io/submit
