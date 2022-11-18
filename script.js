const Torrent = function (name) {
    let downloadProgress = 0
    let torrentName = name || "No name"
    let downloadStatus = "Paused"

    return { downloadProgress, torrentName, downloadStatus}
}

function showResultPopup(torrent) {
    let popupHTML = '<div>${torrent.downloadProgress}</div>'
    let popup = document.createElement('div')
    popup.className = 'progressPopup'
}

function renderTorrent(torrent) {
    let div = document.createElement('div')
    div.classList.add('torrent')

    let pauseButton = `
    <button class="icon">
        <svg class="pause-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
        </svg>
    </button>
    `
    let playButton = `
    <button class="icon">
        <svg class="play-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>
    </button>
    `

    div.innerHTML = `
    <div class="torrent-title">${torrent.torrentName}</div>
    <div class="progress-container">
        <progress class="torrent-progress" value="${torrent.downloadProgress}" max="100"></progress>
        <div class="progress-value">${Math.floor(torrent.downloadProgress)}%</div>
    </div>
    <div class="button-group torrent-controls">
        <button class="icon">
        <svg class="download-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
        </svg>
        </button>
        ${(torrent.downloadStatus === "Active" ? pauseButton : playButton)}
        <button class="icon">
            <svg class="remove-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
        </button>
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