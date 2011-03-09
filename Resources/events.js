// We do this at the top of all of our files to include redux:
Ti.include('includes/utilities.js');


var db = Ti.Database.open('icoach');
var dbrows = db.execute('SELECT event.*, player.* FROM event LEFT OUTER JOIN player ON event.playerId = player.playerId ORDER BY event.eventTime DESC');

tabledata = [];
// create table view event listener




var i=0;
while (dbrows.isValidRow())
{
	var whichTeam;
	if(dbrows.fieldByName('eventType')){whichTeam = "Opposition";}else{whichTeam = "College Rifles";}
	var wonLost;
	if(dbrows.fieldByName('eventSuccess')){wonlost = "Won";}else if(dbrows.fieldByName('eventSuccess') == false){wonlost = "Lost";}
	var missScore;
	if(dbrows.fieldByName('eventSuccess')){missScore = "SCORE!";}else if(dbrows.fieldByName('eventSuccess') == false){missScore = "Miss";}	
	
	var proEvent;
	switch (dbrows.fieldByName('eventType')) {
		case "Kickoff": case "Ruck":
			proEvent = dbrows.fieldByName('eventType') + " " + whichTeam + " " + wonlost;
			break;
		case "Tackle":
			proEvent = dbrows.fieldByName('eventType') + " " + concatName(dbrows.fieldByName('playerFirstname'),dbrows.fieldByName('playerSurname'));
			break;	
		case "Dropgoal": case "Penalty":
			proEvent = whichTeam + " " + missScore;
			break;
	}

	var i;
	var row = Ti.UI.createTableViewRow({
			className: 'noPic',
			hasChild: true
		});
	

		//row.rightImage = '../images/tableview/easycustom/indicator.png';
		//row.backgroundImage = '../images/tableview/easycustom/bottomRow.png';
		//row.selectedBackgroundImage = '../images/tableview/easycustom/bottomRowSelected.png';
	var lbl_event = Ti.UI.createLabel({
		text: dbrows.fieldByName('eventType'),
		//shadowColor:'#0a1a37',
		//shadowOffset:{x:0,y:-1},
		textAlign:'left',
		font:{fontWeight:'bold',fontSize:14},
		top:10,
		height:'auto',
		left:10
		//right:50
	});	
	row.add(lbl_event);
	//info(dbrows.fieldByName('playerSurname'))
	var lbl_sum = Ti.UI.createLabel({
		//shadowColor:'#0a1a37',
		//shadowOffset:{x:0,y:-1},
		textAlign:'left',
		top:11,
		left:80,
		width: 'auto',
		height:'auto',
		font:{fontWeight:'normal',fontSize:13}
	});
	row.add(lbl_sum);
	lbl_sum.text = proEvent;
	
	var lbl_time = Ti.UI.createLabel({
		text: dbrows.fieldByName('eventTime'),
		color: '#ff0000',
		//shadowColor:'#0a1a37',
		//shadowOffset:{x:0,y:-1},
		textAlign:'left',
		top:10,
		right:12,
		width: 'auto',
		height:'auto',
		font:{fontWeight:'normal',fontSize:14}
	});
	//if (Titanium.Platform.name == 'android') {
		//label.top = 10;
	//}
	row.add(lbl_time);
	
	//label.addEventListener('click',function(e)
	//{
	//	Ti.API.info("clicked on label "+e.source);
	//});

	if (dbrows.fieldByName('eventFor') == true) {
		row.backgroundGradient={
            type:'linear',
            colors:[
                {color:'#cccccc',position:0.0},
               // {color:'#dddddd',position:0.60},
                {color:'#bbbbbb',position:1.0}
            ]
        };
		lbl_event.color = '#111';
		lbl_sum.color = '#111';
	}else{
		row.backgroundGradient={
            type:'linear',
            colors:[
                {color:'#ffffff',position:0.0},
                //{color:'#000000',position:0.60},
                {color:'#eeeeee',position:1.0}
            ]
        };
		lbl_event.color = '#222';
		lbl_sum.color = '#222';
	}

	
	tabledata[i]=row;
	i++;
	dbrows.next();
}

var tableview = Titanium.UI.createTableView({
	data:tabledata,
	style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
	//backgroundColor:'transparent',
	//headerView:headerView,
	//footerView:footerView,
	maxRowHeight:40,
	minRowHeight:40
});


// add table view to the window
Ti.UI.currentWindow.add(tableview);
// call something in our utilities; note that we don't have to include the file in this context because
// it we did a "includeGlobal" in our app.js!
