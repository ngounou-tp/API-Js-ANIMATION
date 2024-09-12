document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById('animatedBox');

    // 1. Animation de translation vers la droite au clic
    box.addEventListener('click', () => {
        gsap.to(box, { x: 500, duration: 1 });
    });

    // 2. Animation de rotation au double clic
    box.addEventListener('dblclick', () => {
        gsap.to(box, { rotation: 360, duration: 1 });
    });

    // 3. Animation de changement de couleur au survol de la souris
    box.addEventListener('mouseover', () => {
        gsap.to(box, { backgroundColor: 'orange', duration: 0.5 });
    });

    // 4. Animation de retour à la position initiale lorsque la souris quitte la boîte
    box.addEventListener('mouseout', () => {
        gsap.to(box, { x: 0, rotation: 0, backgroundColor: 'lightblue', duration: 1 });
    });

    // 5. Animation de zoom avant au clic droit (contextmenu)
    box.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Prévenir le menu contextuel
        gsap.to(box, { scale: 1.5, duration: 0.5 });
    });
});
