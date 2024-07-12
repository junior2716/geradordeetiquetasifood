function generateLabel() {
    const orderNumber = document.getElementById('orderNumber').value;
    const customerName = document.getElementById('customerName').value;
    const address = document.getElementById('address').value;
    const houseNumber = document.getElementById('houseNumber').value;
    const zipCode = document.getElementById('zipCode').value;
    const items = document.getElementById('items').value;

    document.getElementById('orderNumberDisplay').textContent = orderNumber;
    document.getElementById('customerNameDisplay').textContent = customerName;
    document.getElementById('addressDisplay').textContent = address;
    document.getElementById('houseNumberDisplay').textContent = houseNumber;
    document.getElementById('zipCodeDisplay').textContent = zipCode;
    document.getElementById('itemsDisplay').textContent = items;

    document.getElementById('labelContainer').style.display = 'block';
}

function printLabel() {
    const label = document.getElementById('label').innerHTML;

    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<html><head><title>Imprimir Etiqueta</title>');
    printWindow.document.write('<link rel="stylesheet" href="styles.css">');
    printWindow.document.write('</head><body >');
    printWindow.document.write('<div class="label-container">');
    printWindow.document.write(label);
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');

    printWindow.document.close();
    printWindow.print();
}
