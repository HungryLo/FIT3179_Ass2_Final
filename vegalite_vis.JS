var vg_1 = "Map.JSON";
vegaEmbed("#choro_map", vg_1, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "LineChart.JSON";
vegaEmbed("#line_chart", vg_2, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "BubbleChart.JSON";
vegaEmbed("#bubble_chart", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "StackedBarChart.JSON";
vegaEmbed("#stack_bar_chart", vg_4, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "Donut1.JSON";
vegaEmbed("#donut_chart_1", vg_5, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_6 = "Donut2.JSON";
vegaEmbed("#donut_chart_2", vg_6, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);