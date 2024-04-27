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
        mini: true,
        storageName: 'aplayer-for-arona',
        audio: [{
            name: music.name,
            artist: music.artist,
            url: `/src/music/${music.name}/track.mp3`,
            cover: `/src/music/${music.name}/cover.png`,
        }]
    });
}

addDepend();
addElement();
try {
    setTimeout(config, 1000);
    showSnackbar("aplayer-arona 加載完成!", false, 6000);
} catch (error) {
    console.error(debug(error, "error"));
}

