import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PianoOutlinedIcon from '@mui/icons-material/PianoOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import './navbar.css';
import { useState } from 'react';


const Navbar=()=>{

  const [isActive, setActive] = useState("true");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  
 function hendalimgId(id){
  
 }
    return (
      
        <div className="Navbar">
         <div className="Part-1">
          <div className="ListName">
            <p>Damo</p>
          </div>
          <div className="Star-icon">
           <StarBorderOutlinedIcon color="inherit" fontSize="small" />
          </div>
          <div className="Visible">
            <p><GroupOutlinedIcon fontSize="small" /> workspace visible </p>
          </div>
          <div className="Customize-views">
           <button><PianoOutlinedIcon fontSize="small" />Board</button>
          </div>
          <div className='Arrowdown' >
           <KeyboardArrowDownOutlinedIcon fontSize="small"  />
          </div>
         </div>
         <div className="Part-2">
          <div className="power-ups">
           <p><RocketLaunchOutlinedIcon fontSize="small" />Power-ups</p>
          </div>
          <div className="Automation">
            <p><BoltOutlinedIcon fontSize="small" />Automation</p>
          </div>
          <div className="Filter">
            <p><FilterListOutlinedIcon fontSize="small" />Filter</p>
          </div>
          <div className="User-info-button">
           <button>V</button>
          </div>
          <div className="Share">
           <button><PersonAddAltOutlinedIcon fontSize="small" />Share</button>
          </div>
          <div className="manu-button" onClick={ToggleClass} >
          <MoreHorizOutlinedIcon fontSize="small"  />
          </div>
         </div>

         <div className={isActive ? "dropChangeBackground" : "dropChangeBackground2"} >
           <h3>change background</h3>
           <img onClick={()=>hendalimgId(1)} className='img2' id="1" src="https://img.freepik.com/premium-photo/toned-pink-purple-blue-teal-shiny-surface-background-illustration_739548-3018.jpg?w=740" alt="" />
           <img onClick={()=>hendalimgId(2)} className='img2' id="2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rCb6R-s9cMe5Cv0uChUD5saykbxeKnLF6OOJAxbVtZqZyEoDpVrMjNzRVSoWPpe3cnU&usqp=CAU" alt="" />
           <img onClick={()=>hendalimgId(3)} className='img2' id="3" src="https://img.freepik.com/premium-photo/natural-marble-pattern-background_1258-22160.jpg" alt="" />
           <img onClick={()=>hendalimgId(4)} className='img2' id="4" src="https://img.freepik.com/premium-photo/blurry-shiny-red-glitter-background_45024-309.jpg" alt="" />

         </div>

        </div>

        
    )
}

export default Navbar;