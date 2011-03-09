var ICoachApp = function(){
	//version: '1.1.5', // Initiate app
	this.init = function(){

		//var db = Ti.Database.open('icoach');
		//db.remove();
		Ti.Database.install('icoach.sqlite', 'icoach');
		// Create tab group	
		
		var tabGroup = Titanium.UI.createTabGroup({
			//className: 'tabGroup'
		});
		this.tabGroup = tabGroup;
		
		function CreateTab(js, title, icn){
			var win = Titanium.UI.createWindow({
				//url: js,
				title: title,
				backTitle: 'Back'
			});
			var tab = Titanium.UI.createTab({
				title: title,
				window: win,
				icon: icn
			});
			tabGroup.addTab(tab);
			Ti.API.info("tab " + title);
			return win;

		}
		this.HomeWin = new CreateTab('home.js', 'Home', 'images/tabnav_home.png');
		//this.PlayerWin = new CreateTab('players.js', 'Players', 'images/tabnav_people.png');
		//this.EventsWin = new CreateTab('events.js', 'Events', 'images/tabnav_record.png');
		//this.SettingsWin = new CreateTab('settings.js', 'Settings', 'images/tabnav_gears.png');
		
		//tabGroup.open();		
	//EventsPages()
	};
return this;
};
	
var appUI = new ICoachApp();
appUI.init();


	tabGroup.open();	



//appUI.tabGroup
//appUI.tabGroup.open();
//playersTab.open();
	//app.close();
//});
