import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import './controls.css'

export default function Controls({ handleNext, handlePrev, isPlaying, setIsPlaying }) {

  return (
    <>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <b style={{ transform: "rotate(180deg)" }}>➤➤</b>
        </div>
        <div className={isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"} onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
        </div>
        <div className="action-btn flex" onClick={handleNext}>
          <b>➤➤</b>
        </div>
      </div>
    </>
  )}