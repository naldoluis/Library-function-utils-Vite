export default function ScientificCalculator() {

    $(document).ready(() => {
      $("#n1").val("")
      $("#m1").val("")
      let op = ""
      $("#show-display").val("")

      $("#n1").on("click", () => {
          $("#n1").val("")
        })

      $("#c").on("click", () => {
          $("#n1").val("")
          op = ""
          $("#show-display").val("")
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

      $("#squad").on("click", () => {
          let num = $("#n1")
          $("#n1").val(num.val() * num.val())
        })

      $("#reverse").on("click", () => {
          let num = $("#n1")
          $("#n1").val(1 / num.val())
        })

      $("#square_root").on("click", () => {
          let num = $("#n1")
          $("#n1").val(Math.sqrt(num.val()))
        })

      $("#whole_part").on("click", () => {
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

      $("#addition").on("click", () => {
          num = $("#n1")
          acc = num.val()
          op = op + acc + "+"
          $("#show-display").val(op)
          $("#n1").val("")
        })

      $("#resta").on("click", () => {
          num = $("#n1")
          acc = num.val()
          op = op + acc + "-"
          $("#show-display").val(op)
          $("#n1").val("")
        })

      $("#multiplication").on("click", () => {
          num = $("#n1")
          acc = num.val()
          op = op + acc + "*"
          $("#show-display").val(op)
          $("#n1").val("")
        })

      $("#division").on("click", () => {
          num = $("#n1")
          acc = num.val()
          op = op + acc + "/"
          $("#show-display").val(op)
          $("#n1").val("")
        })

      $("#parentheses").on("click", () => {
          num = $("#n1")
          acc = num.val()
          if (op.lastIndexOf("(") <= op.lastIndexOf(")")) {
            op = op + acc + "("
          } else {
            op = op + acc + ")"
          }
          $("#show-display").val(op)
          $("#n1").val("")
        })

      $("#summary").on("click", () => {
          let num = $("#n1")
          listed = num.val().split(",")
          for (let n = 0, total = 0; n < listed.length; n++) {
            total = +total + (+listed[n])
          }
          $("#n1").val(total)
        })

      $("#product").on("click", () => {
          let num = $("#n1")
          listed = num.val().split(",")
          for (let n = 0, total = 1; n < listed.length; n++) {
            total = +total * +listed[n]
          }
          $("#n1").val(total)
        })

      $("#equals").on("click", () => {
          var num = $("#n1")
          acc = num.val()
          op += acc
          $("#show-display").val(op)
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
      <div className="wallpaper">
        <div id="calculator">
          <div className="job">
            <div className="">
              <div className="gap arras sueltaN">
                <input maxLength={19} className="screen memory" type="text" id="m1" disabled/>
              </div>
              <div className="pant">
                <input maxLength={9} type="text" id="show-display" disabled/>
              </div>
            </div>
              <div className="gap2 arras sueltaM">
                <input maxLength={19} className="screen" type="text" id="n1"/>
              </div>
             <div className="clear"></div>
            <div id="operator" style={{ color: "#fff"}}>
              <button id="squad">x<sup>2</sup></button>
              <button id="reverse">1/x</button>
              <button id="square_root">&radic;<span style={{ textDecoration: "overline" }}> x</span></button>
              <button id="whole_part">To N</button>
              <button id="n">2<sup>n</sup></button>
              <button id="fact">n!</button>
              <button id="summary">&#8512; csv</button>
              <button id="product">* csv</button>
              <button href="," className="val">,&nbsp; csv</button>
              <button id="tom" className="largo" >ToM</button>
              <button id="fromM" className="largo">FromM</button>
              <button id="parentheses">(&nbsp;&nbsp;)</button>
              <button id="addition" style={{ background: "#6e952f", color: "#fff" }}>+</button>
              <button id="subtraction" style={{ background: "#ff5647", color: "#fff" }}>-</button>
              <button id="multiplication" style={{ background: "#fcb707", color: "#fff" }}>*</button>
              <button id="division" style={{ background: "#b535f0", color: "#fff" }}>/</button>
              <button id="c" className="esp" style={{ color: "#fff" }}>C</button>
            </div>
            <div id="keyboard">
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