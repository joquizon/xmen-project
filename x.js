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
,"nightcrawler"
,"wolverine"
,"banshee"
,"storm"
,"sunfire"
,"colossus"
,"thunderbird"
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
,"moira mactaggert"
,"amanda sefton"
,"sunder"
,"legion"
,"sharon friedlander"
,"tom corsi"
,"alysande stuart"
,"multipleman"
,"siryn"
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
,"white queen"
,"xorn"
,"chamber"
,"stacy x"
,"lifeguard"
,"slipstream"
,"husk"
,"juggernaut"
,"fantomex"
,"eva"
,"beak"
,"dust"
,"stepford cuckoos"
,"shen xorn"
,"mystique"
,"vulcan"
,"darwin"
,"petra"
,"sway"
,"warpath"
,"lady mastermind"
,"omega sentinel"
,"sabretooth"
,"armor"
,"hepzibah"
,"pixie"
,"karma"
,"sunspot"
,"aurora"
,"magma"
,"madison jeffries"
,"dr nemesis"
,"magik"
,"namor"
,"ariel"
,"danger"
,"domino"
,"cloak"
,"dagger"
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
,"forget me not" ]
	


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
					var xactual = charnames[ttl] 
					
					$(this).attr("src","tlinepic/"+xactual+".jpg");

			 	});
		});

	







});