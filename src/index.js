import _ from './lib/_.js';


const el = document.querySelector(".event_tab_lst");

el.addEventListener("click", evt => {
	console.log("clicked");
}, false);

_.log("msg is..");

