const reasons = [
    {
        text: "Because a random YouTube live stream introduced me to someone I never expected to become this special. 🦋",
        emoji: "🤍",
        gif: "gif1.gif"
    },
    {
        text: "Because even after knowing my feelings, you never changed. 💖",
        emoji: "🌸",
        gif: "gif2.gif"
    },
    {
        text: "Because you care in ways you don't always say. ✨",
        emoji: "💗",
        gif: "gif1.gif"
    }
];

let i = 0;

document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".shuffle-button");
    const container = document.getElementById("reasons-container");

    button.addEventListener("click", function () {

        container.innerHTML = `
            <h2>${reasons[i].emoji}</h2>
            <p>${reasons[i].text}</p>
            <img src="${reasons[i].gif}" width="150">
        `;

        i++;

        if (i >= reasons.length) {
            i = 0;
        }
    });

});
