//creating the scatter plot data for numbers of players vs metascore
// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 900 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")")

//Read the data
d3.csv('new_steam_db1.csv', function(data) {
  console.log(data)
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 0])
    .range([ 0, width ]);
  svg.append("g")
    .attr("class", "myXaxis")  
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .attr("opacity", "0")

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 1])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.Owners); } )
      .attr("cy", function (d) { return y(d.Metascores); } )
      .attr("r", 5)
      .style("fill", "red");

  // new X axis
  x.domain([-1000000000, 10000000000])
  svg.select(".myXaxis")
    .transition()
    .duration(2000)
    .attr("opacity", "1")
    .call(d3.axisBottom(x));

  svg.selectAll("circle")
    .transition()
    .delay(function(d,i){return(i*3)})
    .duration(2000)
    .attr("cx", function (d) { return x(d.Owners); } )
    .attr("cy", function (d) { return y(d.Metascores); } )

  //Create Axes Labels
  svg.append('text')
     .attr('transform', "rotate(-90)")
     .attr('y', 0-margin.left)
     .attr('x', 0-(height/2))
     .attr('dy', "1em")
     .attr('class', 'axisText')
     .text("Metascore")

    svg.append('text')
     .attr('transform', `translate(${width/2}, ${height+27})`)
     .attr('class','axisText')
     .text('Number of Players')
})