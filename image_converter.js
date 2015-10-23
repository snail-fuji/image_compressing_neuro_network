ImageToVectorsConverter = {

  maxChannelValue: 255,
  channel: 1,
  CHANNELS_NUMBER: 4,
  
  init: function(maxChannelValue, channel, subWidth, subHeight) {
    this.maxChannelValue = maxChannelValue;
    this.channel = channel;
    this.subWidth = subWidth;
    this.subHeight = subHeight;
  },

  convert: function(imageData) {
    return this.convertImageDataArrayToVectors(imageData);
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

  convertChannelMatrixToVectors: function(matrix) {
    var k = this.subWidth;
    var p = this.subHeight;
    var vectors = [];
    for(var i = 0; i < matrix.length; i++)
      for(var j = 0; j < matrix[i].length; j++) {
        var newI = (i - i % k) / k;
        var newJ = (j - j % p) / p;
        var index = newI * p + newJ;
        if (!vectors[index]) vectors[index] = [];
        vectors[index].push(this.convertChannelToCoefficient(matrix[i][j]));
      }
    return vectors;
  },

  convertImageDataArrayToVectors: function(imageData) {
    var channelMatrix = this.convertImageDataArrayToChannelMatrix(imageData, 0);
    var vectors = this.convertChannelMatrixToVectors(channelMatrix);
    return vectors;
  },

  restore: function(vector) {
    //TODO implement!
    return null;
  },

  convertChannelToCoefficient: function(channel) {
    return 2*channel / this.maxChannelValue - 1
  },

  convertCoefficientToChannel: function(coefficient) {
    return this.maxChannelValue*(coefficient + 1)/2
  },

}