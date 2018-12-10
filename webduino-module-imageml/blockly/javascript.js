Blockly.JavaScript['imageml2_classifier'] = function (block) {
  var text_cameraurl = block.getFieldValue('cameraURL');
  var text_camSource = block.getFieldValue('camSource');
  var text_modelname = block.getFieldValue('modelName');
  var code = 'getVideoClassifier("' + text_modelname + '","' + text_camSource + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['imageml2_label'] = function (block) {
  var idx = block.getFieldValue('idx');
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'name');
  var code = variable_name + '.onLabel(' + idx + ', async function(idx){\n';
  code += statements_name + '\n';
  code += '});\n';
  return code;
};