$(document).ready(function() {$('#example').DataTable( {data: dataSet,columns: [{ title: "T-Box" },{ title: "Host organism" },{ title: "Accession" },{ title: "Infernal Score" },{ title: "Accuracy" },{ title: "Length" },{ title: "Specifier Region" },{ title: "Predicted Specifier" },{ title: "Predicted T-Box region" },{ title: "Putative tRNA Family" },{ title: "Sequence (hidden)", "visible": false }]} );} );