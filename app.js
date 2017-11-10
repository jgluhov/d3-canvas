const plot = d3.select('#plot');

const chart = plot.append('canvas')
    .attr('width', 400)
    .attr('height', 300);

const context = chart.node().getContext('2d');
const data = [1, 12, 20, 23];

const xScale = d3.scaleLinear()
    .domain([1, 23])
    .range([10, 390]);

setBackground(context);

data.forEach(function (d) {
    context.beginPath();
    context.rect(xScale(d), 150, 10, 10);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
});

function setBackground(context) {
    context.fillStyle = '#9ea7b8';
    context.fillRect(0, 0, 400, 300);
}