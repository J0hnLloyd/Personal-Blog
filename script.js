document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.intro-content h1');
    const text = "Good... Morning, Afternoon & Evening...!";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    textElement.innerHTML = ""; 
    typeWriter();
});

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333'; 
        navbar.style.transition = 'background-color 0.3s';
    } else {
        navbar.style.backgroundColor = 'transparent'; 
    }
});

