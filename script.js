{
    const welcome = () => {
        console.log("Hello World!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-theme");
        body.classList.toggle("darkTheme");
        onChangeTheme.innerText === "Włącz Ciemny Motyw" ? (onChangeTheme.innerText = "Wyłącz Ciemny Motyw") : (onChangeTheme.innerText = "Włącz Ciemny Motyw");
    }

    const showHiddenElement = () => {
        const hiddenSpan = document.querySelector(".js-hiddenSpan");
        hiddenSpan.innerHTML = (`<img width="300" class="image"
        src="/image/samotnia.jpg"
        alt="Schronisko Samotnia"><span>
        <p>Adres schroniska</p>
        Na śniężkę 16
        <br>
        58-550 Karpacz
        </span>
        `);
    };

    const destroyBody = () => {
        const container = document.querySelector(".js-container");
        container.remove();
    };

    const init = () => {
        welcome();
        const onChangeTheme = document.querySelector(".js-buttonTheme");
        onChangeTheme.addEventListener("click", toggleBackground);
        const onSecretButton = document.querySelector(".js-secret");
        onSecretButton.addEventListener("click", showHiddenElement);
        const onDestroyAll = document.querySelector(".js-destroyButton");
        onDestroyAll.addEventListener("click", destroyBody);
    }
    init();
};
