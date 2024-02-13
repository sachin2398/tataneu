import "../components-css/frame5.css"
import handHeart from "../assets/frame5/Hand Heart.png"
import man from "../assets/frame5/man.png"
import comma from "../assets/frame5/comma.png"
import line from "../assets/frame5/line.png"

const Frame5 = () => {
  return (
    <div className="frame5">
        <div className="heading">
            <img src={handHeart} alt="png" />
            <p>What Our Customer Says</p>
        </div>

        <div className="flex-box">
            <div className="man-png">
                <img src={man} alt="png" />
            </div>
            <div >
                <div><img src={comma} alt="png" /></div>
                <div className="div2">
                    <h3>SUNIL GUPTA</h3>
                    <p>Chartered Accountant</p>
                    <label> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sed quisquam sunt dolor nemo minima repudiandae ex itaque hic! Tempore repudiandae aperiam id pariatur ea, iste possimus eum culpa architecto eius veniam quasi at veritatis. Inventore, nulla architecto nisi omnis distinctio ipsum nobis provident fugiat minima, explicabo, deleniti aliquid praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatum, repellat voluptates magnam numquam repellendus accusantium modi, libero est assumenda, tempore amet at? Suscipit assumenda odit quam autem sapiente atque saepe culpa perferendis, fuga quidem voluptates impedit earum hic sed, officia tenetur optio omnis facilis iure? Numquam molestias non accusantium.</label>
                    <div>
                        <img src={line} alt="" />
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Frame5