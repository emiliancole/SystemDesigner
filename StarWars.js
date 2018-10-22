/* 
 * StarWars
 * 
 * @description 
 * 
 * @module StarWars
 * @version 0.0.1
 * @requires system-runtime
 * 
 */

// install System Runtime
const runtime = require('system-runtime');

// uncomment this line to debug your system
// runtime.install('node_modules/system-runtime/extensions/mode-admin-server.json');

// set the level of log
runtime.require('logger').level('info');

// install and start the system
runtime.install({"name":"StarWars","master":true,"version":"0.0.1","description":"","schemas":{"1e378193da16eef":{"_id":"1e378193da16eef","_name":"Jedi","_inherit":["_Component"],"firstName":"property","lastName":"property","father":"link","fullName":"method"}},"models":{"e3e34304-6e7a-4c41-9235-37a025627367":{"_id":"e3e34304-6e7a-4c41-9235-37a025627367","_name":"Jedi","_description":"","firstName":{"description":"","type":"string","readOnly":false,"mandatory":true,"default":""},"lastName":{"description":"","type":"string","readOnly":false,"mandatory":true,"default":""},"father":{"description":"","type":"Jedi","kind":"normal","readOnly":false,"mandatory":false,"default":""},"fullName":{"result":"string"}}},"behaviors":{"bcd00ade-b56a-4eab-a610-094544403066":{"_id":"bcd00ade-b56a-4eab-a610-094544403066","component":"d6cbf05d-c9c9-4bb5-af9c-c5f2427e1c59","state":"start","action":"function start() {\n  let luke = null,\n      logger = null;\n\n  // get logger component\n  logger = this.require('logger');\n  \n  // get luke component\n  luke = this.require('luke');\n  \n  // get the name of the father of Luke\n  logger.info(luke.father().fullName());\n}\n","useCoreAPI":false,"core":false},"de8cb440-8bad-403f-9ffa-9eb4c95de930":{"_id":"de8cb440-8bad-403f-9ffa-9eb4c95de930","component":"Jedi","state":"fullName","action":"function fullName() { \n  let result = this.firstName() + ' ' + this.lastName();\n  return result;\n}","useCoreAPI":false,"core":false}},"types":{},"components":{"Jedi":{"vador":{"_id":"vador","father":"","firstName":"Dark","lastName":"Vador"},"luke":{"_id":"luke","father":"vador","firstName":"Luke","lastName":"Skywalker"}}},"_id":"d6cbf05d-c9c9-4bb5-af9c-c5f2427e1c59"});