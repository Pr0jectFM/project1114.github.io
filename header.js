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
				<a href="/">
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
					<li class="head"><a class="head" href="/about">
					About</a></li><li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">ROM Hacks</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="/romhacks/sie-1">South Island Expedition</a>
							<a href="/romhacks/shima-1">Isle of Magnetic Artifacts</a>
							<a href="/romhacks/sng-1">Next Genesis</a>
							<a href="/romhacks/vts1-1">VTuber in Sonic 1</a>
							<a href="/romhacks/other-1" class="dropbown-bottom">Others</a>
						</div>
					</li><li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Music</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="/music/standalone-1">Standalone</a>
							<a href="/music/soundtracks-1">Soundtracks</a>
							<a href="/music/mashups-1" class="dropbown-bottom">Mashups</a>
						</div>
					</li><li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Art</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="/art/static-1">Static</a>
							<a href="/art/motion-1" class="dropbown-bottom">Motion</a>
						</div>
					</li><li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Engineering</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="/engineering/synth-1" class="dropbown-bottom">Analog Synthesizer</a>
						</div>
					</li><li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Other</a>
						<div class="dropdown-content dropbown-bottom">
							<a href="/other/8bdmskin-1">Mega Man 8-Bit Deathmatch Skin</a>
							<a href="/other/sheets-1">Spreadsheets</a>
							<a href="/other/videos-1" class="dropbown-bottom">Videos</a>
						</div>
					</li><li class="head">
					<a class="head" href="/blog/blog">Blog</a></li><li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Links</a>
							<div class="dropdown-content dropbown-bottom">
								<a style="display: flex" href="https://bandcamp.com/project1114" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/bandcamp.png">
									</div>
									Bandcamp
								</a>
								<a style="display: flex" href="https://bsky.app/profile/projectfm.space" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/bluesky.svg">
									</div>
									BlueSky
								</a>
								<a style="display: flex" href="https://discord.gg/MaQ88XaRQr" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/discord.svg">
									</div>
									Discord Server
								</a>
								<!--<a style="display: flex" href="https://www.facebook.com/Project1114" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/bluesky.svg">
									</div>
									Facebook
								</a>-->
								<a style="display: flex" href="https://github.com/Pr0jectFM" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/github.svg">
									</div>
									GitHub
								</a>
								<!--<a style="display: flex" href="https://www.patreon.com/projectfm" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/bluesky.svg">
									</div>
									Patreon
								</a>-->
								<a style="display: flex" href="https://www.reddit.com/user/Project1114" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/reddit.svg">
									</div>
									Reddit
								</a>
								<a style="display: flex" href="https://soundcloud.com/felix-morrissey" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/soundcloud.svg">
									</div>
									Soundcloud
								</a>
								<a style="display: flex" href="https://twitter.com/Pr0jectFM" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/twitter.svg">
									</div>
									Twitter
								</a>
								<a style="display: flex" href="https://youtube.com/@Pr0jectFM" target="_blank">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/youtube.png">
									</div>
									YouTube (Primary)
								</a>
								<a style="display: flex" href="https://youtube.com/@FMcache" target="_blank" class="dropbown-bottom">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/youtube.png">
									</div>
									YouTube (Secondary)
								</a>
								<a style="display: flex" href="https://youtube.com/@FMrarities" target="_blank" class="dropbown-bottom">
									<div class="logo">
										<img style="width:100%; margin: 0em" src="/assets/logos/youtube.png">
									</div>
									YouTube (Tertiary)
								</a>
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
	if (document.getElementById("box-input").checked)
		audiobox.setAttribute("style","max-height: 1em");
	else
		audiobox.setAttribute("style","max-height:" + audiobox.scrollHeight + "px");

}
customElements.define('header-component', Header);
positionDropdown();
var audiobox = document.getElementById("text-audio");
setBoxHeight();
$("#box-input").click(function(e){
	setBoxHeight();
})