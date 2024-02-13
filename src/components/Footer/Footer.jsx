import "./Footer.css";
import tatalogo from "./tataneu.png";
import facebook from "./social.png"
import insta from "./socialInsta.png"
import youtube from "./youtube.png"
import linkedin from "./linki.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_links">
        <div className="footer_links_div">
          <img src={tatalogo} alt="Logo" />
          <div className="social">
                   <img src={facebook} alt="facebook" />
                   <img src={insta} alt="instagram" />
                   <img src={youtube} alt="youtube" />
                   <img src={linkedin} alt="linkedin" />
                </div>
        </div>

        {/* <div className="footer_links_div">
          <a href="#">
            <p>Individual project</p>
          </a>
          <a href="#">
            <p>Payment</p>
          </a>
          <a href="#">
            <p>Portfolio</p>
          </a>
          <a href="#">
            <p>Dubai</p>
          </a>
          <a href="#">
            <p>Site Map</p>
          </a>
        </div>
        <div className="footer_links_div">
          <a href="#">
            <p>Delivery</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>
          <a href="#">
            <p>About Us</p>
          </a>
          <a href="#">
            <p>Contacts</p>
          </a>
        </div> */}
        
<div className="footerinsidesamediv">
<div className="footer_links_div">
          <a href="#">
            <h4>Help & Support</h4>
          </a>
          <a href="#">
            <p>Terms & Service</p>
          </a>
          <a href="#">
          <p>Privacy Policy</p>
          </a>
          <a href="#">
          <p>FAQ</p>
          </a>
          
                   
                    
        </div>
        <div className="footer_links_div">
          <a href="#">
            <h4>Customer Care</h4>
          </a>
          <a href="#">  <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </a>
          <a href="#">
          <p>987654321</p>
          </a>
          <a href="#">
          <p>Tataneu Email ID</p>
          </a>
          
                   
                    
        </div>
</div>
       

        {/* <hr></hr> */}

        {/* <div className='footer_below'>
          <div className='footer-copyright'>
            <p>Moscow © 2007–2023 "WOOD FANS®" - furniture production. All rights reserved.</p>

          </div>


        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
