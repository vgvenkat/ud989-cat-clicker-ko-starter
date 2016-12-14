var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable('img/cat1.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
	this.catNickNames = ko.observableArray(["purr", "Tiger", "shadow", "leo"]);
	this.catStatus = ko.computed(function(){
		var status = "";
		if (this.clickCount() < 10) status = "NewBorn";
		else if (this.clickCount() < 20)	 status = "Infant";
		else if (this.clickCount() < 30) status = "Teenager";
		else status = "Adult";
		return status;
	}, this);

	this.catNickNames.push("meow");
}

ko.applyBindings(new ViewModel())
