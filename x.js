$(document).ready(function() 
{

var charnames = ["professor x"
		,"cyclops"
		,"iceman"
		,"angel"
		,"beast"
		,"marvel girl"
		,"mimic"
		,"changeling"
		,"polaris"
		,"havok"
		,"wolverine"
		,"banshee"
		,"storm"
		,"sunfire"
		,"colossus"
		,"thunderbird"
		,"nightcrawler"
		,"phoenix force"
		,"shadowcat"
		,"lockheed"
		,"rogue"
		,"rachel summers"
		,"magneto"
		,"longshot"
		,"psylocke"
		,"dazzler"
		,"forge"
		,"sunder"
		,"legion"
		,"tom corsi"
		,"multipleman"
		,"siryn"
		,"moira mactaggert"
		,"amanda sefton"
		,"sharon friedlander"
		,"alysande stuart"
		,"jubilee"
		,"gambit"
		,"bishop"
		,"revanche"
		,"cannonball"
		,"joseph"
		,"cecilia reyes"
		,"marrow"
		,"maggott"
		,"skrull"
		,"cable"
		,"neal shaara"
		,"moonstar"
		,"sage"
		,"northstar"
		,"frenzy"
		,"omerta"
		,"wraith"
		,"sunpyre"
		,"xorn"
		,"chamber"
		,"white queen"
		,"stacy x"
		,"lifeguard"
		,"slipstream"
		,"husk"
		,"juggernaut"
		,"fantomex"
		,"eva"
		,"beak"
		,"dust"
		,"shen xorn"
		,"stepford cuckoos"
		,"mystique"
		,"vulcan"
		,"darwin"
		,"petra"
		,"sway"
		,"warpath"
		,"sabretooth"
		,"lady mastermind"
		,"omega sentinel"
		,"armor"
		,"hepzibah"
		,"pixie"
		,"karma"
		,"sunspot"
		,"aurora"
		,"magma"
		,"magik"
		,"namor"
		,"ariel"
		,"danger"
		,"domino"
		,"cloak"
		,"dagger"
		,"madison jeffries"
		,"dr nemesis"
		,"x23"
		,"hope summers"
		,"doop"
		,"krakoa"
		,"warbird"
		,"beast"
		,"cyclops"
		,"iceman"
		,"angel"
		,"marvel girl"
		,"firestar"
		,"m"
		,"forgetmenot" ]
	


	$(".profpic").each(function()
		{	
			 $(".proftitle").each(function()
				{	
					var ttl = $(this).parent().attr("id");
					var xactual = charnames[ttl]
					$(this).text(xactual);
				});
			 $(this).each(function()
			 	{
					var ttl = $(this).parent().attr("id");
					var xactual = charnames[ttl].replace(/\s/g, '') 
					
					$(this).attr("src","tlineprof3/"+xactual+".jpg");
					$(this).attr("id",xactual);

			 	});
			 // $(".yearholder").each(function()
			 // {
			 // 	var par = $(this).parent()
				// $(par).prepend("<p class='closer'>X<p>");
			 // })

		});



	// $(".yearholder").click(function(event)
	// 	{var par = $(this).parent()
	// 		var x = $(this).prev("p");
	// 		$(this).siblings("div").css("margin-left","2%");
	// 		$(par).children().show();

	// 	});

	$(".profpic").click(function(event)
		{
			var x = event.target.id
			var sx =x.replace(/\s/g, '')
			$("#infoholdermaster,#popdoc").fadeIn();
			$("#proftitlepop").text(x);
			$("#shortinfotext").load("brief/"+sx+".txt");			
			$("#infotext").load("info2/"+sx+".txt");
			$("#iholdpic").attr("src","tlineprof3/"+sx+".jpg");
			$("#coverpic").attr("src","cover2/"+sx+".jpg");
			$("#closer").show();
		});


	$("#closer").click(function()
		{	
						$("#infoholdermaster,#popdoc").fadeOut();
		});

	$("#start").click(function()
		{
			$("#xlogo").attr("id","xlogo2");
			$("#infobox").attr("id","infobox2");
			$(this).fadeOut().delay(100).queue( function(next)
      { 
       $("#tlinebar").css("height","100%");
        next(); 
      }).delay(750).queue( function(next)
      { 
       $(".year").fadeIn();
        next(); 
      }).delay(200).queue( function(next)
      { 
       $(".profholder").show().css("margin-left","2%");
        next(); 
      });

		})



});