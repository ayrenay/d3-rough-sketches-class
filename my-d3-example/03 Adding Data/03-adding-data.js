// Concept 3: Adding data
var sample_data = [5, 10, 15, 20, 25];

d3.select('body') 
  .selectAll('ul') 
  .data(sample_data)
  .enter()
  .append('li')
  .text(function (d,i) {
        return d;
  });

/*
d3.select('body') // go to the body of the page      
  .append('ul') // add a container for unordered list elements (bullets)
  .selectAll('li') // select any bullets (so we can do stuff with them)
  .data(sample_data) // the data for all these bullets are in sample_data
  .enter() // look at the array that describes which data are bound to which element
  .append('li') // add any needed bullet points
  .text(function (d,i) { // for each row in sample_data, assign value of d to 'li'
        return d; // d --> sample_data[i]
  });
*/

/*
var svg = d3.select('svg'); // What does this do?
/*
The SVG element will hold the picture we're going to draw. You can't see it in the HTML yet, but you will!

svg.style('background-color','white');

var points = svg.selectAll('circle')
                .data(sample_data);
// Nothing has been drawn yet! Check out the 'Elements' tab in the WI
*/