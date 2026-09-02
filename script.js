const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

const weekContent = document.getElementById("weekContent");

if (weekContent) {

    const isEightWeek = window.location.pathname.includes("plano8");

    const workouts4 = {
        1: [
            "Treino 1",
            "5 min caminhada + 5x (1 min corrida leve + 2 min caminhada)",
            "20 min"
        ],
        2: [
            "Treino 2",
            "5 min caminhada + 6x (1 min corrida leve + 2 min caminhada)",
            "23 min"
        ],
        3: [
            "Treino 3",
            "5 min caminhada + 5x (2 min corrida leve + 2 min caminhada)",
            "25 min"
        ]
    };

    const workouts8 = {
        1: [
            "Treino 1",
            "5 min caminhada + 5x (2 min corrida + 2 min caminhada)",
            "25 min"
        ],
        2: [
            "Treino 2",
            "5 min caminhada + 4x (3 min corrida + 2 min caminhada)",
            "25 min"
        ],
        3: [
            "Treino 3",
            "5 min caminhada + 4x (4 min corrida + 2 min caminhada)",
            "30 min"
        ]
    };

    function renderWeek(week) {

        const base = isEightWeek ? workouts8 : workouts4;

        const intensity = Math.min(week, 3);

        const data = base[intensity] || base[3];

        weekContent.innerHTML = `
            <article class="workout-card">

                <div class="workout-number">
                    S${week}
                </div>

                <div class="workout-main">

                    <span class="eyebrow">
                        ${data[0]}
                    </span>

                    <h2>
                        Treino da semana ${week}
                    </h2>

                    <p>
                        ${data[1]}
                    </p>

                    <div class="workout-meta">

                        <span>
                            ⏱ ${data[2]}
                        </span>

                        <span>
                            ♡ Intensidade leve
                        </span>

                        <span>
                            ↗ Evolução gradual
                        </span>

                    </div>

                </div>

                <button class="check-btn">
                    ✓
                </button>

            </article>

            <div class="rest-card">

                <b>
                    💗 Dica da semana
                </b>

                <p>
                    Faça o treino em um ritmo confortável.
                    O objetivo é criar constância e evoluir
                    gradualmente.
                </p>

            </div>
        `;

        const checkBtn = weekContent.querySelector(".check-btn");

        checkBtn.addEventListener("click", () => {
            checkBtn.classList.toggle("done");
        });
    }

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(item => {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            const week = Number(tab.dataset.week);

            renderWeek(week);
        });

    });

    renderWeek(1);
}