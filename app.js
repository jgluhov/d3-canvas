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

const clear = function (context) {
    context.fillStyle = '#9ea7b8';
    context.fillRect(0, 0, 400, 300);
};

//------------------------------------------------------------------------------
const render1 = () => {
    const context = contexts[0];
    clear(context);

    data.forEach(function (d) {
        context.beginPath();
        context.rect(xScale(d), d3.randomUniform(0, 150)(), 10, 10);
        context.fillStyle = 'red';
        context.fill();
        context.closePath();
    });
};


render1();
//------------------------------------------------------------------------------
const fragment = document.createDocumentFragment();
const container = d3.select(fragment);

const render2 = (data) => {
    const update = container
        .selectAll('.rect')
        .data(data, (d) => d);

    update
        .enter()
        .append('rect')
        .attr('class', 'rect')
        .attr('x', xScale)
        .attr('y', d3.randomUniform(0, 150))
        .attr('size', 10)
        .attr('fillStyle', 'red');

    update
        .exit()
        .attr('size', 15)
        .attr('fillStyle', 'green');

    const context = contexts[1];
    clear(context);

    const elements = container.selectAll('.rect');

    elements.each(function () {
        const node = d3.select(this);

        context.beginPath();

        context.fillStyle = node.attr('fillStyle');
        context.rect(
            node.attr('x'),
            node.attr('y'),
            node.attr('size'),
            node.attr('size')
        );
        context.fill();

        context.closePath();
    })
};

render2(data);
render2([13, 17, 19, 3]);