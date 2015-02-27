newsApp.factory('BeatsFactory', function BeatsFactory () {
  var factory = {};
  factory.beats = [
    { name: "Crime", id: 1, reporters: [{name: "Tyler", birthDay: "March 8, 1984", timeEmployed: "3 Years" }] },
    { name: "Entertainment", id: 2, reporters: [] },
    { name: "Politics", id: 3, reporters: [{name: "Tyler", birthDay: "March 8, 1984", timeEmployed: "3 Years" }] },
    { name: "Law", id: 4, reporters: [] },
    { name: "Technology", id: 5, reporters: [{name: "Tyler", birthDay: "March 8, 1984", timeEmployed: "3 Years" }] }
  ];
  factory.addBeat = function() {
    factory.beats.push({ name: factory.beatName, id: factory.beats.length + 1, reporters: [] });
    factory.beatName = null;
  };
  return factory;
})
