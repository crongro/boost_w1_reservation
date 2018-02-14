//export and dynamic loader
class TabMenu {
	constructor(el, itemKinds, fnAfterTabContentChange) {
		this.itemKinds = itemKinds;
		this.elULs = document.querySelectorAll(".lst_event_box");
		this.fnAfterTabContentChange = fnAfterTabContentChange;

		this.htmlULs = {0: {liCount:0, data:[]}}; //html cache
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
			return eval('`' + tpl + '`');
		});
		return htmls;
	}

	insertHTML(htmls, currentIndex) {
		var leftList = htmls.filter((v,i) => (i%2 ===0) && i <3).reduce( (p,n) => p + n, "");
		var rightList= htmls.filter((v,i) => (i%2 !==0) && i <4).reduce( (p,n) => p + n, "");

		if(this.bMoreBtn) {
			this.elULs[0].insertAdjacentHTML('beforeend', leftList);
			this.elULs[1].insertAdjacentHTML('beforeend', rightList);
		} else {
			this.elULs[0].innerHTML = leftList;
			this.elULs[1].innerHTML = rightList;
		}

		const currentLICount = Array.from(this.elULs).reduce((p,n) => p + n.children.length, 0);

		this.htmlULs[currentIndex] = {data:[], liCount:{}};

		this.htmlULs[currentIndex].liCount = currentLICount;
		this.htmlULs[currentIndex].data.push(this.elULs[0].innerHTML);
		this.htmlULs[currentIndex].data.push(this.elULs[1].innerHTML);

		if(htmls.length < 5) document.querySelector(".more .btn").style.display = "none";
		else document.querySelector(".more .btn").style.display = "block";

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
			this.elULs[0].innerHTML = this.htmlULs[currentIndex].data[0];
			this.elULs[1].innerHTML = this.htmlULs[currentIndex].data[1];
			if(typeof this.fnAfterTabContentChange === "function" ) this.fnAfterTabContentChange();
		}
	}

	/* 
	 * currentindex 1:전체, 2-6 (전시-연극)
	 */
	getData(currentIndex, fnCallback) {

		let startNumber = 0;

		if(this.htmlULs[currentIndex] !== undefined) {
			startNumber = this.htmlULs[currentIndex].liCount;
		}

		//TODO 전체리스트 
		if(currentIndex ===0) {

		}

		let api = `http://211.249.62.123/api/products?categoryId=${currentIndex}&start=${startNumber}`; 
 
		fetch(api)
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
