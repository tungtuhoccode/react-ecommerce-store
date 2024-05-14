import { Link } from "react-router-dom"
import Portion from "./Portion";
import "./Settings.css"
export default function Settings(){
    return(
        <div className="account-right-side">
            <div className="settings-title-container">
                <div className="settings-title">Settings</div>
                <div className="settings-description">You can manage your account and subscription here</div>
            </div>
            <Portion   objects={[   {   title:"My Details",
                                        categoriesName:"Email",
                                        categoriesDescription: "vuthanhnguyen201004@gmail.com"
                                    },
                                    {
                                        categoriesName:"First name"
                                    },
                                    {
                                        categoriesName:"Last name"
                                    },
                                    {
                                        categoriesName: "Date of birth",
                                        categoriesDescription:"10/20/2004"
                                    },
                                    {
                                        categoriesName: "Phone number"
                                    },
                                    {
                                        categoriesName: "Gender"
                                    },
                                    {
                                        categoriesName: "POSTAL CODE"
                                    },
                                    {
                                        categoriesName: "Martket",
                                        categoriesDescription:"Canada"
                                    },
                                    {
                                        categoriesName: "Staff card"
                                    }
                                       

                                ]}/>

            <Portion   objects={[   
                                    {   title:"Payment settings",
                                        categoriesDescription: "No card is currently saved. You can save your card on the checkout page next time you shop with us"
                                    }
                                ]}/>

            <Portion   objects={[   
                                    {   title:"Address Book",
                                        categoriesName: "You can also add and edit delivery adressed here"
                                    },
                                    {
                                        categoriesName: "No home address saved"
                                    }
                                ]}/>

            <Portion   objects={[   
                                    {   title:"NEWSLETTER SUBSCRIPTION",
                                        categoriesName: "NEWSLETTER SUBSCRIPTION",
                                        categoriesDescription: "Unsubscribe me."
                                    },
                                    {
                                        categoriesName: "DIRECT MAIL MARKETING",
                                        categoriesDescription: "Yes, keep me subscribed."
                                    }
                                ]}/>

            <Portion   objects={[   
                                    {   title:"PRIVACY",
                                    categoriesName: <Link className="linkStyle">Change password</Link>,
                                    },
                                    {
                                        categoriesName: <Link className="linkStyle">My Personal Data</Link>,
                                        categoriesDescription: "Text holder"
                                    }
                                ]}/>
                
            
        </div>
    );
}