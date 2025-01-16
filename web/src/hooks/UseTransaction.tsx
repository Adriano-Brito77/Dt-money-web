interface Transaction {
    id: string;
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
    user: string;
}

const transactions: Transaction[] = [
    {
        id: '1',
        description: 'Salary',
        price: 4000.45,
        category: 'Income',
        type: 'income',
        user: 'User1'
    },
    {
        id: '2',
        description: 'Groceries',
        price: 150,
        category: 'outcome',
        type: 'outcome',
        user: 'User1'
    },
    {
        id: '1',
        description: 'Salary',
        price: 5000,
        category: 'Income',
        type: 'income',
        user: 'User1'
    },
];

const UseTransactions = () => {
    const getTransactionsIncome = () => {
        const trasacao = transactions
        .filter(transaction => transaction.type ==='income')
        .reduce((acc, transaction) => acc + transaction.price, 0);  
        return trasacao;
    }
    
    
    return { getTransactionsIncome };

}


export default UseTransactions;