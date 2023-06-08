export default function ScientificCalculator() {

    $(document).ready(() => {

      $("#n1").val("")
      $("#m1").val("")
      let op = ""
      $("#muestra").val("")

      $("#n1").on("click", () => {
          $("#n1").val("")
        })

      $("#c").on("click", () => {
          $("#n1").val("")
          op = ""
          $("#muestra").val("")
        })

      $("#tom").on("click", () => {
          let m1 = $("#n1")
          $("#m1").val(m1.val())
        })

      $("#fromM").on("click", () => {
          let num = $("#m1")
          $("#n1").val(num.val())
        })

/*       $(".arras").draggable({
        revert: true
      }) */

/*       $(".sueltaN").droppable({
        drop: (event, ui) => {
          let num = $("#n1")
          $("#m1").val(num.val())
        }
      }) */

/*       $(".sueltaM").droppable({
        drop: (event, ui) => {
          let num = $("#m1")
          $("#n1").val(num.val())
        }
      }) */

      $(".val").on("click",
        function (e) {
          e.preventDefault()
          let a = $(this).attr("href")
          $("#n1").val($("#n1").val() + a)
        })

      $("#cuadrado").on("click", () => {
          let num = $("#n1")
          $("#n1").val(num.val() * num.val())
        })

      $("#inverso").on("click", () => {
          let num = $("#n1")
          $("#n1").val(1 / num.val())
        })

      $("#raiz").on("click", () => {
          let num = $("#n1")
          $("#n1").val(Math.sqrt(num.val()))
        })

      $("#parte_entera").on("click", () => {
          let num = $("#n1")
          if (num.val() >= 0) {
            $("#n1").val(Math.floor(num.val()))
          } else {
            $("#n1").val(-Math.ceil(num.val()))
          }
        })

      $("#n").on("click", () => {
          let num = $("#n1")
          $("#n1").val(Math.pow(2, +num.val()))
        })

      $("#fact").on("click", () => {
          let num = $("#n1")
          let total = 1
          for (let n = 1; n <= num.val(); n++) {
            total = total * n
          }
          $("#n1").val(total)
        })

      $("#suma").on("click", () => {
          num = $("#n1")
          acc = num.val()
          op = op + acc + "+"
          $("#muestra").val(op)
          $("#n1").val("")
        })

      $("#resta").on("click", () => {
          num = $("#n1")
          acc = num.val()
          op = op + acc + "-"
          $("#muestra").val(op)
          $("#n1").val("")
        })

      $("#por").on("click", () => {
          num = $("#n1")
          acc = num.val()
          op = op + acc + "*"
          $("#muestra").val(op)
          $("#n1").val("")
        })

      $("#entre").on("click", () => {
          num = $("#n1")
          acc = num.val()
          op = op + acc + "/"
          $("#muestra").val(op)
          $("#n1").val("")
        })

      $("#parentesis").on("click", () => {
          num = $("#n1")
          acc = num.val()
          if (op.lastIndexOf("(") <= op.lastIndexOf(")")) {
            op = op + acc + "("
          } else {
            op = op + acc + ")"
          }
          $("#muestra").val(op)
          $("#n1").val("")
        })

      $("#sumatorio").on("click", () => {
          let num = $("#n1")
          listado = num.val().split(",")
          for (let n = 0, total = 0; n < listado.length; n++) {
            total = +total + (+listado[n])
          }
          $("#n1").val(total)
        })

      $("#producto").on("click", () => {
          let num = $("#n1")
          listado = num.val().split(",")
          for (let n = 0, total = 1; n < listado.length; n++) {
            total = +total * +listado[n]
          }
          $("#n1").val(total)
        })

      $("#equals").on("click", () => {
          var num = $("#n1")
          acc = num.val()
          op += acc
          $("#muestra").val(op)
          $("#n1").val(eval(op))
          op = ""

          var num = $("#n1")
          if (op === "+") {
            $("#n1").val(+acc + (+num.val()))
          }

          if (op === "-") {
            $("#n1").val(+acc - (+num.val()))
          }

          if (op === "*") {
            $("#n1").val(+acc * (+num.val()))
          }

          if (op === "/") {
            $("#n1").val(+acc / (+num.val()))
          }

          if (op === "e") {
            $("#n1").val(Math.pow(+acc, +num.val()))
          }
        })
     })

  return (
    <>
      <div className="ejercicio wallpaper">
        <div id="calculadora">
          <div className="trabajo">
            <div className="">
              <div className="hueco arras sueltaN">
                <input maxLength={19} className="pantalla memoria" type="text" id="m1" disabled/></div>
              <div className="pant">
                <input maxLength={9} type="text" id="muestra" disabled/></div>
              </div>
            <div className="hueco2 arras sueltaM">
              <input maxLength={19} className="pantalla" type="text" id="n1"/>
            </div>
           <div className="clear"></div>
            <div id="operaciones">
              <button id="cuadrado">x<sup>2</sup></button>
              <button id="inverso">1/x</button>
              <button id="raiz">&radic;<span style={{ textDecoration: "overline" }}> x</span></button>
              <button id="parte_entera">To N</button>
              <button id="n">2<sup>n</sup></button>
              <button id="fact">n!</button>
              <button id="sumatorio">&#8512; csv</button>
              <button id="producto">* csv</button>
              <button href="," className="val">,&nbsp; csv</button>
              <button id="tom" className="largo" >ToM</button>
              <button id="fromM" className="largo">FromM</button>
              <button id="parentesis">(&nbsp;&nbsp;)</button>
              <button id="suma" style={{ background: "#6e952f" }}>
                <b style={{ color: "#fff", fontSize: 15 }}>+</b>
              </button>
              <button id="resta" style={{ background: "#ff5647" }}>
                <b style={{ color: "#fff", fontSize: 15 }}>-</b>
              </button>
              <button id="por" style={{ background: "#fcb707" }}>
                <div style={{ color: "#fff", fontSize: 15 }}>*</div>
              </button>
              <button id="entre" style={{ background: "#b535f0" }}>
                <div style={{ color: "#fff", fontSize: 15 }}>/</div>
              </button>
              <button id="c" className="esp">
                <div style={{ color: "#fff", fontSize: 15 }}>C</div>
              </button>
            </div>
            <div id="teclado">
              <button href="7" className="val">7</button>
              <button href="8" className="val">8</button>
              <button href="9" className="val">9</button>
              <button href="4" className="val">4</button>
              <button href="5" className="val">5</button>
              <button href="6" className="val">6</button>
              <button href="1" className="val">1</button>
              <button href="2" className="val">2</button>
              <button href="3" className="val">3</button>
              <button href="0" className="val">0</button>
              <button href="." className="val">.</button>
              <button id="equals">=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )}