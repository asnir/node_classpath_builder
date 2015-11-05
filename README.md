[![Build Status](https://travis-ci.org/asnir/node_classpath_builder.png)](https://travis-ci.org/asnir/node_classpath_builder)

Please visit [node_classpath_builder](https://www.npmjs.com/package/node_classpath_builder) for information on installing with npm.


ClasspathBuilder
================
This node's lib helps with the building of Java-Classpath. 

Sample code:

```javascript

var classpathBuilder = require('./classpathBuilder.js');
classpathBuilder.build('<Directory which contains jars>', function(classpath){
	console.log();
});

```
