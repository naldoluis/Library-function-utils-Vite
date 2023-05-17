import { useEffect } from 'react'

export default function BarCode() {

  useEffect(() => {
    JsBarcode(".barcode").init()
  })

  return (
      <svg
        className="barcode"
        jsbarcode="barcodeType"
        jsbarcode-value="1234567890"
        jsbarcode-textmargin="0"
        jsbarcode-linecolor="#24292e"
        jsbarcode-width="2.5"
        jsbarcode-height="25">
      </svg>
  )}