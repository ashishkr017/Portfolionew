(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    function typeText(element, text, index = 0) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(() => typeText(element, text, index), 30); // Adjust the typing speed (in milliseconds)
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const originalTextElement = document.querySelector('.right-header p');
        const textToType = originalTextElement.innerText;

        // Clear the existing text
        originalTextElement.innerHTML = '';

        // Start typing effect on the existing paragraph
        typeText(originalTextElement, textToType);
    });

    
})();

// Add this JavaScript code in your app.js file
document.addEventListener("DOMContentLoaded", function () {
    var clickableImage = document.getElementById("clickableImage");

    clickableImage.addEventListener("click", function () {
        clickableImage.classList.toggle("animate-image");
    });
});


