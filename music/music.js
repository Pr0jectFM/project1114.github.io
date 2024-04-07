audioPlayer();
function audioPlayer(){
	var currentSong = 0;
	var nextSong = 0;
	var previousSong = $("#playlist0 li a") [0];
	$("#audioPlayer")[0].src = $("#playlist0 li a") [0];	// set audio player to first song
	$(".playlist li a").click(function(e){			// when something on the list is clicked
		e.preventDefault();				// don't leave page
		$("#audioPlayer")[0].src = this;		// set the audio player to the song
		$("#audioPlayer")[0].play();			// make the audio player start playing
		$(previousSong).parent().removeClass("current-song");	// remove current-song from the entry on the list
		currentSong = $(this).parent().index();		// set current song
		$(this).parent().addClass("current-song");	// give entry on list the current-song class
		previousSong.nextElementSibling.style.display = "none";
		this.nextElementSibling.style.display = "block";
		previousSong = this;				// set current song
	});
	$("#audioPlayer")[0].addEventListener("ended", function(){	// when audio player has finished playing
		currentSong++;						// increment currentSong
		nextSong = document.getElementById($(previousSong).parent().parent()[0].id).getElementsByTagName("li");
		if(currentSong == nextSong.length)		// if currentSong exceeds end of list
			currentSong = 0;				// then reset currentSong
		$(previousSong).parent().removeClass("current-song");		// remove current-song from the entry on the list
		$(nextSong[currentSong]).addClass("current-song");		// give entry on list the current-song class
		$("#audioPlayer")[0].src = nextSong[currentSong].children[0].href;	// set the audio player to the song corresponginf with the currentSong # entry on the list
		$("#audioPlayer")[0].play();
		previousSong.nextElementSibling.style.display = "none";
		nextSong[currentSong].children[0].nextElementSibling.style.display = "block";
		previousSong = nextSong[currentSong].children[0];				// set current song
	})
}