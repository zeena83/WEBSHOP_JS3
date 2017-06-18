import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, productsReducer,basketReducer, historyReducer} from './reducers/reducers.js';


let initialState = {
	tab: 1, 
	    products:[{
					id:'Daisy460',
					parfymsName:'Daisy',
					parfymsPrice:460,
					parfymsImg: 'https://eleven.se/files/m/mjdaisyeausofresh0_500x500.jpg'
           },
		          {
					id:'Million760',
					parfymsName:'Million',
					parfymsPrice:760,
					parfymsImg: 'http://www.billigaparfymer.com/wp-content/uploads/bilder/billig-one-million-parfym.jpg'
           },	  
				 {
					id:'Versace560',
					parfymsName:'Versace',
					parfymsPrice:560,
					parfymsImg:'http://topphalsa.se/wp-content/uploads/2016/09/versace.jpg'
           },
				  {
					id:'Chanel560',
					parfymsName:'Chanel',
					parfymsPrice:560,
					parfymsImg:'http://www.billigaparfymer.com/wp-content/uploads/bilder/billig-chanel-parfym.jpg'
           },
				   {
					id:'Hugo360',
					parfymsName:'Hugo',
					parfymsPrice:360,
					parfymsImg:'https://cdn.fashiola.se/L57439748/kvinna-parfym-hugo-boss-hugo-woman-extreme-edp-75ml.jpg'
           },
			  
		
				 {
					id:'Boss640',
					parfymsName:'Boss',
					parfymsPrice:640,
					parfymsImg: 'https://fraganity.com/607/hugo-boss-bottled-eau-de-toilette-vaporisateur-100-ml.jpg'
          }], 
    
      basket:[],
	}


let rootReducer = combineReducers({
	tab: tabReducer,
	products:productsReducer,
    shops:basketReducer,
    basket:basketReducer,
    history:historyReducer
});

const store = createStore(rootReducer, initialState);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
