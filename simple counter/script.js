document.addEventListener('DOMContentLoaded', function () {
    // get elements 
    const counter = document.getElementById('counter');
    let count = 0;

    document.getElementById('increase').addEventListener('click', function () {
        count++;
        counter.innerHTML = count;
        console.log(count);
    });

    document.getElementById('decrease').addEventListener('click', function () {
        count--;
        counter.innerHTML = count;
        console.log(count);
    });

    document.getElementById('reset').addEventListener('click', function () {
        count = 0;
        counter.innerHTML = count;
        console.log(count);
    });
});
