module.exports = function(bot) {

    bot.hear(/test/, function(res) {
        return res.send("G: Robot is running!");
    });

    bot.hear(/hi there/, function(res) {
        return res.send("G: Woohooo!");
    });

    bot.hear(/Hello!/, function(res){
    	return res.send("G: Hi There!");
    });

    // bot.respond(/What's your favorite food?/, function(res){
    // 	return res.send("G: Garrett: I'm a robot, I don't eat food!");
    // });

    bot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
	   // the `i` at the end of the expression makes it case insensitive
	   var name;
	   name = msg.match[1];
	   // note that `msg` is a parameter
	   if (name === "Hubot") {
	       return msg.send("G: You're not Hubot--I'm Hubot!");
	   } else {
	       return msg.reply("G: Nice to meet you, " + name + "!");
	   }
	});

	bot.respond(/Add (.*) and (.*)/i, function(msg) {
		var a;
		var b;
		a = Number(msg.match[1]);
		b = Number(msg.match[2]);
		c = a + b;

		return msg.reply("G: " + a + " plus " + b + " equals " + c);
	})

	bot.respond(/What is your favorite (.*)\s?\?/i, function(msg){
		var fav;
		fav = msg.match[1];
		switch (fav){
			case "food":
				return msg.reply("G: I don't eat food I'm a robot!");
			case "band":
				return msg.reply("G: It's gotta be Daft Punk! Bots stick together.");
			case "programming language":
				return msg.reply("G: Javascript of course, I'm programming myself to be sentient");
			default:
				return msg.reply("G: I don't have a favorite " + fav + ". what's your favorite " + fav + " ?");
		}
	})

	bot.respond(/Is it a (weekend|holiday)\s?\?/i, function(msg){
		var today = new Date();
		msg.reply(((today.getDay() === 0) || (today.getDay() === 6)) ? "YES" : "NO");
	});

	bot.hear(/I did it!/i, function(msg){
		msg.send("G: Congratulations, man!");
	});

	bot.respond(/Are you there?/i, function(msg){
		msg.reply("Yes, usually here. I'm Listening...");
	});

	bot.respond(/Hubot, what should I build for my project\s?\?/i, function(msg){
		msg.reply("Something useful, but also fun.");
	});

};