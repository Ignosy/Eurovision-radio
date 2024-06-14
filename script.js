document.addEventListener("DOMContentLoaded", () => {
    const schedule = [
        { time: "10:00-12:00", All eurovision songs: "2024", description: "Description of Song A" },
        { time: "12:00-14:00", All eurovision songs: "2023", description: "Description of Song B" },
        // Dodaj więcej wpisów według potrzeb
    ];

    const scheduleContent = document.getElementById("schedule-content");
    schedule.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("schedule-entry");

        const time = document.createElement("p");
        time.textContent = `Time: ${entry.time}`;
        entryDiv.appendChild(time);

        const song = document.createElement("p");
        song.textContent = `Song: ${entry.song}`;
        entryDiv.appendChild(song);

        const description = document.createElement("p");
        description.textContent = `Description: ${entry.description}`;
        entryDiv.appendChild(description);

        scheduleContent.appendChild(entryDiv);
    });
});
