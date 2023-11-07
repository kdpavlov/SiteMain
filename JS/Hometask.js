const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){

    document.getElementsByTagName('div')[7].innerText='Pavlov'
    document.getElementsByTagName('div')[8].innerText='Kirill'
    document.getElementsByTagName('div')[11].innerHTML='New Birthday'

}
node_for_click_all.addEventListener("click",find_edit_all)


const node_for_click_name = document.getElementById("for_click_name")
function find_edit_name(){
      document.getElementsByTagName('div')[8].innerText='Kirill'

}
node_for_click_name.addEventListener("click",find_edit_name)