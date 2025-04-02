# Desenvolvimento Web II – Prof. Arley  
## Atividade 2 – React Context  

![Imagem do Projeto](./exercicio.png)

### Descrição da Atividade  
Desenvolver um aplicativo React com TypeScript que permita ao usuário fornecer um nome em um campo de entrada e exibir as letras separadamente em componentes individuais, conforme o exemplo abaixo:  

- **Ao iniciar ou quando o campo de entrada estiver vazio:**  
  Exibir o texto "Sem entrada".  

- **Quando o usuário digitar um nome:**  
  Cada letra do nome será exibida separadamente em componentes estilizados.  

### Objetivos  
- Compreender e utilizar componentes React.  
- Utilizar React Context para gerenciamento de dados.  
- Passar dados entre componentes por meio de contexto e props.  

### Requisitos Funcionais  
1. A aplicação deverá ser formada pelos seguintes componentes:  
   - **Ball**: Recebe por props uma string e exibe a letra.  
   - **Display**: Exibe o texto "Sem entrada" ou as letras do nome em componentes `Ball`.  
   - **Input**: Campo de entrada do usuário.  
2. A comunicação entre os componentes `Input` e `Display` deverá ser feita utilizando React Context.  

### Requisitos Não Funcionais  
1. Cada letra deve ser exibida em um componente `Ball`.  
2. Os estilos devem ser implementados utilizando CSS-in-JS.  

### Tecnologias Utilizadas  
- **React**: Biblioteca para construção da interface.  
- **TypeScript**: Superset do JavaScript para tipagem estática.  
- **CSS-in-JS**: Estilização diretamente nos componentes.  
y