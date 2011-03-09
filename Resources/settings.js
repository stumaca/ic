var db = Ti.Database.open('icoach');
var dbrows = db.execute('SELECT * FROM game WHERE gameId = 1');

tabledata = [];

var section = Ti.UI.createTableViewSection({
  //headerTitle:'A section header'
});
function createRow(field, value, hasChild){
	 var row = Ti.UI.createTableViewRow({className: 'noPic',hasChild: hasChild});
		var lbl_field = Ti.UI.createLabel({
		text: field,
		//shadowColor:'#0a1a37',
		//shadowOffset:{x:0,y:-1},
		textAlign:'left',
		font:{fontWeight:'bold',fontSize:14},
		top:10,
		height:'auto',
		left:15
		//right:50
	});	
	row.add(lbl_field);	
	var lbl_value = Ti.UI.createLabel({
		text: value,
		//shadowColor:'#0a1a37',
		//shadowOffset:{x:0,y:-1},
		textAlign:'left',
		font:{fontWeight:'normal',fontSize:14},
		top:10,
		height:'auto',
		left:130
		//right:50
	});	
	row.add(lbl_value);	
	section.add(row);	
} 
createRow("Opponent", dbrows.fieldByName('gameOpponent'),false);
createRow("Game Date", dbrows.fieldByName('gameDate'),true);
createRow("Location", dbrows.fieldByName('gameLocation'),true);
createRow("Referee", dbrows.fieldByName('gameRef'),true);

tabledata[0] = section;


var tableview = Titanium.UI.createTableView({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
	data:tabledata,
	backgroundColor:'transparent',
	rowBackgroundColor:'white',
	//headerView:headerView,
	//footerView:footerView,
	maxRowHeight:40,
	minRowHeight:40
});
Ti.UI.currentWindow.add(tableview);


dbrows.close();
db.close();  // close db when you're done to save resources
// call something in our utilities; note that we don't have to include the file in this context because
// it we did a "includeGlobal" in our app.js!
//checkInternet();

