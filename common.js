;(function () {
    const charts = d3.selectAll('.chart');

    window.contexts = [];
    window.data = [1, 12, 20, 23];

    charts.append('canvas')
        .attr('width', 400)
        .attr('height', 300);

    charts.nodes().forEach(function (node) {
        window.contexts.push(node.firstChild.getContext('2d'));
    });

    window.xScale = d3.scaleLinear()
        .domain([1, 23])
        .range([10, 390]);

    window.clear = function (context) {
        context.fillStyle = '#9ea7b8';
        context.fillRect(0, 0, 400, 300);
    };
})();