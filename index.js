const testimonials = [
    {
        quote: "This service changed my life in ways I never imagined! I never realized how much I truly needed support until I reached out. It helped me find clarity and purpose in my everyday life.",
        author: "John Doe"
    },
    {
        quote: "Amazing experience, highly recommend! The staff was incredibly professional, and I felt at ease throughout the entire process. It truly made a difference in my journey.",
        author: "Jane Smith"
    },
    {
        quote: "I felt heard and understood. Thank you! The empathetic listening and thoughtful advice made all the difference in helping me navigate my challenges. I couldn't be more grateful.",
        author: "Emily Johnson"
    }
];

let currentIndex = 0;

function displayTestimonial() {
    const testimonialMessage = document.getElementById('testimonial-message');
    const testimonialAuthor = document.getElementById('testimonial-author');

    testimonialMessage.textContent = testimonials[currentIndex].quote;
    testimonialAuthor.textContent = `- ${testimonials[currentIndex].author}`;
    
}

document.getElementById('left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; 
    displayTestimonial();
});

document.getElementById('right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length; 
    displayTestimonial();
});


displayTestimonial();
