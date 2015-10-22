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
    return this.inputLayerVector;
  },

  setInputLayerVector: function(inputArray) {
    this.inputLayerVector = Vector.create(inputArray);
  },

  updateHiddenLayerVector: function() {
    var convertedInputLayerVector = Matrix.create([this.inputLayerVector.elements]);
    this.hiddenLayerVector = convertedInputLayerVector.multiply(this.firstWeightMatrix);
  },

  updateOutputLayerVector: function() {
    this.outputLayerVector = this.hiddenLayerVector.multiply(this.secondWeightMatrix);
  },

  updateWeightMatrixes: function() {
    var errorVector = this.outputLayerVector.subtract(this.inputLayerVector); //TODO check substraction.
    this.updateFirstWeightMatrix(errorVector);
    this.updateSecondWeightMatrix(errorVector);
  },

  updateSecondWeightMatrix: function(errorVector) {
    //Sylvester cannot multiply a vector with another vector & cannot transpose vector
    var trasposedHiddenLayerVector = Matrix.create([this.hiddenLayerVector.elements]).transpose();
    var convertedErrorVector = Matrix.create([errorVector.elements]);
    var deltaMatrix = trasposedHiddenLayerVector.multiply(convertedErrorVector).multiply(this.learningCoefficient);
    this.secondWeightMatrix = this.secondWeightMatrix.subtract(deltaMatrix)
  },

  updateFirstWeightMatrix: function(errorVector) {
    // var transposedSecondWeightMatrix = this.secondWeightMatrix.transpose();
    //TODO check this place. Maybe there is an error in the formula
    var transposedFirstWeightMatrix = this.firstWeightMatrix.transpose();
    //Sylvester cannot multiply a vector with another vector & cannot transpose vector
    var convertedErrorVector = Matrix.create([errorVector.elements]);
    var trasposedInputLayerVector = Matrix.create([this.inputLayerVector.elements]).transpose();
    var deltaMatrix = trasposedInputLayerVector.multiply(convertedErrorVector)
    .multiply(transposedFirstWeightMatrix)
    .multiply(this.learningCoefficient);
    this.firstWeightMatrix = this.firstWeightMatrix.subtract(deltaMatrix);
  }
}