// function HelloName() {
// 	const name = 'Branden';
// 	return <h1>Hello {name}</h1>;
// }

// export default HelloName;

function HelloName() {
	const name = '';

	if (name) {
		return <h1>Hello {name}</h1>;
	}
	return <h1>No Name Given!</h1>;
}

export default HelloName;