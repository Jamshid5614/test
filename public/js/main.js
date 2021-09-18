

const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.onclick = () => {
    fetch(`/inc-price/${input.value}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => {
        h1.innerText = data.count
    })
}

const int32 = new Int32Array(45);
console.log(int32)
