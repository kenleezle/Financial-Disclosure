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
  $(".data2").hide();
  $(".dataNcircle").hide();
  var official_json = 'js/sp_shifted_data/'+official+'.json';
  d3.json(official_json, function (err,spobj) {
    for (var i in spobj.Holdings) {
      var data = [];
      var holding = spobj.Holdings[i];
      console.log("drawing holding "+holding.Ticker);
      for (var j in holding.DailyPercentageChanges) {
        dpc = holding.DailyPercentageChanges[j];
        data.push([dpc.Date,dpc.PercentageChange]);
      }
      drawLine(data, graph, "data2", holding);
      console.log("done with "+holding.Ticker);
    }
    console.log("...done.");
  });
}

function initGraph() {
  // define dimensions of graph
  var m = [80, 80, 80, 80]; // margins
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


  // create left and right yAxis
  var yAxisLeft = d3.svg.axis().scale(y).ticks(6).tickSubdivide(1).orient("left");
  var yAxisRight = d3.svg.axis().scale(y).ticks(6).tickSubdivide(1).orient("right");
  
  // Add the y-axis to the left and right
  graph.append("svg:g")
        .attr("class", "y axis")
        .attr("transform", "translate(-10,0)")
        .call(yAxisLeft);
  
  graph.append("svg:g")
			      .attr("class", "y axis")
			      .attr("transform", "translate("+(w+10)+",0)")
			      .call(yAxisRight);
  
  $("#graph").append("<div class='infobox' style='display:none;'>Test</div>");
 
}

function drawLine(mydata, mygraph, graphclass, myholding) {
		/* implementation heavily influenced by http://bl.ocks.org/1166403 */
		$(".data2").show();
		$(".dataNcircle").show();
		
		var maxsp = findMax(mydata);
		var minsp = findMin(mydata);
		
		var myline = d3.svg.line()
			.x(function(d,i) {
				return x(new Date(d[0]));
			})
			.y(function(d) { 
				return y(parseFloat(d[1]));
			});
			
		mygraph.append("svg:path")
			.attr("d", myline(mydata))
			.attr("class", graphclass)
			.on("mouseover",function(d) {
				if(graphclass != "data1"){
					showData(this, parseFloat(mydata[mydata.length-1][1]-mydata[0][1]), myholding);
				}
			})
			.on("mouseout",function(d) {
				if(graphclass != "data1"){
					hideData();
				}
			});
    	
    	if(graphclass != "data1"){
    	//addLegend();
			mygraph
				 .selectAll("circleN")
				 .data(mydata)
				 .enter().append("circle")
				 .attr("fill", function(d,i) { if(i == 0){
				 								return "#333";
				 								}else if(i == mydata.length-1){
					 								return "#333";
				 								}else{
					 								return "none";
				 								}})
				 .attr("class", "dataNcircle")
				 .attr("r", 4)
				 .attr("cx", function(d,i) { if(i == 0 || i == mydata.length-1){
				 								return x(Date.parse(d[0]));
				 								}})
				 .attr("cy", function(d,i) { if(i == 0 || i == mydata.length-1){
				 								return y(parseFloat(d[1]));
				 								}})
				 .on("mouseover",function(d) { showData(this, parseFloat(mydata[mydata.length-1][1]-mydata[0][1]), myholding);})
				 .on("mouseout",function(d) { hideData();});
		}
		
		function addLegend(){
		var color_hash = {  0 : ["apple", "green"],
					    1 : ["mango", "orange"],
					    2 : ["cherry", "red"]
					  } 
		
		var legend = mygraph.append("g")
		  .attr("class", "legend")
	        //.attr("x", w - 65)
	        //.attr("y", 50)
		  .attr("height", 100)
		  .attr("width", 100)
	    .attr('transform', 'translate(-20,50)')    
	      
	    
	    legend.selectAll('rectLegend')
	      .data(mydata)
	      .enter()
	      .append("rect")
		  .attr("x", 265)
	      .attr("y", function(d, i){ return i *  20;})
		  .attr("width", 10)
		  .attr("height", 10)
		  .style("fill", function(d) { 
	        var color = color_hash[mydata.indexOf(d)][1];
	        return color;
	      })
	      
	    legend.selectAll('text')
	      .data(mydata)
	      .enter()
	      .append("text")
		  .attr("x", 252)
	      .attr("y", function(d, i){ return i *  20 + 9;})
		  .text(function(d) {
	        var text = color_hash[mydata.indexOf(d)][0];
	        return text;
	      });
	 }
}

function showData(obj, d, hld) {
	 var coord = d3.mouse(obj);
	 var infobox = d3.select(".infobox");
 
	 // now we just position the infobox roughly where our mouse is
	 infobox.style("left", (coord[0] + 100) + "px" );
	 infobox.style("top", (coord[1] - 175) + "px");
	 
	 //if(d != 0){
	 	$(".infobox").html(hld.Ticker+": "+d.toFixed(2)+" %");
	 //} else {
	//	$(".infobox").html(hld.Ticker); 
	 //}
	 
	 $(".infobox").show();
}

function hideData() {
	 $(".infobox").hide();
}
