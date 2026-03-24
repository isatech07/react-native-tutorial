# Tópicos Importantes

- Qual a linguagem de progamação utilizada na disciplina? 
JavaScript

- O que é o Node? 
Ambiente de execução do JavaScript

- O que é Framework e qual a diferença para uma biblioteca? 
Framework é um conjunto de ferramentas e estruturas prontas que ajudam no desenvolvimento de uma aplicação, organizando o código e definindo como ele deve funcionar.

A diferença para uma biblioteca é que, na biblioteca, o desenvolvedor chama as funções quando precisa. Já no framework, ele é quem controla o fluxo da aplicação e chama o código do desenvolvedor.

- O que é o npm? 
Node Package Manage, gerenciador de pacotes do Node.

- O que é React? 
React é uma biblioteca JavaScript usada para criar interfaces de usuário, principalmente para sites e aplicações web e mobile.

- O que é o React Native?
É uma biblioteca  baseado em React usado para criar aplicativos para celular (Android e iOS) usando JavaScript.

- O que é o Expo?
É uma ferramenta que facilita o desenvolvimento com React Native, ajudando a criar e testar aplicativos de forma mais simples e rápida.

- Como estilizar um componente no React Nactive?
Usando o StyleSheet, para a estilização.

- O estilo Css in Js no React Nactive é igual ao CSS? Tenho todas as propriedades?
No React Native>, o CSS-in-JS não é igual ao CSS da web.

Ele é parecido, mas:

não usa arquivo .css,

não tem todas as propriedades do CSS,

é focado em aplicativos mobile,

usa principalmente Flexbox para layout.

Resumo final: é parecido com CSS, mas adaptado para apps e com menos recursos que o CSS da web.

- Em quais pacotes encontro um componente Image? Qual melhor para usarmos atualmente?
React Native (componente padrão Image)

expo-image (biblioteca mais moderna)

Atualmente, o mais recomendado é o expo-image, porque ele tem melhor desempenho, melhor carregamento e suporta mais formatos de imagem.

- O que são propriedades de componentes?
Alterar informações de componentes, para reutilização dele.

- O que são Hooks?
Funções do React que permitem usar estado e outros recursos em componentes funcionais.

- Onde estão?
Na biblioteca React.
Principais exemplos: useState e useEffect.

- Características principais:

Começam com “use”.

Usados em componentes React.

Devem ser chamados no nível principal do componente (não dentro de condições ou loops).

- useState & useEffect

🔹 Para que serve e como funciona o useState?

Para que serve:
Serve para guardar valores que podem mudar dentro do componente (estado).

Como funciona:
Você define um valor inicial.
Quando usa a função de atualização (ex: setValor), o valor muda e o React renderiza o componente novamente, atualizando a tela.

👉 Sempre que o estado muda, a interface atualiza.

🔹 Para que serve e como funciona o useEffect?

Para que serve:
Serve para executar ações depois que o componente renderiza ou quando algum valor muda.

Como funciona:
Ele recebe uma função (o que vai executar) e um array de dependências (quando vai executar).

Se o array estiver vazio → executa só quando o componente carrega.
Se tiver uma variável → executa quando ela mudar.
Se não tiver array → executa toda renderização.

👉 Ele reage às mudanças e executa algo como consequência.

======================

Extra

- Revisão de variavéis e objetos
    - desestrturação de objetos

## Comandos utéis

// Como Instalar o React Native com Expo?
--npx create-expo-app@latest --template

//Instalar qualquer pacote no Node
npm i ou install

### Expo
