'use strict';

Blockly.Blocks['novaclient'] = {
  init: function() {
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};