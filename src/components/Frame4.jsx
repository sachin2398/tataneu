import "../components-css/frame4.css"
import toast, { Toaster } from 'react-hot-toast';
import mobile from "../assets/frame4/mobile.png"
import lighting from "../assets/frame4/Star.png"
import line from "../assets/frame4/line.png"


const Frame4 = () => {
    function ApplyNow(){
        toast.success('Applied successfully!')
    }

  return (
    <div className="frame4">
        <div className="div1">
            <img src={mobile} alt="png" />
        </div>
        <div className="div2">
            <div className="lighting">
                <img src={lighting} alt="png" />
                <p className="pp">Lightning Fast Process</p>
            </div>
            <div className="line">
                <img src={line} alt="" />
            </div>
            <div>
                <p>Customer Share Basic Details</p>
            </div>
            <button onClick={ApplyNow} className="btnnow">Apply Now</button>
            <Toaster/>
        </div>
    </div>
  )
}

export default Frame4