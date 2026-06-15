describe('Reservas en Shady Meadows B&B', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/')
    })

    // Este condicional lo hice con ayuda de IA porque tenía error de React que rompía el test.
    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('Minified React error #418')) {
            return false; // De esta forma se ignora el fallo de hidratación de React y continúa el test
        }
    })

    it('Seleccionar habitacion y abrir el formulario de reserva', () => {
        cy.get('a[href="#booking"]').click()

        cy.get('a[href="/reservation/1?checkin=2026-06-15&checkout=2026-06-16"]').click()
        cy.get('#doReservation').click()

    })

    it('Completar el formulario con datos válidos (nombre, apellido, email, teléfono y fechas) ', () => {
        cy.get('a[href="#booking"]').click()

        cy.get('a[href="/reservation/1?checkin=2026-06-15&checkout=2026-06-16"]').click()
        cy.get('#doReservation').click()

        cy.get('[placeholder="Firstname"]').type('Juan')
        cy.get('[placeholder="Lastname"]').type('Perez')
        cy.get('[placeholder="Email"]').type(`mail${Date.now()}@gmail.com`)
        cy.get('[placeholder="Phone"]').type('01164666830')
        cy.get('button.btn-primary.w-100').click()

    })

})