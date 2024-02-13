import "../components-css/frame8.css"
import toast, { Toaster } from 'react-hot-toast';
import iphone from "../assets/frame7/iphone.png"
import twoman from "../assets/frame7/two-man.png"

const Frame8 = () => {
  function ApplyNow(){
    toast.success('Referl sent!')
}

  return (
    <div className="frame8">
        <div className="first">
            <h3>Refer & Earn Now</h3>
            <p>Get a ₹500 Big Basket gift card</p>
            <button onClick={ApplyNow}>REFER AND EARN</button><br />
            <Toaster/>
            <span>Terms and Conditions apply</span>
        </div>
        <div className="second">
            <img className="phone" src={iphone} alt="png" />
            <img className="two-man" src={twoman} alt="png" />
        </div>
    </div>
  )
}

export default Frame8