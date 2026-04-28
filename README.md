# Tópicos Importantes

- Qual a linguagem de progamação utilizada na disciplina? 
JavaScript

- O que é o Node? 
Ambiente de execução do JavaScript no Terminal ou "Servidor"

- O que é Framework e qual a diferença para uma biblioteca? 
Framework é um conjunto de ferramentas e estruturas prontas que ajudam no desenvolvimento de uma aplicação, organizando o código e definindo como ele deve funcionar. 

A diferença para uma biblioteca é que, na biblioteca, o desenvolvedor chama as funções quando precisa. Já no framework, ele é quem controla o fluxo da aplicação e chama o código do desenvolvedor.

- Qual a diferença entre as libs react, react-native, react-dom e expo?
React: biblioteca principal para criar componentes e a lógica da interface.
React DOM: responsável por renderizar o React na web (HTML no navegador).
React Native: permite usar React para criar aplicativos mobile (Android e iOS).
Expo: ferramenta que facilita o desenvolvimento com React Native, sem precisar de muita configuração.

- O que é o npm? 
Node Package Manage, gerenciador de pacotes do Node, ele serve para adicionar pacote ou remove-los.

- O que é React? 
React é uma biblioteca JavaScript usada para criar interfaces de usuário, principalmente para sites e aplicações web e mobile. Ela é baseada em componentes, que permite organizar e facilitar a escalabilidade de um projeto Front-end.

- O que é o React Native?
É uma biblioteca que complementa o React usado para desenvolver aplicativos para celular, precisamente voltada para "Android e IOS" usando JavaScript.

- O que é o Expo?
É  framework, que fornece uma série de conjuntos e ferramenta que facilita o desenvolvimento com React Native, ajudando a criar e testar aplicativos de forma mais simples e rápida.

- Como estilizar um componente no React Nactive?
Usando o StyleSheet, para a estilização, ele é um componente do React Nactive.

- O estilo Css in Js no React Nactive é igual ao CSS? Tenho todas as propriedades?
No React Native>, o CSS-in-JS não é igual ao CSS da web.

Ele é parecido, mas:

não usa arquivo .css,

não tem todas as propriedades do CSS,

é focado em aplicativos mobile,

usa principalmente Flexbox para layout.

Resumo final: é parecido com CSS, mas adaptado para apps e com menos recursos que o CSS da web.

- Em quais pacotes encontro um componente Image? Qual melhor para usarmos atualmente?
React Native (componente padrão Image), expo-image (biblioteca mais moderna)

Atualmente, o mais recomendado é o expo-image, porque ele tem melhor desempenho, melhor carregamento e suporta mais formatos de imagem(como o GIF).

- O que são componentes no React?
Componentes no React são partes da interface criadas de forma separada, que podem ser reutilizadas ao longo do sistema. Cada componente representa um pedaço da tela, como um botão, um menu ou uma seção, e funciona como uma função que retorna elementos visuais. Essa divisão facilita a organização do código, a manutenção e o reaproveitamento de estruturas dentro da aplicação.

- O que são propriedades de componentes?
São características ou dados que podemos modificar ao chamar esse componente, permitindo personalizar seu comportamento e conteúdo.

- O que são Hooks?
Hooks no React são funções especiais que trazem recursos como estado e efeitos para componentes funcionais.

- Onde estão?
Na biblioteca React Core
Principais exemplos: useState e useEffect.

- Características principais:

Começam com “use”.

Usados em componentes React.

Devem ser chamados no nível principal do componente (não dentro de condições ou loops).

Podem ser criados de forma personalizada pelo desenvolvedor, permitindo reutilizar lógica e organizar melhor o código dentro dos componentes.

- useState & useEffect

🔹 Para que serve e como funciona o useState?

* Para que serve:
É um Hook do React usado para criar e controlar um estado, servindo para guardar valores que podem mudar dentro do componente.

* Como funciona:
Você define um valor inicial.
Quando usa a função de atualização (ex: setValor), o valor muda e o React renderiza o componente novamente, atualizando a tela.

* Sempre que o estado muda, a interface atualiza.


🔹 Para que serve e como funciona o useEffect?

Para que serve:
É um Hook que serve para executar ações depois que o componente renderiza ou quando algum valor muda.

Como funciona:
Ele recebe uma função (o que vai executar) e um array de dependências (quando vai executar).

Se o array estiver vazio → executa só quando o componente carrega.
Se tiver uma variável → executa quando ela mudar.
Se não tiver array → executa toda renderização.

* Ele reage às mudanças e executa algo como consequência.

- O que é Prop Drilling?
É uma técnica no React em que os dados (props) são passados de um componente para outro através de vários níveis, mesmo que os componentes intermediários não utilizem esses dados.

* Como funciona:
Funciona passando as propriedades(props) de componente em componente (pai → filho → neto…), até chegar no componente que realmente precisa da informação.

==========================================================

Extra

- Revisão de variavéis e objetos
- desestrturação de objetos|

## Comandos utéis

// Como Instalar o React Native com Expo?
--npx create-expo-app@latest --template

//Instalar qualquer pacote no Node
npm i ou install

### Expo

- npx expo start
