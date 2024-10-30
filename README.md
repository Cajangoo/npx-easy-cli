# Npx-easy-cli
My first command line project, im trying this to improve my skills and make some advanced projects in the future

_________________________________________

**Commands:**

node main.js hello
-> Olá, mundo (verde)

node main.js --name Ana
-> Olá, Ana! (verde)

node main.js sum 5 3
-> Resultado: 8 (azul)

node main.js sum
-> Resultado: 0 (azul)

node main.js config username Ana
-> Configuração sala: username = Ana (amarelo)

node main.js config username
-> Valor de username: Ana (magenta)

node main.js config nonexistentKey
-> Configuração 'nonexistetKey' não encontrada (vermelho)

node main.js --help
-> Uso: easycli <comando> [opções] (azul)
Commands:
  main.js hello                 Imprime uma saudação
  main.js sum [a] [b]           Soma dois números
  main.js config <key> [value]  Define ou exibe uma configuração

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

_________________________________________


