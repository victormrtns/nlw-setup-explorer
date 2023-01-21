const form = document.querySelector("#form-habits")
//Para iniciar minha biblioteca, instanciar o objeto
const nlwSetup = new NLWSetup(form)

//Fazer o carregamento das datas e marca as caixas

const data = {
  workout: ["01-01", "01-02", "01-06"],
  takePills: ["01-03"],
  journal: ["01-02"],
}
nlwSetup.setData(data)
//Apos carregar as datas, vai carregar e renderizar o layout, ou seja, pra cada tag de exercise, water ou food, ele vai criar uma tag pra dias
nlwSetup.load()
