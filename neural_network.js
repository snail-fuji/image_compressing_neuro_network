RecirculationNeuralNetwork = {

  firstWeightMatrix: null,
  secondWeightMatrix: null,
  inputLayerVector: null,
  outputLayerVector: null,
  hiddenLayerVector: null,
  learningCoefficient: 0.0001,

  init: function(fullSize, compressSize) {
    this.initWeightMatrixes(fullSize, compressSize);
  },

  initWeightMatrixes: function(n, m) {
    this.firstWeightMatrix = Matrix.Random(n, m); 
    this.secondWeightMatrix = this.firstWeightMatrix.transpose();
  },

  step: function(inputArray) {
    this.setInputLayerVector(inputArray);
    this.updateHiddenLayerVector();
    this.updateOutputLayerVector();
    this.updateWeightMatrixes();
    return this.outputLayerVector.elements[0];
  },

  setInputLayerVector: function(inputArray) {
    this.inputLayerVector = Matrix.create([inputArray]);
  },

  updateHiddenLayerVector: function() {
    this.hiddenLayerVector = this.inputLayerVector.multiply(this.firstWeightMatrix);
  },

  updateOutputLayerVector: function() {
    this.outputLayerVector = this.hiddenLayerVector.multiply(this.secondWeightMatrix);
  },

  updateWeightMatrixes: function() {
    var errorVector = this.outputLayerVector.subtract(this.inputLayerVector);
    this.updateFirstWeightMatrix(errorVector);
    this.updateSecondWeightMatrix(errorVector);
  },

  updateSecondWeightMatrix: function(errorVector) {
    var trasposedHiddenLayerVector = this.hiddenLayerVector.transpose();
    var deltaMatrix = trasposedHiddenLayerVector.multiply(errorVector).multiply(this.learningCoefficient);
    this.secondWeightMatrix = this.secondWeightMatrix.subtract(deltaMatrix)
  },

  updateFirstWeightMatrix: function(errorVector) {
    var transposedSecondWeightMatrix = this.secondWeightMatrix.transpose();
    var trasposedInputLayerVector = this.inputLayerVector.transpose();
    var deltaMatrix = trasposedInputLayerVector.multiply(errorVector).multiply(transposedSecondWeightMatrix).multiply(this.learningCoefficient);
    this.firstWeightMatrix = this.firstWeightMatrix.subtract(deltaMatrix);
  }
}