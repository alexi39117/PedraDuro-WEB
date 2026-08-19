const services = [
    { title: "Piedra Taco de Santiago", text: "Material tradicional para fachadas, muros y exteriores con un acabado sólido y auténtico." },
    { title: "Restauración de piedra", text: "Recuperamos fachadas y elementos antiguos, devolviéndoles funcionalidad y presencia." },
    { title: "Encintados y revestimientos", text: "Soluciones para mejorar la apariencia y la protección de superficies de exterior." },
    { title: "Fachadas", text: "Trabajos de piedra para casas, chalets y edificios con un resultado elegante y duradero." },
    { title: "Patios y exteriores", text: "Pavimentos y acabados para espacios exteriores, con un tratamiento práctico y visualmente limpio." },
    { title: "Reformas y rehabilitación", text: "Asesoramiento y ejecución para proyectos que requieren piedra natural y buen criterio constructivo." }
];

const servicesContainer = document.getElementById("serviceCards");

if (servicesContainer) {
    servicesContainer.innerHTML = services.map(function (item) {
        return '<article><h3>' + item.title + '</h3><p>' + item.text + '</p></article>';
    }).join("");
}
