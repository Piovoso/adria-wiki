Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

const currentPage = document.body.getElementsByClassName('adriaName').item(0);


var path = window.location.pathname;
let page = path.replace('/subpages/ecosystem/', '')
               .replace('/' + currentPage.innerHTML.toLowerCase() + '/' + currentPage.innerHTML.toLowerCase() + '.html', '');
console.log(page)

const headTitle = document.head.getElementsByTagName('title').item(0);
headTitle.innerHTML = page.capitalize() + ' | ' + currentPage.innerHTML.capitalize()

const locationDiv = document.querySelector('.subSections');
console.log(locationDiv)

const locationFirst = document.createElement('span');
locationFirst.textContent = page.capitalize();
locationFirst.classList.add('intoSection')

const locationSecond = document.createElement('span');
locationSecond.textContent = currentPage.innerHTML.capitalize();

locationDiv.appendChild(locationFirst)
locationDiv.appendChild(locationSecond)