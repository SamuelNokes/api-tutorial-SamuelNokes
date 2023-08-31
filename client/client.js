// Write your code here:
window.addEventListener("DOMContentLoaded", exampleGETRequest);

// Add event listener to the form:


async function exampleGETRequest (e) {
    try {
        const test = await fetch('http://localhost:8090/test/get');
        const testText = await test.text();
        console.log(testText);
        // Change the h1 element text to testText:
        const h1 = document.querySelector("#test");
        h1.append("cheese");

    } catch (e) {
        console.log(e);
    }
}

async function examplePOSTRequest (e) {
    try {
        // Get input from the form field (HINT: use .value):
        let input;

        await fetch('http://localhost:8090/test/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ message: input })
        });
    } catch (e) {
        console.log(e);
    }
}