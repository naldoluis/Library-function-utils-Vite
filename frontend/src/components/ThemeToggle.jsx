import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDarkMode } from '../services/theme/darkModeActions'

export default function ThemeToggle() {

  const dispatch = useDispatch()
  const mode = useSelector(state => state.darkMode)

  const { isdarkMode } = mode

  const switchDarkMode = () => {
    isdarkMode
      ? dispatch(handleDarkMode(false))
      : dispatch(handleDarkMode(true))
  }

  useEffect(() => {
    document.body.style.background = isdarkMode ? "#292c35" : "#414142"
  }, [isdarkMode])

  return (
    <>
      <div id="darkmode" style={{ background: isdarkMode ? "white" : "yellow", borderRadius: 20 }}>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={switchDarkMode}
          checked={isdarkMode}
        />
        <label htmlFor="checkbox" className="label">
          <div className="ball"></div>
        </label>
      </div>
    </>
  )}