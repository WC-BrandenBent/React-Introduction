function ConditionalList() {
	let teachers = [
		"Branden Bent",
		"Tarn Assistant (that's what TA stands for right....?)",
		"Johnny CodeMan"
	];

	// teachers = [];

	// This works if you want to show a message when there are no teachers, but we have to repeat the List heading (otherwise it only exists if there are existing teachers in our array), so it's not a great solution
	// if (teachers.length === 0) {
	// 	return (
	// 		<>
	// 			<h1>LIST HEADING</h1>
	// 			<p>No teachers available</p>
	// 		</>
	// 	)
	// }

	// 	return (
	// 		<>
	// 			<h1>LIST HEADING</h1>
	// 			<ul>
	// 				{teachers.length === 0 ? <p>No teachers available</p> : null}
	// 				{teachers.map((teacher, index) => <li key={index} className="list-group">{teacher}</li>)}
	// 			</ul>
	// 		</>);
	// }

	// The above solution is better, but we can improve it further by using a variable to store the conditional JSX, making our code easier to read, write, and maintain


	// Better Yet! We simply have to call our new variable message and set it to the conditional JSX we want to display. But there is one final tweak we can do afterward
	// 	const message = teachers.length === 0 ? <p>No teachers available</p> : null;

	// 	return (
	// 		<>
	// 			<h1>LIST HEADING</h1>
	// 			{message}
	// 			<ul>
	// 				{teachers.map((teacher, index) => <li key={index} className="list-group">{teacher}</li>)}
	// 			</ul>
	// 		</>);
	// }



	// 	const getMessage = () => {
	// 		// return teachers.length === 0 ? <p>No teachers available</p> : null;
	// 		return teachers.length === 0 && <p>No teachers available</p>;
	// 	}
	// 	return (
	// 		<>
	// 			<h1>LIST HEADING</h1>
	// 			{getMessage()}
	// 			<ul>
	// 				{teachers.map((teacher, index) => <li key={index} className="list-group">{teacher}</li>)}
	// 			</ul>
	// 		</>);
	// }

	const getMessage = () => {
		if (teachers.length === 0) {
			return <p>No teachers available</p>;
		} else {
			return null;
		}
	}

	return (
		<>
			<h1>LIST HEADING</h1>
			{getMessage()}
			<ul>
				{teachers.map((teacher, index) => <li key={index} className="list-group" onClick={() => console.log(teacher)}>{teacher}</li>)}
			</ul>
		</>);
}

export default ConditionalList