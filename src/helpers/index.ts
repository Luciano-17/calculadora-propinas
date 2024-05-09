export function formatCurrency(qunatity : number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(qunatity)
}