let body = document.querySelector(".js-theme");
let container = document.querySelector(".js-container");
let onChangeTheme = document.querySelector(".js-buttonTheme")
let onSecretButton = document.querySelector(".js-secret");
let hiddenSpan = document.querySelector(".js-hiddenSpan");
let onDestroyAll = document.querySelector(".js-destroyButton");

onChangeTheme.addEventListener("click", () => {
    body.classList.toggle("darkTheme");
    onChangeTheme.innerText === "Włącz Ciemny Motyw" ? (onChangeTheme.innerText = "Wyłącz Ciemny Motyw") : (onChangeTheme.innerText = "Włącz Ciemny Motyw");
});

onSecretButton.addEventListener("click", () => {
    hiddenSpan.innerHTML = (`<img width="300" class="image"
    src="https://scontent.fpoz1-1.fna.fbcdn.net/v/t1.6435-9/69071853_2846897295325084_1888346285094731776_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=0Nd508s0jn4AX9-502W&_nc_ht=scontent.fpoz1-1.fna&oh=6d7d01ab0067a1013bcafc82b71313b9&oe=608CE2C8"
    alt="Schronisko Samotnia"><span>
    <p>Adres schroniska</p>
    Na śniężkę 16
    <br>
    58-550 Karpacz
    </span>
    `);
});

onDestroyAll.addEventListener("click", () => {
    container.remove();
})

