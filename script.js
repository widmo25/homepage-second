{
    const welcome = () => {
        console.log("Hello World!");
    }
    

    const toggleBackground = () => {
        const body = document.querySelector(".js-theme");
        const onChangeTheme = document.querySelector(".js-buttonTheme")
        onChangeTheme.addEventListener("click", () => {
            body.classList.toggle("darkTheme");
            onChangeTheme.innerText === "Włącz Ciemny Motyw" ? (onChangeTheme.innerText = "Wyłącz Ciemny Motyw") : (onChangeTheme.innerText = "Włącz Ciemny Motyw");
        });
    }

    toggleBackground();

    const showHiddenElement = () => {
        const onSecretButton = document.querySelector(".js-secret");
        const hiddenSpan = document.querySelector(".js-hiddenSpan");
        onSecretButton.addEventListener("click", () => {
            hiddenSpan.innerHTML = (`<img width="300" class="image"
        src="/image/samotnia.jpg"
        alt="Schronisko Samotnia"><span>
        <p>Adres schroniska</p>
        Na śniężkę 16
        <br>
        58-550 Karpacz
        </span>
        `);
        });
    }
    showHiddenElement();

    const destroyBody = () => {
        const onDestroyAll = document.querySelector(".js-destroyButton");
        const container = document.querySelector(".js-container");
        onDestroyAll.addEventListener("click", () => {
            container.remove();
        })
    }
    destroyBody();

    const init = () =>{
        welcome();
        
    }
    init();
};
