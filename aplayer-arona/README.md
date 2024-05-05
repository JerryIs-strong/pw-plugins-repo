<a href="https://github.com/DIYgod/APlayer">
  <img src="https://img.shields.io/badge/based_on-aplayer-blue"/>
</a>
<br/>
<br/>

💙 由官方開發的功能插件，主要功能:
- 提供H5音樂媒體播放器
- 校驗文件hash [NEW]
- 廣播音樂傳意 [NEW]

💙 環境要求:

| Version | V1.4.5 or above | V1.4.0 - V1.4.4 | V1.3.X | V1.2.X | V1.0.X |
| :---: | :---: | :---: | :---: | :---: | :---: |
| | ✅ | ❌ | ❌ | ❌ | ❌ |

💙 部署:
1. 在```/src/```下創建文件夾```music```
2. 放置方式:
   - 音樂文件放置於```/src/music/${music_name}/```下
   - 封面文件放置於```/src/music/${music_name}/```下
3. 音樂文件命名方式:
   - 音樂文件必須以```track.mp3```命名，並放置於適當的文件夾下
   - 封面文件必須以```cover.png```命名，並放置於適當的文件夾下
4. 廣播音樂傳意:
   - 組件會自動檢查當前音樂的目錄(```/src/music/${music_name}/```)下是否存在```highligh.txt```，如果檢測結果為真，則廣播當前```highligh.txt```文件的内容

💙 自定義:
- 該樣式文件放置於```/src/plugins/style/aplayer-arona.css```

💙 設置項(僅支援V1.4.6.0_[Arona]或以上版本):
| Setting | Default | Value |
| :--- | :---: | :---: |
| hash | ✅ | boolean |
| alert(音樂傳意) | ✅ | boolean |
| alert: duration | 8000(ms) | int |
| alert: color | #867fc1 | string |
| alert: icon | fa-solid fa-heart | string |
| Event alert | ✅ | boolean |
