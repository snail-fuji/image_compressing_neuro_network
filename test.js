var ITERATIONS = 6000;

function test() {     
  RecirculationNeuralNetwork.init(25, 16);
  ImageToVectorsConverter.init(255, 1, 5, 5);
  var vectors = ImageToVectorsConverter.convert(secondTestData[0].div, secondTestData[0].width, secondTestData[0].height);
  for(var i = 0; i < ITERATIONS; i++)
    for(var j = 0; j < vectors.length; j++)
      RecirculationNeuralNetwork.step(vectors[j]);
  var results = [];
  for(var i = 0; i < vectors.length; i++) 
    results.push(RecirculationNeuralNetwork.step(vectors[i]));
  draw(vectors, 5, 5, "input");
  draw(results, 5, 5, "output");
  // console.log(ImageToVectorsConverter.restore(results, 5, 5));
}

function draw(vectors, width, height, canvas) {
  ImageToVectorsConverter.restore(canvas, vectors, width, height);
}

var firstTestData = [
  [0.1, 0.5, 0.2, 0.3, -0.2, 0.6, 0.7, -0.7, 0.9],
]

var secondTestData = [
  {
    div: "img1",
    width: 5,
    height: 5,
  },
]