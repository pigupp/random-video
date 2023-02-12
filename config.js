const config = {

	// "Random Video"-Configuration

	"General": {

		// List of all available videos (e.g. '['video1.mp4', 'video2.ogg', 'video3.mov']')
		// See below if you want to use URLs instead of filenames.
		'Items': [
			'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
			'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
			'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
			'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
			'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
		]
		,
		// Folder path (e.g. 'videos/' or 'folder1/folder2/')
		// If you want to put urls in the item list, leave this empty ('').
		'Folder': ''
		,
		// Redirects to video (autoplay with sound & video-controls, but will not loop & fit to viewport)
		// Note: "Video" settings will be ignored when this is set to true.
		'Redirect': false

	},

	"Video": {

		// Open video in fullscreen (only works when user clicks play)
		// Note: Autoplay will be set to false and controls to true if you have this enabled.
		'Fullscreen': true
		,
		// Enable autoplay (will mute the video on playback)
		'Autoplay': false
		,
		// Display video-controls (e.g. playhead, volume-slider, etc.)
		'Controls': true
		,
		// Loops the video (plays it over and over)
		'Loop': false

	}
};