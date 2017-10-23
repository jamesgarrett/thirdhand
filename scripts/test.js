module.exports = function(bot) {

	// Set our larger variables -- these would be fed into this function ideally
	var baseURL = "www.thirdhand.jamesgarrett.co";
	var company = "storybook";

	// Start building our asset variables
	// var logos = ["logo.png","logos.jpg"];

	// These might become a thing in V2
	// logoTypes = ['inverse', 'text', 'transparent', 'large'];
	// fileTypes = ['jpg', 'png', 'svg', 'pdf'];

	// How to find our logos folder
	// var logoURL = baseURL + "/companies/" + company + "/logos/";
	// var logo = baseURL + "/companies/" + company + "/logos/" + logoType + fileType;

	var timeStamp = Math.floor(Date.now() / 1000);

	// Hard coding an attachment to send an image because my other method stopped working
    var logo = {
	    "attachments": [
	        {
	            "fallback": "Storybook Logo",
	            "color": "#4ac3d1",
	            "pretext": "Here you go!",
	            "author_name": "Thirdhand",
	            "author_link": "http://jamesgarrett.co/",
	            "author_icon": "http://jamesgarrett.co/img/agency/team/1.jpg",
	            "title": "Storybook Logo",
	            "title_link": "http://thirdhand.jamesgarrett.co/companies/storybook/logos/logo.png",
	            "text": "Transparent PNG logo for Storybook",
	            "image_url": "http://thirdhand.jamesgarrett.co/companies/storybook/logos/logo.png",
	            "thumb_url": "http://thirdhand.jamesgarrett.co/companies/storybook/logos/logo.png",
	            "footer": "Thirdhand: A tool for designers",
	            "footer_icon": "http://jamesgarrett.co/img/agency/team/1.jpg",
	            "ts": 123456789
	        }
	    ]
	}


	// Define our fonts
	var fonts = {
		headline : ['open-sans','bold'],
		body : ['lato','book'],
	}

	// var fontWeights = ['extra bold','bold','book','light','ultra light'];

	// How to find our fonts
	var headlineFont = baseURL + "/companies/" + company + "/fonts/" + fonts.headline[0] + ".zip";
	var bodyFont = baseURL + "/companies/" + company + "/fonts/" + fonts.body[0] + ".zip";

	// Define our brand colors
    brandColors = {
    	primary : '#4ac3d1',
    	secondary : '#0F3247',
    	uiWhite : '#ffffff',
	    uiGray : '#d8d8d8',
    }

    // Supply our prompts
	bot.hear(/thirdhand/i, function(res){
		return res.send('Hello! try one of these: '+
			'\n Can you send me our logo? ' +
			'\n What font do we use? ' +
			'\n What colors do we use? '
		);
	})

	// Fetch the Logo


	bot.hear(/Can you send me the (logo|logos)?/i, function(res){
		
		return res.send(logo);

	})

	// Fetch the Font

	bot.hear(/What (font|fonts) do we use?/i, function(res){
		if (fonts.headline && fonts.body){
			return res.send("We use different fonts in different places. \n"  
				+ "We use " + fonts.headline[0] + " " + fonts.headline[1] 
				+ " as our headline font. \n You can download it here: " 
				+ headlineFont + "\n"
				+ "We use " + fonts.body[0] + " " + fonts.body[1] 
				+ " as our body font. \n You can download it here: " 
				+ bodyFont + "\n"
			); 
		} else {
			return res.send("We use " + fonts.headline[0] + " " + fonts.headline[1] 
				+ " as our headline font. \n You can download it here: " 
				+ headlineFont + "\n"
			);
		}
	})

	// Display Brand Colors

	bot.respond(/What (color|colors) do we use?/i, function(res){

		if (!brandColors){
			return res.send("No brand colors have been uploaded.");
		} else {
			return res.send("Our brand colors are: \n" 
			+ "Pacific Noon: " + brandColors.primary + "\n"
			+ "Atlantic Night: " + brandColors.secondary + "\n"
			+ "UI White: " + brandColors.uiWhite + "\n"
			+ "UI Gray: " + brandColors.uiGray
			);
		}
	})

}

	// Fetch the Letterhead
	// if user asks "Hey Thirdhand, can you send me the letterhead?"
		// if letterhead === true : respond with 'Right away!'
	// else 
		// Respond with : no one has uploaded the letterhead yet, would you like to do that now?
		// supply link to upload letterhead


    var logo = {
	    "attachments": [
	        {
	            "fallback": "Storybook Logo",
	            "color": "#4ac3d1",
	            "pretext": "Here you go!",
	            "author_name": "Thirdhand",
	            "author_link": "http://jamesgarrett.co/",
	            "author_icon": "http://jamesgarrett.co/img/agency/team/1.jpg",
	            "title": "Storybook Logo",
	            "title_link": "http://thirdhand.jamesgarrett.co/companies/storybook/logos/logo.png",
	            "text": "Transparent PNG logo for Storybook",
	            "image_url": "http://thirdhand.jamesgarrett.co/companies/storybook/logos/logo.png",
	            "thumb_url": "http://thirdhand.jamesgarrett.co/companies/storybook/logos/logo.png",
	            "footer": "Thirdhand: A tool for designers",
	            "footer_icon": "http://jamesgarrett.co/img/agency/team/1.jpg",
	            "ts": 123456789
	        }
	    ]
	}

	// one version of each document and two colors are allowed in the free version -- pay $5 a month to upload multiple files
	