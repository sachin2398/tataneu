    import "../components-css/navbar.css"
    import tatalogo from "../assets/tataneublack.png"
    import { useState } from "react";

    import { BsList, BsX } from "react-icons/bs";
    const Navbar = () => {

        const [menuDisplay, setMenuDisplay] = useState('none');

    return (
        <>
        <div className="top-app-bar">
        <div className="primary">
                <div className="col">
                    <img src={tatalogo} alt="tatanew.png" />
                    <div className="menu">
                        <p>Offers</p>
                        <p>Stories</p>
                        <p>TataPay</p>
                        <p>NeuPass</p>
                    </div>
                </div>

                

                
                    <div className="col2">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fontWeight={400} width={16}  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input type="text" placeholder="Search Tata Neu" />
                        </div>

                        <div className="location">
                        <p>122018</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fontWeight={400} width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>

                        <div className="trailing">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24}
                        height={24} strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                        </div>
                        
                    </div> 

            </div>

            </div>

            <div className="menuu">
                <button onClick={() => setMenuDisplay(prevDisplay => prevDisplay === "block" ? "none" : "block")} className="menu-button" id="menuButton">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                     {/* <BsList
                  className="w-20 h-20"
                /> */}
                </button>
                <div style={{ display: menuDisplay }} className="menu-content" id="menuContent">
                        <a href="#">Offers</a>
                        <a href="#">Stories</a>
                        <a href="#">TataPay</a>
                        <a href="#">NeuPass</a>
                </div>
            </div>
        </>
    )
    }

    export default Navbar