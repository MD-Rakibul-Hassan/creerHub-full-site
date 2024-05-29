







export function getArrayFromLocalStorage(key) {
	const storedArray = localStorage.getItem(key);
	if (storedArray) {
		return JSON.parse(storedArray);
	}
	return [];
}

// Function to save the array to local storage
function saveArrayToLocalStorage(key, array) {
	localStorage.setItem(key, JSON.stringify(array));
}

// Function to create a new object and add it to the array in local storage
export function addObjectToLocalStorage(obj) {
	// Get the current array from local storage
	const objectArray = getArrayFromLocalStorage("objectArray");

	

	// Add the new object to the array
	objectArray.push(obj);

	// Save the updated array back to local storage
	saveArrayToLocalStorage("objectArray", objectArray);

	// Log the array to the console (for demonstration purposes)
	
}