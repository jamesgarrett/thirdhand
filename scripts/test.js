module.exports = function(bot) {

	// var company = "storybook";

	// var logoFile = "logo.png";

	// var fontName = "Open Sans";
	// var fontFile = "open-sans.zip";

	// var logo = company + "/logos/" + logoFile;
	// var logo = company + "/logos/" + logoFile;
	
	// var font = company + "/fonts/" + fontFile;

	// return res.send('Sure can boss!');
	// return res.send(logo);

	// console.log(logo);
	// console.log(fontFileName);


	bot.hear(/thirdhand/i, function(res){
		return res.send('Hey ' + "display_name" + '. How can I help you today? \n');
		return res.send('Not sure? Try one of these: \n 1. Can you send me our logo? \n 2. What font do we use? \n 3. What are our brand colors? \n 4. Can you send me the style guide?');
	})

	bot.hear(/Can you send me the logo?/i, function(res){

		return res.send("Sure can boss! \n You can download it here:" + "logo");

	})

	bot.respond(/What font do we use?/i, function(res){

		return res.send("We use " + "Open Sans"); // fontName
		return res.send("You can download it here: " + "font");

	})

	bot.respond(/What are our brand colors?/i, function(res){

		return res.send("Our brand colors are " + "#4ac3d1");
	})

}

	// Fetch the Logo
	// if user asks 'Thirdhand can you send the logo?'
	// if logo.length > 1 : respond with 'Sure can boss!'
		// supply (logo) array, pulled from a repo which the designer controls
		// -- one logo format is required the rest are optional
		// -- suggest through interface to have a dark and a light version of the logo
		// -- suggest through interface having at least one png with a transparent background
		// supply "not sure which one to use?" link with additional information about the different 
		// formats, and what each of them is likely to be useful for
	// else if logo.length === 1 : respond with 'Aye aye captain!'
		// supply (logo) array
	// else : 
		// Respond with : no one has uploaded any logos yet, would you like to do that now?
		// supply link to upload new logos

	// Fetch the Font
	// if user asks "Thirdhand, what (font|fonts) do we use?"
	// if fonts.length > 1 : respond with 'You bet chief!'
		// For each font:
			// "We use (font name) as our (type) font (font type = primary, title, secondary etc. ) <-- not a variable, real parentheses
			// supply zip file
			// if font has google web font, "You can also use this on the website" supply a link
	// else if fonts.length === 1 Respond: "We use (font name)"
		// supply zip file with font files
		// if font has google web font, supply a link
	// else
		// Respond with : no one has uploaded any fonts yet, would you like to do that now?
		// supply link to upload new logos

	// Brand Color
	//  if user asks "Hey Thirdhand, what (color|colors) do we use?"
	// if colors.length >= 1 : respond with "Done and done!"
		// For each color:
			// (Color swatch*) (Color Name) (#Hex Code*) (CMYK) (HSB)
	// else
		// Respond with : no one has uploaded any brand colors yet, would you like to do that now?
		// supply link to upload brand colors

	// Fetch the Letterhead
	// if user asks "Hey Thirdhand, can you send me the letterhead?"
		// if letterhead === true : respond with 'Right away!'
	// else 
		// Respond with : no one has uploaded the letterhead yet, would you like to do that now?
		// supply link to upload letterhead



	// one version of each document and two colors are allowed in the free version -- pay $5 a month to upload multiple files
	