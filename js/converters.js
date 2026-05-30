window.onload = function () {};

function changeForm() {

    const type =
        document.getElementById("conversionType").value;

    const area =
        document.getElementById("inputArea");

    let html = "";

    if (type === "g2c" || type === "g2p") {

        html = `
            <label>A:</label>
            <input id="A" type="number">

            <label>B:</label>
            <input id="B" type="number">

            <label>C:</label>
            <input id="C" type="number">
        `;
    }

    else {

        html = `
            <label>x₀:</label>
            <input id="x0" type="number">

            <label>y₀:</label>
            <input id="y0" type="number">

            <label>m:</label>
            <input id="m" type="number">

            <label>n:</label>
            <input id="n" type="number">
        `;
    }

    area.innerHTML = html;
}

function convertEquation() {

    const type =
        document.getElementById("conversionType").value;

    const result =
        document.getElementById("result");

    switch(type) {

        case "g2c":
            result.innerHTML =
                generalToCanonical();
            break;

        case "g2p":
            result.innerHTML =
                generalToParametric();
            break;

        case "c2g":
            result.innerHTML =
                canonicalToGeneral();
            break;

        case "c2p":
            result.innerHTML =
                canonicalToParametric();
            break;

        case "p2c":
            result.innerHTML =
                parametricToCanonical();
            break;

        case "p2g":
            result.innerHTML =
                parametricToGeneral();
            break;
    }
}

function generalToCanonical() {

    const A = Number(document.getElementById("A").value);
    const B = Number(document.getElementById("B").value);
    const C = Number(document.getElementById("C").value);

    let x0;
    let y0;

    if(B !== 0) {
        x0 = 0;
        y0 = -C / B;
    } else {
        x0 = -C / A;
        y0 = 0;
    }

    return `(x - ${x0}) / ${B} = (y - ${y0}) / ${-A}`;
}

function generalToParametric() {

    const A = Number(document.getElementById("A").value);
    const B = Number(document.getElementById("B").value);
    const C = Number(document.getElementById("C").value);

    let x0;
    let y0;

    if(B !== 0) {
        x0 = 0;
        y0 = -C / B;
    } else {
        x0 = -C / A;
        y0 = 0;
    }

    return `
        x = ${x0} + ${B}t <br>
        y = ${y0} + ${-A}t
    `;
}

function canonicalToGeneral() {

    const x0 = Number(document.getElementById("x0").value);
    const y0 = Number(document.getElementById("y0").value);
    const m = Number(document.getElementById("m").value);
    const n = Number(document.getElementById("n").value);

    const A = -n;
    const B = m;
    const C = n * x0 - m * y0;

    return `${A}x + ${B}y + ${C} = 0`;
}

function canonicalToParametric() {

    const x0 = document.getElementById("x0").value;
    const y0 = document.getElementById("y0").value;
    const m = document.getElementById("m").value;
    const n = document.getElementById("n").value;

    return `
        x = ${x0} + ${m}t <br>
        y = ${y0} + ${n}t
    `;
}

function parametricToCanonical() {

    const x0 = document.getElementById("x0").value;
    const y0 = document.getElementById("y0").value;
    const m = document.getElementById("m").value;
    const n = document.getElementById("n").value;

    return `(x - ${x0}) / ${m} = (y - ${y0}) / ${n}`;
}

function parametricToGeneral() {

    const x0 = Number(document.getElementById("x0").value);
    const y0 = Number(document.getElementById("y0").value);
    const m = Number(document.getElementById("m").value);
    const n = Number(document.getElementById("n").value);

    const A = -n;
    const B = m;
    const C = n * x0 - m * y0;

    return `${A}x + ${B}y + ${C} = 0`;
}