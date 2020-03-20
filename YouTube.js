// Successfully tested on YouTube and Chrome Developers Tools JavaScript Console

function adblock($x) {
	// delete the scripts to avoid problems later when manipulating the DOM
	$x("//script").forEach(e => e.remove());
	// move the video to the document body root
	$x("//video").forEach(e => document.body.appendChild(e));
	// delete all the other elements
	$x("//*[local-name()!='video' and local-name()!='body' and local-name()!='html']").forEach(e => e.remove());
	// delete all the other attributes
	$x("//@*[local-name()!='src']").forEach(a => a.ownerElement.removeAttribute(a.name));
	// set the video properties
	$x("//video").forEach(e => {
		e.controls = true;
		e.loop = true;
		e.play();
	});
}
adblock($x);
window.setTimeout(adblock, 10000, $x); // we must pass the Chrome developer tool's internal variable $x to the timeout because it doesn't exist in that future scope
