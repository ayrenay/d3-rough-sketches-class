// Concept 4: Drawing with Data
var sample_data = [5, 10, 15, 20, 25];
var svg = d3.select('body').append('svg'); // What does this do?
/*
The SVG element will hold the picture we're going to draw. You can't see it in the HTML yet at first, but you will!
*/

svg.selectAll('circle')
   .data(sample_data)
   .enter()
   .append('circle')
   .attr('cx', function(d, i) {
        return d;
   })
   .attr('cy', 50)
   .attr('r', 2)
   .attr('fill', 'slategray');

/*
// Try inspecting the page at each step
// add some circles to the DOM
svg.selectAll('circle')
   .data(sample_data)
   .enter()
   .append('circle');

// give those circles an x position ('cx') and a y position ('cy')
svg.selectAll('circle')
   .data(sample_data)
   .enter()
   .append('circle')
   .attr('cx', function(d, i) {
        return d;
   })
   .attr('cy', 50);

// give the circles a size (so we can see them!)
svg.selectAll('circle')
   .data(sample_data)
   .enter()
   .append('circle')
   .attr('cx', function(d, i) {
        return d;
   })
   .attr('cy', 50)
   .attr('r', 2)
*/