var datasetlist = [];
var comparelist = [];

var Official = function (set) {
  var listitem = document.createElement('li');
  
  var radiolabel = document.createElement('label');
  $(radiolabel).addClass('radio');

  var radio = document.createElement('input');
  $(radio).attr('type','radio');
  $(radio).attr('name','official');
  $(radio).attr('value',set.dataSetId);

  $(radiolabel).append(radio);
  $(radiolabel).append(set.displayName);

  $(listitem).append(radiolabel)

  $(radio).on('click', function (event) {
      //clear visual
      //show officials portfolio
      for (var i = 0; i < comparelist.length; i++) {
        $(comparelist[i].checkbox).removeAttr('checked');
      }
      console.log("Congressman with Id:"+event.currentTarget.value+" selected.");
    })
  $('#officiallist').append(listitem);
}

var Comparison = function (comp) {
  var listitem = document.createElement('li');
  
  var checkboxlabel = document.createElement('label');
  $(checkboxlabel).addClass('checkbox');

  var checkbox = document.createElement('input');
  $(checkbox).attr('type','checkbox');
  $(checkbox).attr('name','sets');

  $(checkboxlabel).append(checkbox);
  $(checkboxlabel).append(comp.displayName);

  $(listitem).append(checkboxlabel)

  $(checkbox).on('click', function () {
      //toggle comparison dataset
      console.log($(checkbox).is(':checked'));
      console.log(comp.dataSetId);
    })  
  $('#comparelist').append(listitem);

  this.checkbox = checkbox;
}

var officials = 'js/officials.json' //URL to JSON Feed of Data components
var comparisons = 'js/comparisons.json'

d3.json(officials, function (err,sets) {
    for (var i in sets.children) {
      datasetlist.push(new Official(sets.children[i]))
    }
  })

d3.json(comparisons, function (err,sets) {
    for (var i in sets.children) {
      comparelist.push(new Comparison(sets.children[i]))
    }
  });
