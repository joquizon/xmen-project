$(document).ready(function() 
{
	$(this).scrollTop(0);
 // $(document).ajaxSend(function(e, xhr, opt){
 //        $("#xlogo").attr("src","xloader.gif");
 //    });
    // $(this).bind("mousewheel", function() {
    //      return false;
    //  });
		$(window).load(function() {
		// for error message
		$(".loader").css("display","none")
	});	



var charnames = [ 
"marrow","maggott","banshee","professorx","professorx","marvelgirl","marvelgirl", "phoenixforce","rachelsummers","rachelsummers","rachelsummers", "angel","angel","psylocke", "psylocke", "psylocke", "beast","beast","beast","beast","beast","beast","dazzler","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","amandasefton","amandasefton","amandasefton","amandasefton","sunder","legion","sharonfriedlander","tomcorsi", "tomcorsi","alysandestuart","multipleman","multipleman","multipleman","multipleman","siryn","siryn","siryn","jubilee","gambit","gambit","bishop", "cannonball","cannonball","cannonball","ceciliareyes","ceciliareyes","cable","nealshaara","moonstar","moonstar","moonstar","moonstar","northstar","northstar","frenzy","omerta","omerta","whitequeen","whitequeen","whitequeen","chamber","chamber","chamber","sunpyre","sunpyre","stacyx","stacyx","stacyx","lifeguard","slipstream","husk","juggernaut","fantomex","fantomex","eva","eva","eva","beak","beak","dust","stepfordcuckoos","stepfordcuckoos","stepfordcuckoos","stepfordcuckoos","stepfordcuckoos","stepfordcuckoos","shenxorn","mystique","vulcan","darwin","cyclops","sway","warpath","warpath",
"warpath","ladymastermind","ladymastermind","omegasentinel","omegasentinel","sabretooth","armor","armor","pixie","karma","sunspot","sunspot","aurora","magma","magma","madisonjeffries","drnemesis","drnemesis","drnemesis","magik","namor","namor","danger","domino","cloak","dagger","x23","x23","x23","hopesummers","warbird","firestar","firestar","iceman","iceman","m","forgetmenot","colossus","colossus","magneto","magneto","nightcrawler","rogue","polaris","shadowcat","shadowcat","changeling","havok","wolverine","wolverine","storm","sunfire","thunderbird",
"krakoa","ariel","doop","hepzibah","longshot","petra","forge","lockheed","mimic","multiple man","phoenix","rachel summers","revanche","xorn","wraith","sage","skrull","joseph",

];

var charnames2 = [
"sarah rushman","japheth","sean cassidy","professor x","charles xavier","jean grey","marvel girl","phoenix force","rachel summers","rachel grey","phoenix","archangel","warren kenneth worthington iii", "betsy braddock", "elizabeth braddock", "elizabeth betsy braddock","henry mccoy","hank mccoy","dr. hank mccoy","dr. henry mccoy","henry hank mccoy","hank philip mccoy","alison blaire","moira mactaggert","moira mactaggart", "moira mctaggert","moira mctaggart","dr. moira mactaggert","dr. moira mactaggart", "dr. moira mctaggert","dr. moira mctaggart","moira kinross mctaggert","amanda sefton","jimaine szardos","daytripper","second magik","mark hallett","david charles haller","sharon friedlander","thomas corsi","tom corsi","alysande stuart","multiple man","james jamie madrox","jamie madrox","james madrox", "theresa maeve rourke cassidy","theresa cassidy","theresa rourke cassidy","jubilation lee","remy lebeau","remy etienne lebeau","lucas bishop","sam guthrie","samuel guthrie","samuel zachary guthrie","cecilia reyes","dr. cecilia reyes","nathan summers","neal shaara","danielle moonstar","psyche","mirage","dani moonstar","jean paul beaubier","jean paul beaus","joanna cargill","paulie provenzano","paul provenzano","white queen","emma frost","emma grace frost","jono starsmore","jonothon starsmore","jonothon evan starsmore","leyu yoshida","yoshida reyu","stacy x","ripcord","miranda leevald","heather cameron",
"davis cameron","paige guthrie","cain marko","charlie cluster 7","jean phillipe","e.v.a","eva bell","eva","blackwing","barnell bohusk","sooraya qadir","stepford cuckoos","celest cuckoo","esme cuckoo","irma cuckoo","phoebe cuckoo","sophie cuckoo","shen xorn","raven darkholme","gabriel summers","armando munoz","scott summers","suzanne chan","james proudstar","thunderbird 2","thunderbird ii","regan wyngarde","lady mastermind","karima shapandar","omega sentinel","victor creed","hichako isaki","isaki hichako","megan gwyn","xian coy manh","bobby da costa","robert da costa",
"jeanne marie beaubier","amara aquilla","alison crestmere","madison jeffries","dr. nemesis","doctor nemesis","james bradley","illyana rasputin","namor","namor the submariner","danger room","neena thurman","tyrone johnson","tandy bowen","laura kinney","x 23","x-23","hope summers","ava'dara naganandini","angelica jones","angel jones","bobby drake","robert drake","monet st. croix","forget me not","piotr nikolaievitch rasputin","piotr rasputin","erik lensherr","max eisenhardt","kurt wagner","anna marie","lorna dane","kitty pryde","katherine pryde","kevin sydney","alex summers","logan howlett","james howlett","ororo monroe","shiro yoshida","john proudstar",

]



function namer()
	{	
	// 	$("#info2").load(function() {
	// 	// Animate loader off screen
	// 	$(".loader").css("display","none")
	// });	
		var x = $("#charnames").val().toLowerCase();
		$("#expos").css("display","none")
		$("#charnames").val("");
		// var x = document.getElementById("charnames").value;
		$("#mainholder").attr("id","mainholder2");
		$("#datacontain").css("display","none");
		$("#xlogo").attr("src","xloader.gif");
		// $("#xlogo").attr("class","loader");
		$("#info2").css("left","0px","top", "0px");	
		$("#marquee").animate({ marginTop: "303px",marginLeft: "60px"},200);
		$(".loader").css("display","block");
		$(".dbholder").attr("class","dbholderA");

//  below only happens if the name is correct. therefore the place holder image hidden by the x logo is always saying ERROR. BUT if it's 
// not an error then below happens. this solves the error message for the user who uses wrong name. w/o having to run error message
// at end of loop.

// multiple word names are to be placed in charnames2 array and renamed in charnames in one word. files to be called img's and txt are one word
// as well.


     for (var t = 0; t <= charnames.length; t++)
     for (var v = 0; v <= charnames2.length; v++)	

	 if (x === charnames2[v])
	 	{ 
	 		$("#xlogo").attr("src","xloader.gif");
	 		$("#cover").attr("src","xloader2.gif");	
	 		$("#xlogo").attr("src","profilepic/"+charnames[v]+".jpg");
	 		$("#cover").attr("src","covers/"+charnames[v]+".jpg");	 			 	
	 		$("#datacontain").css("display","block");
	 		$("#info").attr("id","info1");
	 		$("#info2").load("info/"+charnames[v] +".txt");
	 		$("#info2").draggable({ axis: "y" });
	 		$("#info2").draggable({ scroll: false });	
	 		$(".loader").css("display","none");
	 	}
	 else if (x === charnames[t])
	 	{
	 		$("#xlogo").attr("src","xloader.gif");
			$("#cover").attr("src","xloader2.gif");
	 		$("#xlogo").attr("src", "profilepic/"+charnames[t]+".jpg");
	 		$("#cover").attr("src","covers/"+charnames[t]+".jpg");
	 		$("#info2").css("right","0px","top", "0px");	 		
	 		$("#datacontain").css("display","block");
	 		$("#info").attr("id","info1");
	 		$("#info2").load("info/"+charnames[t] +".txt");
	 		$("#info2").draggable({ axis: "y" });	
	 		$("#info2").draggable({ scroll: false });	 		
	 		$("#info2").css("left","0px","top", "0px");
	 		$(".loader").css("display","none");
	 	}

		};

	 // 
	 		 		
// parentnodes and event targets used to individualize elements of the same class.
    $(".tlinepic").click(function(event) 
    {
       var z = (event.target.id);
       var y = (event.target.className)
       var par =(event.target.parentNode.parentNode.id);
       var parwid = $("#"+z).parent().parent().width();
       var winwidth = $(window).width();
 		
 		if (parwid === 202)
       {
       $("#"+z).parent().parent().animate({width: "535px"},1000);
       $("#"+z).parent().parent().parent().animate({width: "589px"},1000);
       }
       else if (parwid === 100)
       {
       $("#"+z).parent().parent().animate({width: "433px"},1000);
       $("#"+z).parent().parent().parent().animate({width: "465px"},1000);
       }
       else if (parwid === 305)
       {
       	$("#"+z).parent().parent().animate({width: "637px"},1000);
       	$("#"+z).parent().parent().parent().animate({width: "702px"},1000);
       };
	
		$("#"+y+par+"lister").load( "brief/"+z+".txt");
		$("#"+"briefpic"+par).attr("src","tlineprof/"+z+".jpg");
       $("#"+y+par).css("display","inline-block","float","left"); 
       $("#"+y+par).attr("src","covers/"+z+".jpg");
      $("#listholder"+par).fadeIn(2000);
      $("#listholder"+par).css("display","inline-block","float","left");
    });

    	$(".tlinecover").click(function(event)
    	{ 
			var z1 = (event.target.id);
			var z2 = (event.target.parentNode);
       		var par =(event.target.parentNode.parentNode.id);
       		var parwid = $("#"+z1).parent().parent().width();

       	$("#listholder"+par).css("display","none");	

       		if (parwid === 535)
       {
       $("#"+z1).parent().parent().animate({width: "202px"},1000);
       $("#"+z1).parent().parent().parent().animate({width: "261px"},1000);
       }
       else if (parwid === 433)
       {
       $("#"+z1).parent().parent().animate({width: "100px"},1000);
       $("#"+z1).parent().parent().parent().animate({width: "137px"},1000);
       }
       else if (parwid === 637)
       {
       	$("#"+z1).parent().parent().animate({width: "305px"},1000);
       	$("#"+z1).parent().parent().parent().animate({width: "377px"},1000);
       };

		});







// create div box to animate once .tlinepic is clicked. put divs that will contain tpicinfo per xmen in html
// multiple column years will need .parent().parent() separate class and code` 
// Create reset button

function modalreset()
	{	
		$("#xlogo").attr("src","xlogo2.png");
		$("#datacontain").fadeOut(200);
	 	$("#firstapp").animate({height: "0",width:"0px"},200);
	 	$("#mainholder2").attr("id","mainholder");
	 	$("#marquee").animate({ marginTop: "206px",marginLeft: "21px"},100);
		$("#expos").css("display","inline-block");
		$(".loader").css("display","none");
		$(".dbholderA").attr("class","dbholder");
	};


function backtotline()
{	
	$("#timelinecontainer").show();
	$("#tlinebutt").css("display","none");
	$("#dbasebutthold").css("display","block");	
	$(".dbholder").fadeOut(1000);
	$(".dbholderA").fadeOut(1000);
	$("#bod").css("overflow","visible");
	$("#transit").animate({height: "0px"},1500);
	$(".bod1").attr("class","bod");
	$(".loader").css("display","none");
};

$("#pushbutt").click(function()
{	

	// $(".listholder").css("display","none");	
    // $("#th1,#th6,#th26,#th28,#th30,#th35").attr("class","tlineholder2").animate({width: "202px"},1000);
    // $("#th13a,#th23,#th31").attr("class","tlineholder3").animate({width: "305px"},1000);   
    // $(".tlineholder").animate({width: "100px"},1000);   
    // timeline reset button?
    $("#timelinecontainer").hide()
	$("#transit").show().animate({height: "2000px"},2000);
	$("#dbasebutthold").css("display","none");
	$("#tlinebutt").css("display","block");	
	$(".dbholder").delay(1000).fadeIn(1000);
	$(".dbholderA").delay(1000).fadeIn(1000);
	$('html,body').scrollTop(0);
	$(".bod").attr("class","bod1");
	$(".loader").css("display","block");
	$("#menu").bind("mousewheel", function() {
         return false;
     });

});


$("#top").click(function()
{
	$("#info2").css("top","0px")
});

$("#pushbutt").click(namer);
$("#closer").click(modalreset);
// $("#xlogo").click(modalreset);
$(".loader").click(backtotline);
$("#closer").click(backtotline);
$("#main").draggable();

$("#charnames").keypress(function(e) 
				{
    				if(e.which == 13) 
    				{
       					 $("#pushbutt").click();
    				}
				});




});