(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Create a Collection class.
		2. Passing Model to Collection.
		3. Setting build-in Collection events.
		4. Get Model using at-index.
		5. Remove Model from the Collection.
		6. Get the length of Collection.
		7. Add Model into the Collection at the end.
		8. Remove Model from the Collection from the end.
		9. Add Model into the Collection at the start.
		10. Remove Model from the Collection from the start.
		11. Getting data in object & string format.


		How to run this example.
		1. Open Example-1.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	var MasterModel = Backbone.Model.extend({
		/*
			This initialize function will get called when the model is first created.
		*/
		initialize: function() {
			console.log("Your model have been initialize");
		}
	});

	/*
		Creating a new collection called MasterCollection by extending Backbone.Collection class.
		Syntax: Backbone.Collection.extend(properties, [classProperties])
	*/
	var MasterCollection = Backbone.Collection.extend({
		/*
			This initialize function will get called when the collection is first created.
		*/
		initialize: function() {
			console.log("Your collection have been initialize.");
			this.listenTo(this, 'add', this.onModelAdded);
	        this.listenTo(this, 'remove', this.onModelRemoved);
		},

		/*
			Used to specify the model class that the collection contains.
		*/
		model: MasterModel,

		onModelAdded: function() {
			console.log("[Add model event got fired]");
		},

		onModelRemoved: function() {
			console.log("[Remove model event got fired]");
		}
	});

	/*
		Creating an object from MasterCollection which calls initialize function.
	*/
	var masterCollection = new MasterCollection();

	/*
		Add a model (or an array of models) to the collection.
		Firing an "add" event.
	*/
	masterCollection.add(new MasterModel({name: 'Ashwin Hegde'}));
	masterCollection.add(new MasterModel({name: 'Vinayak Patil'}));
	masterCollection.add(new MasterModel({name: 'Jerin John'}));

	/*
		Display the data currently added in the collection.
	*/
	console.log("Data in Collection :: Add ")
	console.log(masterCollection.toJSON());

	/*
		Remove a model (or an array of models) from the collection. Fires a "remove" event,

		`at` is used to get a model from a collection, specified by index.
		Note: index starts from 0
	*/
	masterCollection.remove(masterCollection.at(1));
	/*
		Display the data after removing model from the collection.
	*/
	console.log("Remove data from Collection :: Remove ")
	console.log(masterCollection.toJSON());

	/*
		Collection maintains a length property, counting the number of models it contains.
	*/
	console.log("Collection length: " + masterCollection.length);


	/*
		Add a model at the end of a collection.
	*/
	masterCollection.push(new MasterModel({name: 'Saju Sasidharan'}));
	/*
		Display the data currently added in the collection.
	*/
	console.log("Data in Collection :: Push");
	console.log(masterCollection.toJSON());

	/*
		Remove and return the last model from a collection
	*/
	masterCollection.pop();
	/*
		Display the data after removing last model from the collection.
	*/
	console.log("Data in Collection :: POP");
	console.log(masterCollection.toJSON());


	/*
		Add a model at the beginning of a collection.
	*/
	masterCollection.unshift(new MasterModel({name: 'Yogesh Gaikwad'}));
	/*
		Display the data currently added in the collection.
	*/
	console.log("Data in Collection :: unshift");
	console.log(masterCollection.toJSON());

	/*
		Remove and return the first model from a collection.
	*/
	masterCollection.shift();
	/*
		Display the data after removing first model from the collection.
	*/
	console.log("Data in Collection :: Shift");
	console.log(masterCollection.toJSON());

})();