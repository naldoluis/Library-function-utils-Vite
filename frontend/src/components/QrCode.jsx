import { useEffect } from 'react'

export default function QrCode() {

  useEffect(() => {
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      width: 80,
      height: 80
    })

    function makeCode() {
      let elText = document.getElementById("text")

      if (!elText.value) {
        console.log("Error: Input a text.")
        elText.focus()
        return
      }
      qrcode.makeCode(elText.value)
    }
    makeCode()

    $("#text").
      on("blur", () => {
        makeCode()
      }).
      on("keydown", e => {
        if (e.keyCode == 13) {
          makeCode()
        }
      })
  })

  return (
    <div>
      <input className="bg-dark text-light"
        id="text"
        defaultValue="https://m.media-amazon.com/images/I/61J6t27YllL.jpg"
        style={{ fontSize: 9, marginTop: 12 }}/>
      <div id="qrcode"></div>
    </div>
  )}