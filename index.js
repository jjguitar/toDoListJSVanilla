function openCity(evt, tabActive) {
  let spanClass = document.getElementsByClassName('span-view')
  let tablinks = document.getElementsByClassName('tablinks');
  let tab
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  evt.currentTarget.className += ' active';
  eraseClass('all', spanClass)

  switch (tabActive) {
    case 'all':
      tab = 'all'
      eraseClass(tab, spanClass)
      break;
    case 'done':
      tab = 'true-checked'
      eraseClass(tab, spanClass)
      break;
    case 'active':
      tab = 'false-checked'
      eraseClass(tab, spanClass)
      break;
  }
// console.log(tabActive)
let trashIcon = document.getElementsByClassName('view-icon')
  if (tabActive === 'done') {
    document.getElementById('delete-all').style.display = 'flex'
    document.getElementById('search__container').style.display = "none"
    // console.log(trashIcon)
    for (let i of trashIcon) {
      i.classList.remove('hide-icon')
    }
  } else {
    document.getElementById('delete-all').style.display = 'none'
    document.getElementById('search__container').style.display = "grid";
    for (let i of trashIcon) {
      i.classList.add('hide-icon')
    }
  }

}

function eraseClass(tab, spanClass) {
  for(let i of spanClass) {
    if (i.classList.contains(tab) && tab !== 'all') {
      i.classList.remove('show')
    } else if (tab === 'all'){
      i.classList.add('show')
    }

    // let k = i.children
    // if(tab === 'true-checked') {
    //   k[0].classList.add('line-middle')
    // } 
    // else if (k[0].classList.contains('line-middle')) {
    //   k[0].classList.remove('line-middle')
    // }
  }
}

document.getElementById('defaultOpen').click();