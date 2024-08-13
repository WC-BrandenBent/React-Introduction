// function List() {
// 	// why use parentheses here? This allows VSCode to auto-indent the return statement and have our html (NOT REALLY HTML, JSX!!) on multiple lines

// 	// since we are returning multiple elements, we need to wrap them in a parent element, hence why we can "trick" react into letting us return multiple elements
// 	return (
// 		<ul>
// 			<li className="list-group">Item 1</li>
// 			<li className="list-group">Item 2</li>
// 			<li className="list-group">Item 3</li>
// 		</ul>
// 	);
// }

// export default List;
// import { Fragment } from "react"; //importing fragment allows us to use the <Fragment> tag to wrap multiple elements in a return statement

// using empty brackets is another way to wrap multiple elements in a return statement and tells React to use a Fragment. Use whichever method you see as more readable (read: WHATEVER YOUR TEAM LEAD PREFERS)

function List() {
	return (
		<>
			<h1>LIST HEADING</h1>
			<ul>
				<li className="list-group">Item 1</li>
				<li className="list-group">Item 2</li>
				<li className="list-group">Item 3</li>
			</ul>
		</>
	);
}

export default List;