# react-native-accordion

Animated accordion component for React Native with React 17 and React Native 0.64.3 Support

## Example app

![image](example-app.gif)

## Installation

```bash
npm install --save @gapur/react-native-accordion
```

## Usage
```js
import Accordion from "@gapur/react-native-accordion";

<Accordion headerTitle="Title">
  <View>
    <Image source={imageUrl} />
    <Text>{description}</Text>
  </View>
</Accordion>
```

You can also show arrow button on the bottom and override accordion header content:
```js
<Accordion
  showButton
  style={styles.accordion}
  renderHeader={() => renderAccordionHeader()}>
  <View>
    <Image source={imageUrl} />
    <View style={styles.headerValue}>
      <Text style={styles.headerLabelText}>{title}</Text>
      <Text style={styles.headerValueText}>{description}</Text>
    </View>
  </View>
</Accordion>
```

## Properties

| Prop                      | Description                                                                                                                                                                                                                                                                                                             | Default        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **`headerStyle`**         | Optional styling for the header title container                                                                                                                                                                                                                                                                         | `{}`           |
| **`headerTitle`**         | Header title text                                                                                                                                                                                                                                                                                                       |                |
| **`headerTitleStyle`**    | Header title text style                                                                                                                                                                                                                                                                                                 |                |
| **`showButton`**          | Show accordion bottom button                                                                                                                                                                                                                                                                                            | `false`        |
| **`buttonStyle`**         | Accordion bottom button style                                                                                                                                                                                                                                                                                           | `{}`           |
| **`renderHeader`**        | Render own accordion header                                                                                                                                                                                                                                                                                             | `() => {}`     |
| **`style`**               | Optional styling for the container                                                                                                                                                                                                                                                                                      |                |
| **`renderButtonContent`** | Render own accordion bottom button                                                                                                                                                                                                                                                                                      | `(showContent) => {}`     |

## Running example app

```sh
git clone git@github.com:Gapur/react-native-accordion.git
cd react-native-accordion/example
yarn
npm run ios
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

MIT
