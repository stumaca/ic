var db = Ti.Database.open('icoach');
var dbrows = db.execute('SELECT * FROM player ORDER BY playerGamePos');

//var rawdata = [
//	{player:'Tony Woodcock', foo:'123'},
//	{player:'Sean Fitzpatrick', foo:'456'},
//	{player:'Carl Hayman', foo:'789'}
//];

//data[0] = Ti.UI.createTableViewRow({hasChild:true,foo:'343'});
	 

tabledata = [];
// create table view event listener

var i=0;
while (dbrows.isValidRow())
{
	var i;
	var row = Ti.UI.createTableViewRow({className:'noPic',hasChild:true});
		//row.rightImage = '../images/tableview/easycustom/indicator.png';
		//row.backgroundImage = '../images/tableview/easycustom/bottomRow.png';
		//row.selectedBackgroundImage = '../images/tableview/easycustom/bottomRowSelected.png';
		
	var img = Ti.UI.createImageView({Image:'images/shirt.png',width:30,height:25,left:5,top:5});	
	row.add(img);
	
	var lbl_position = Ti.UI.createLabel({
		text: dbrows.fieldByName('playerGamePos'),
		top:10,
		height:'auto',
		width:16,
		left:12,
		  shadowColor:'#777777',
  shadowOffset:{x:0,y:-1},
  color: '#ffffff',
  textAlign:'center',
  font:{fontWeight:'bold',fontSize:12}
		//right:50
	});	
	row.add(lbl_position);
	var lbl_name = Ti.UI.createLabel({
		text: dbrows.fieldByName('playerFirstname') + ' ' + dbrows.fieldByName('playerSurname'),
		color: '#333333',
		shadowColor:'#ffffff',
		shadowOffset:{x:0,y:1},
		textAlign:'left',
		top:8,
		left:45,
		width: 'auto',
		height:'auto',
		font:{fontWeight:'bold',fontSize:18}
	});
	//if (Titanium.Platform.name == 'android') {
		//label.top = 10;
	//}
	row.add(lbl_name);
	
	//label.addEventListener('click',function(e)
	//{
	//	Ti.API.info("clicked on label "+e.source);
	//});
	row.backgroundGradient={
            type:'linear',
            colors:[
                {color:'#ffffff',position:0.0},
                {color:'#dddddd',position:0.60},
                {color:'#eeeeee',position:1.0}
            ]
        };
	
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
	maxRowHeight:38,
	minRowHeight:38
	//separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE
});


// add table view to the window
Ti.UI.currentWindow.add(tableview);
tableview.addEventListener('click', function(e)
{
	// event data
	//var index = e.index;
	//var section = e.section;
	//var row = e.row;
	//var rowdata = e.rowData;
	//var prop = e.rowData.foo;
		
	//Titanium.UI.createAlertDialog({title:'Table View',message:'custom value ' + prop}).show();
	Ti.UI.currentWindow.close();

});
Ti.API.info("players.js complete " + Ti.UI.currentWindow.title)
//checkInternet();