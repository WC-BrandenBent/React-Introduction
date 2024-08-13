function DynamicList() {
	const teachers = [
		"Branden Bent",
		"Tarn Assistant (that's what TA stands for right....?)",
		"Johnny CodeMan"
	];

	// esLint will complain about the following line because it's not a good practice to use index as key technically... but you'll see it everywhere. To fix without changing the esLint rule, see line 12
	// teachers.map((teacher) => <li>{teacher}</li>)
	// teachers.map((teacher, index) => <li key={index}>{teacher}</li>)
	// On line 10, we pass in another argument "index", which will be use for the key index in the new array that is returned from the map function

	return (
		<>
			<h1>LIST HEADING</h1>
			<ul>
				{/* {teachers.map((teacher) => <li className="list-group">{teacher}</li>)} */}
				{teachers.map((teacher, index) => <li key={index} className="list-group">{teacher}</li>)}
			</ul>
		</>);
}

export default DynamicList