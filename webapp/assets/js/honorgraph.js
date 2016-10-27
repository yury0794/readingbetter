google.charts.load("current", {
	packages : [ 'corechart' ]
});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	
	var id0 = $("input[name=id0]").val();
	var id1 = $("input[name=id1]").val();
	var id2 = $("input[name=id2]").val();
	
	var score0 = parseInt($("input[name=score0]").val());
	var score1 = parseInt($("input[name=score1]").val());
	var score2 = parseInt($("input[name=score2]").val());
	
	var data = google.visualization.arrayToDataTable([	// 차트에 들어갈 데이터
	             [ "ID", "점수", {role : "style"} ],
	             [ id1, score1, "color : #CFCFCF; opacity: 0.8" ],
	             [ id0, score0, "color : #FFFF70; opacity: 0.8" ],
			[ id2, score2, "color : #EBB18F; opacity: 0.8" ] ]);
	
	var view = new google.visualization.DataView(data);
	view.setColumns([ 0, 1, {
		calc : "stringify",
		sourceColumn : 1,
		type : "string",
		role : "annotation"
	}, 2 ]);

	var options = {
		title : "",
		height : 400,
		bar : {
			groupWidth : "68%"
		},
		legend : {
			position: 'none'
		},
		annotations : {
			textStyle : {
				fontName : 'Tahoma',
				fontSize : 18,
				bold : true,
				// The transparency of the text.
				opacity : 1
			}
		},
		animation:{
	        duration: 2500,
	        easing: 'out',
	        startup:'true'
		},
		hAxis : {
			textStyle : {
				color : '#181818',
				auraColor : '#DCDCDC',
				fontName : 'Arial',
				fontSize : 19,
				bold : true
			}
		},
		vAxis : {
			textPosition : 'none'
		},
		
	};
	var chart = new google.visualization.ColumnChart(document
			.getElementById("graph"));
	chart.draw(view, options);
}