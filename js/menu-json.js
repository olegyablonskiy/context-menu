document.getElementById('get-json')
    .addEventListener('click', getJSON);
    
function getJSON() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const clientData = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerText = clientData.name; 
            document.getElementById('client-age').innerText = clientData.age; 
            document.getElementById('client-married').innerText = clientData.married; 
            document.getElementById('client-address').innerText = clientData.address; 
        }
    }
    xhr.open('GET', 'menu-data.json', true);
    xhr.send();
}