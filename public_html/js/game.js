
/* Game namespace */
var game = {

	// an object where to store game information
	data : {
		// score
		score : 0
	},
	
	
	// Run on page load.
	"onload" : function () {
	// Initialize the video.
	if (!me.video.init("screen", 1067, 600, true, 1.0)) {
		alert("Your browser does not support HTML5 canvas.");
		return;
	}

	// add "#debug" to the URL to enable the debug Panel
	if (document.location.hash === "#debug") {
		window.onReady(function () {
			me.plugin.register.defer(debugPanel, "debug");
		});
	}

	// Initialize the audio.
	me.audio.init("mp3,ogg");

	// Set a callback to run when loading is complete.
	me.loader.onload = this.loaded.bind(this);

	// Load the resources.
	me.loader.preload(game.resources);

	// Initialize melonJS and display a loading screen.
	me.state.change(me.state.LOADING);
},

	// Run on game resources loaded.
	"loaded" : function () {
		me.state.set(me.state.MENU, new game.TitleScreen());
		me.state.set(me.state.PLAY, new game.PlayScreen());
                
                me.pool.register("player", game.PlayerEntity, true);
                me.pool.register("levelTrigger", game.LevelTrigger, true);
                me.input.bindKey(me.input.KEY.RIGHT, "right");
                me.input.bindKey(me.input.KEY.LEFT, "left");
                me.input.bindKey(me.input.KEY.UP, "jump", true);
                me.input.bindKey(me.input.KEY.D, "right");
                me.input.bindKey(me.input.KEY.A, "left");
                me.input.bindKey(me.input.KEY.W, "jump");
                me.input.bindKey(me.input.KEY.SPACE, "jump");
                // bind the key for jumps.
           
            
            // Start the game.
		me.state.change(me.state.MENU);
            
               
	}
};
