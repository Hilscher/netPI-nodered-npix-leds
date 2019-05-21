module.exports = function(RED) {
    "use strict";
    var fs = require('fs');    
    var gpio = require('rpi-gpio');

    // NPIX LEDs node 
    function npixledsNode(n) {
      RED.nodes.createNode(this, n);

      this.led = n.led;
      var node = this;

      gpio.setup(parseInt(node.led), gpio.DIR_HIGH, function (err) {
        if (err)  { 
            RED.log.warn("[npixleds] Setting GPIO to output failed");
        } else {
          node.on("input", function(msg) {
            var led = node.led;
            if( msg.payload === 0) {
              gpio.write(parseInt(led), true);
            } else {
              gpio.write(parseInt(led), false);
            }
          });

          node.on("close", function() {

          });
        }
      });
    }
    RED.nodes.registerType("npixleds", npixledsNode);
}
