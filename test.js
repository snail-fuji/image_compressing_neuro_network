function test() {
  RecirculationNeuralNetwork.init(9, 4);
  while(true) {
    for(var i = 0; i < firstTestData.length; i++)
      console.log(RecirculationNeuralNetwork.step(firstTestData[i]));
  }
  //TODO Add this to separated method
  //TODO Add QUnit assert in the case of exception
  // ImageToVectorConverter.init(255, 1);
  // for(var i = 0; i < secondTestData.length; i++)
  //   console.log(ImageConverter.convert(getImageData(secondTestData[i])));
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