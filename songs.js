const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN",
        text: 'asdfdsfsdfgsdgnsdgmdngmsdn,mdsng,msdngdm,sgn'
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY",
        text: 'treuytiyuoiop   rfdyhufgjh    sfhy'
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD",
        text: 'llddlll llll llll'
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER",
        text: 'dddd dddd dddd'
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER",
        text: 'fff fff  ffff'
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK",
        text: 'ggggg ggggg ggggg'
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU",
        text: 'hhhhhh hhhhhh '
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN",
        text: 'dfdgdgdgd xfsdfxv dfdg'
    }
];

// const songList = document.querySelector('.songs-list');
// const li = document.createElement('li')
// const song = document.createElement('span')
// const button = document.createElement('button')
// const myModal = document.createElement('div')
// const modalContent = document.createElement('div')
// const closeBtn = document.createElement('span')
// const lyrics = document.createElement('p')

// songList.append(li)

// li.append(song, button, myModal)
// button.classList.add('myBtn')
// song.classList.add('song')
// myModal.classList.add('myModal', 'modal')

// myModal.append(modalContent)
// modalContent.classList.add('modal-content')

// modalContent.append(closeBtn, lyrics)
// closeBtn.classList.add('close')
// lyrics.classList.add('lyrics')


// song.innerText = playList[0].song
// button.innerText = 'show song text'
// lyrics.innerText = playList[0].text
for (let i = 0; i < playList.length; i += 1) {
    const songList = document.querySelector('.songs-list');
    const li = document.createElement('li')
    const song = document.createElement('span')
    const button = document.createElement('button')
    const myModal = document.createElement('div')
    const modalContent = document.createElement('div')
    const closeBtn = document.createElement('span')
    const lyrics = document.createElement('p')

    songList.append(li)

    li.append(song, button, myModal)
    button.classList.add('myBtn')
    song.classList.add('song')
    myModal.classList.add('myModal', 'modal')

    myModal.append(modalContent)
    modalContent.classList.add('modal-content')

    modalContent.append(closeBtn, lyrics)
    closeBtn.classList.add('close')
    lyrics.classList.add('lyrics')

    song.innerText = playList[i].song
    closeBtn.innerText = 'x'
    button.innerText = 'show song text'
    lyrics.innerText = playList[i].text

    button.onclick = function () {
        myModal.style.display = "block";
    }
    
    closeBtn.onclick = function () {
        myModal.style.display = "none";
    }
    
    window.onclick = function (event) {
        if (event.target == myModal) {
            myModal.style.display = "none";
        }
    }
}



