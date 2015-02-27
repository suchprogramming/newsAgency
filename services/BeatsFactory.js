newsApp.factory('BeatsFactory', function BeatsFactory () {
  var factory = {};
  factory.beats = [
    { name: "Crime", id: 1, reporters: [] },
    { name: "Entertainment", id: 2, reporters: [] },
    { name: "Politics", id: 3, reporters: [] },
    { name: "Law", id: 4, reporters: [] },
    { name: "Technology", id: 5, reporters: [] }
  ];
  factory.addBeat = function() {
    factory.beats.push({ name: factory.beatName, id: factory.beats.length + 1, reporters: [] });
    factory.beatName = null;
  };
  return factory;
})
