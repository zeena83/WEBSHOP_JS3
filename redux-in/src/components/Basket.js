import React, { Component } from 'react';
import '../App.css';

function Basket(props) {
    
							let i=0;
							const list = props.Variable.map( x => <li id={x.parfymsName+x.parfymsPrice} key={i++}>
							Name:{x.parfymsName},  
							Price: {x.parfymsPrice}kr
							<img className="Img" src={x.parfymsImg} alt={x.parfymsName} />
							<button onClick={props.handleClickDeleteBasket} id={x.parfymsName+x.parfymsPrice}>Delete</button></li>);
	                        
	                        let total= 0 ;
                            for(i=0; i<props.Variable.length; i++){
                            total= total + props.Variable[i].parfymsPrice;
        
    }

							return ( 
									 <div>
								           <ul>{list}</ul>
								           <div className="total"><h3> Total {total}kr</h3></div> 
                                     </div>                                
								  );

                      
}
export default Basket;



     
   
    