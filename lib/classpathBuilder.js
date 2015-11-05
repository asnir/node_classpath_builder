var classpathBuilder = function() {
    var fs = require('fs'),
        path = require("path"),
        os = require("os");

    return {
        build: function(dir, callback) {
            var classpath = "",
                extension_filter = ".jar",
                delimiter = os.type().toLowerCase().indexOf("windows") > -1 ? ";" : ":";

            fs.readdir(dir, function(err, files) {
                if (err) {
                    throw err;
                }
                files.map(function(file) {
                    //return path.relative(file, dir)
                    return path.resolve(dir, file);
                }).filter(function(file) {
                    return fs.statSync(file).isFile() && extension_filter == path.extname(file);
                }).forEach(function(file) {
                    classpath += file + delimiter;
                });
                callback(classpath);
            });
        }
    };
};

module.exports = new classpathBuilder();