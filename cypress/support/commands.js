Cypress.Commands.add('hacerReserva', (checkinOffset = 0, checkoutOffset = 1) => {
    const formatDate = (date) => date.toISOString().split('T')[0]

    const today = new Date()

    const checkin = new Date(today)
    checkin.setDate(today.getDate() + checkinOffset)

    const checkout = new Date(today)
    checkout.setDate(today.getDate() + checkoutOffset)

    return {
        checkin: formatDate(checkin),
        checkout: formatDate(checkout)
    }
})