YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Brink",
        "Brink.Adapter",
        "Brink.Class",
        "Brink.CoreObject",
        "Brink.Model",
        "Brink.Object",
        "Brink.RESTAdapter",
        "Brink.Schema",
        "Brink.Store"
    ],
    "modules": [
        "Brink",
        "data"
    ],
    "allModules": [
        {
            "displayName": "Brink",
            "name": "Brink"
        },
        {
            "displayName": "data",
            "name": "data",
            "description": "Brink's Model, Store and Adapter Classes offers you flexible and easy way to work with your data layer.\nUsing Brink.attr(), Brink.belongsTo() and Brink.hasMany() you can define simple or complex model\nstructures.\n```javascript\nvar MyStore = $b.Store.create();\nvar Person = $b.Model.extend({\n    primaryKey : 'id',\n    modelKey : 'person',\n    adapter : $b.RESTAdapter.create(),\n    store : MyStore,\n    schema : $b.Schema.create({\n        firstName : $b.attr(String),\n        lastName : $b.attr(String),\n        children : $b.hasMany('person'),\n        spouse : $b.belongsTo('person')\n    })\n});\nvar dad = Person.create({\n    firstName : 'John',\n    lastName : 'Doe'\n});\nvar mom = Person.create({\n    firstName : 'Jane',\n    lastName : 'Doe'\n});\nvar child1 = Person.create({\n    firstName : 'Mary',\n    lastName  : 'Doe'\n});\nvar child2 = Person.create({\n    firstName : 'Bob',\n    lastName  : 'Doe'\n});\ndad.spouse = mom;\ndad.children.push(child1, child2);\n$b.Q.all([\n    mom.save(),\n    child1.save(),\n    child2.save()\n]).then(function () {\n    dad.save();\n});\n```\nLooking at the example above, it might be a bit confusing why we are saving the mom and children\nbefore we save the `dad` record.\nThe reason for this is that the mom and children do not yet exist, thus if we tried to `serialize()` the `dad`\nrecord they would come back with null primary key values."
        }
    ],
    "elements": []
} };
});