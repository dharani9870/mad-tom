// Task 1: JavaScript - Utility Functions

// Function to display a result message in the result container
function displayResultMessage(message, success) {
    const resultContainer = document.getElementById('fileSizeDisplay');
    
    // Create a div element for the result message
    const resultDiv = document.createElement('div');
    resultDiv.className = 'resultBox'; // Add a class for styling
    resultDiv.style.color = success ? 'green' : 'red'; // Green for success, red for failure
    resultDiv.innerHTML = message;

    // Clear previous results
    resultContainer.innerHTML = '';

    // Append the result message div to the result container
    resultContainer.appendChild(resultDiv);
}

// Function to display an error message in the result container
function displayErrorMessage(message) {
    displayResultMessage(message, false); // Display error in a box with red text
}

// Task 2: JavaScript - getBitDepth function
function getBitDepth(numColors) {
    // Assuming a simple formula for bit depth calculation
    // You can replace this with a more accurate calculation if needed
    return Math.ceil(Math.log2(numColors));
}

// Task 3: JavaScript - indexedFileSize function
function indexedFileSize(width, height, numColors) {
    // Assuming a simple formula for file size calculation
    // You can replace this with a more accurate calculation if needed
    const bitDepth = getBitDepth(numColors);
    const fileSize = (width * height * bitDepth) / 8; // Size in bytes
    return fileSize;
}

// Task 4: JavaScript - Event Handler
function calculateFileSize() {
    // Get user input values
    const imageWidth = parseInt(document.getElementById('imageWidth').value);
    const imageHeight = parseInt(document.getElementById('imageHeight').value);
    const numColors = parseInt(document.getElementById('numColors').value);

    // Use indexedFileSize function to compute file size
    try {
        // Check if input values are greater than 0
        if (imageWidth <= 0 || imageHeight <= 0 || numColors <= 0) {
            displayErrorMessage('All the fields must have a value greater than 0.');
            return; // Exit the function if any value is not greater than 0
        }

        // Check if input values are numerical
        if (isNaN(imageWidth) || isNaN(imageHeight) || isNaN(numColors)) {
            displayErrorMessage('All fields must be numerical values.');
            return; // Exit the function if any value is not a number
        }

        const fileSizeBytes = indexedFileSize(imageWidth, imageHeight, numColors);
        const fileSizeKB = fileSizeBytes / 1000; // Convert bytes to KB

        // Display the result in the resultContainer
        const resultContainer = document.getElementById('fileSizeDisplay');
        resultContainer.innerHTML = ''; // Clear previous results

        // Check file size and display appropriate message
        if (fileSizeKB < 50) {
            // Display success message in a box with green text
            displayResultMessage(`👍 Congratulations! Your file can be uploaded. Its size is: ${fileSizeKB.toFixed(1)} KB.`, true);
        } else {
            // Display failure message in a box with red text
            displayResultMessage(`👎 Failed! Your file is ${fileSizeKB.toFixed(1)} KB and exceeds the limitations.`, false);
        }
    } catch (error) {
        console.error('Error calculating file size:', error);
    }
}
