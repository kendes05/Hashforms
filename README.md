# HashForms

O **HashForms** é um projeto de validação de formulários que simula uma página de finalização de compra. O objetivo principal é treinar a validação de dados inseridos pelo usuário, como CPF, telefone, CEP, rua e outros campos típicos de um processo de compra online.

Este projeto foi desenvolvido durante o curso **Fullstack Impressionador** da **Hashtag Treinamentos**.

## 🚀 Link de Acesso

Você pode acessar o projeto através do link abaixo:
🔗 **[https://67ec1210e933c22306c7d8f8--fluffy-dasik-df5832.netlify.app/](#)**

## 🛠 Tecnologias usadas

- **HTML5** - Estrutura da página e dos formulários.
- **CSS3** - Estilos e layout.
- **JavaScript** - Lógica para validação de dados e manipulação do formulário.
- **LocalStorage** - Armazenamento das informações no navegador.

## 🔹 Funcionalidades

- **Validação de CPF**: O CPF deve conter 11 dígitos numéricos.
- **Validação de CEP**: O CEP deve conter 8 dígitos numéricos.
- **Validação de Campos**: Todos os campos exigem dados não nulos (apenas números para CPF, telefone, CEP e número da rua).
- **Cupom de Desconto**: O usuário pode inserir um cupom de desconto, e se for válido (desconto10), um desconto será aplicado no preço total.
- **Armazenamento Local**: Após todas as validações serem passadas, os dados são salvos no `localStorage`.
