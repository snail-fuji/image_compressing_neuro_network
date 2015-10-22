var ITERATIONS = 200000;

function test() {
  RecirculationNeuralNetwork.init(25, 16);
  var error;
  var vector = ImageToVectorConverter.convert(getImageData(secondTestData[0]));
  for(var j = 0; j < ITERATIONS; j++)
    RecirculationNeuralNetwork.step(vector);
  console.log(vector);
  console.log(RecirculationNeuralNetwork.step(vector));
}

function getImageData(imagePositionAndDiv) {
  return document.getElementById(imagePositionAndDiv[0]).getContext('2d').getImageData(0, 0, imagePositionAndDiv[1], imagePositionAndDiv[2])
}
var firstTestData = [
  [0.1, 0.5, 0.2, 0.3, -0.2, 0.6, 0.7, -0.7, 0.9],
]

var secondTestData = [
  ["img1", 5, 5],
  // ["img2", 25, 25],
  // "img3"
]

var thirdTestData = [
]