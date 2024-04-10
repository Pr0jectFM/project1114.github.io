class Header extends HTMLElement {
	constructor() {
	  super();
	}

	connectedCallback() {
		this.innerHTML = `
			<header>
			<div
				style="padding-bottom: min(256px,25%); height:0; margin:0em 0.85em;"
			>
				<a href="/index.html">
					<img 
						src="/banner.png"
						alt="Banner"
						style="width:100%; max-width:1024px; border-radius:25px; max-height:256px"
						class="center block"
					>
				</a>
			</div>
			<div class="shade">
			</div>
			<div class="head-scroll">
				<ul class="head">
					<li class="head"><a class="head" href="/about.html">About</a></li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">ROM Hacks</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="/romhacks/sid-1.html">South Island Definitive</a>
							<a href="/romhacks/shima-1.html">Isle of Magnetic Artifacts</a>
							<a href="/romhacks/sng-1.html">Next Genesis</a>
							<a href="/romhacks/vts1-1.html">VTuber in Sonic 1</a>
							<a href="/romhacks/other-1.html" class="dropbown-bottom">Others</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Music</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="/music/originals-1.html">Originals</a>
							<a href="/music/soundtracks-1.html">Soundtracks</a>
							<a href="/music/remixes-1.html" class="dropbown-bottom">Remixes</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Art</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="#3-static-1">Static</a>
							<a href="#3-motion-1" class="dropbown-bottom">Motion</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Engineering</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="#4-synth-1" class="dropbown-bottom">Analog Synthesizer</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Other</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="/other/8bdmskin.html">Mega Man 8-Bit Deathmatch Skin</a>
							<a href="#5-hackdatabase-1">Sonic Hack Database</a>
							<a href="#5-samplesource-1" class="dropbown-bottom">Sample Source Spreadsheet</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Links</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="https://bandcamp.com/project1114">Bandcamp</a>
							<a href="https://bsky.app/profile/projectfm.bsky.social">BlueSky</a>
							<!--<a href="https://www.patreon.com/projectfm">Patreon</a>-->
							<a href="https://www.reddit.com/user/Project1114">Reddit</a>
							<a href="https://soundcloud.com/felix-morrissey">Soundcloud</a>
							<a href="https://twitter.com/Pr0jectFM">Twitter</a>
							<a href="https://youtube.com/@Pr0jectFM?si=hetxh9MKy3JqHtcS" class="dropbown-bottom">YouTube</a>
						</div>
					</li>
				</ul>
			</div>
			</header>
		`;
	}
}

function positionDropdown() {
	var header;
	$(".dropdown").hover(function(e){
		header = $(this).parent().parent()[0];
		if((this.offsetLeft) < (header.offsetLeft + header.scrollLeft)){
			this.children[1].style.right = "auto";
			this.children[1].style.left = String(header.offsetLeft) + "px";
		}
		else if((this.offsetLeft + this.children[1].offsetWidth) < (header.offsetWidth + header.offsetLeft + header.scrollLeft)){
			this.children[1].style.left = String(this.offsetLeft - header.scrollLeft) + "px";
			this.children[1].style.right = "auto";
		}
		else {
			this.children[1].style.right = String(window.innerWidth-(header.offsetWidth+header.offsetLeft)) + "px";
			this.children[1].style.left = "auto";
		}
	})
}

function setBoxHeight(){
	if (document.getElementsByTagName("input")[0].checked)
		audiobox.setAttribute("style","max-height: 1em");
	else
		audiobox.setAttribute("style","max-height:" + audiobox.scrollHeight + "px");

}

customElements.define('header-component', Header);
positionDropdown();
var audiobox = document.getElementById("text-audio");
setBoxHeight();
$("input").click(function(e){
	setBoxHeight();
})