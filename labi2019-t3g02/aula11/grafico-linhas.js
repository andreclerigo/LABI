function desenhaGrafico() {
	$("#grafico-linhas").highcharts({
		title: {
			text: "Média de temperaturas",
		},

		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
		},

		series: [{
			name: "Leiria",
			data: [10.8, 11.4, 13.3, 14.9, 16.6, 19.1, 20.7, 21.1, 19.9, 17.6, 13.7, 11.3]
		},{
			name: "Aveiro",
			data: [8.0, 9.0, 11.0, 12.0, 14.0, 17.0, 19.0, 19.0, 18.0, 15.0, 11.0, 9.0]
		}]
	});
};