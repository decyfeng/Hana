$(function() {
	var Parse = require('parse');

    Parse.$ = jQuery;
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("cFdabJuZn4byw5SdCGryu4TAXmtkT1tbyjQDLVkK", "tQPsS5OTVFSDGfsqFw9gsYE2UPHJa5ptEScaNJuw");    
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});