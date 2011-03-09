//
//  CREATE FIELD ONE
//
var login = Titanium.UI.createView({
  top:60,
  width:320,
  height:420,
  opacity:1
});


var lblUsername = Titanium.UI.createLabel({
	color:'#fff',
	text:'Username',
	top:10,
	left:30,
	width:100,
	height:'auto'
});

login.add(lblUsername);

var txtUsername = Titanium.UI.createTextField({
	hintText:'enter username',
	height:35,
	top:35,
	left:30,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

login.add(txtUsername);

//
//  CREATE FIELD TWO
//
var lblPassword = Titanium.UI.createLabel({
	color:'#fff',
	text:'Password',
	top:75,
	left:30,
	width:100,
	height:'auto'
});

//Ti.UI.currentWindow.add(lastName);
login.add(lblPassword);

var txtPassword = Titanium.UI.createTextField({
	hintText:'enter password',
	passwordMask:true,
	height:35,
	top:100,
	left:30,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

login.add(txtPassword);

//
// CREATE BUTTON
//
var save = Titanium.UI.createButton({
	title:'Login',
	top:170,
	left:30,
	height:30,
	width:250,
	style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	color:'#555',borderRadius:10,borderWidth:1,borderColor:'#666',
	backgroundGradient:{type:'linear',colors:['#fffff0','#bbbbbb'],startPoint:{x:0,y:0},endPoint:{x:0,y:50},backFillStart:false}
});
login.add(save);

//
//  CREATE INFO MESSAGE
//
var messageView = Titanium.UI.createView({
	bottom:10,
	backgroundColor:'#111',
	height:40,
	width:270,
	opacity:0.0,
	borderRadius:10
});

var messageLabel = Titanium.UI.createLabel({
	color:'#fff',
	text:'Login to iCoach',
	height:'auto',
	width:'auto',
	textAlign:'center',
	opacity:0.0
});

messageView.add(messageLabel);

login.add(messageView);


