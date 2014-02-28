var imagefileDDD = 'style001';
        function changesytle(cssfile) {
	            document.getElementById('mystyle').href = cssfile + ".css";
	        }
function changeimage(imagefilename){
	imagefileDDD = imagefilename;
	
	ninja.wallets.paperwallet.build(document.getElementById('paperlimit').value * 1, 
									document.getElementById('paperlimitperpage').value * 1, 
									!document.getElementById('paperart').checked, 
									document.getElementById('paperpassphrase').value);
}

