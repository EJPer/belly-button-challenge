//Loading in Data//

//url
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

function init() {
  d3.json(url).then(function(data) {
  
    console.log(data.samples)
  
    //array to hold Id names:
    id_names = []
  
    //for loop to capture names
    for (let i = 0 ; i < data.samples.length; i++){
    let id_row = data.samples[i].id
    
    id_names.push(id_row)
  
    }
    console.log(id_names)
    
    selector = d3.select('#selDataset');
      for (let i = 0; i<id_names.length; i++)
      selector.append('option').text(id_names[i]).property("value", id_names[i])
  
    let dropdownMenu = d3.select('#selDataset');
    
    let dataset = dropdownMenu.property("value");
    
    first_row = data.samples[0].id;
    
    buildmetaData(first_row);
    charts(first_row);
    })
   
}

init();

function buildmetaData(x) {
  d3.json(url).then((data) => {
  
  var meta = data.metadata;
  console.log(meta)
  var metaArray = meta.filter(xObj => xObj.id == x);
  console.log(metaArray)
  var result = metaArray[0];
   
  console.log(result.id);

  var PANEL = d3.select('#sample-metadata');
  
  PANEL.html(``);


  //adding text for meta
  for(key in result){
    PANEL.append("h5").text(`${key.toUpperCase()}: ${result[key]}`)
  }  ;




 

});
}

function charts(chart) {
  d3.json(url).then((data) => {

    var sample = data.samples;
    
    var sampleArray = sample.filter(xObj => xObj.id == chart);
   
    var idsOtu = sample.otu_labels;
    
    var result = sampleArray[0];
    
    var sampleBarData = sampleArray.sample_values
    

   testX = result.sample_values.slice(0,10).reverse();
   testY = result.otu_ids;
   testLabels = result.otu_labels;
  
  otu_w_text = testY.map(num => 'OTU' + num)
  console.log(testX)
  console.log(TestYString)
  console.log(String.valueOf(result.otu_ids.slice(0,10).reverse()))  

    var layoutBar = {
      title: "Top 10 Sample Values"


    }

   var dataBar = {
    x: testX,
    y: otu_w_text,
    labels: result.otu_labels,
    text: result.otu_labels,
    type: "bar",
    orientation: 'h'

   } 

   Plotly.newPlot('bar',[dataBar],layoutBar );

   var layoutBubble = {
    title: 'Otu Ids vs Sample Value',
    xaxis:{title: 'Otu Ids'},
    yaxis:{title: 'Sample Value'},

   };

   var dataBubble = {
    x: result.otu_ids,
    y: result.sample_values,
    mode: 'markers',
    marker: {
      size: result.sample_values,
      color: result.otu_ids,
      colorscale:'Viridis',
      

    },
    text:result.otu_labels,
    type: 'scatter',
    labels: result.otu_labels,
  


   }

  Plotly.newPlot('bubble',[dataBubble],layoutBubble);
  });
}

function optionChanged(value) {
  buildmetaData(value);
  charts(value);
  
}




















  