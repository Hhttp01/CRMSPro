const API_URL = 'http://localhost:3000/api/customers';

// טעינת לקוחות מהשרת
async function fetchCustomers() {
    const res = await fetch(API_URL);
    const data = await res.json();
    const list = document.getElementById('list');
    list.innerHTML = '';
    data.forEach(c => {
        const li = document.createElement('li');
        li.textContent = `${c.name} - ${c.email} (${c.phone})`;
        list.appendChild(li);
    });
}

// הוספת לקוח
document.getElementById('customerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone })
    });

    e.target.reset();
    fetchCustomers();
});

fetchCustomers();
