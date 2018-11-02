const gulp = require("gulp");
const connect = require("gulp-connect");
const proxy = require("http-proxy-middleware");

gulp.task("server",function(){
	connect.server({
		root:"./src",
		port:9000,
		livereload:true,
		middleware:function(){
			return [
				proxy("/search",{
					target:"http://list.mogujie.com",
					changeOrigin:true
				})
			]
		}
	})
})


gulp.task("watch-server",function(){
	gulp.watch("src/**/*",function(){
		gulp.src("src/**/*")
		.pipe(connect.reload())
	})
})

gulp.task("F5",["server","watch-server"])
