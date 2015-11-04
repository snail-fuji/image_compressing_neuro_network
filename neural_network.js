RecirculationNeuralNetwork = {

  firstWeightMatrix: null,
  secondWeightMatrix: null,
  inputLayerVector: null,
  outputLayerVector: null,
  hiddenLayerVector: null,
  firstLearningCoefficient: 0.0001,
  secondLearningCoefficient: 0.0001,

  init: function(fullSize, compressSize) {
    this.initWeightMatrixes(fullSize, compressSize);
    this.resetNumberOfIterations();
  },

  resetNumberOfIterations: function() {
    this.numberOfIterations = 0;
  },

  initWeightMatrixes: function(n, m) {
    this.firstWeightMatrix = Matrix.Random(n, m); 
    this.secondWeightMatrix = this.firstWeightMatrix.transpose();
  },

  step: function(inputArray) {
    this.kick(inputArray);
    this.updateWeightMatrixes();
    // this.updateLearningCoefficients();
    return this.outputLayerVector.elements[0];
  },

  kick: function(inputArray) {
    this.setInputLayerVector(inputArray);
    this.updateHiddenLayerVector();
    this.updateOutputLayerVector();
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
    var deltaMatrix = trasposedHiddenLayerVector.multiply(errorVector).multiply(this.secondLearningCoefficient);
    this.secondWeightMatrix = this.secondWeightMatrix.subtract(deltaMatrix)
  },

  updateFirstWeightMatrix: function(errorVector) {
    var transposedSecondWeightMatrix = this.secondWeightMatrix.transpose();
    var trasposedInputLayerVector = this.inputLayerVector.transpose();
    var deltaMatrix = trasposedInputLayerVector.multiply(errorVector).multiply(transposedSecondWeightMatrix).multiply(this.firstLearningCoefficient);
    this.firstWeightMatrix = this.firstWeightMatrix.subtract(deltaMatrix);
  },

  // updateLearningCoefficients: function() {
  //   this.updateFirstLearningCoefficient();
  //   this.updateSecondLearningCoefficient();
  // },

  // updateSecondLearningCoefficient: function() {
  //   var sum = 0;
  //   for(var i = 0; i < this.hiddenLayerVector.elements[0].length; i++) {
  //     element = this.hiddenLayerVector.elements[0][i];
  //     sum += element*element;
  //   }
  // },

  // updateFirstLearningCoefficient: function() {
  //   var sum = 0;
  //   for(var i = 0; i < this.inputLayerVector.elements[0].length; i++) {
  //     element = this.inputLayerVector.elements[0][i];
  //     sum += element*element;
  //   }
  //   if (this.numberOfIterations > 50)
  //     this.firstLearningCoefficient = 1/sum;
  // },
}