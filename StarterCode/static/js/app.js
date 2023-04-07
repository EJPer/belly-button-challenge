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
  
  var metaArray = meta.filter(xObj => xObj.id == x);

  var result = metaArray[0];
   
  console.log(result);

  var PANEL = d3.select('#sample-metadata');
  
  PANEL.html('');

//Object.entries, you are going to use panel.append() 

});
}

function charts(chart) {
  d3.json(url).then((data) => {
  
    var sample = data.samples;
    
    var sampleArray = sample.filter(xObj => xObj.id == chart);
  
    var result = sampleArray[0];
     
    console.log(result);
    
    var layoutBar = {



    }

   var dataBar = {


   } 

   Plotly.newPlot('bar',[dataBar],layoutBar );

   var layoutBubble = {

   }

   var dataBubble = {


   }

  Plotly.newPlot('bubble',[dataBubble],layoutBubble);
  });
}

function optionChanged(value) {
  buildmetaData(value);
  charts(value);

}




















  ///attempt 1
  //   let trace1 = {
  //     x: reversedData[0].id,
  //     y: reversedData[0].sample_values[1],
  //     text: reversedData[0].otu_labels[1],
  //     type:'bar',
  //     orientation: "h"

  //   };
    
  //   //apply layout
  //   let layout = {
  //     title: 'Sample Values per ID',
  //     margin:{
  //       l: 500,
  //       r: 500,
  //       t: 500,
  //       b: 500
  //     }

  //   };
    
  //   console.log(reversedData[0])
  //   console.log(reversedData[0].sample_values[1])
  //   console.log(reversedData[0].otu_ids[1])
  //   console.log(reversedData[0].otu_labels[1])
    
  //   //trace data array
  //   let traceData = [trace1];

  //   Plotly.newPlot("bar", traceData, layout);

  // });

//Horizontal bar Chart 


