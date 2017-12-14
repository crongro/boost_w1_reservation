//export and dynamic loader
class TabMenu {
	constructor(el, itemKinds) {
		this.itemKinds = itemKinds;
		this.htmlULs = {}; //html cache
	}

	run(currentIndex, bMoreBtn=false) {
		this.insertItemList(currentIndex, bMoreBtn);
	}

	makeTemplate(itemData, currentIndex) {
		const tpl = document.querySelector("#itemList").innerHTML;
		const htmls = this.getHTMLStr(itemData, tpl, currentIndex);
		this.insertHTML(htmls, currentIndex);
	}

	getHTMLStr(itemData, tpl, currentIndex) {
		const htmls = itemData.map(({name, saveFileName, placeName, description}) => {
			name = name.replace(/.*(\d{2})/, this.itemKinds[currentIndex-1] + "$1");
			return eval('`' + tpl + '`');
		});
		return htmls;
	}

	insertHTML(htmls, currentIndex) {
		const elULs = document.querySelectorAll(".lst_event_box");
		const leftList =  htmls[currentIndex] + htmls[currentIndex+1];
		const rightList =  htmls[currentIndex + 2] + htmls[currentIndex+3];

		if(this.bMoreBtn) {
			elULs[1].insertAdjacentHTML('beforeend', rightList);
			elULs[0].insertAdjacentHTML('beforeend', leftList);
			//추가했음 more버튼 none
			document.querySelector(".more .btn").style.display = "none";
		} else {
			elULs[0].innerHTML = leftList;
			elULs[1].innerHTML = rightList;
		}

		this.decideBtnVisible();

		this.htmlULs[currentIndex] = [];
		this.htmlULs[currentIndex].push(elULs[0].innerHTML);
		this.htmlULs[currentIndex].push(elULs[1].innerHTML);



	}

	insertItemList(currentIndex, bMoreBtn) {
		this.bMoreBtn = bMoreBtn;
		const elULs = document.querySelectorAll(".lst_event_box");

		if(bMoreBtn) {
			this.getData(currentIndex, this.makeTemplate);
			return;
		}

		if(this.htmlULs[currentIndex] === undefined) { 
			this.getData(currentIndex, this.makeTemplate);
		} else  {
			elULs[0].innerHTML = this.htmlULs[currentIndex][0];
			elULs[1].innerHTML = this.htmlULs[currentIndex][1];
		}
	}

	decideBtnVisible() {
		const elbtn = document.querySelector(".more .btn");
		if(document.querySelectorAll(".lst_event_box li").length > 4) {
			elbtn.style.display = "none";
		} else {
			elbtn.style.display = "block";
		}
	}

	getData(currentIndex, fnCallback) {
		fetch('/resources/mock/main_products.json')
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
