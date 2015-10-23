var ITERATIONS = 100000;

function test() {
  RecirculationNeuralNetwork.init(25, 16);
  ImageToVectorsConverter.init(255, 1, 5, 5);
  var vectors = ImageToVectorsConverter.convert(getImageData(secondTestData[0]));
  console.log(vectors);
  for(var i = 0; i < ITERATIONS; i++)
    for(var j = 0; j < vectors.length; j++)
      RecirculationNeuralNetwork.step(vectors[j]);
  var results = [];
  for(var i = 0; i < vectors.length; i++) 
    results.push(RecirculationNeuralNetwork.step(vectors[i]));
  console.log(results);
}

function getImageData(imageSizeAndDiv) {
  return document.getElementById(imageSizeAndDiv.div).getContext('2d').getImageData(0, 0, imageSizeAndDiv.width, imageSizeAndDiv.height)
}
var firstTestData = [
  [0.1, 0.5, 0.2, 0.3, -0.2, 0.6, 0.7, -0.7, 0.9],
]

var secondTestData = [
  {
    div: "img1",
    width: 25,
    height: 25,
  },
]