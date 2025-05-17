// Simula il fetch dei giocatori online (sostituisci con API reale)
document.addEventListener('DOMContentLoaded', function() {
    // Esempio: Aggiorna il numero di giocatori
    updatePlayerCount();

    // Esempio: Cambia colore dell'IP al click
    const serverIpElement = document.getElementById('server-ip');
    serverIpElement.addEventListener('click', function() {
        this.style.color = '#f1c40f';
        setTimeout(() => { this.style.color = 'white'; }, 1000);
    });
});

function updatePlayerCount() {
    // Simula una chiamata API (usa un endpoint reale per FiveM)
    const playersOnline = Math.floor(Math.random() * 64); // Mock
    document.getElementById('players-online').textContent = playersOnline;

    // Richiama ogni 30 secondi per aggiornare
    setTimeout(updatePlayerCount, 30000);
}

// Animazione a scorrimento
document.querySelectorAll('.staff-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.clientX - card.getBoundingClientRect().left;
        const y = e.clientY - card.getBoundingClientRect().top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Esempio: Ritiro veicolo
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const assetType = this.closest('.vehicle-card, .property-card, .boat-card');
        const assetName = assetType.querySelector('h3').textContent;
        
        // Simula azione (sostituisci con chiamata API reale)
        console.log(`Hai richiesto: ${assetName}`);
        alert(`Azioni su ${assetName} saranno implementate via API`);
    });
});

// Animazione carte soldi
document.querySelectorAll('.money-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Evidenzia la pagina corrente
document.querySelectorAll('.nav-links a').forEach(link => {
    if(link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Animazione al hover (se presente in index.html)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateX(5px)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateX(0)';
    });
});

// Filtri veicoli
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelector('.filter-btn.active').classList.remove('active');
                this.classList.add('active');
                // Qui aggiungi la logica per filtrare i veicoli
                console.log(`Filtro selezionato: ${this.textContent}`);
            });
        });

        // Azioni veicoli
        document.querySelectorAll('.primary-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const vehicleName = this.closest('.vehicle-card').querySelector('h3').textContent;
                alert(`Veicolo "${vehicleName}" ritirato con successo!`);
                // Qui aggiungi la logica per ritirare il veicolo
            });
        });

        document.querySelectorAll('.secondary-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const vehicleName = this.closest('.vehicle-card').querySelector('h3').textContent;
                console.log(`Mostra dettagli per: ${vehicleName}`);
                // Qui aggiungi la logica per i dettagli del veicolo
            });
        });