
    const scientists = [
        { first: 'Albert', last: 'Einstein', birth: 1879, death: 1955, img: './img/scientist/einstein.jpg' },
        { first: 'Marie', last: 'Curie', birth: 1867, death: 1934, img: './img/scientist/curie.jpg' },
        { first: 'Isaac', last: 'Newton', birth: 1643, death: 1727, img: './img/scientist/newton.jpg' },
        { first: 'Niels', last: 'Bohr', birth: 1885, death: 1962, img: './img/scientist/bohr.jpg' },
        { first: 'Ada', last: 'Lovelace', birth: 1815, death: 1852, img: './img/scientist/lovelace.jpg' },
        { first: 'Charles', last: 'Darwin', birth: 1809, death: 1882, img: './img/scientist/darwin.jpg' },
        { first: 'Rosalind', last: 'Franklin', birth: 1920, death: 1958, img: './img/scientist/franklin.jpg' },
        { first: 'Gregor', last: 'Mendel', birth: 1822, death: 1884, img: './img/scientist/mendel.jpg' },
        { first: 'James', last: 'Maxwell', birth: 1831, death: 1879, img: './img/scientist/maxwell.jpg' },
        { first: 'Dmitri', last: 'Mendeleev', birth: 1834, death: 1907, img: './img/scientist/mendeleev.jpg' },
        { first: 'Alan', last: 'Turing', birth: 1912, death: 1954, img: './img/scientist/turing.jpg' },
        { first: 'Johannes', last: 'Kepler', birth: 1571, death: 1630, img: './img/scientist/kepler.jpg' }
    ];

    let currentList = [...scientists];

    const galleryEl = document.getElementById('scientistGallery');
    const outputEl = document.getElementById('output1');

    function render(list) {
        galleryEl.innerHTML = '';
        list.forEach(s => {
            const li = document.createElement('li');
            li.classList.add('scientist-item');
            li.innerHTML = `
              <img src="${s.img}" alt="${s.first} ${s.last}" />
              <div class="scientist-name">${s.first} ${s.last}</div>
              <div class="scientist-years">(${s.birth}–${s.death})</div>
            `;
            galleryEl.append(li);
        });
    }

    const actions = {
        born19: () => {
            const res = currentList.filter(s => s.birth >= 1801 && s.birth <= 1900);
            outputEl.textContent = `Народилися в 19 столітті: ${res.map(s => s.first + ' ' + s.last).join(', ')}`;
            render(res);
        },
        einsteinYear: () => {
            const ein = scientists.find(s => s.last === 'Einstein');
            outputEl.textContent = `Albert Einstein народився в ${ein.birth} році.`;
        },
        sortAlpha: () => {
            currentList.sort((a, b) => a.last.localeCompare(b.last));
            outputEl.textContent = `Список відсортовано за алфавітом за прізвищем.`;
            render(currentList);
        },
        surnameC: () => {
            const res = currentList.filter(s => s.last.startsWith('C'));
            outputEl.textContent = `Прізвища на "С": ${res.map(s => s.first + ' ' + s.last).join(', ')}`;
            render(res);
        },
        sortLifespan: () => {
            currentList.sort((a, b) => (b.death - b.birth) - (a.death - a.birth));
            outputEl.textContent = `Список відсортовано за тривалістю життя (від найбільшого до найменшого).`;
            render(currentList);
        },
        deleteA: () => {
            currentList = currentList.filter(s => !s.first.startsWith('A'));
            outputEl.textContent = `Вилучено вчених з іменами на "А".`;
            render(currentList);
        },
        latestBorn: () => {
            const latest = currentList.reduce((prev, curr) => curr.birth > prev.birth ? curr : prev);
            outputEl.textContent = `Найпізніше народився: ${latest.first} ${latest.last} (${latest.birth}).`;
        },
        lifespanExtremes: () => {
            const withspan = currentList.map(s => ({ ...s, span: s.death - s.birth }));
            const longest = withspan.reduce((a, b) => b.span > a.span ? b : a);
            const shortest = withspan.reduce((a, b) => b.span < a.span ? b : a);
            outputEl.textContent = `Найдовше жив: ${longest.first} ${longest.last} (${longest.span} років); найкоротше: ${shortest.first} ${shortest.last} (${shortest.span} років).`;
        },
        sameInitials: () => {
            const res = currentList.filter(s => s.first[0] === s.last[0]);
            outputEl.textContent = `Ім'я і прізвище з однієї літери: ${res.map(s => s.first + ' ' + s.last).join(', ')}`;
            render(res);
        }
    };

    document.getElementById('controls').addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const action = e.target.dataset.action;
            outputEl.textContent = '';
            if (actions[action]) actions[action]();
        }
    });
    render(currentList);