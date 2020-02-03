# mie-ui

## Install
```
npm install mie-ui -S
```

### Quick Start
```js
// main.js
import MieUi from 'mie-ui'
import 'mie-ui/dist/mie-ui.css'

Vue.use(MieUi)
// or
const {
  Button
  // ...
} = MieUi
Button.install(Vue)
```
```js
// *.vue
<MieButton type="success">success</MieButton>
```
