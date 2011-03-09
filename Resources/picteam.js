// We do this at the top of all of our files to include redux:
Ti.include('redux.js');




rawdata = [
	{field:'College Rifles', foo:'123'},
	{field:'Opposition', foo:'456'}
];

tabledata= []

var i=0;
while (dbrows.isValidRow()) {

		var row = Ti.UI.createTableViewRow({
			className: 'noPic',
			hasChild: hasChild
		});
		var lbl_field = Ti.UI.createLabel({
			text: field,
			//shadowColor:'#0a1a37',
			//shadowOffset:{x:0,y:-1},
			textAlign: 'left',
			font: {
				fontWeight: 'bold',
				fontSize: 16
			},
			top: 15,
			height: 'auto',
			left: 15
			//right:50
		});
		row.add(lbl_field);

		tabledata[i] = row;
		i++;

}



var tableview = Titanium.UI.createTableView({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
	data:tabledata,
	backgroundColor:'transparent',
	rowBackgroundColor:'white',
	//headerView:headerView,
	//footerView:footerView,
	maxRowHeight:50,
	minRowHeight:50
});

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




Ti.UI.currentWindow.add(tableview);
