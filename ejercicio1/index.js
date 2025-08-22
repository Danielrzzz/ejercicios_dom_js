    //1.1
    const button = document.querySelector(".showme");
    console.log(button);

    //1.2
    const title = document.querySelector("#pillado");
    console.log(title);

    //1.3
    const paragraphs = document.querySelectorAll("p");
    console.log(paragraphs);

    //1.4
    const classes = document.querySelectorAll(".pokemon");
    console.log(classes);

    //1.5
    const spans = document.querySelectorAll("span[data-function='testMe']");
    console.log(spans);

    //1.6
    const characters = document.querySelectorAll("span[data-function='testMe']");
    console.log(characters[2]);

    //Los he colocado en el HTML para poder hacer las pruebas, y así no usar el defer