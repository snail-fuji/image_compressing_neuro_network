// var MAX_VALUE = 255;
// var CHANNELS_NUMBER = 4;

// function convertChannelToCoefficient(channel) {
//   return 2*channel / MAX_VALUE - 1
// }

// function convertCoefficientToChannel(coefficient) {
//   return MAX_VALUE*(coefficient + 1)/2
// }

// function convertChannelMatrixToVector(matrix) {
//   var vector = [];
//   for(var i = 0; i < matrix.size; i++) {
//     var row = matrix[i]
//     for(var j = 0; j < row.size; j++)
//       vector.push(convertChannelToCoefficient(row[j]));
//   }
//   return vector;
// }

// function convertImageDataArrayToChannelMatrix(imageData, channel) {
//   var matrix = [];
//   var width = imageData.width;
//   for(var i = 0; i < imageDataArray.length; i+= CHANNELS_NUMBER) {
//     if (i % width)
//       matrix.push([])
//     matrix[matrix.length].push(imageDataArray[i]);
//   }
// }

// function convertImageDataArrayToVector(imageData) {
//   var channelMatrix = convertImageDataArrayToChannelMatrix(imageData, 0);
//   var vector = convertChannelMatrixToVector(channelMatrix);
//   return vector;
// }

// function getImageData(div) {
//   canvas = document.getElementById(div);
//   context = canvas.getContext('2d');
//   imageData = context.getImageData(0, 0, context.width, context.height);
// }

// function convertImageToVector(div) {
//   var imageData = getImageData(div);
//   var vector = convertImageDataArrayToVector(imageData);
//   return vector;
// }

//TODO add realization of all methods in this object + remove another content of a file
ImageToVectorConverter = {

  maxChannelValue: 255,
  channel: 1,
  CHANNELS_NUMBER: 4,
  
  init: function(maxChannelValue, channel) {
    this.maxChannelValue = maxChannelValue;
    this.channel = channel;
  },

  convert: function(imageData) {
    var vector = this.convertImageDataArrayToVector(imageData);
  },

  convertChannelMatrixToVector: function(matrix) {
    var vector = [];
    for(var i = 0; i < matrix.size; i++) {
      var row = matrix[i]
      for(var j = 0; j < row.size; j++)
        vector.push(this.convertChannelToCoefficient(row[j]));
    }
    return vector;
  },

  convertImageDataArrayToChannelMatrix: function(imageData) {
    var matrix = [];
    var width = imageData.width;
    for(var i = this.channel; i < imageDataArray.length; i+= this.CHANNELS_NUMBER) {
      if (i % width)
        matrix.push([])
      matrix[matrix.length].push(imageDataArray[i]);
    }
  },

  convertImageDataArrayToVector: function(imageData) {
    var channelMatrix = convertImageDataArrayToChannelMatrix(imageData, 0);
    var vector = convertChannelMatrixToVector(channelMatrix);
    return vector;
  },

  getImageData: function(div) {
    canvas = document.getElementById(div);
    context = canvas.getContext('2d');
    imageData = context.getImageData(0, 0, context.width, context.height);
  },

  restore: function(vector) {
    var image = this.convertImageDataArrayToVector(imageData);
  },

  convertChannelToCoefficient: function(channel) {
    return 2*channel / this.maxChannelValue - 1
  },

  convertCoefficientToChannel: function(coefficient) {
    return this.maxChannelValue*(coefficient + 1)/2
  },

}