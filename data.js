// Array of default thread objects
var defaultThreads = [

	{
		id: 1,
		title: "Thread 1",
		author: "Liam",
		date: Date.now(),
		content: "Thread content",

		// Sub-arrays for comments
		comments: [
			{
				author: "Liam",
				date: Date.now(),
				content: "What's the cráic?"
			},

			{
				author: "Mark",
				date: Date.now(),
				content: "The cráic is mighty!"
			}
		]
	},	
	{
		id: 2,
		title: "Thread 2",
		author: "Ken",
		date: Date.now(),
		content: "Thread content 2",

		// Sub-arrays for comments
		comments: [
			{
				author: "Ken",
				date: Date.now(),
				content: "This house is a mess!"
			},
			{
				author: "David",
				date: Date.now(),
				content: "I don't even care!"
			}
		]
	}
]


// Due to this front-end template, instead of a database, we'll use localStorage
var threads = defaultThreads;

//Check localStorage and see if key 'threads' is available
if(localStorage && localStorage.getItem('threads')) {

	threads = JSON.parse(localStorage.getItem('threads')); // Pull it out

} else {

	// Set it as value of defaultThreads
	threads = defaultThreads;

	// JSON.parse to convert to an object and JSON.stringify to convert it a string to push onto the storage
	localStorage.setItem('threads', JSON.stringify(defaultThreads));
}