// Array of thread objects
var threads = [

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