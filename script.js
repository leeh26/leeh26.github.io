function updateDateTime() {
    const now = new Date();
    const monthoptions = { month: 'long' };
    const dayoptions = { day: 'numeric'};
    const hroptions = { hour: '2-digit', minute: '2-digit', hour12:false };
    
    const fullMonth = now.toLocaleString('en-US', monthoptions);
    const shortMonth = fullMonth.slice(0, 3);

    const monthDisplay = window.innerWidth <= 760 ? shortMonth : fullMonth;
    document.getElementById('date-month').innerText = monthDisplay;
    
    document.getElementById('date-day').innerText = now.toLocaleString('en-US', dayoptions);
    document.getElementById('date-hr').innerText = now.toLocaleString('en-US', hroptions);
}

setInterval(updateDateTime, 10000);
updateDateTime();

window.addEventListener('resize', updateDateTime);