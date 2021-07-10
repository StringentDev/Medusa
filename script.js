//insert dependencies.
import * as medusa from 'https://Medusa.stringentdev.repl.co/components/navigation/topbar.js'; 

import 'https://Medusa.stringentdev.repl.co/components/interaction/ripple.js'; 
import 'https://Medusa.stringentdev.repl.co/components/content/icons.js'; 

// run the scripts
medusa.init(
	[
		{
			type: "brand",
			data: {
				src: "images/logo.png"
			}
		},
		{
			type: "link",
			data: {
				title: "Hello world",
				href: "#"
			}
		},
		{
			type: "link",
			data: {
				title: "Page number 2",
				href: "#"
			}
		}
	]
)