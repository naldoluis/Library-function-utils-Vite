import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faArrowDownLong, faMusic, faPlay, faRepeat, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

export default function MusicPlayer() {

    let allMusic = [
      {
        name: "Harley Bird - Home",
        artist: "Jordan Schor",
        img: "music-1",
        src: "music-1"
      },
      {
        name: "Ikson Anywhere Ikson",
        artist: "Audio Library",
        img: "music-2",
        src: "music-2"
      },
      {
        name: "Beauz & Jvna - Crazy",
        artist: "Beauz & Jvna",
        img: "music-3",
        src: "music-3"
      },
      {
        name: "Hardwind - Want Me",
        artist: "Mike Archangelo",
        img: "music-4",
        src: "music-4"
      },
      {
        name: "Jim - Sun Goes Down",
        artist: "Jim Yosef x Roy",
        img: "music-5",
        src: "music-5"
      },
      {
        name: "Lost Sky - Vision NCS",
        artist: "NCS Release",
        img: "music-6",
        src: "music-6"
      }
    ]

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper"),
      musicImg = wrapper.querySelector(".img-area img"),
      musicName = wrapper.querySelector(".song-details .name"),
      musicArtist = wrapper.querySelector(".song-details .artist"),
      playPauseBtn = wrapper.querySelector(".play-pause"),
      prevBtn = wrapper.querySelector("#prev"),
      nextBtn = wrapper.querySelector("#next"),
      mainAudio = wrapper.querySelector("#main-audio"),
      progressArea = wrapper.querySelector(".progress-area"),
      progressBar = progressArea.querySelector(".progress-bar"),
      musicList = wrapper.querySelector(".music-list"),
      moreMusicBtn = wrapper.querySelector("#more-music"),
      closemoreMusic = musicList.querySelector("#close")

    let musicIndex = Math.floor((Math.random() * allMusic.length) + 1)

    window.addEventListener("load", () => {
      loadMusic(musicIndex)
      playingSong()
    })

    function loadMusic(indexNumb) {
      musicName.innerHTML = allMusic[indexNumb - 1].name
      musicArtist.innerHTML = allMusic[indexNumb - 1].artist
      musicImg.src = `./src/assets/images/${allMusic[indexNumb - 1].src}.jpg`
      mainAudio.src = `./src/assets/songs/${allMusic[indexNumb - 1].src}.mp3`
    }

    function playMusic() {
      wrapper.classList.add("paused")
      playPauseBtn.querySelector("i").innerHTML = "pause"
      mainAudio.play()
    }

    function pauseMusic() {
      wrapper.classList.remove("paused")
      playPauseBtn.querySelector("i").innerHTML = "play_arrow"
      mainAudio.pause()
    }

    function prevMusic() {
      musicIndex--
      musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex
      loadMusic(musicIndex)
      playMusic()
      playingSong()
    }

    function nextMusic() {
      musicIndex++
      musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex
      loadMusic(musicIndex)
      playMusic()
      playingSong()
    }

    playPauseBtn.addEventListener("click", () => {
      const isMusicPlay = wrapper.classList.contains("paused")
      isMusicPlay ? pauseMusic() : playMusic()
      playingSong()
    })

    prevBtn?.addEventListener("click", () => {
      prevMusic()
    })

    nextBtn?.addEventListener("click", () => {
      nextMusic()
    })

    mainAudio.addEventListener("timeupdate", e => {
      const currentTime = e.target.currentTime
      const duration = e.target.duration
      let progressWidth = (currentTime / duration) * 100
      progressBar.style.width = `${progressWidth}%`

      let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuartion = wrapper.querySelector(".max-duration")
      mainAudio.addEventListener("loadeddata", () => {

        let mainAdDuration = mainAudio.duration
        let totalMin = Math.floor(mainAdDuration / 60)
        let totalSec = Math.floor(mainAdDuration % 60)
        if (totalSec < 10) {
          totalSec = `0${totalSec}`
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`
      })

      let currentMin = Math.floor(currentTime / 60)
      let currentSec = Math.floor(currentTime % 60)
      if (currentSec < 10) {
        currentSec = `0${currentSec}`
      }
      musicCurrentTime.innerText = `${currentMin}:${currentSec}`
    })

    progressArea.addEventListener("click", e => {
      let progressWidth = progressArea.clientWidth
      let clickedOffsetX = e.offsetX
      let songDuration = mainAudio.duration

      mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration
      playMusic()
      playingSong()
    })

    const repeatBtn = wrapper.querySelector("#repeat-plist")
    repeatBtn.addEventListener("click", () => {
      let getText = repeatBtn.innerText
      switch (getText) {
        case "repeat":
          repeatBtn.innerText = "repeat_one"
          repeatBtn.setAttribute("title", "Song looped")
          break
        case "repeat_one":
          repeatBtn.innerText = "shuffle"
          repeatBtn.setAttribute("title", "Playback shuffled")
          break
        case "shuffle":
          repeatBtn.innerText = "repeat"
          repeatBtn.setAttribute("title", "Playlist looped")
          break
       }
    })

    mainAudio.addEventListener("ended", () => {

      let getText = repeatBtn.innerText
      switch (getText) {
        case "repeat":
          nextMusic()
          break
        case "repeat_one":
          mainAudio.currentTime = 0
          loadMusic(musicIndex)
          playMusic()
          break
        case "shuffle":
          let randIndex = Math.floor((Math.random() * allMusic.length) + 1)
          do {
            randIndex = Math.floor((Math.random() * allMusic.length) + 1)
          } while (musicIndex == randIndex)
          musicIndex = randIndex
          loadMusic(musicIndex)
          playMusic()
          playingSong()
          break
       }
    })

    moreMusicBtn.addEventListener("click", () => {
      musicList.classList.toggle("show")
    })

    closemoreMusic.addEventListener("click", () => {
      moreMusicBtn.click()
    })

    const ulTag = wrapper.querySelector("ul")

    for (let i = 0; i < allMusic.length; i++) {
      let liTag =
        `<li li-index="${i + 1}">
           <div class="row">
             <span>${allMusic[i].name}</span>
               <p>${allMusic[i].artist}</p>
               </div>
             <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
           <audio class="${allMusic[i].src}" src="./src/assets/songs/${allMusic[i].src}.mp3"></audio>
         </li>`
      ulTag?.insertAdjacentHTML("beforeend", liTag)

      let liAudioDuartionTag = ulTag?.querySelector(`#${allMusic[i].src}`)
      let liAudioTag = ulTag?.querySelector(`.${allMusic[i].src}`)
      liAudioTag?.addEventListener("loadeddata", () => {
        let duration = liAudioTag.duration
        let totalMin = Math.floor(duration / 60)
        let totalSec = Math.floor(duration % 60)
        if (totalSec < 10) {
          totalSec = `0${totalSec}`
        }
        liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`
        liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`)
      })
    }

    function playingSong() {
      const allLiTag = ulTag.querySelectorAll("li")

      for (let j = 0; j < allLiTag.length; j++) {
        let audioTag = allLiTag[j].querySelector(".audio-duration")

        if (allLiTag[j].classList.contains("playing")) {
          allLiTag[j].classList.remove("playing")
          let adDuration = audioTag.getAttribute("t-duration")
          audioTag.innerText = adDuration
        }

        if (allLiTag[j].getAttribute("li-index") == musicIndex) {
          allLiTag[j].classList.add("playing")
          audioTag.innerText = "Playing"
        }
        allLiTag[j].setAttribute("onclick", "clicked(this)")
      }
    }

    function clicked(element) {
      let getLiIndex = element.getAttribute("li-index")
      musicIndex = getLiIndex
      loadMusic(musicIndex)
      playMusic()
      playingSong()
    }
  })

  return (
    <>
      <div className="wrapper bg-secondary text-light">
        <div className="top-bar">
         <FontAwesomeIcon icon={faArrowDownLong}/>
          <span>Now Playing</span>
         <FontAwesomeIcon icon={faQuestionCircle}/>
        </div>
         <div className="img-area">
          <img src=""/>
         </div>
        <div className="song-details">
          <b className="name"></b>
          <b className="artist"></b>
        </div>
        <div className="progress-area">
          <div className="progress-bar">
            <audio id="main-audio" src=""></audio>
          </div>
          <div className="song-timer">
            <span className="current-time">0:00</span>
            <span className="max-duration">0:00</span>
          </div>
        </div>
       <div className="controls">
        <FontAwesomeIcon id="repeat-plist" icon={faRepeat}/>
         <b style={{ transform: "rotate(180deg)" }} id="prev">➤➤</b>
          <div className="play-pause">
            <FontAwesomeIcon icon={faPlay}/>
          </div>
          <b id="next">➤➤</b>
         <FontAwesomeIcon id="more-music" icon={faRepeat}/>
        </div>
         <div className="music-list">
          <div className="header">
            <div className="row">
             <FontAwesomeIcon className="list" icon={faMusic}/>
              <span>Music list</span>
            </div>
            <FontAwesomeIcon id="close" icon={faClose}/>
          </div>
        </div>
      </div>
    </>
  )}