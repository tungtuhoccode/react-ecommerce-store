import "./Footer.scss"
import React from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Footer() {
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 700 ? true : false,
      });
    
    React.useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 700px)");
    mediaQuery.addListener(setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setMQuery);
    }, []);
    
    const [isInMobileQuery, setIsMobileQuery] = React.useState(mQuery && !mQuery.matches)
    
    React.useEffect(()=>{
        setIsMobileQuery(prev => !prev)
    },        
    [mQuery && !mQuery.matches])

    const [isOpenCatagories, setIsOpenCatagories] = React.useState(false)
    const [isOpenLinks, setIsOpenLinks] = React.useState(false)
    const [isOpenAbout, setIsOpenAbout] = React.useState(false)
    const [isOpenContact, setIsOpenContact] = React.useState(false)

    function handleOpenCatagories(){
        setIsOpenCatagories(prevIsOpen => !prevIsOpen)
    }
    function handleOpenLinks(){
        setIsOpenLinks(prevIsOpen => !prevIsOpen)
    }
    function handleOpenAbout(){
        setIsOpenAbout(prevIsOpen => !prevIsOpen)
    }
    function handleOpenContact(){
        setIsOpenContact(prevIsOpen => !prevIsOpen)
    }

    React.useEffect(()=>{
        setIsOpenCatagories(false)
        setIsOpenLinks(false)
        setIsOpenAbout(false)
        setIsOpenContact(false)
    },        
    [isInMobileQuery])
    return (
    <div>
            {
            (!isInMobileQuery) ?  
            <div className="footer">
                <div className="top">
                    <div className="item">
                        <h1>Desktop</h1>
                        <span>Women</span>
                        <span>Men</span>
                        <span>Shoes</span>
                        <span>Accessories</span>
                        <span>New Arrivals</span>
                    </div>
                    <div className="item">
                        <h1>Links</h1>
                        <span>FAQ</span>
                        <span>Pages</span>
                        <span>Stores</span>
                        <span>Compare</span>
                        <span>Cookies</span>
                    </div>
                    <div className="item">
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut labore etdolore.</p>
                    </div>
                    <div className="item">
                        <h1>Contact</h1>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut labore etdolore.</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <span className="logo">3TStore</span>
                        <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                        </span>
                    </div>
                    <div className="right">
                        <img src="/img/payment.png"/>
                    </div>
                </div>
            </div>
            :
            <div className="footer">
                <div className="top">
                    <div className="item" >
                        <div className="footer-menu-nav" onClick={handleOpenCatagories}>
                                <h1 >Catagories</h1>
                                {isOpenCatagories ? <RemoveIcon/>:<AddIcon/>}
                        </div>
                        {isOpenCatagories && 
                        <div className="footer-menu-items">
                            <span>Men</span>
                            <span>Women</span>
                            <span>Shoes</span>
                            <span>Accessories</span>
                            <span>New Arrivals</span>
                        </div>
                        }
                    </div>
                    
                    <div className="item">
                        <div className="footer-menu-nav" onClick={handleOpenLinks}>
                            <h1 >Links</h1>
                            {isOpenLinks ? <RemoveIcon/>:<AddIcon/>}
                        </div>
                        {isOpenLinks &&
                        <div className="footer-menu-items">
                            <span>FAQ</span>
                            <span>Pages</span>
                            <span>Stores</span>
                            <span>Compare</span>
                            <span>Cookies</span>
                        </div>
                        }
                    </div>

                    <div className="item">
                        <div className="footer-menu-nav" onClick={handleOpenAbout}>
                            <h1>About</h1>
                                {isOpenAbout ? <RemoveIcon/>:<AddIcon/>}
                            </div>

                            {
                            isOpenAbout && 
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut labore etdolore.</p>
                            }
                            
                        </div>

                    <div className="item">
                        <div className="footer-menu-nav" onClick={handleOpenContact}>
                            <h1 >Contact</h1>
                            {isOpenContact ? <RemoveIcon/>:<AddIcon/>}
                        </div>
                        
                        {isOpenContact &&<p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut labore etdolore.</p>}
                    </div>
                </div> 

                <div className="bottom">
                    <div className="left">
                        <span className="logo">3TStore</span>
                        <span className="copyright">
                            © Copyright 2023. All Rights Reserved
                        </span>
                    </div>
                    <div className="right">
                        <img src="/img/payment.png"/>
                    </div>
                </div>
            </div>
        }
    </div>
       
    )
  }
  
export default Footer