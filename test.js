function test() {
  RecirculationNeuralNetwork.init(625, 144);
  var error;
  for(var j = 0; j < 5; j++) {
    for(var i = 0; i < firstTestData.length; i++) {
      var vector = ImageToVectorConverter.convert(getImageData(secondTestData[i]));
      var output = RecirculationNeuralNetwork.step(vector);
      console.log(output);
    }
  }
}

function getImageData(imagePositionAndDiv) {
  return document.getElementById(imagePositionAndDiv[0]).getContext('2d').getImageData(0, 0, imagePositionAndDiv[1], imagePositionAndDiv[2])
}
var firstTestData = [
  [0.1, 0.5, 0.2, 0.3, -0.2, 0.6, 0.7, -0.7, 0.9],
]

var secondTestData = [
  ["img1", 25, 25],
  // ["img2", 25, 25],
  // "img3"
]

var thirdTestData = [
]