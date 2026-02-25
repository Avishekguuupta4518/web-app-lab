//  6.	Create a multi-line HTML template using template literals and insert it into the DOM.

let htmlContent = `<h1 id="heading">Multi-line HTML Template</h1><br> 
                    <p id='para'> This is first line of multi-line HTML template. <br> 
                    This is second line of multi-line HTML template</p>`;

let container = document.getElementById("container")
container.innerHTML = htmlContent

let heading = document.getElementById("heading")
console.log(heading.textContent)