//export and dynamic loader
class TabMenu {
	constructor(el, itemKinds, fnAfterTabContentChange) {
		this.itemKinds = itemKinds;
		this.elULs = document.querySelectorAll(".lst_event_box");
		this.fnAfterTabContentChange = fnAfterTabContentChange;

		this.htmlULs = {1:[]}; //html cache
		this.htmlULs[1][0] = this.elULs[0].innerHTML;
		this.htmlULs[1][1] = this.elULs[1].innerHTML;
		this.api = {
			total : "http://211.249.62.123/api/products?start="
		}

	}

	run(currentIndex, bMoreBtn=false) {
		this.insertItemList(currentIndex, bMoreBtn);
	}

	makeTemplate({products}, currentIndex) {
		const tpl = document.querySelector("#itemList").innerHTML;
		const htmls = this.getHTMLStr(products, tpl);
		this.insertHTML(htmls, currentIndex);
	}

	getHTMLStr(products, tpl) {
		const htmls = products.map(({description, id, placeName, content}) => {
			//name = name.replace(/.*(\d{2})/, this.itemKinds[currentIndex-1] + "$1");
			return eval('`' + tpl + '`');
		});
		return htmls;
	}

	insertHTML(htmls, currentIndex) {
		const leftList =  htmls[0] + htmls[1];
		const rightList =  htmls[2] + htmls[3];

		if(this.bMoreBtn) {
			this.elULs[1].insertAdjacentHTML('beforeend', rightList);
			this.elULs[0].insertAdjacentHTML('beforeend', leftList);
			//추가했음 more버튼 none
			document.querySelector(".more .btn").style.display = "none";
		} else {
			this.elULs[0].innerHTML = leftList;
			this.elULs[1].innerHTML = rightList;
		}

		this.htmlULs[currentIndex] = [];
		this.htmlULs[currentIndex].push(this.elULs[0].innerHTML);
		this.htmlULs[currentIndex].push(this.elULs[1].innerHTML);

		if(typeof this.fnAfterTabContentChange === "function" ) this.fnAfterTabContentChange();
	}

	insertItemList(currentIndex, bMoreBtn) {
		this.bMoreBtn = bMoreBtn;

		if(bMoreBtn) {
			this.getData(currentIndex, this.makeTemplate);
			return;
		}

		if(this.htmlULs[currentIndex] === undefined) { 
			this.getData(currentIndex, this.makeTemplate);
		} else  {
			this.elULs[0].innerHTML = this.htmlULs[currentIndex][0];
			this.elULs[1].innerHTML = this.htmlULs[currentIndex][1];
			if(typeof this.fnAfterTabContentChange === "function" ) this.fnAfterTabContentChange();
		}
	}

	/* 
	 * currentindex 1:전체, 2-6 (전시-연극)
	 */
	getData(currentIndex, fnCallback) {
		const apiStart = (currentIndex - 2) * 10; //As.2:0, 3:10. 4:20. 5:30, 6:40
		//fetch('/resources/mock/main_products.json')
		fetch(this.api.total + (apiStart))
		.then((response) => {
			return response.json()
		}).then((json) => {
			fnCallback.call(this, json, currentIndex);
		}).catch( (ex) => {
			console.log('parsing failed', ex)
		})
	}
}

export default TabMenu;
