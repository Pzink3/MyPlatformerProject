game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
            me.input.bindKey(me.input.KEY.ENTER, "start");
	var titleImage = new me.SpriteObject(0, 0, me.loader.getImage("game-title"));
        var titleText = new game.MainTitle(1, 1);
        
        me.game.world.addChild(titleImage, 1);
        me.game.world.addChild(titleText, 2);
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
            me.input.unbindKey(me.input.KEY.ENTER);
		; // TODO
	}
});

game.MainTitle = me.Renderable.extend({
    init: function (x, y) {
        this.parent(new me.Vector2d(x, y), 0, 0);
        this.font = new me.Font("Impact", 46, "red");
        
    },
            update: function() {
        if(me.input.isKeyPressed("start")) {
            me.state.change(me.state.PLAY);
            return true;
        }
        
        
            },
                    draw: function(context) {
                this.font.draw(context, "Press ENTER To Start!", 250, 530);
                
                    }
});