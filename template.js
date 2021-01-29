dxnisland.createWorld();

var PlayerX = 20; // Where the player x position starts at.
var PlayerY = 20; // Where the player y position starts at.

var PlayerSpeedX = 0;
var PlayerSpeedY = 0;

/* ^^ Starting player speeds which are 0 meaning the character wont go 
anywhere. */

dxnisland.onKeyDown("d", function() { 
// This code will run every frame the key is down.
PlayerSpeedX = 1;
});

dxnisland.onKeyReleased("d", function() {
// This code will run the frame the key is released.
PlayerSpeedX = 0;
});

dxnisland.onKeyDown("a", function() { 
// This code will run every frame the key is down.
PlayerSpeedX = -1;
});

dxnisland.onKeyReleased("a", function() {
// This code will run the frame the key is released.
PlayerSpeedX = 0;
});

dxnisland.onKeyDown("w", function() {
// This code will run every frame the key is down.
PlayerSpeedY = -1;
});

dxnisland.onKeyDown("s", function() {
// This code will run every frame the key is down.
PlayerSpeedY = 1;
});

dxnisland.onKeyReleased("w", function() {
// This code will run every frame the key is down.
PlayerSpeedY = 0;
});

dxnisland.onKeyReleased("s", function() {
// This code will run every frame the key is down.
PlayerSpeedY = 0;
});

function draw()
{
   dxnisland.clear(0, 0, screenWidth, screenHeight);
   /* ^^ This will clear the whole screen every frame 
   using a Da-xn Island Framework-made variable which returns the screen width and
   screen height of the page. */
   
   dxnisland.square(PlayerX, PlayerY, 30, 30, "rgb(0, 255, 0)"); // Green Square
}

function update()
{
   PlayerX += PlayerSpeedX;
   PlayerY += PlayerSpeedY;
   
   /* ^^ These will add the speed to the player position every frame. 
   += means add to so add then the value is equal to. */
}
