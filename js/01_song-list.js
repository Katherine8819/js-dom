var playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" }
];

function showPlayList() {
    let list = document.getElementById('playList'),
        li = ``;

    list.style.textTransform = "capitalize"

    for (let i = 0; i < playList.length; i++) {
        li = `<li>${playList[i].author.toLowerCase()} - '${playList[i].song.toLowerCase()}'</li>`
        list.innerHTML = list.innerHTML + li;
    }
}

showPlayList()

// Создать страницу, которая выводит нумерованный список песен