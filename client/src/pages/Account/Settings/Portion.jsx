import { Link } from "react-router-dom"
export default function Portion({objects}){
    return(
        <div className="portion-container">
            <div className="portion-intro">
                <div className="portion-title">{objects[0].title}</div>
                <Link style={{fontSize: "15px"}}>Edit</Link>
            </div>
            {objects.map((object)=>{
                return (
                    <div className="portion-main-content">
                        {object.categoriesName 
                            ? 
                            <div style={{fontSize: "15px",fontWeight:600}}className={object.categoriesNameSize? object.categoriesNameSize : null}>
                                {object.categoriesName}
                            </div> 
                            : 
                            null
                        }


                        {object.categoriesDescription 
                
                            ? 
                            <div className="Portion-categoriesDes">
                                {object.categoriesDescription}
                            </div>
                            :    
                            null
                        }

                    </div>
                );
                
            })}
            
        </div>
    );
}