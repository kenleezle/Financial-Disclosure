var sp500_json = 'js/SP500.json';
sp500 = [];
d3.json(sp500_json, function (err,spobj) {
	for (var i in spobj.days) {
		sp500.push([spobj.days[i].date,spobj.days[i].change]);
	}
	drawSP500();
});
