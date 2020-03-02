function openSM() {
  document.querySelector('#sideMenu-id').style.width = '450px';
  document.querySelector('#page-content').style.marginLeft = '450px';
}

function closeSM() {
  document.getElementById('sideMenu-id').style.width = '0';
  document.getElementById('page-content').style.marginLeft = '0';

}