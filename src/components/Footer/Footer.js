import React from "react"
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';


function Footer(props)
 {
  return (
    
      <footer className="footer"  >
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About the Project</span> <strong>This is Dictiono + Editor.</strong><br/>This Project is combination of Text Editor and World Wide Text Dictionary With Audio feature and the Next important feature of our project is DarkMode Enable and Disable feature.
          </p>
          
          <div className="icons
          _div">
            <a href="https://www.facebook.com/profile.php?id=100008415699101">
            <FacebookIcon/></a>
            <a href="https://twitter.com/pratik0783"><TwitterIcon/></a>
            <a href="https://www.linkedin.com/in/pratik-patil-99921a193?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bafm9npnyRxqVdaVm2m5wXQ%3D%3D"><LinkedInIcon/></a>
            <a href="https://www.youtube.com/channel/UCL-ApgREG5oNmW7RZdYt1_g"><YouTubeIcon/></a>
            <a href="https://www.instagram.com/tension_not_pratik/"><InstagramIcon/>
</a>
            
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <RoomIcon/>
            <p><span> SKNSITS, Sinhagad campus,410401</span> Lonavala, Pune, Maharashtra, India</p>
          </div>
          <div>
            <EmailIcon/>
            <p><a href="mailto:pratikpatil0783@gmail.com">itspratikcodehelp@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2> Dictiono+Editor<span> <ScreenSearchDesktopTwoToneIcon fontSize="large"/></span></h2>
          <p className="menu ml-6">
            <a href="/"> Home  </a>   |
            <a href="/dictionary"> Dictionary</a>   |
            <a href="/About"> About</a>   |
            
          </p>
          <p className="name"> Dictiono+Editor Team &copy; 2021</p>
        </div>
      </footer>



  );
};

export default Footer;