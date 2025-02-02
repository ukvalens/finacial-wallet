document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard is ready!');
    
    // Example data for demo purposes
    const accountBalances = [
        { type: 'Bank Account', balance: 5000 },
        { type: 'Mobile Money', balance: 1200 },
        { type: 'Cash', balance: 300 }
    ];

    const recentTransactions = [
        { description: 'Groceries', amount: 50, date: '01/26/2025' },
        { description: 'Salary', amount: 2500, date: '01/25/2025' },
        { description: 'Utilities', amount: 100, date: '01/24/2025' }
    ];

    const budgetStatus = 'You have $600 remaining for this month.';
    const notifications = [
        'Budget exceeded for Entertainment category.',
        'New transaction: Rent - $900.'
    ];

    // Populate account balances
    const accountBalancesList = document.getElementById('account-balances-list');
    accountBalances.forEach(account => {
        const li = document.createElement('li');
        li.textContent = `${account.type}: $${account.balance}`;
        accountBalancesList.appendChild(li);
    });

    // Populate recent transactions
    const recentTransactionsList = document.getElementById('recent-transactions-list');
    recentTransactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.description} - $${transaction.amount} (${transaction.date})`;
        recentTransactionsList.appendChild(li);
    });

    // Populate budget status
    const budgetStatusText = document.getElementById('budget-status-text');
    budgetStatusText.textContent = budgetStatus;

    // Populate notifications
    const notificationsList = document.getElementById('notifications-list');
    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.textContent = notification;
        notificationsList.appendChild(li);
    });

    // Display welcome message
    const userName = sessionStorage.getItem('userName');
    const userProfilePic = sessionStorage.getItem('userProfilePic');

    if (userName && userProfilePic) {
        document.getElementById("welcome-message").innerHTML = `
            <h1>Welcome, ${userName}!</h1>
            <img src="${userProfilePic}" alt="${userName}'s profile picture" width="100" height="100">
        `;
    }

    
