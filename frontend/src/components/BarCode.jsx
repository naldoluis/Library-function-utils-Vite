import { useEffect } from 'react'

export default function BarCode() {

  useEffect(() => {
    JsBarcode(".barcode").init()
  })

  return (
      <svg
        className="barcode"
        jsbarcode-value="1234567890"
        jsbarcode-textmargin="0"
        jsbarcode-linecolor="#24292e"
        jsbarcode-fontsize="18"
        jsbarcode-fontoptions="500"
        jsbarcode-width="2.5"
        jsbarcode-height="33">
      </svg>
  )}