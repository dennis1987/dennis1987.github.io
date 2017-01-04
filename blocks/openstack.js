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