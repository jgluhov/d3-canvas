;(function () {
    window.render1 = function() {
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
})();