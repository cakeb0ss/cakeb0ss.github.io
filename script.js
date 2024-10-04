const doc = document;
const body = doc.body;
const main = doc.getElementById('main');
const mainTemps = doc.getElementsByTagName('template');

mainTemps.forEach(nameAll = () => {
    let i = 0;
    let elems = [];
    if (i < mainTemps.length) {
        eval(`
        let elem${i} = mainTemps.querySelector('div');
        elems.push(elem${i});
        `);
        i++;
    }
})

doc.onload = pageLoad;

function pageLoad () {
    let header, content;
    header = doc.importNode(mainTemps[0]);
    content = doc.importNode(mainTemps[1]);

    main.appendChild(header);
    main.appendChild(content);

    console.log(mainTemps);
}