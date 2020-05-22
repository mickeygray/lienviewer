import React from "react";
import nftl from "./images/nftl.png";
import arrow from "./images/arrow.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
 return (
  <div>
   <Navbar />
   <div className='grid-lien container'>
    <div>
     <br />
     <br />
     <br />
     <h5>
      This is a Notice of Federal Tax Lien. If you have debt to the IRS, you may
      recieved one of these by mail. If you are unsure about the status of your
      lien call us today.
     </h5>
     <img src={arrow} />
     <h5 className='lead text-danger text-center'>1-213-513-5543</h5>
    </div>
    <div>
     <img src={nftl} style={{ width: "566px", height: "750px" }} />
    </div>
   </div>
   <Footer />
  </div>
 );
};

export default App;
