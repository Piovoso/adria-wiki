var path = window.location.pathname;
let page = path.replace('.html', '.json');

const module = await import(page, {
  with: { type: "json" },
});

const centerDiv = document.createElement('div');
centerDiv.classList.add('center');

const infoBoardDiv = document.createElement('div');
infoBoardDiv.classList.add('infoBoard');

