
var db = Ti.Database.open('icoach');
//Ti.include("event.js");

var evView = Ti.UI.createView({
  top: 10,
  left: '3%',
  width: '94%',
  height: 60,
  backgroundColor:'#194ca7',
  borderRadius:6
});
Ti.UI.currentWindow.add(evView);

var label = Ti.UI.createLabel({ id: 'Label1', className: '', top: 2, left: 10, width: 200,color:'#fff' });
evView.add(label);
label.text = '48:01 - Opposition Scrum Won';

var buttonView = Ti.UI.createView({
  top: 80,
  left: 0,
  width: '100%',
  height: 200
});
Ti.UI.currentWindow.add(buttonView);

var eventButton = function(ebTitle,ebLeft,ebTop,ebfunc){
	
		var button = Ti.UI.createButton({
			title: ebTitle,
			left: ebLeft,
			top: ebTop,
			className: 'plainbutton',
			style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
			backgroundGradient: {
				type: 'linear',
				colors: ['#fffff0', '#bbbbbb'],
				startPoint: {
					x: 0,
					y: 0
				},
				endPoint: {
					x: 0,
					y: 50
				},
				backFillStart: false
			},
			font: {
				fontSize: 15,
				fontFamily: 'Helvetica Neue',
				fontWeight: 'bold'
			}
		});
		
		button.addEventListener("click", function(){
			//tabGroup.setActiveTab(2);
			ebfunc();
			//alert('clicked!');
		});
		buttonView.add(button);
		return button;

};
var button1 = new eventButton('Tackle', '2%', 0, function(){
	TackleWiz.start(TackleWiz)
});
var button2 = new eventButton('Miss Tackle','35%',0);
var button3 = new eventButton('Line Break','68%',0);
var button4 = new eventButton('Ruck','2%',60,RuckWiz.start);
var button5 = new eventButton('LineOut','35%',60);
var button6 = new eventButton('Scrum','68%',60);
var button7 = new eventButton('Penalty','2%',120);
var button8 = new eventButton('Try','35%',120);
var button9 = new eventButton('Dropgoal','68%',120);

var end = new eventButton('End Game','2%',200);
Titanium.API.info("home.js complete " + Ti.UI.currentWindow.title);
//var end = Ti.UI.createButton({ title: 'End Game', className: 'blue' });	
//end.addEventListener("click", function() { alert('clicked!'); });
//buttonView.add(end);

