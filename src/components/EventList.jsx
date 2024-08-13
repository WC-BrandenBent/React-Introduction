function ConditionalList() {
	let teachers = [
		"Branden Bent",
		"Tarn Assistant (that's what TA stands for right....?)",
		"Johnny CodeMan"
	];

	// teachers = [];

	// 	const getMessage = () => (teachers.length === 0 ? <p>No teachers available</p> : null);

	// 	return (
	// 		<>
	// 			<h1>LIST HEADING</h1>
	// 			{getMessage()}
	// 			<ul>
	// 				{/* the type "SyntheticBaseEvent returned when console.logging the event is used to allow react to work between all modern browsers without having to do any work for specific browsers

	// 				In technical terms SyntheticBaseEvent is a wrapper around the in built browser event object*/}
	// 				{teachers.map((teacher, index) => <li key={index} className="list-group" onClick={(e) => console.log(e)}>{teacher}</li>)}
	// 			</ul>
	// 		</>);
	// }

	// Event Handler
	const handleClick = (e) => console.log(e);

	const getMessage = () => (teachers.length === 0 ? <p>No teachers available</p> : null);

	return (
		<>
			<h1>LIST HEADING</h1>
			{getMessage()}
			<ul>
				{/* the type "SyntheticBaseEvent returned when console.logging the event is used to allow react to work between all modern browsers without having to do any work for specific browsers
				
				In technical terms SyntheticBaseEvent is a wrapper around the in built browser event object*/}
				{teachers.map((teacher, index) => <li key={index} className="list-group" onClick={handleClick}>{teacher}</li>)}
				{/* not how we aren't typing handleClick(), with paranthesis? This is because we are not CALLING A FUNCTION. We are PASSING A REFERENCE to our function (which will be called onClick) */}
			</ul>
		</>);
}

export default ConditionalList