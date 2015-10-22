ImageToVectorConverter = {

  maxChannelValue: 255,
  channel: 1,
  CHANNELS_NUMBER: 4,
  
  init: function(maxChannelValue, channel) {
    this.maxChannelValue = maxChannelValue;
    this.channel = channel;
  },

  convert: function(imageData) {
    return this.convertImageDataArrayToVector(imageData);
  },

  convertChannelMatrixToVector: function(matrix) {
    var vector = [];
    for(var i = 0; i < matrix.length; i++) {
      var row = matrix[i]
      for(var j = 0; j < row.length; j++)
        vector.push(this.convertChannelToCoefficient(row[j]));
    }
    return vector;
  },

  convertImageDataArrayToChannelMatrix: function(imageData) {
    var matrix = [];
    for(var i = this.channel; i < imageData.data.length; i+= this.CHANNELS_NUMBER) {
      if (i % imageData.width == this.channel)
        matrix.push([])
      matrix[matrix.length - 1].push(imageData.data[i]);
    }
    return matrix;
  },

  convertImageDataArrayToVector: function(imageData) {
    var channelMatrix = this.convertImageDataArrayToChannelMatrix(imageData, 0);
    var vector = this.convertChannelMatrixToVector(channelMatrix);
    return vector;
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