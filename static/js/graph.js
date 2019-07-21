queue()
    .defer(d3.csv, "data/archive.csv")
    .await(makeGraphs);
    
function makeGraphs(error, archiveData) {

}