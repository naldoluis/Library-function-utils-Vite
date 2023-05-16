import { useEffect } from 'react'

export default function BarCode() {

  useEffect(() => {
    const generateBarcode = () => {
      let barcodeValue = document.getElementById("barcodeValue").value
      let barcodeType = document.getElementById("barcodeType").value
      let showText = document.getElementById("showText").value
      JsBarcode("#barcode", barcodeValue, {
        format: barcodeType,
        displayValue: showText,
        lineColor: "#24292e",
        width: 2.5,
        height: 40,
        fontSize: 20
      })
    }
    generateBarcode()
  })

  return (
      <div className="codeContainer bg-dark">
        <div className="pd-15">
         <div className="form-group">
          <input
            id="barcodeValue"
            defaultValue="12034567898"
            maxLength={11}
            className="form-control"
          />
          </div>
          <div className="form-group">
            <select id="barcodeType" className="form-control">
              <option value="code128">Code 128</option>
              <option value="codabar">Codabar</option>
              <option value="code39">Code 39</option>
              <option value="msi">MSI</option>
              <option value="pharmacode">Pharmacode</option>
            </select>
          </div>
          <div className="form-group">
            <select id="showText" className="form-control">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <input
            type="button"
            defaultValue="Generate"
            variant="outline-success"
            onChange={JsBarcode}
            className="btn-success form-control"
          />
            <svg id="barcode"></svg>
        </div>
      </div>
  )}