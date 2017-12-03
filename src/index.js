import './index.css';
import {get} from './lib/_.js';


if (process.env.NODE_ENV !== 'production') {
	console.log('현재 개발중입니다.');
}



const el = document.querySelector("h1");
el.addEventListener("click", evt => {
	console.log("clicked");
	import(/* webpackChunkName: "lodash" */ 'lodash').then( _ => {
		console.log( _.join(['Another', 'module', 'loaded!'], ' ') );
	});
}, false);

function component() {
  //_.log("msg is..");
  console.log(get());
}

component();
