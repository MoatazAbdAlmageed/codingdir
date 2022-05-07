<div align="center">
    <img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>
</div>

# YouTube Channels


## Scripts
### rename
you can use this script to bulk rename files
`yarn rename content/ " " "-"`


### Extract channel content
in browser console run `const items = [...document.querySelectorAll('#video-title')].map((item)=>{return item.text});items` then add it in description input in https://youtubechannels.gatsbyjs.io/submit