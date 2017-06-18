import {CHANGE_TAB, ADDPRODUCT,BASKET,DELETEPRODUCT,DELETEBASKET,HISTORY} from '../actions/actions.js';



function tabReducer(state = 1, action) {
											switch( action.type ) {
												case CHANGE_TAB:
													return action.tab;
												default:
													return state;
											}
                                   }
function productsReducer(state = [], action) {
												switch( action.type ) {
													case ADDPRODUCT:
														return [...state, action];
													case DELETEPRODUCT:
														let Clear =    
														state.filter(function(elemenet) {
														return elemenet.id !== action.id;
													});
														return Clear;
													default:
														return state;
												}
                                           }

function basketReducer(state = [], action) {
												switch(action.type ) {
													case BASKET:
													   return [...state, action];
													case DELETEBASKET:
														let Removed=
															state.filter(function(element){
															 return element.id !== action.id;    
													});
														return Removed;
													default:
														return state;
									}
}

function historyReducer(state = [], action) {
												switch( action.type ) {
													case HISTORY:
														return [...state, action.action];
													default:
														return state;
												}
										}

export {tabReducer,basketReducer, productsReducer, historyReducer};


