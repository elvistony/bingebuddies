const playerInstance = jwplayer("player").setup({
    controls: true,
    sharing: true,
    displaytitle: true,
    displaydescription: true,

    skin: {
      name: "netflix"
    },
  
    logo: {
      file:
        "/assets/img/bingebuddies.png",
    },
  
    captions: {
      color: "#FFF",
      fontSize: 14,
      backgroundOpacity: 0,
      edgeStyle: "raised"
    },
  
    playlist: [
      {
        title: "Sprite Fright - Open Movie by Blender Studio",
        description: "You're Watching",
        image: "https://i.ytimg.com/vi/_cMxraX_5RE/maxresdefault.jpg",
        sources: [
          {
            file:
              "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.1080p.vp9.webm",
            label: "1080p",
            default: true
          },
          {
            file:
              "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.720p.vp9.webm",
            label: "720p"
          },
          {
            file:
              "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.480p.vp9.webm",
            label: "480p"
          },
          {
            file:
              "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.360p.vp9.webm",
            label: "360p"
          },
          {
            file:
              "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.240p.vp9.webm",
            label: "240p"
          },
          {
            file:
              "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.160p.webm",
            label: "160p"
          }
        ],
        captions: [
          {
            file:
              "https://raw.githubusercontent.com/iPingOi/jwplayer/main/%5BBengali%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
            label: "Bangla",
            kind: "captions"
          }
        ],
        
      }
    ],
  });
  
