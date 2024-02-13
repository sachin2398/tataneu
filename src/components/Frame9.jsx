import "../components-css/frame9.css"
import toast, { Toaster } from 'react-hot-toast';
import question from "../assets/frame9/Question Circle.png"
import plus from "../assets/frame9/plus.png"

const Frame9 = () => {
    function ApplyNow(){
        toast.success('Thanks for Contacting us!')
    } 
    
  return (
    <div className="frame9">
        <div className="inner-div">
            <div>
                <label className="faq">
                    <img src={question} alt="png" />
                    <h2>FAQ'S</h2>
                </label>
                <div className="label2">
                    <div className="lorem1">
                        <p>1. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
                        <img src={plus} alt="" />
                    </div>
                    <div className="lorem1">
                        <p>2. Lorem Ispum Dolor Sit Amet.</p>
                        <img src={plus} alt="" />
                    </div>
                    <div className="lorem1">
                        <p>3. Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
                        <img src={plus} alt="" />
                    </div>
                    <div className="lorem1">
                        <p>4. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing.</p>
                        <img src={plus} alt="" />
                    </div>
                    <div className="lorem1">
                        <p>5. Lorem Ipsum.</p>
                        <img src="/public/frame9/plus.png " alt="" />
                    </div>
                    <div className="lorem1">
                        <p>6. Lorem Ipsum Dolor Sit.</p>
                        <img src="/public/frame9/plus.png " alt="" />
                    </div>
                    <div className="lorem1">
                        <p>7. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
                        <img src="/public/frame9/plus.png " alt="" />
                    </div>

                </div>

            </div>

            <div className="bottom">
                <p>Anything not clear?</p>
                <div>
                    <p>You can see our detailed F&Q sessions if you have more quiries. Also we are always a single call away for all your special asks...</p>
                    <button onClick={ApplyNow}>Contact US</button>
                    <Toaster/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Frame9