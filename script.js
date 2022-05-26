window.onload = function () {
  const btn = document.getElementById("btn");
  const txt = document.getElementById("textbox");

  const poemes = {
    poemeUn: {
      prem: ["Le loup", "L'homme", " Le sage", "Le roi", "Le Soleil", "L'avenir"],
      deuz: [" s'il a soif", " s'il est affamé", " s'il appartient au démon", " s'il donne", " s'il se méfie", ", s'il dort"],
      troiz: [" est dangereux", " est apaisé", " est tranquille", " sera bon", " sera récompensé"],
    },
    poemeDeux: {
      prem: ["La louve", " La cuisiniere", " La sage", "La reine", "La Lune", " L'avenir"],
      deuz: [" si elle a soif", " si elle est affamé", " si elle appartient au démon", " s'il donne", " s'il se méfie", ", s'il dort"],
      troiz: [" est dangereux", " est apaisé", " est tranquille", " sera bon", " sera récompensé"],

    }
  }


  btn.addEventListener("click", function () {
    let choseNumber = window.prompt("Choisissez votre type de poème ( 1 ou 2 )")
    let number = Number(window.prompt("Choisissez le nombre de poèmes que vous désirez"))
    let total = []
    for (let i = 0; i < number; i++) {

      if (choseNumber == 1) {
        if (i < number - 1 ){
          console.log("foeoeo")
          total.push(rendertext(poemes.poemeUn.prem) + rendertext(poemes.poemeUn.deuz) + rendertext(poemes.poemeUn.troiz ) + "</br>" );
        }else  total.push(rendertext(poemes.poemeUn.prem) + rendertext(poemes.poemeUn.deuz) + rendertext(poemes.poemeUn.troiz));
      }
      else if (choseNumber == 2) {
        total.push(rendertext(poemes.poemeDeux.prem) + rendertext(poemes.poemeDeux.deuz) + rendertext(poemes.poemeDeux.troiz));
      } else {
        window.alert("choisissez 1 ou 2")
      }

    }
    txt.innerHTML = total
    console.log(total)
  });

  function rendertext(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }
}
