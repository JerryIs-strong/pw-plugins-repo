styleInfo("Welcome to", "aplayer for Arona", "#517e81", "#fff");

function addElement() {
    var PluginWrapper = document.createElement("div");
    PluginWrapper.id = "PlayerAronaWrapper";
    var PlayerWrapper = document.createElement("div");
    PlayerWrapper.id = "aplayer";
    document.getElementById("plugin-wrapper").appendChild(PluginWrapper);
    document.getElementById("PlayerAronaWrapper").appendChild(PlayerWrapper);
}

function addDepend() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js';
    document.body.appendChild(script);

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css';

    const styleLocal = document.createElement('link');
    styleLocal.rel = 'stylesheet';
    styleLocal.href = './src/plugins/style/aplayer-arona.css';
    document.head.appendChild(style);
    document.head.appendChild(styleLocal);
}

function config() {
    const music = JSON.parse(sessionStorage.getItem("current-music"));
    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        storageName: 'aplayer-for-arona',
        audio: [{
            name: music.name,
            artist: music.artist,
            url: `/src/music/${music.name}/track.mp3`,
            cover: `/src/music/${music.name}/cover.png`,
        }]
    });

    const hash = JSON.stringify({
        track: md5(`/src/music/${music.name}/track.mp3`),
        cover: md5(`/src/music/${music.name}/cover.png`)
    })
    console.log(JSON.parse(hash));

    fetch(`/src/music/${music.name}/highligh.txt`)
        .then(res => {
            if (!res.ok) {
                debug("highligh.txt not exist", "info");
                return;
            }
            return res.text();
        })
        .then(data => {
            if (data) {
                showSnackbar(`${data} -「${music.name}」`, true, 8000, "#867fc1", "fa-solid", "fa-heart");
            }
        })
        .catch(error => {
            console.error('Error occurred while fetching the file:', error);
        });

    ap.on('loadeddata', function () {
        showSnackbar("aplayer-arona 加載完成!", false, 2000);
    });

    ap.on('error', function () {
        showSnackbar("aplayer-arona 發生錯誤!", false, 2000, "#d55757", "fa-solid", "fa-bomb");
    });
}

addDepend();
addElement();
setTimeout(config, 1000);