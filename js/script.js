$(document).ready(function(){
	var i = 0;

	function fadeTitle(){
		
		$('.title').fadeIn(8000);
		$('.title').fadeOut(8000);
		$('.title').fadeIn(8000);
	};

	function fadePlaylist(){
		$('.playlist').hide();
		$('.playlist').fadeIn(4000);
	};

	function titleCondition(){
			if( i == 0){
				$('.title').html("1- Kingdom Hearts Main menu Theme");
				}else if(i == 1){
				fadeTitle();
				$('.title').html("2- darkness of the unknown");
			}else if(i == 2){
				$('.title').html("3- showdown at hollow bastion");
				fadeTitle();
			}else if(i == 3){
				$('.title').html("4- sacred moon");
				fadeTitle();
			}else if (i == 4){
				$('.title').html("5- Riku and Kairi");
				fadeTitle();
			}else if (i == 5){
				$('.title').html("6- battleship bravery");
				fadeTitle();
			}else{
				$('.title').html("7- one winged angel from final fantasy VII");
				fadeTitle();
			}
	};
	setInterval(function(){ fadeTitle(); }, 8000);
	fadeTitle();

	var Jukebox = {
		son: [new Audio("musics/theme.mp3"),new Audio("musics/darkness-of-the-unknown.mp3"), new Audio("musics/601-showdown-at-hollow-bastion.mp3"), new Audio("musics/604-sacred-moon.mp3"), new Audio("musics/606-riku.mp3"), new Audio("musics/battleship-bravery.mp3"), new Audio("musics/one-winged-angel-from-final-fantasy-vii-.mp3")],

		playMusic: function(){
		  this.son[i].play();
		  this.son[i].onended = function() {
    		i +=1;
    		titleCondition();
    		Jukebox.playMusic();
			};
		  if(i >= this.son.length - 1){
				this.stopMusic();
				i = 0; 
				this.playMusic();
			}
		},

		pauseMusic: function(){ 
		  this.son[i].pause(); 
		}, 

		stopMusic: function() { 
			this.son[i].load(); 
		},

		next: function(){
			if(i >= this.son.length - 1){
				this.stopMusic();
				i = 0; 
				this.playMusic();
			}else{
				this.stopMusic();
				i += 1; 
				this.playMusic();
			}
		},

		prev: function(){
			if(i <= 0){
				this.stopMusic();
				i = this.son.length - 1; 
				this.playMusic();
			}else{
				this.stopMusic();
				i -= 1; 
				this.playMusic();
			}
		},
		rand: function(){
			this.stopMusic();
			var x = i;
			i = Math.floor((Math.random() * 6) + 0);
			if (i == x ){
				i = Math.floor((Math.random() * 6) + 0);
			}
			this.playMusic();
		}
		// playSound: function(url){    
		//  var a = new Audio(url);     
		//  a.play(); 

		// }

	};
		Jukebox.playMusic();
		fadePlaylist();

		$('.play').click(function(){			
			Jukebox.playMusic();
		});

		$('.pause').click(function(){
			Jukebox.pauseMusic();
		});

		$('.stop').click(function(){
			Jukebox.stopMusic();
		});

		$('.next').click(function(){
			Jukebox.next();
			titleCondition();

		});

		$('.previous').click(function(){
			Jukebox.prev();
			titleCondition();
		});
		$('.rand').click(function(){
			Jukebox.rand();
			titleCondition();
		});

		// $("p").mouseover(function(){
  //   	$("p").css("opacity", "1");
		// });

		// $("p").mouseout(function(){
  //   	$("p").css("opacity", "0.3");
		// });

		$(".title1").mouseover(function(){
    	$(".title1").css({opacity: "1"} );
		});

		$(".title1").mouseout(function(){
    	$(".title1").css({opacity: "0.6"} );
		});

		$(".title2").mouseover(function(){
    	$(".title2").css({opacity: "1"} );
		});

		$(".title2").mouseout(function(){
    	$(".title2").css({opacity: "0.6"} );
		});

		$(".title3").mouseover(function(){
    	$(".title3").css({opacity: "1"} );
		});

		$(".title3").mouseout(function(){
    	$(".title3").css({ opacity: "0.6"} );
		});

		$(".title4").mouseover(function(){
    	$(".title4").css({ opacity: "1"} );
		});

		$(".title4").mouseout(function(){
    	$(".title4").css({ opacity: "0.6"} );
		});

		$(".title5").mouseover(function(){
    	$(".title5").css({ opacity: "1"} );
		});

		$(".title5").mouseout(function(){
    	$(".title5").css({ opacity: "0.6"} );
		});

		$(".title6").mouseover(function(){
    	$(".title6").css({ opacity: "1"} );
		});

		$(".title6").mouseout(function(){
    	$(".title6").css({ opacity: "0.6"} );
		});

		$(".title7").mouseover(function(){
    	$(".title7").css({ opacity: "1"} );
		});

		$(".title7").mouseout(function(){
    	$(".title7").css({ opacity: "0.6"} );
		});

		$(".box").mouseover(function(){
    	$(".box").css({ opacity: "0.6"} );
		});

		$(".box").mouseout(function(){
    	$(".box").css({ opacity: "0.4"} );
		});


		// $('.options').hide();

		// $('.play-theme').click(function(){
		// 	new Audio("musics/"$('theme').val().toString());
		// });
});