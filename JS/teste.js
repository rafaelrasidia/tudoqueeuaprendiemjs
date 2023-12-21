for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i); // Imprime 5 cinco vezes, pois i é capturado no escopo da função
    }, 1000);
  }