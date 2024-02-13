import "../components-css/frame7.css"
import starHand from "../assets/frame7/Star.png"
import first from "../assets/frame7/first.png"
import second from "../assets/frame7/second.png"

const Frame7 = () => {
  return (
    <div className="frame7">
        <div className="emi">
            <img src={starHand} alt="png" />
            <p>EMI Calculator</p>
        </div>
        <div className="chart-box">
            <div className="first">
                <img src={first} alt="" />
            </div>
            <div className="second">
                <img src={second} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Frame7