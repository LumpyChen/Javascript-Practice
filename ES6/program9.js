
	 function html(arr,username,comment) {
         return `<b>${username.replace("&","&amp;").replace('<', '$lt;').replace('>', '&gt;').replace('"','&quot;').replace("'",'&apos;')} says</b>: "${comment.replace("&","&amp;").replace('<', '$lt;').replace('>', '&gt;').replace('"','&quot;').replace("'",'&apos;')}"`;

    }

    	console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);