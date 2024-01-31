<h1 align="center">igniteshoesapp</h1>

Essa aplicação desenvolvida em React Native tem como alvo aplicar estraegias de Push Notifications & Deep Linking.

Antes de mais detalhes, é importante reforçar que, esse projeto está configurado para o fluxo de trabalho **Bare Workflow** pois é necessário ter acesso as pastas nativas do Android e IOS. Caso tenha uma dúvida, segue a explicação dos Fluxos de Trabalho:

- **Manager Workflow** o prjeto utiliza o Expo Go para gerenciar e cuidar de todas as configurações nativas necessárias para que a aplicação possa ser executada em dispostivos Android e IOS. Como complemento, o Expo SDK (Que no momento está na versão 50) possui uma série de conjuntos abrangentes de APIs que fornecem acessos a recursos do dispositivo como camera, sistema de arquivos e etc.

- **Bare Workflow** o projeto não utiliza nenhum gerenciador, o desenvolvedor(a) tem acesso total as pastas nativas do prjeto.

Para transação de fluxo de trabalho do **Manager Workflow** para **Bare Workflow** é necessário utilizar o comando **npx expo preduild** que irá gerar a compilação do código e desse ponto para frente, o comando que será utilizado será o **npx expo start --dev-client**

</p>

## Funcionalidades

- [x] Envio de notificação **Foreground** | Quando o APP está aberto e visível
- [x] Envio de notificação **Background** | Quando o APP está aberto e porém em segundo plano (minimizado)
- [x] Envio de notificação **Quit** | Quando o dispositivo está bloqueado ou o APP não está ativo ou em execução

## Tecnologias

- React Native
- Expo
- TypeScript
- NativeBase
- React Navigation
- Firebase Clound Messaging (FCM)
- OneSignal

## Estrutua das pastas

```plainText
mobile
.
├── expo                        # Expo Archives
├── android                     # Android Archives
├── ios                         # Ios Archives
├── src                         # Source files
│   ├── @types                  # Contains all global definitions of types and interfaces
│   ├── assets                  # Contains Js bundles assets. e.g: icons, splash, images etc...
│   ├── data                    # Datas
│   ├── components              # Contains all global react components
│   ├── contexts                # All contexts
│   ├── dtos                    # Models Data Base
│   ├── hooks                   # Application hooks
│   ├── notifications           # Configuration of parameters for OneSingal
│   ├── routes                  # Contains application routes
│   ├── screens                 # Contains application screens
│   ├── services                # Config service api
│   ├── storage                 # Contains saving data in locations.
│   ├── theme                   # Contains the theme of the application
.
.
├── App                         # Bundle entry
.
```

## 🚀 Rodando o Projeto

Como o projeto está configurado em **Bare Workflow**, será necessário ter instalado algum emulador de dispositivo móvel e ter criado um projeto no **Firebase Clound Messaging (FCM)** e no **OneSignal** (Troque as `OneSignal.setAppId` e `OneSignal.setEmail`)

## 🚀 Running the Project

Clone the project

```bash
  git clone https://github.com/diego64/igniteshoesapp.git
```

### Mobile

Enter the project directory

```bash
  cd marketspace-igniteshoesapp
```

Instale as dependencias

```bash
  npm install
```

```bash
  npx expo start --dev-client
```

## 🌎 License

This project is under the MIT license. See the [LICENSE](https://github.com/diego64/igniteshoesapp/blob/main/LICENSE) file for more details.