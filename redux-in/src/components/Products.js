import React from 'react';
var items = {name:undefined, price:undefined, image:undefined}

function Products(props) {
							 let i=0;
							const list = props.Variable.map( x => <li id={x.parfymsName+x.parfymsPrice}key={i++}>
							Name:{x.parfymsName},  
			                Price:{x.parfymsPrice}kr
							<img className="Img" src={x.parfymsImg} alt={x.parfymsName}/>
							<button onClick={props.handleClickDeleteProduct} id={x.parfymsName+x.parfymsPrice}>Delete</button></li>)
							return (
        
										<div>
                                                <ul>{list}</ul>
                                                <input className="put" onChange={changename}type="text"  placeholder="Name"/>
												<input className="put" onChange={changeprice} type=""  placeholder="Price"/>
												<input className="put" onChange={changeimage} type="text"  placeholder="Url"/>
												<button className="put" onClick={addProduct}>ADD</button>  
                                        </div>
                               );
function changename(e){
					   let x = e.target.value;
							items.name = x;
                  } 
function changeprice(e){
						let x = e.target.value;
							items.price = x;
                  } 
function changeimage(e){
						let x = e.target.value;
							items.image = x;
                  } 
function addProduct(){
                            props.Addproduct(items.name,items.price,items.image);
      
                  };

}
export default Products;

  