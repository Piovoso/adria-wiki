const lightmodeButton = document.createElement('button')
lightmodeButton.setAttribute('id', 'theme-switch')

const svg1 = document.createElement('svg');
svg1.setAttribute('xmlns',"http://www.w3.org/2000/svg");
svg1.setAttribute('height',"24px");
svg1.setAttribute('width',"24px");
svg1.setAttribute('viewBox',"0 -960 960 960");
svg1.setAttribute('fill',"#e3e3e3");
const svg1Path = document.createElement('path');
svg1Path.setAttribute('d', '"M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"');
svg1.appendChild(svg1Path);

const svg2 = document.createElement('svg');
svg2.setAttribute('xmlns',"http://www.w3.org/2000/svg");
svg2.setAttribute('height',"24px");
svg2.setAttribute('width',"24px");
svg2.setAttribute('viewBox',"0 -960 960 960");
svg2.setAttribute('fill',"#e3e3e3");
const svg2Path = document.createElement('path');
svg2Path.setAttribute('d', "M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-720q-44 0-81.5 15.5T332-742l-58-56q41-38 93.5-60T480-880q125 0 212.5 87.5T780-580q0 71-25 121.5T698-376l-56-56q21-23 39.5-59t18.5-89q0-92-64-156t-156-64Zm368 688-57 57-265-265H330q-69-41-109.5-110T180-580q0-20 2.5-39t7.5-37L56-792l56-56 736 736ZM354-400h92L260-586v6q0 54 24.5 101t69.5 79Zm-6-98Zm134-94Zm164 312v80H320v-80h326Z");
svg2.appendChild(svg2Path);

lightmodeButton.appendChild(svg1);
lightmodeButton.appendChild(svg2);

document.body.appendChild(lightmodeButton);

let darkmode = localStorage.getItem('darkmode')

const enabledarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disabledarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === 'active') { enabledarkmode() }

lightmodeButton.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enabledarkmode() : disabledarkmode()
})