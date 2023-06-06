const fs = require("fs");
const { mkchar } = require("./Database/dataschema.js");


/* ---Added Anime Character list---  /

0 --- Atlas MD
1 --- Power
2 --- Makima
3 --- Rias Gremory
4 --- Zero Two
5 --- Chika
6 --- Miku
7 --- Marin Kitagawa

Image Source: https://wall.alphacoders.com/
Image Source: https://wallpapercave.com/

*/



global.charID0 = {
    botName : "Atlas MD",
    botVideo : fs.readFileSync("./Assets/REDZEOX.mp4"),
    botImage1 : "https://i.ibb.co/r2dyh2S/20230213-154752.jpg",
    botImage2 : "https://i.ibb.co/r2dyh2S/20230213-154752.jpg",
    botImage3 : "https://i.ibb.co/r2dyh2S/20230213-154752.jpg",
    botImage4 : "https://i.ibb.co/r2dyh2S/20230213-154752.jpg",
    botImage5 : "https://i.ibb.co/r2dyh2S/20230213-154752.jpg",
    botImage6 : "https://i.ibb.co/r2dyh2S/20230213-154752.jpg",
}

global.charID1 = {
  botName : "Power MD",
  botVideo : fs.readFileSync("./Assets/power.mp4"),
  botImage1 : "https://c4.wallpaperflare.com/wallpaper/960/587/732/power-chainsaw-man-chainsaw-man-manga-hd-wallpaper-preview.jpg",
  botImage2 : "https://c4.wallpaperflare.com/wallpaper/553/511/639/chainsaw-man-power-chainsaw-man-denji-chainsaw-man-hd-wallpaper-preview.jpg",
  botImage3 : "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/uwp/uwp1410435.jpeg",
  botImage4 : "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/uwp/uwp1410368.jpeg",
  botImage5 : "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/uwp/uwp1410385.jpeg",
  botImage6 : "https://wallpapercave.com/wp/wp11733458.jpg",
}

global.charID2 = {
  botName : "Makima MD",
  botVideo : fs.readFileSync("./Assets/makima.mp4"),
  botImage1 : "https://images5.alphacoders.com/126/1264439.jpg",
  botImage2 : "https://images8.alphacoders.com/122/1227171.jpg",
  botImage3 : "https://wallpapercave.com/wp/wp9666940.png",
  botImage4 : "https://images6.alphacoders.com/123/1238644.jpg",
  botImage5 : "https://images2.alphacoders.com/128/1280153.jpg",
  botImage6 : "https://images7.alphacoders.com/129/1292566.png",
}

global.charID3 = {
  botName : "Rias Gremory",
  botVideo : fs.readFileSync("./Assets/Rias.mp4"),
  botImage1 : "https://c4.wallpaperflare.com/wallpaper/280/659/612/highschool-dxd-gremory-rias-wallpaper-preview.jpg",
  botImage2 : "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp1864369.png",
  botImage3 : "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp4993300.jpg",
  botImage4 : "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp4993301.png",
  botImage5 : "https://c4.wallpaperflare.com/wallpaper/178/703/724/anime-high-school-dxd-rias-gremory-hd-wallpaper-preview.jpg",
  botImage6 : "https://i.ibb.co/pXFFbzN/Image-result-for-rias-gremory-wallpaper-4k.jpg",
}

global.charID4 = {
  botName : "Zero Two",
  botVideo : fs.readFileSync("./Assets/zerotwo.mp4"),
  botImage1 : "https://images3.alphacoders.com/949/949253.jpg",
  botImage2 : "https://images7.alphacoders.com/898/898638.jpg",
  botImage3 : "https://images4.alphacoders.com/908/908470.jpg",
  botImage4 : "https://images6.alphacoders.com/981/981839.jpg",
  botImage5 : "https://images4.alphacoders.com/907/907474.jpg",
  botImage6 : "https://images4.alphacoders.com/923/923051.jpg",
}

global.charID5 = {
  botName : "Chika MD",
  botVideo : fs.readFileSync("./Assets/chika.mp4"),
  botImage1 : "https://images4.alphacoders.com/100/1002134.png",
  botImage2 : "https://images4.alphacoders.com/100/1002714.jpg",
  botImage3 : "https://images7.alphacoders.com/107/1071650.jpg",
  botImage4 : "https://images3.alphacoders.com/127/1272368.png",
  botImage5 : "https://images3.alphacoders.com/122/1225194.png",
  botImage6 : "https://wallpapercave.com/wp/wp4624851.jpg",
}

global.charID6 = {
  botName : "Miku Nakano MD",
  botVideo : fs.readFileSync("./Assets/miku.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp10524580.jpg",
  botImage2 : "https://wallpapercave.com/wp/wp4828029.jpg",
  botImage3 : "https://images4.alphacoders.com/102/1026046.jpg",
  botImage4 : "https://wallpapercave.com/uwp/uwp1229563.jpeg",
  botImage5 : "https://images7.alphacoders.com/129/1294874.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp5758284.jpg",
}

global.charID7 = {
  botName : "Marin Kitagawa MD",
  botVideo : fs.readFileSync("./Assets/marin.mp4"),
  botImage1 : "https://images2.alphacoders.com/125/1257915.jpg",
  botImage2 : "https://wallpapercave.com/wp/wp10472356.png",
  botImage3 : "https://images7.alphacoders.com/121/1210002.png",
  botImage4 : "https://images8.alphacoders.com/122/1223407.jpg",
  botImage5 : "https://images7.alphacoders.com/121/1211490.jpg",
  botImage6 : "https://images3.alphacoders.com/122/1223868.png",
}
global.charId8={
botName : "Djalega++",
botVideo : fs.readFileSync("./Assets/marin.mp4"),
botImage1 :"https://wallpapercave.com/uwp/uwp3772906.jpeg",
botImage2 :"https://wallpapercave.com/uwp/uwp3773183.jpeg",
botImage3 : "https://wallpapercave.com/uwp/uwp3773175.png"
    
    
   

}


