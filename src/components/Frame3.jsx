import "../components-css/frame3.css"
import hdfc from "../assets/frame2/hdfc.png"
import icic from "../assets/frame2/icic.png"
import backofbaroda from "../assets/frame2/backofbaroda.png"

const Frame3 = () => {
  return (
    <div className="frame3">
    
        <div>
          <h3>Our Partners</h3>
        </div>
        <div>
          <img src={hdfc} alt="png" />
          <p>HDFC Bank</p>
        </div>
        <div>
          <img src={icic} alt="png" />
          <p>ICIC Bank</p>
        </div>
        <div>
          <img src={icic} alt="png" />
          <p>ICIC Bank</p>
        </div>
        <div>
          <img src={backofbaroda} alt="png" />
          <p>Bank of Baroda</p>
        </div>
      
    </div>
  )
}

export default Frame3