async function logMusic(id) {
	const response = await fetch("/music/music.json");
	text = await response.json();
	var idnum = NaN;
	for (i in text){
		if(text[i].id === id)
			idnum = i;
	}
	var string = "";
	const template = {
		title:"Title: ",
		game:"Game: ",
		creator:"Creator: ",
		year:"Year: ",
		chip:"Chips: "
	};
	for (i in template){
		if (text[idnum][i + "1"])
			string += template[i] + text[idnum][i + "1"] + "<br>";
	}
	if (text[idnum].remix === "1"){
		string += "<br><u>Original</u><br>";
		for (i in template){
			if (text[idnum][i + "2"])
				string += template[i] + text[idnum][i + "2"] + "<br>";
		}
	}
	document.getElementById("text-audio").innerHTML = string;
	setBoxHeight();
}

function audioPlayer(){
	var currentSong = 0;
	var nextSong = 0;
	var previousSong = $("#playlist0 li a") [0];
	$("#audioPlayer")[0].src = $("#playlist0 li a") [0];	// set audio player to first song
	$(".song-link").click(function(e){			// when something on the list is clicked
		e.preventDefault();				// don't leave page
		$("#audioPlayer")[0].src = this;		// set the audio player to the song
		$("#audioPlayer")[0].play();			// make the audio player start playing
		$(previousSong).parent().removeClass("current-song");	// remove current-song from the entry on the list
		currentSong = $(this).parent().index();		// set current song
		$(this).parent().addClass("current-song");	// give entry on list the current-song class
		logMusic(this.id);
		previousSong = this;				// set current song
	});
	$("#audioPlayer")[0].addEventListener("ended", function(){	// when audio player has finished playing
		currentSong++;						// increment currentSong
		nextSong = document.getElementById($(previousSong).parent().parent()[0].id).getElementsByTagName("li");
		if(currentSong == nextSong.length)		// if currentSong exceeds end of list
			currentSong = 0;				// then reset currentSong
		$(previousSong).parent().removeClass("current-song");		// remove current-song from the entry on the list
		$(nextSong[currentSong]).addClass("current-song");		// give entry on list the current-song class
		$("#audioPlayer")[0].src = nextSong[currentSong].children[0].href;	// set the audio player to the song corresponding with the currentSong # entry on the list
		$("#audioPlayer")[0].play();
		previousSong = nextSong[currentSong].children[0];				// set current song
		logMusic(previousSong.id);
	})
}

audioPlayer();