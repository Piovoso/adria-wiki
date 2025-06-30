/*
    <div class="bookLocation tFormat">
        <div class="subSections">
            <span class="intoSection">Fauna</span>
            <span>Kjllian</span>
        </div>
    </div
*/

const leftHeader = document.createElement('div');
leftHeader.classList.add('lefter');


// Title section
const titleDiv = document.createElement('div');
titleDiv.classList.add('title');

const titleA = document.createElement('a');
titleA.classList.add('main');
titleA.classList.add('tFormat');
titleA.textContent = 'Adria'
titleA.href = '../../../../index.html'

const titleSpan = document.createElement('span');
titleSpan.classList.add('sub');
titleSpan.classList.add('tFormat');
titleSpan.textContent = 'Book of'

titleDiv.appendChild(titleA);
titleDiv.appendChild(titleSpan);


// Book Location formater
const bookLocationDiv = document.createElement('div');
bookLocationDiv.classList.add('bookLocation');
bookLocationDiv.classList.add('tFormat');

const bookSubsection = document.createElement('div');
bookSubsection.classList.add('subSections')

bookLocationDiv.appendChild(bookSubsection);


// Copyright Info
const copyRightDiv = document.createElement('div');
copyRightDiv.classList.add('copyRight');
copyRightDiv.classList.add('tFormat');
copyRightDiv.textContent = 'Established 2025';


// Final Formating
leftHeader.appendChild(titleDiv);
leftHeader.appendChild(bookLocationDiv);
leftHeader.appendChild(copyRightDiv);
document.body.appendChild(leftHeader);