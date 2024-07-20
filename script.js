const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += " - " + item.value + '\n'
    })

    let confirm = window.confirm(
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "Observações: " + observations + "\nDeseja Prosseguir com o pedido?"
    )

    if (confirm == true) {
        alert("Pedido Confirmado!")
        console.log({
            name,
            address,
            breadType,
            main,
            salad,
            observations
        })
    }
})
