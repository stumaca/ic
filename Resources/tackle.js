// We do this at the top of all of our files to include redux:
Ti.include('redux.js');
includeRJSSGlobal('rjss/common.rjss');

info('Opened Tackle');
var label = new Label({ id: 'Label2', className: 'big_text green_text' });
label.text = 'test';
win().add(label);

// call something in our utilities; note that we don't have to include the file in this context because
// it we did a "includeGlobal" in our app.js!
//checkInternet();


log('DEBUG', 'Window title is ' + win().title);