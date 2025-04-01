const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputAdress = document.getElementById("adress");
const inputComplement = document.getElementById("complement");
const inputDistrict = document.getElementById("district");
const inputCity = document.getElementById("city");
const inputState = document.getElementById("state");
const inputCpf = document.getElementById("cpf");
const inputPhone = document.getElementById("phone-number");
const inputCep = document.getElementById("cep");
const inputNumber = document.getElementById("number");
const submitButton = document.getElementById("submit-button");
var formValid = false;

form.addEventListener("submit", (event) => {
  formValid ? (formValid = false) : event.preventDefault();
});
function valideCpf(cpf) {
  return /^\d+$/.test(cpf) && cpf.length === 11;
}

function validePhone(phone) {
  return /^\d+$/.test(phone) && phone.length === 11;
}

function valideCep(cep) {
  return /^\d+$/.test(cep) && cep.length === 8;
}

function valideNumber(number) {
  return /^\d+$/.test(number) && number.length != 0;
}

submitButton.addEventListener("click", () => {
  let cpf = inputCpf.value;
  let phone = inputPhone.value;
  let cep = inputCep.value;
  let number = inputNumber.value;
  let name = inputName.value;
  let adress = inputAdress.value;
  let complement = inputComplement.value;
  let district = inputDistrict.value;
  let city = inputCity.value;
  let state = inputState.value;

  if (!valideCpf(cpf)) {
    alert("CPF inválido");
    return;
  }
  if (!valideCep(cep)) {
    alert("CEP inválido");
    return;
  }
  if (!validePhone(phone)) {
    alert("Telefone inválido");
    return;
  }
  if (!valideNumber(number)) {
    alert("Número de rua inválido");
    return;
  }

  if (
    !(
      name &&
      phone &&
      cep &&
      number &&
      adress &&
      complement &&
      district &&
      city &&
      state
    )
  ) {
    alert("Não deixe campos vazios");
  } else {
    let user = {
      name: name,
      adress: adress,
      complement: complement,
      district: district,
      city: city,
      state: state,
      phone: phone,
      cep: cep,
      number: number,
      cpf: cpf,
    };
    localStorage.setItem("user", JSON.stringify(user));
    formValid = true;
    alert("Formulário cadastrado com sucesso!");
  }
});
