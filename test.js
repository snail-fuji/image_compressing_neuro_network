function test() {
  ImageToVectorsConverter.init(255, 1, 5, 5);
  var vectors = ImageToVectorsConverter.convert(secondTestData[0].div, secondTestData[0].width, secondTestData[0].height);
  draw(vectors, secondTestData[0].width, secondTestData[0].height, "output");
  showDifference(secondTestData[0].div, secondTestData[0].width, secondTestData[0].height);
}

function draw(vectors, width, height, canvas) {
  ImageToVectorsConverter.restore(canvas, vectors, width, height);
}

function showDifference(div, width, height) {
  var input = document.getElementById(div).getContext('2d').getImageData(0, 0, width, height);
  var output = document.getElementById('output').getContext('2d').getImageData(0, 0, width, height);
  for(var i = 0; i < input.data.length; i++)
    if (input.data[i] != output.data[i])
      //TODO use QUnit
      console.log("Difference in " + (i - i%height)/height + " " + (i % height) + ". It's data[" + i + "]")
}

var firstTestData = [
  [0.1, 0.5, 0.2, 0.3, -0.2, 0.6, 0.7, -0.7, 0.9],
]

var secondTestData = [
  {
    div: "img1",
    width: 50,
    height: 50,
  },
]