const
	fs     = require( 'fs' ),
	path   = require( 'path' ),
	glob   = require( 'glob' ),
	action = require( 'tempaw-functions' ).action;

module.exports = {
	livedemo: {
		enable: true,
		server: {
			baseDir: "dev/",
			directory: false
		},
		port: 8000,
		open: false,
		notify: true,
		reloadDelay: 0,
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false
		}
	},
	sass: {
		enable: true,
		showTask: false,
		watch: `dev/**/*.scss`,
		source: `dev/!(_).scss`,
		dest: 'dev/',
		options: {
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: 1,
			linefeed: 'cr'
		}
	},
	pug: {
		enable: true,
		showTask: false,
		watch: 'dev/**/*.pug',
		source: 'dev/!(_)*.pug',
		dest: 'dev/',
		options: {
			pretty: true,
			verbose: true,
			emitty: true
		}
	},
	autoprefixer: {
		enable: false,
		options: {
			cascade: true,
			browsers: ['Chrome >= 45', 'Firefox ESR', 'Edge >= 12', 'Explorer >= 10', 'iOS >= 9', 'Safari >= 9', 'Android >= 4.4', 'Opera >= 30']
		}
	},
	watcher: {
		enable: true,
		watch: 'dev/**/*.js'
	}
};
