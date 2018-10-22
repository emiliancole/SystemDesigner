/* 
 * StarWars
 * 
 * @description 
 * 
 * @system StarWars
 * @version 0.0.1
 * @requires system-runtime
 * 
 */

// uncomment this line if this system runs on node.js
// const runtime = require('system-runtime');

// uncomment this line to debug your system on node.js
// runtime.install('node_modules/system-runtime/extensions/mode-admin-server.json');

runtime.require('logger').level('info');

/**
 * System StarWars
 * @system
 */
runtime.system({
	"_id": "d6cbf05d-c9c9-4bb5-af9c-c5f2427e1c59",
	"name": "StarWars",
	"version": "0.0.1",
	"description": ""
});


// Schemas, models and types creation


/**
 * Schema Jedi
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "1e378193da16eef",
	"_name": "Jedi",
	"_inherit": [
		"_Component"
	],
	"firstName": "property",
	"lastName": "property",
	"father": "link",
	"fullName": "method"
});

/**
 * Model Jedi
 * @model
 */
runtime.require('metamodel').model({
	"_id": "e3e34304-6e7a-4c41-9235-37a025627367",
	"_name": "Jedi",
	"_description": "",
	"firstName": {
		"description": "",
		"type": "string",
		"readOnly": false,
		"mandatory": true,
		"default": ""
	},
	"lastName": {
		"description": "",
		"type": "string",
		"readOnly": false,
		"mandatory": true,
		"default": ""
	},
	"father": {
		"description": "",
		"type": "Jedi",
		"kind": "normal",
		"readOnly": false,
		"mandatory": false,
		"default": ""
	},
	"fullName": {
		"result": "string"
	}
});

runtime.require('metamodel').create();


// Components creation


/**
 * Component vador
 * @component
 */
new (runtime.require('Jedi'))({
	"_id": "vador",
	"father": "",
	"firstName": "Dark",
	"lastName": "Vador"
});

/**
 * Component luke
 * @component
 */
new (runtime.require('Jedi'))({
	"_id": "luke",
	"father": "vador",
	"firstName": "Luke",
	"lastName": "Skywalker"
});


// Behaviors creation


// Jedi behaviors

/**
 * @method fullName
 * @returns {string} 
 */
runtime.require('Jedi').on('fullName', function fullName() { 
  let result = this.firstName() + ' ' + this.lastName();
  return result;
});

// system behaviors

/**
 * @method start
 */
runtime.system().on('start', function start() {
  let luke = null,
      logger = null;

  // get logger component
  logger = this.require('logger');
  
  // get luke component
  luke = this.require('luke');
  
  // get the name of the father of Luke
  logger.info(luke.father().fullName());
}
);

// Start the system
runtime.system().start();
