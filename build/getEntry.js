var glob = require('glob');
var path = require('path')
module.exports=function(globPath){
	var entries = {},
	basename, tmp, pathname,dir;
	glob.sync(globPath).forEach(function(entry) {
		basename = path.basename(entry, path.extname(entry));
		tmp=entry.split('/').slice(2,-1)
		pathname=tmp.join('/') 
		console.log(pathname)
		entries[pathname] = entry;
	});
	return entries;
}