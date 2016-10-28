$(document).ready(function() 
{

var charnames = [ 
"banshee",
"professorx",
"professorx",
"marvelgirl",
"marvelgirl", 
"phoenixforce",
"rachelsummers",
"rachelsummers",
"rachelsummers", 
"angel",
"angel",
"psylocke", 
"psylocke", 
"psylocke", 
"beast",
"beast",
"beast",
"beast",
"beast",
"beast",
"dazzler",
"moiramactaggert",
"moiramactaggert",
"moiramactaggert",
"moiramactaggert",
"moiramactaggert",
"moiramactaggert",
"moiramactaggert",
"moiramactaggert",
"moiramactaggert",
"amandasefton",
"amandasefton",
"amandasefton",
"amandasefton",
"sunder",
"legion",
"sharonfriedlander",
"tomcorsi", 
"tomcorsi", 
"alysandestuart",
"multipleman",
"multipleman",
"multipleman",
"multipleman",
"siryn",
"siryn",
"siryn",
"jubilee",
"gambit",
"gambit",
"bishop", 
"cannonball",
"cannonball",
"cannonball",
"ceciliareyes",
"ceciliareyes",
"cable",
"nealshaara",
"moonstar",
"moonstar",
"moonstar",
"moonstar",
"northstar",
"frenzy",
"changeling","longshot","colossus","cyclops","forge","havok","iceman","lockheed","magneto","mimic","multiple man","nightcrawler","phoenix","polaris","rachel summers","revanche","rogue","shadowcat","storm","sunfire","thunderbird","wolverine","husk","slipstream","stacy x","chamber","xorn","white queen","sunpyre","wraith","omerta","sage","skrull","maggott","marrow","cecilia reyes","joseph"];

var charnames2 = [
"sean cassidy",
"professor x",
"charles xavier",
"jean grey",
"marvel girl",
"phoenix force",
"rachel summers",
"rachel grey",
"phoenix",
"archangel",
"warren kenneth worthington III", 
"betsy braddock", 
"elizabeth braddock", 
"elizabeth betsy braddock",
"henry mccoy",
"hank mccoy",
"dr. hank mccoy",
"dr. henry mccoy",
"henry hank mccoy",
"hank philip mccoy",
"alison blaire",
"moira mactaggert",
"moira mactaggart", 
"moira mctaggert",
"moira mctaggart",
"dr. moira mactaggert",
"dr. moira mactaggart", 
"dr. moira mctaggert",
"dr. moira mctaggart",
"moira kinross mctaggert",
"amanda sefton",
"jimaine szardos",
"daytripper",
"second magik",
"mark hallett",
"david charles haller",
"sharon friedlander",
"thomas corsi",
"tom corsi",
"alysande stuart",
"multiple man",
"james jamie madrox",
"jamie madrox",
"james madrox", 
"theresa maeve rourke cassidy",
"theresa cassidy",
"theresa rourke cassidy",
"jubilation lee",
"remy lebeau",
"remy etienne lebeau",
"lucas bishop",
"sam guthrie",
"samuel guthrie",
"samuel zachary guthrie",
"cecilia reyes",
"dr. cecilia reyes",
"nathan summers",
"neal shaara",
"danielle moonstar",
"psyche",
"mirage",
"dani moonstar",
"jean paul beaubier",
"joanna cargill",]

function namer()
	{
		var x = document.getElementById("charnames").value;

		$("#datacontain").fadeOut(200);
	 	$("#info").animate({height: "0px",width: "0px"},200);
	 	$("#firstapp").animate({height: "0",width:"0px"},200);
		$("#pic").fadeOut(100);
		$("#pic").animate({height: "50px",width: "50px"},225);
		$("#marquee").animate({ marginTop: "206px",marginLeft: "21px"},200);
		$("#xlogo").fadeOut(300);
		$("#pic").attr("src","placeholder.png")
		$("#pic").fadeIn(100);
		$("#pic").animate({height: "300px",width: "300px"},200);
		$("#marquee").animate({ marginTop: "303px",marginLeft: "60px"},200)


//  below only happens if the name is correct. therefore the place holder image hidden by the x logo is always saying ERROR. BUT if it's 
// not an error then below happens. this solves the error message for the user who uses wrong name. w/o having to run error message
// at end of loop.

// multiple word names are to be placed in charnames2 array and renamed in charnames in one word. files to be called img's and txt are one word
// as well.

     for (var t = 0; t <= charnames.length; t++)
     for (var v = 0; v <= charnames2.length; v++)	

	 if (charnames2[v] === x)
	 	{ 
	 		$("#pic").attr("src","profilepic/"+charnames[v]+".png");
	 		$("#cover").attr("src","covers/"+charnames[v]+".jpg");
	 		$("#info").load("info/"+charnames[v] +".txt");
	 		$("#datacontain").fadeIn(200);
	 		$("#info").animate({height: "500px",width: "400px"},200);
	 		$("#firstapp").animate({height: "500px",width:"400px"},200);
	 	}
	 else if (charnames[t] === x)
	 	{
	 		$("#pic").attr("src", "profilepic/"+charnames[t]+".png");
	 		$("#cover").attr("src","covers/"+charnames[t]+".jpg");
	 		$("#info").load( "info/"+charnames[t] +".txt");
	 		$("#datacontain").fadeIn(200);
	 		$("#info").animate({height: "500px",width: "400px"},200);
	 		$("#firstapp").animate({height: "500px",width:"400px"},200);
	 	};

	 $("#charnames").val("name");





		};




// Create reset button

function modalreset()
	{
		$("#datacontain").fadeOut(200);
	 	$("#info").animate({height: "0px",width: "0px"},200);
	 	$("#firstapp").animate({height: "0",width:"0px"},200);

	 	$("#pic").fadeOut(100);
		$("#pic").animate({height: "50px",width: "50px"},100);
	 	
	 	
	 	$("#xlogo").animate({height: "50px",width: "50px"},10).fadeIn(100).animate({height: "200px",width: "200px"},200);
	 	$("#marquee").animate({ marginTop: "206px",marginLeft: "21px"},100);
	}

$("#pushbutt").click(namer);
$("#closer").click(modalreset);
$("#pic").click(modalreset);

$("#charnames").keypress(function(e) 
				{
    				if(e.which == 13) 
    				{
       					 $("#pushbutt").click();
    				}
				});


// var x = "jose is my name";
// console.log(x);
// var d = 6
// function fe(d){return(d+2-5)}
// console.log(fe(6));

// var i=0
// for (i=0;i<=101;i+=1)
// 	if (i%5===0 && i%3===0){console.log("FizzBuzz")}
// 	else if (i%5===0) {console.log("buzz")}
// 	else if (i%3===0){console.log("fizz")}
// 	else{console.log(i)}


});