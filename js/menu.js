let menu = document.getElementById('context-menu');

document.onclick = function(e){
    menu.style.display = 'none';
}

document.getElementById('link').oncontextmenu = function(e){
 	e.preventDefault();        
    menu.style.left = e.pageX + 'px';
    menu.style.top = e.pageY + 'px';
    menu.style.display = 'block';
}


const config = {
  menuItems: [
    {text: 'menu item 1'},
    {text: 'menu item 2'},
    {text: 'menu item 3'},
    {text: 'menu item 4'}
  ],
  targetElSelector: '.menu-container1'
};

const config2 = {
  menuItems: [
    {text: 'menu item A'},
    {text: 'menu item B'},
    {text: 'menu item C'}
  ],
  targetElSelector: '.menu-container2'
};

const config3 = {
  menuItems: [
    {text: 'menu item me'},
    {text: 'menu item you'},
    {text: 'menu item we'}
  ],
  targetElSelector: '.menu-container3'
};

class DropdownMenu {
  constructor(config) {
    const menuEl = document.createElement('ul');
    this.menuEl = menuEl;
    config.menuItems.forEach(this.addNewItem.bind(this));
    
    document.querySelector(config.targetElSelector).append(menuEl);
  }
  
  addNewItem(item) {
    const itemEl = document.createElement('li');
    itemEl.innerText = item.text;
    this.menuEl.append(itemEl);
  }
}

// function dropdownMenu(config) {
//     const menuEl = document.createElement('ul');
//     config.menuItems.forEach(item => {
//       const itemEl = document.createElement('li');
//       itemEl.innerText = item.text;
//       menuEl.append(itemEl);
//     });
    
//     document.querySelector(config.targetElSelector).append(menuEl);
// }

const myMenu1 = new DropdownMenu(config);
const myMenu2 = new DropdownMenu(config2);
const myMenu3 = new DropdownMenu(config3);


myMenu2.addNewItem({text: 'menu item D'});

