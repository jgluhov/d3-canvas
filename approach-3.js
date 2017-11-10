;(function () {
    const fragment = document.createDocumentFragment();
    const container = d3.select(fragment);

    window.render3 = function(data) {
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

        const context = contexts[2];
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
})();