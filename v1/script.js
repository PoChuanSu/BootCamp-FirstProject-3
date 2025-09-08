const initialFacts = [
    {
        id: 1,
        text: "React is being developed by Meta (formerly facebook)",
        source: "https://opensource.fb.com/",
        category: "technology",
        votesInteresting: 28,
        votesMindblowing: 9,
        votesFalse: 4,
        createdIn: 2021,
    },
    {
        id: 2,
        text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
        source: "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
        category: "society",
        votesInteresting: 11,
        votesMindblowing: 9,
        votesFalse: 0,
        createdIn: 2019,
    },
    {
        id: 3,
        text: "Lisbon is the capital of Portugal",
        source: "https://en.wikipedia.org/wiki/Lisbon",
        category: "history",
        votesInteresting: 8,
        votesMindblowing: 3,
        votesFalse: 1,
        createdIn: 2015,
    },
];

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
const catList = document.querySelector(".all-category");

factsList.innerHTML = "";
catList.innerHTML = "";

createFactsList(initialFacts);
createCateList(CATEGORIES);

function createCateList(dataArray) {
    const htmlArr = dataArray.map(
        (fact) => `
          <li class="category">
                            <button
                                style="background-color: ${fact.color}"
                                class="btn btn-category"
                                type="button"
                            >
                                ${fact.name}
                            </button>
                        </li>
    `
    );
    const html = htmlArr.join("");
    catList.insertAdjacentHTML("afterbegin", html);

    const html_all = `<li class="category">
                            <button
                                class="btn btn-all-categories"
                                type="button"
                            >
                                All
                            </button>
                        </li>`;
    catList.insertAdjacentHTML("afterbegin", html_all);
}

function createFactsList(dataArray) {
    const htmlArr = dataArray.map(
        (fact) =>
            `
       <li class="fact">
            <p>
                ${fact.text}
                <a
                    class="source"
                    href="${fact.source}"
                    target="_blank"
                    >(Source)
                </a>
                <span
                    class="tag"
                    style="background-color: ${
                        CATEGORIES.find((cat) => cat.name === fact.category)
                            .color
                    }"
                                >${fact.category}
                                </span>
                            </p>
                            <div class="vote-buttons">
                                <button type="button">👍 ${
                                    fact.votesInteresting
                                }</button>
                                <button type="button">🤯 ${
                                    fact.votesMindblowing
                                }</button>
                                <button type="button">⛔️ ${
                                    fact.votesFalse
                                }</button>
                            </div>
                        </li>
    `
    );

    const html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin", html);
}

// console.log(form.classList);
btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        btn.textContent = "Close";
    } else {
        form.classList.add("hidden");
        btn.textContent = "Share a fact";
    }
});
