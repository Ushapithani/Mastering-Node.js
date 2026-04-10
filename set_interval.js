
//setInterval() is used to repeatedly execute code at fixed time intervals.
let count = 0;

const id = setInterval(() => {
    count++;
    console.log("Count:", count);

    if (count === 5) {
        clearInterval(id);
    }
}, 1000);