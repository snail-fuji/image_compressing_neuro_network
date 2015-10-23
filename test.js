var ITERATIONS = 200000;

function test() {
  // RecirculationNeuralNetwork.init(25, 16);
  ImageToVectorsConverter.init(255, 1, 5, 5);
  var vectors = ImageToVectorsConverter.convert(getImageData(secondTestData[0]));
  console.log(vectors);
  // for(var j = 0; j < ITERATIONS; j++)
  //   RecirculationNeuralNetwork.step(vector);
  // console.log(vector);
  // console.log(RecirculationNeuralNetwork.step(vector));
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
    width: 100,
    height: 100,
  },
]

var thirdTestData = [
  {
    div: "img1",
    width: 100,
    height: 100,
    subWidhth: 5,
    subHeight: 5,
  }
]