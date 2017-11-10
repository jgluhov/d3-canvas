const charts = d3.selectAll('.chart'),
    contexts = [],
    data = [1, 12, 20, 23];

charts.append('canvas')
    .attr('width', 400)
    .attr('height', 300);

charts.nodes().forEach(function (node) {
    contexts.push(node.firstChild.getContext('2d'));
});

const xScale = d3.scaleLinear()
    .domain([1, 23])
    .range([10, 390]);

contexts.forEach(function (context) {
    context.fillStyle = '#9ea7b8';
    context.fillRect(0, 0, 400, 300);
});

/**
 * First way to draw on canvas
 */
data.forEach(function (d) {
    const context = contexts[0];

    context.beginPath();
    context.rect(xScale(d), 150, 10, 10);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
});


/**
 * Second way to draw on canvas
 */

const fragment = document.createDocumentFragment();