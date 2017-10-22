module.exports = function(bot) {

	var baseURL = "www.thirdhand.jamesgarrett.co";
	var company = "storybook";

	var logoFile = "logo.png";
	// logoTypes = ['inverse', 'text', 'transparent', 'large'];
	// fileTypes = ['jpg', 'png', 'svg', 'pdf'];

	var logo = baseURL + "/companies/" + company + "/logos/" + logoFile;
	// var logo = baseURL + "/companies/" + company + "/logos/" + logoType + fileType;

	var fontFile = "open-sans.zip";

	var fonts = {
		headline : ['Open-Sans','bold'],
		body : ['Lato','book'],
	}

	var fontWeights = ['extra bold','bold','book','light','ultra light'];

	var headlineFont = baseURL + "/companies/" + company + "/fonts/" + fonts.headline[0] + ".zip";
	var bodyFont = baseURL + "/companies/" + company + "/fonts/" + fonts.body[0] + ".zip";

    brandColors = {
    	primary : '#4ac3d1',
    	secondary : '#0F3247',
    	uiWhite : '#ffffff',
	    uiGray : 'd8d8d8',
    }


  //   var logo = {
		//     "attachments": [
		//         {
		//             "fallback": "Storybook Logo",
		//             "color": "#4ac3d1",
		//             "pretext": "Here you go!",
		//             "author_name": "Thirdhand",
		//             "author_link": "http://jamesgarrett.co/",
		//             "author_icon": "http://jamesgarrett.co/img/agency/team/1.jpg",
		//             "title": "Storybook Logo",
		//             "title_link": "http://thirdhand.jamesgarrett.co/companies/storybook/logos/logo.png",
		//             "text": "Transparent PNG logo for Storybook",
		//             "image_url": "http://thirdhand.jamesgarrett.co/companies/storybook/logos/logo.png",
		//             "thumb_url": "http://thirdhand.jamesgarrett.co/companies/storybook/logos/logo.png",
		//             "footer": "Thirdhand: A tool for designers",
		//             "footer_icon": "http://jamesgarrett.co/img/agency/team/1.jpg",
		//             "ts": 123456789
		//         }
		//     ]
		// }


	// var font = company + "/fonts/" + fontFile;

	// return res.send('Sure can boss!');
	// return res.send(logo);

	// console.log(logo);
	// console.log(fontFileName);



  
   // robot.enter (res) ->
   //   res.send res.random enterReplies
   // robot.leave (res) ->
   //   res.send res.random leaveReplies


	bot.hear(/thirdhand/i, function(res){
		return res.send('Hello! try one of these: '+
			'\n Can you send me our logo? ' +
			'\n What font do we use? ' +
			'\n What are our brand colors? ' +
			'\n Can you send me the style guide?'
		);
	})

	bot.hear(/Can you send me the (logo|logos)?/i, function(res){

		return res.send("Here you go!" + logo);

	})

	bot.hear(/What (font|fonts) do we use?/i, function(res){

			if (fonts.headline && fonts.body === true){
				return res.send("We use different fonts in different places. \n"  
					+ "We use " + fonts.headline[0] + " " + fonts.headline[1] 
					+ " as our headline font. \n You can download it here:" 
					+ headlineFont + "\n"
					+ "We use " + fonts.body[0] + " " + fonts.body[1] 
					+ " as our body font. \n You can download it here:" 
					+ bodyFont + "\n"
				); 
			} else {
				return res.send("We use " + fonts.headline[0] + " " + fonts.headline[1] 
					+ " as our headline font. \n You can download it here:" 
					+ headlineFont + "\n"
				);
			}
		

	})

	bot.respond(/What are our brand colors?/i, function(res){

		return res.send("Our brand colors are \n" 
			+ "Pacific Noon: " + brandColors.primary + "\n"
			+ "Atlantic Night: " + brandColors.secondary
			);
	
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
	