export default function ThemeToggle() {

  let darkMode = localStorage.getItem('darkMode')

  const darkModeToggle = document.querySelector('#dark-mode-toggle')

  const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkMode', null)
  }

  if (darkMode === 'enabled') {
    enableDarkMode()
  }

  darkModeToggle?.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
   if (darkMode !== 'enabled') {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
 })

 return (
    <>
      <button id="dark-mode-toggle" className="dark-mode-toggle">
        <svg width="100%">
          <path fill="#ffffff"
          d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"/>
        </svg>
      </button>
      <div style={{ fontSize: 20 }} className="click-here text-light">
        ThemeToggle
      </div>
    </>
  )}