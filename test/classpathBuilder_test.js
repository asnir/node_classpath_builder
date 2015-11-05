var assert = require("assert");
var classpathBuilder = require('../lib/classpathBuilder.js');
		
describe('classpathBuilder', function(){
  describe('build()', function(){
    it('should print the correct classpath', function(done){				
		classpathBuilder.build('./test/jars', function(classpath){			
			var jars = classpath.split(":");
			assert.equal(3, jars.length-1);						
			done();
		});	      
    })
  })
})