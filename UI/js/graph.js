function findMax(obj){
  var temp1 = [];
  for(var x=0; x< obj.length; x++){
    temp1[x] = parseFloat(obj[x][1]);
  }
  return Math.max.apply( Math, temp1 );
}

function findMin(obj){
  var temp2 = [];
  for(var x=0; x< obj.length; x++){
    temp2[x] = parseFloat(obj[x][1]);
  }
  return Math.min.apply( Math, temp2 );
}
function drawOfficial(official) {
  var official_json = 'js/data/'+official+'.json';
  var data = [];
  d3.json(official_json, function (err,spobj) {
    for (var i in spobj.days) {
      data.push([spobj.days[i].date,spobj.days[i].change]);
    }
    drawLine(data, graph, "data2");
    console.log("...done.");
  });
}


function initGraph() {
  // define dimensions of graph
  var m = [80, 80, 80, 80]; // margins
  // var w = window.innerWidth - m[1] - m[3];	// width
  // var h = window.innerHeight - m[0] - m[2]; // height
  var w = 700;
  var h = 400;

  // var maxsp = findMax(newspdata);
  // var minsp = findMin(newspdata);
  var maxsp = 1;
  var minsp = -1;
  
  var startTime = new Date("2006-01-01");
  var endTime = new Date("2010-12-31");
  var timeStep = 86400000;//3.15569e10;
  
	
  // Add an SVG element with the desired dimensions and margin.
  graph = d3.select("#graph").append("svg:svg")
        .attr("width", w + m[1] + m[3])
        .attr("height", h + m[0] + m[2])
      .append("svg:g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
  
 
  // X scale starts at epoch time 1335035400000, ends at 1335294600000 with 300s increments
  x = d3.time.scale().domain([startTime, endTime]).range([0, w]);
  x.tickFormat(d3.time.format("%Y-%m-%d"));

  // create yAxis
  var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(1);
 
  // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
  y = d3.scale.linear().domain([minsp, maxsp]).range([h, 0]);


  // Add the x-axis.
  graph.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + h + ")")
        .call(xAxis);


  // create left yAxis
  var yAxisLeft = d3.svg.axis().scale(y).ticks(6).tickSubdivide(1).orient("left");
  // Add the y-axis to the left
  graph.append("svg:g")
        .attr("class", "y axis")
        .attr("transform", "translate(-10,0)")
        .call(yAxisLeft);
}

function drawLine(mydata, mygraph, graphclass) {
		/* implementation heavily influenced by http://bl.ocks.org/1166403 */
		
		var maxsp = findMax(mydata);
		var minsp = findMin(mydata);
		
		var myline = d3.svg.line()
			.x(function(d,i) {
				return x(new Date(d[0]));
			})
			.y(function(d) { 
				return y(parseFloat(d[1]));
			})
			
		mygraph.append("svg:path").attr("d", myline(mydata)).attr("class", graphclass);
    	
    	if(graphclass != "data1"){
			mygraph
				 .selectAll("circleN")
				 .data(mydata)
				 .enter().append("circle")
				 .attr("fill", function(d,i) { if(i == 0 || i == mydata.length-1){
				 								return "black";
				 								}else{
					 								return "none";
				 								}})
				 .attr("class", "dataNcircle")
				 .attr("r", 5)
				 .attr("cx", function(d,i) { if(i == 0 || i == mydata.length-1){
				 								//console.log("This is ix = "+i+" -> "+Date.parse(d[0]));
				 								return x(Date.parse(d[0]));
				 								}})
				 .attr("cy", function(d,i) { if(i == 0 || i == mydata.length-1){
				 								//console.log("This is iy = "+i+" -> "+parseFloat(d[1]));
				 								return y(parseFloat(d[1]));
				 								}});
		}
}
