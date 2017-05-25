// Concept 4: Drawing with Data
var top_10 = [
    {'movie': 'The Avengers', 'release_year': 2012, 'infl_adj_sales': 677307543}
    , {'movie': 'The Dark Knight', 'release_year': 2008, 'infl_adj_sales': 642419549}
    , {'movie': 'Avengers: Age of Ultron', 'release_year': 2015, 'infl_adj_sales': 470984663}
    , {'movie': 'The Dark Knight Rises', 'release_year': 2012, 'infl_adj_sales': 486985321}
    , {'movie': 'Iron Man 3', 'release_year': 2013, 'infl_adj_sales': 435151675}
    , {'movie': 'Captain America: Civil War', 'release_year': 2016, 'infl_adj_sales': 408084349}
    , {'movie': 'Spider-Man', 'release_year': 2002, 'infl_adj_sales': 601043053}
    , {'movie': 'Spider-Man 2', 'release_year': 2004, 'infl_adj_sales': 520287726}
    , {'movie': 'Deadpool', 'release_year': 2016, 'infl_adj_sales': 363070709}
    , {'movie': 'Spider-Man 3', 'release_year': 2007, 'infl_adj_sales': 423108591}
];

var w = 500;
var h = 400;
var padding = 20;
var svg = d3.select('body')
            .append('svg')
            .style('width',w)
            .style('height',h);

var xScale = d3.scaleLinear()
               .domain([d3.min(top_10, function(d) { 
                            return +d.release_year; })
                        , d3.max(top_10, function(d) { 
                            return +d.release_year; })])
               .range([0 + padding, w - padding]);
var yScale = d3.scaleLinear()
               .domain([0
                        , d3.max(top_10, function(d) { 
                            return d.infl_adj_sales; 
                        })])
               .range([0, h - padding]);

svg.selectAll('circle')
   .data(top_10)
   .enter()
   .append('circle')
   .attr('cx', function(d, i) {
        return xScale(d.release_year);
   })
   .attr('cy', function(d, i) {
        return yScale(d.infl_adj_sales);
   })
   .attr('r', 10)
   .attr('fill', 'slategray');

svg.append('g')
   .call(d3.axisBottom(xScale));
svg.append('g')
   .call(d3.axisLeft(yScale));