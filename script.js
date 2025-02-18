function search() {
    let searchText = document.getElementById("search-bar").value;
    if (searchText) {
        alert("Você pesquisou por: " + searchText);
    } else {
        alert("Por favor, digite algo para pesquisar.");
    }
}
