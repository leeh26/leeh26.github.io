function updateDateTime() {
    const now = new Date();
    const monthoptions = { month: 'long' };
    const dayoptions = { day: 'numeric'};
    const hroptions = { hour: '2-digit', minute: '2-digit', hour12:false };
    document.getElementById('date-month').innerText = now.toLocaleString('en-US', monthoptions);
    document.getElementById('date-day').innerText = now.toLocaleString('en-US', dayoptions);
    document.getElementById('date-hr').innerText = now.toLocaleString('en-US', hroptions);
}

setInterval(updateDateTime, 10000);
updateDateTime();
