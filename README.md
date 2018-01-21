# YiRestaurants

Esta é a solução do teste 2 do processo seletivo de estágio da YiMobile desenvolvida por Marco Kuroiva.

## Como executar

O tutorial a seguir se baseia nas instruções do site oficial do React Native https://facebook.github.io/react-native/docs/getting-started.html

### Pré-requisitos

Ter instalado:
 - node + npm
 ```
  sudo apt-get install -y nodejs
 ```
 - JDK 8+
 - Android Studio
  - Android SDK Platform
  - SDK Manager
  - Android Virtual Device
 - React Native
 ```
  npm install -g react-native-cli
 ```

### Configurando o ambiente

Para preparar o ambiente, é necessário:
 - definir a variável local ANDROID_HOME

Caso esteja no Ubuntu 64-bit, instalar algumas bibliotecas 32-bit

  ```
  sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
  ```

### Rodando a aplicação

 - Crie um Dispositivo Virtual Android (AVD).

 Para isso, execute o Android Studio, crie um projeto e abra o "AVD Manager". Selecione "x86 Images" e procure por "Marshmallow API Level 23, x86_64 ABI" com Android 6.0 como target.

 - Execute o emulador para abrir um Dispositivo Virtual Android (AVD).

 Você pode fazer isso de dentro do "AVD Manager" clicando no botão de 'play' ao lado do AVD criado, ou via terminal. Para abrir o AVD via terminal, entre na pasta onde estão os emuladores (o caminho padrão é '~/Android/Sdk/emulator'), e execute os comandos:

Para ver a lista de AVDs
 ```
 emulator -list-avds

 ```
Para executar o AVD escolhido
```
emulator -avd <Nome do AVD escolhido>

```

 - Na raíz do projeto, execute:
```
sudo react-native run-android
```
O comando anterior irá 'buildar' o projeto e é esperado que a aplicação abra automaticamente no emulador, caso isso não aconteça, navegue dentro do emulador, encontre a aplicação instalada, abra-a e execute no terminal:
```
sudo react-native start
```
Este comando executará o Metro Bundler. Agora você pode atualizar a aplicação no emulador apertando rapidamente 'RR'.
