import homePage from "../Pages/HomePage";

describe('Coloca item no carrinho apartir da home page', () => {

  it('Adicione um item ao carrinho de compras',() => {
    homePage.go();
    homePage.clickSeOffer();
    homePage.AddItemOnCart();
    homePage.GoToCheckout();
  })

})

