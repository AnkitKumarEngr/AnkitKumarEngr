// document.addEventListener("DOMContentLoaded", () => {
//     // Select all sections that should animate on scroll
//     const animatedSections = document.querySelectorAll(
//         '.services-page, .why-section, .process-section, .creative-section, .form-section'
//     );

//     const observerOptions = {
//         root: null, // uses viewport
//         threshold: 0.15, // triggers when 15% of the section is visible
//         rootMargin: "0px 0px -50px 0px" // slight offset for better timing
//     };

//     const sectionObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Add the .show class to trigger the CSS transition
//                 entry.target.classList.add('show');
//                 // Stop observing once it's shown to keep it visible
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, observerOptions);

//     // Attach observer to each section
//     animatedSections.forEach(section => {
//         sectionObserver.observe(section);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    // Select the individual elements to reveal piece-by-piece
    const scrollElements = document.querySelectorAll(
        '.service-card, .why-card, .process-card, .creative-section h2, .creative-section p, .form-section form'
    );

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Keeps it visible once revealed
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Triggers as soon as 10% of the card is visible
        rootMargin: "0px 0px -40px 0px"
    });

    scrollElements.forEach(el => elementObserver.observe(el));
});