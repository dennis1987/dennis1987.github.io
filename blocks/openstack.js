'use strict';

Blockly.Blocks['novaclient'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("novaclient");
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("VERSION")
        .appendField(new Blockly.FieldNumber(1, 1, 3), "VERSION");
    this.appendValueInput("USERNAME")
        .setCheck("String")
        .appendField("USERNAME");
    this.appendValueInput("PASSWORD")
        .setCheck("String")
        .appendField("PASSWORD");
    this.appendValueInput("PROJECT_ID")
        .setCheck("String")
        .appendField("PROJECT_ID");
    this.appendValueInput("AUTH_URL")
        .setCheck("String")
        .appendField("AUTH_URL");
    this.setOutput(true, "novaclient");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['serverlist'] = {
  init: function() {
    this.appendValueInput("nova_client")
        .setCheck("novaclient")
        .appendField("");
    this.appendDummyInput()
        .appendField(".serverlist()");
    this.setOutput(true, "Array");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['novaclient'] = function(block) {
  var number_version = block.getFieldValue('VERSION');
  var value_username = Blockly.Python.valueToCode(block, 'USERNAME', Blockly.Python.ORDER_ATOMIC);
  var value_password = Blockly.Python.valueToCode(block, 'PASSWORD', Blockly.Python.ORDER_ATOMIC);
  var value_project_id = Blockly.Python.valueToCode(block, 'PROJECT_ID', Blockly.Python.ORDER_ATOMIC);
  var value_auth_url = Blockly.Python.valueToCode(block, 'AUTH_URL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_.import_math = 'from novaclient import client';
  var code = 'client.Client('+number_version+', '+value_username+', '+value_password+', '+value_project_id+', '+value_auth_url+')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['serverlist'] = function(block) {
  var value_nova_client = Blockly.Python.valueToCode(block, 'nova_client', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_nova_client + '.servers.list()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};