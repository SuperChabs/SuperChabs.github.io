const root = document.getElementById("changelog");

for (const entry of window.CHANGELOG) {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = `v${entry.version} — ${entry.date}`;

    const ul = document.createElement("ul");
    for (const c of entry.changes) {
        const li = document.createElement("li");
        li.textContent = c;
        ul.appendChild(li);
    }

    section.appendChild(h2);
    section.appendChild(ul);
    root.appendChild(section);
}
