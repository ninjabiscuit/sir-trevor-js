/*
  Generic Block Implementation
*/

var Block = SirTrevor.Block = function(options){
  this.blockTypeId = _.uniqueId('block-');
  this._configure(options || {});
  this.initialize.apply(this, arguments);
};

var blockOptions = ["toolbarEnabled", "dropEnabled", "title", "limit", "editorHTML", "dropzoneHTML"];

_.extend(Block.prototype, {
  
  initialize: function(){},
  loadData: function(){},
  onDrop: function(){},
  
  _configure: function(options) {
    if (this.options) options = _.extend({}, this.options, options);
    for (var i = 0, l = blockOptions.length; i < l; i++) {
      var attr = blockOptions[i];
      if (options[attr]) this[attr] = options[attr];
    }
    this.options = options;
  }
});