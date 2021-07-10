// index.ts 
let nav
let branding

export const init = async (p) => { 
	branding = false

	nav = document.querySelector("div.link")
	p.forEach(async (link) => {
		if (link.type == "link"){
			var tag = document.createElement("a");
			var text = document.createTextNode(link.data.title);

			tag.href = link.data.href
			if (branding) {
				nav.style = `padding-left: 55px;`
			}

			tag.appendChild(text);
			nav.appendChild(tag);
		}
		if (link.type == "brand"){
			var tag = document.createElement("img");
			tag.src = link.data.src
			tag.onclick=`window.location = "/"`
			nav.appendChild(tag);
			branding = true
		}
	})
};