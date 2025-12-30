const API_URL = 'http://localhost:3000/api/customers';

async function fetchCustomers() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const list = document.getElementById('list');
        list.innerHTML = '';
        
        data.forEach(c => {
            const li = document.createElement('li');
            li.className = "customer-card";
            // יצירת לינק לוואטסאפ עם המספר של הלקוח
            const whatsappUrl = `https://wa.me/${c.phone.replace(/-/g, '')}`;
            
            li.innerHTML = `
                <div>
                    <strong>${c.name}</strong><br>
                    <span>${c.email}</span>
                </div>
                <a href="${whatsappUrl}" target="_blank" class="ws-btn">שלח WhatsApp 💬</a>
            `;
            list.appendChild(li);
        });
    } catch (err) {
        console.error("שגיאה בטעינת נתונים:", err);
    }
}

document.getElementById('customerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const customerData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData)
    });

    e.target.reset();
    fetchCustomers();
});

fetchCustomers();
