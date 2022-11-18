const Torrent = function (name) {
    let downloadProgress = 0
    let torrentName = name || "No name"

    return { downloadProgress, torrentName }
}

function showResultPopup(torrent){
    let popupHTML = '<div>${torrent.downloadProgress}</div>'
    let popup = document.createElement('div')
    popup.className = 'progressPopup'
}

function renderTorrent(torrent) {
    let div = document.createElement('div')
    div.classList.add('torrent')
    div.innerHTML = `
    <div class="torrent-title">${torrent.torrentName}</div>
    <div class="progress-container">
        <progress class="torrent-progress" value="${torrent.downloadProgress}" max="100"></progress>
        <div class="progress-value">${Math.floor(torrent.downloadProgress)}%</div>
    </div>
    <div class="button-group torrent-controls">
        <button>Загрузить</button>
        <button>Пауза</button>
        <button class="red-border">Удалить</button>
    </div>`
    div.addEventListener('hover', showResultPopup.bind(torrent))

    return div
}

function renderTorrentList(torrentList) {
    let tempDOM = document.createDocumentFragment()
    torrentList.forEach(torrent => { tempDOM.append(renderTorrent(torrent)) })

    let DOMList = document.querySelector('.torrent-list')
    DOMList.append(tempDOM)
}

function main() {
    console.log('123');
    let torrentList = []
    let tor = new Torrent()
    // tor.downloadProgress = 50
    tor.downloadProgress = Math.random() * 100
    torrentList.push(new Torrent("New name"))
    torrentList.push(new Torrent("Some very long name probably more even than a hut standing"))
    torrentList.push(tor)
    torrentList.push(tor)
    torrentList.push(tor)
    torrentList.push(tor)

    renderTorrentList(torrentList)
}

document.addEventListener('DOMContentLoaded', main)