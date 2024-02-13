import "../components-css/frame1.css"
import toast, { Toaster } from 'react-hot-toast';
import avail from "../assets/assets/avail.png"
import quick from "../assets/assets/quick.png"
import hand from "../assets/assets/hand.png"
import docu from "../assets/assets/docu.png"
import father from "../assets/assets/father.png"

const Frame1 = () => {

    function ApplyNow(){
        toast.success('Applied successfully!')
    }

  return (
    <div className="frame1">
        <div className="headline">
            Turn Dreams Into Reality With <span>Personal Loans</span>
        </div>
        <div className="avail-zero">
            <div className="Avail">
                <img src={avail} alt="avail.png" />
                <div>
                    <p>Avail Zero</p>
                    <h6>Processing Fee</h6>
                </div>
                
            </div>
            <div className="Quick">
                <img src={quick} alt="png" />
                <div>
                    <p>Quick</p>
                    <h6>Personal Loan</h6>
                </div>
            </div>
        </div>

        <div className="avail-zero1">
            <div className="Lowest avail-zero1-inner">
                <img src={hand} alt="png" />
                <div>
                    <p>Lowest</p>
                    <h6>Intrest Rates</h6>
                </div>
                
            </div>
            <div className="miniamal avail-zero1-inner">
                <img src={docu} alt="png" />
                <div >
                    <p>Miniamal</p>
                    <h6>Documentation</h6>
                </div>
            </div>
        </div>

        <button onClick={ApplyNow} className="btn">Apply Now</button>
        <Toaster />

        

        <div className="father-img">
            <img src={father} alt="" />
        </div>
    </div>
  )
}

export default Frame1