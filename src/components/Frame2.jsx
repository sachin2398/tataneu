import "../components-css/frame2.css"
import Bigstar from "../assets/frame2/Star.png"
import handsomeguy from "../assets/frame2/handsome-guy.png"
import star from "../assets/frame2/star 1.png"


const Frame2 = () => {
  return (
    <div className="frame2">
        <div className="heading">
            <img src={Bigstar} alt="png" />
            <h2>Personal Loan Highlights</h2>
        </div>
        <div className="frame2-next">
            <div className="handsome-guy">
                <img src={handsomeguy} alt="handsome-guy" />
            </div>
            <div className="intrest-group">
                <div className="intrest-div">
                    <div>
                        <div>
                            <img src={star} alt="png" />
                            <p>Intrest Rate</p>
                        </div>
                            <p>Usually <span>10.49% p.a</span> onwards: some PSUs may offer lower rates</p>
                    </div>
                    <div>
                        <div>
                            <img src={star} alt="png" />
                            <p>Laon Amount</p>
                        </div>
                            <p>Can go up to <span>RS 40 lakh</span>some lenders may offer higher loan amount</p>
                    </div>
                    <div>
                        <div>
                            <img src={star} alt="png" />
                            <p>Processing Fees</p>
                        </div>
                            <p><span>0.5% to 4% </span>of laon amount (may vary across lenders)</p>
                    </div>
                    <div>
                        <div>
                            <img src={star} alt="png" />
                            <p>Tenure</p>
                        </div>
                            <p>Up to<span>5 years</span> (some lenders offer repayment period till 8 year)</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Frame2