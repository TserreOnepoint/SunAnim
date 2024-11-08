function getSelectedMonthValue(month) {
    if (month === "December") {
        return "Dec";
    } else if (month === "November" || month === "January") {
        return "Nov - Jan";
    } else if (month === "October" || month === "February") {
        return "Oct - Feb";
    } else if (month === "September" || month === "March") {
        return "Sep - Mar";
    } else if (month === "August" || month === "April") {
        return "Aug - Apr";
    } else if (month === "July" || month === "May") {
        return "Jul - May";
    } else if (month === "June") {
        return "June";
    }
}

window.addEventListener('load', () => {
    const lottie = document.getElementById('lottie-player');

    // Définir les attributs de l'animation
    lottie.setAttribute('src', 'https://cdn.lottielab.com/l/Cyg7oPswFLQW9z.json');
    lottie.setAttribute('autoplay', 'true');
    lottie.setAttribute('controls', 'true');

    // Attendre que l'animation soit prête
    lottie.addEventListener('load', () => {
        const interactivity = lottie.interactivity;

        if (interactivity) {
            // Définir la valeur initiale pour 'hour' (si nécessaire)
            interactivity.inputs.set('hour', 0.5);

            // Gérer le changement de sélection de mois
            const monthSelect = document.getElementById('month-select');
            monthSelect.addEventListener('change', () => {
                const selectedMonth = getSelectedMonthValue(monthSelect.value);
                
                // Aller à l'état correspondant au mois, si interactivité est bien initialisée
                interactivity.goToState(selectedMonth);
            });

            // Gérer le slider pour ajuster la valeur de 'hour'
            const hourSlider = document.getElementById('hour-slider');
            hourSlider.addEventListener('input', () => {
                const hourValue = parseFloat(hourSlider.value);
                interactivity.inputs.set('hour', hourValue);
            });
        } else {
            console.error("Interactivité non disponible sur cet élément Lottie.");
        }
    });
});
