const randomButton = document.createElement("button");

const searchContainer = document.getElementById("search-container");

randomButton.textContent = "Random Article";
randomButton.id = "random-button";
searchContainer.appendChild(randomButton); 

randomButton.addEventListener("click", () => {
    resultsContainer.innerHTML = '<div class="loading">Loading random article...</div>';

    fetch("https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit=1&origin=*")
        .then(response => response.json())
        .then(data => {
            const randomTitle = data.query.random[0].title;

            fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&explaintext=true&titles=${randomTitle}&origin=*`)
                .then(response => response.json())
                .then(data => {
                    const pageId = Object.keys(data.query.pages)[0];
                    const title = data.query.pages[pageId].title;
                    const extract = data.query.pages[pageId].extract;
                    const link = `https://en.wikipedia.org/wiki/${title.replace(/ /g, "_")}`;

                    resultsContainer.innerHTML = `
                        <div class="random-article">
                            <a href="${link}" target="_blank"><h2>${title}</h2></a>
                            <p>${extract}</p>
                        </div>
                    `;
                })
                .catch(error => {
                    console.error("Error fetching random article data:", error);
                    resultsContainer.innerHTML = '<div class="error">An error occurred.</div>';
                });
        })
        .catch(error => {
            console.error("Error fetching random article title:", error);
            resultsContainer.innerHTML = '<div class="error">An error occurred.</div>';
        });
});
