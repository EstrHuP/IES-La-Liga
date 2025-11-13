// ========================================
// Carousel animation
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    const carouselElement = document.querySelector('#newsCarousel');
    const carousel = document.getElementById('newsCarousel');
    const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);

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

// ==========================================
// Filter results
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

  const filterSelect = document.getElementById('competitionFilter');

  filterSelect.addEventListener('change', () => {
    const filteredValue = filterSelect.value;
    document.querySelectorAll('.competition-result').forEach(div => {
      if (filteredValue === 'all' || div.classList.contains(filteredValue)) {
        div.style.display = '';
      } else {
        div.style.display = 'none';
      }
    });
  });
});

// ============================
// Filter classifications
// ============================
document.addEventListener('DOMContentLoaded', () => {
  const filter = document.getElementById('competitionFilter');
  const results = document.querySelectorAll('.classification-result');

  filter.addEventListener('change', () => {
    const selected = filter.value;

    results.forEach(div => {
      if (selected === 'all' || div.classList.contains(selected)) {
        div.style.display = '';
      } else {
        div.style.display = 'none';
      }
    });
  });
});

// ============================
// Search player filter
// ============================
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('playerSearch');
  const competitionFilter = document.getElementById('competitionFilter');
  const players = document.querySelectorAll('.player-card');

  function filterPlayers() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedCompetition = competitionFilter.value;

    players.forEach(card => {
      const name = card.querySelector('.card-title').textContent.toLowerCase();
      const matchesSearch = name.includes(searchValue);
      const matchesCompetition = selectedCompetition === 'all' || card.classList.contains(selectedCompetition);

      card.style.display = (matchesSearch && matchesCompetition) ? '' : 'none';
      });
    }

    searchInput.addEventListener('input', filterPlayers);
    competitionFilter.addEventListener('change', filterPlayers);

// ============================
// Dynamic modal
// ============================
  document.querySelectorAll('.view-player-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('playerName').textContent = btn.dataset.name;
      document.getElementById('playerTeam').textContent = btn.dataset.team;
      document.getElementById('playerSport').textContent = btn.dataset.sport;
      document.getElementById('playerStats').textContent = btn.dataset.stats;
    });
  });
});

// ============================
// Search ref filter
// ============================
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('refSearch');
  const competitionFilter = document.getElementById('competitionFilter');
  const players = document.querySelectorAll('.ref-card');

  function filterRefs() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedCompetition = competitionFilter.value;

    players.forEach(card => {
      const name = card.querySelector('.card-title').textContent.toLowerCase();
      const matchesSearch = name.includes(searchValue);
      const matchesCompetition = selectedCompetition === 'all' || card.classList.contains(selectedCompetition);

      card.style.display = (matchesSearch && matchesCompetition) ? '' : 'none';
      });
    }

    searchInput.addEventListener('input', filterRefs);
    competitionFilter.addEventListener('change', filterRefs);

// ============================
// Dynamic modal
// ============================
document.querySelectorAll('.ref-card').forEach(card => {
  card.addEventListener('click', () => {
    // Obtener los datos directamente del div.ref-card
    const name = card.dataset.name;
    const sport = card.dataset.sport;
    const stats = card.dataset.stats;
    const exp = card.dataset.exp;

    // Insertar datos en la modal
    document.getElementById('refName').textContent = name;
    document.getElementById('refSport').textContent = sport;
    document.getElementById('refStats').textContent = stats;
    document.getElementById('refExp').textContent = exp;

    // Mostrar modal
    const modal = new bootstrap.Modal(document.getElementById('refModal'));
    modal.show();
  });
});
});
