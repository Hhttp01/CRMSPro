const API_URL = 'http://localhost:3000/api/customers';

// טעינת לקוחות מהשרת
async function fetchCustomers() {
    const res = await fetch(API_URL);
    const data = await res.json();
    const list = document.getElementById('list');
    list.innerHTML = '';
    data.forEach(c => {
        list.innerHTML += `<li>${c.name} - ${c.email} (${c.phone})</li>`;
    });
}

// הוספת לקוח חדש
document.getElementById('customerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const customer = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    });

    e.target.reset();
    fetchCustomers();
});

fetchCustomers();
