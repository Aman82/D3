// Create SVG container
var svgContainer = 
	d3.select("body")
		.append("svg")
			.attr("width", 200)
			.attr("height", 200)
			.style("border", "1px solid black");

var jsonCircles = [
	{ "cx": 30, "cy": 30, "r": 25, "color": "green" },
	{ "cx": 150, "cy": 150, "r": 50, "color": "purple" }
];

// Create circles based on data
var circles = svgContainer.selectAll("circle")
	.data(jsonCircles)
	.enter()
	.append("circle");

// Set up each newly created circle
var circleAttributes = circles
	.attr("cx", function (d) { return d.cx; })
	.attr("cy", function (d) { return d.cy; })
	.attr("r", function (d) { return d.r; })
	.style("fill", function (d) { return d.color; })
	.on("click", function (e) {
		d3.select(this).style("fill", "blue");
	});



	//enter() - incoming element
	//update() - persistent element
	//exit() - outgoing element
// if (d == 40) return "green";
// 	 	else if (d == 20) return "purple";
// 	 	else return "orange";


	// svgContainer
	// .append("circleRadii")
	// .attr(“cx”, 100)
	// .attr(“cy”, 100)
	// .attr(“r”, 50)
	// .fill(“purple”);
