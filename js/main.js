// ========================================
// Carousel animation
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    const carouselElement = document.querySelector('#newsCarousel');
    const carousel = document.getElementById('newsCarousel');
    const carouselInstance = bootstrap.carousel.getOrCreateInstance(carousel);

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('show.bs.modal', () => carouselInstance.pause());
        modal.addEventListener('hidden.bs.modal', () => carouselInstance.cycle());
    })

    if (carouselElement) {
        const carousel = new bootstrap.carousel(carouselElement, {
            interval: 5000,
            ride: 'carousel',
            pause: 'hover',
            wrap: true
        })
    }
});

// ==========================================
// Filter teams
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    const filter = document.getElementById('competitionFilter');
    const teams = document.querySelectorAll('.team-card');

    filter.addEventListener('change', () => {
        const selected = filter.value;

        teams.forEach(team => {
        if (selected === 'all' || team.dataset.competition === selected) {
            team.style.display = 'block';
        } else {
            team.style.display = 'none';
        }
        });
    });
 });

// ==========================================
// Team data
// ==========================================
const teamsData = {
    barcelona: [
        { nombre: 'Manolo Espina', posicion: 'Delantero', capitan: 'Sí' },
        { nombre: 'Elena Suarez', posicion: 'Portera', capitan: 'No' },
        { nombre: 'Christian Fernandez', posicion: 'Defensa', capitan: 'No' },
        { nombre: 'Marta Soto', posicion: 'Defensa', capitan: 'No' },
    ],
    athletic: [
        { nombre: 'Jugador 1', posicion: 'Delantero', capitan: 'No' },
        { nombre: 'Jugador 2', posicion: 'Defensa', capitan: 'Sí' },
        { nombre: 'Jugador 3', posicion: 'Portero', capitan: 'No' },
        { nombre: 'Jugador 4', posicion: 'Defensa', capitan: 'No' },
    ],
    valencia: [
        { nombre: 'Jugador 1', posicion: 'Delantero', capitan: 'Sí' },
        { nombre: 'Jugador 2', posicion: 'Defensa', capitan: 'No' },
        { nombre: 'Jugador 3', posicion: 'Portero', capitan: 'No' },
        { nombre: 'Jugador 4', posicion: 'Defensa', capitan: 'No' },
    ],
};

// ==========================================
// Show team detail
// ==========================================
document.querySelectorAll('.more-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        const card = btn.closest('.team-card');
        const teamId = card.dataset.team;

        const modalTitle = document.getElementById('teamModalLabel');
        const modalBody = document.getElementById('teamModalBody');

        modalTitle.textContent = card.querySelector('.card-title').textContent;

        if (teamsData[teamId]) {
            let html = `<table class="table table-striped table-sm">
                        <thead>
                          <tr>
                            <th>Nombre</th>
                            <th>Posición</th>
                            <th>Capitán</th>
                          </tr>
                        </thead>
                        <tbody>`;
            teamsData[teamId].forEach(player => {
                html += `<tr>
                            <td>${player.nombre}</td>
                            <td>${player.posicion}</td>
                            <td>${player.capitan}</td>
                         </tr>`;
            });
            html += `</tbody></table>`;
            modalBody.innerHTML = html;
        } else {
            modalBody.innerHTML = "<p>No hay información disponible.</p>";
        }

        // Abrir modal
        const teamModal = new bootstrap.Modal(document.getElementById('teamModal'));
        teamModal.show();
    });
});