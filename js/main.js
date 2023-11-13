
var w = 900, h = 500;

var container = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "container")
    .style("background-color", "rgba(0,0,0,0.2)");


var innerRect = container.append("rect")
    .datum(400)
    .attr("width", 800)
    .attr("height", 400);


var dataArray = [10, 20, 30, 40, 50];

var circlesFromArray = container.selectAll(".circlesFromArray")
    .data(dataArray)
    .enter()
    .append("circle")
    .attr("class", "circlesFromArray")
    .attr("r", function(d, i){
        return d;
    })
    .attr("cx", function(d, i){
        return 70 + (i * 180);
    })
    .attr("cy", function(d){
        return 450 - (d * 5);
    });

var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];

var circlesFromCityPop = container.selectAll(".circlesFromCityPop")
    .data(cityPop)
    .enter()
    .append("circle")
    .attr("class", "circlesFromCityPop")
    .attr("id", function(d){
        return d.city;
    })
    .attr("r", function(d){
        var area = d.population * 0.01;
        return Math.sqrt(area / Math.PI);
    })
    .attr("cx", function(d, i){
        return 90 + (i * 180);
    })
    .attr("cy", function(d){
        return 450 - (d.population * 0.0005);
    });
