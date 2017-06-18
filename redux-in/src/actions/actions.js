const CHANGE_TAB = 'CHANGE_TAB';
const ADDPRODUCT = 'ADDPRODUCT';
const HISTORY = 'HISTORY';
const DELETEPRODUCT='DELETEPRODUCT';
const BASKET='BASKET';
const DELETEBASKET='DELETEBASKET';

function actionChangeTab(selectedTab) {
										return {
											type: CHANGE_TAB,
											tab: selectedTab
										}
              }

function ActionAddProduct(name, price, image) {
												return {
													type: ADDPRODUCT,
													id:name+price,
													parfymsName: name,
													parfymsPrice:price,
													parfymsImg:image
												}
 }

function ActionDeleteBasket(id, name, price, image) {
														return {
															type: DELETEBASKET,
															id: id,
															parfymsName: name,
															parfymsPrice:price,
															parfymsImg:image
													}
}
function ActionDeleteProduct(id,name, price, image) {
														return {
															type: DELETEPRODUCT,
															id: id,
															parfymsName: name,
															parfymsPrice:price,
															parfymsImg:image
													}
                          }
function ActionBasket(id,name, price,image) {
												return {

															type:BASKET,
															id:id,
															parfymsName: name,
															parfymsPrice:price,
															parfymsImg:image

												}
                    }

function actionHistory(action) {
									return {
												type: HISTORY,
												action,

									}
                            }

export { CHANGE_TAB, actionChangeTab, ADDPRODUCT,ActionAddProduct, DELETEPRODUCT,ActionDeleteProduct,ActionDeleteBasket,DELETEBASKET,  BASKET,ActionBasket, HISTORY, actionHistory,
};



