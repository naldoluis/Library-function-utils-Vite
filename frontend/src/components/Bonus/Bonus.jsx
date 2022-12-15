import { Card } from 'react-bootstrap'

export default function Bonus () {

  VanillaTilt.init(document.querySelectorAll('.card'), {
    max: 29,
    speed: 1000,
    glare: false,
    "max-glare": 1
 })

    return (
      <>
        <Card className="card-store" style={{ border: "2px solid #eee", borderRadius: "9px", width: "800px", margin: "auto" }}>
         <Card.Header>
          <Card.Body className="row" style={{ height: "205px" }}>
           <div>
             <h5 style={{ fontFamily: "Varela Round", fontWeight: "bold", color: "#fff" }}>PROMOTIONAL CARD</h5>

               <div style={{ border: ".1px solid #5e5e5e", height: "205px", width: "420px", background: "#383940", borderRadius: "5px", textAlign: "center" }}>
                <div style={{ fontFamily: "sans-serif", color: "#fff", fontSize: "12.7px" }}>

                  <h4 className='text-warning' style={{ margin: "26px" }}>20% DISCOUNT</h4>
                    <h6>Description : Kafka Stream in Action</h6>
                      <br></br>
                    <h6>William P. Bejeck Jr.</h6>
                  </div>
                 </div>
                </div>

              <img src='https://images.manning.com/360/480/resize/book/9/fd98cd2-f249-4675-989a-96736b84fef1/Bejeck-Kafka-HI.png' style={{ width: "200px", height: "224px", marginLeft: "70px", borderRadius: "7px" }}/>
            </Card.Body>

            <Card.Footer style={{ textAlign: "right", color: "#fff" }}>
             <div>
               <h6 style={{ fontFamily: "Varela Round", color: "#fff", fontSize: "12px", textAlign: "right", paddingTop: "40px" }}>Serial Number: 0989-0798-7498-798-697-80.01</h6>
             </div>
           </Card.Footer>
         </Card.Header>
        </Card>
      </>
    )}