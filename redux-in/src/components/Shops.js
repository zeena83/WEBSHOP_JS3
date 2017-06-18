import React from 'react';

function Shops(props){
                        let i=0;
						
	                    const list = props.Variable.map( x => <li id={x.parfymsName+x.parfymssPrice} key={i++}> Name:{x.parfymsName} ,    Price:{x.parfymsPrice}kr <img className="Img" src={x.parfymsImg} alt={x.parfymsName} /> 
						
						<button onClick={addToBasketShop} id={x.parfymsName+x.parfymsPrice}> Add </button></li> )

						return ( 
							    <div>
                                     <ul>{list}</ul>
                                </div>                                
							  );

	function addToBasketShop (y){
                                  props.addToBasket(y.target.id);
                              }                                          
}
export default Shops;