const handleFrom = () => {
    console.log('handle')
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = new FormData(form);
        fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(formData).toString(),
            })
            .then(() => {
                form.innerHTML = `
                <h2 class="text-5xl text-center">Nous avons bien reçu votre message</h2>
                <p class="text-center">Nous vous répondrons dès que possible</p>
                <a class="text-center text-primary-darker underline hover:no-underline" href="/">Retour à l'accueil</a>
                `
            })
            .catch((error) => alert(error));


    })
}

export default handleFrom