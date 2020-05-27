# @vpukhanov/react-character-map

Include a character map in your app using our React Character Map. It provides a simple interface for users to select a character from a list of categorised characters.

Based on the original react-character map by Joel Day.

## Installation

```
npm install @vpukhanov/react-character-map
```


## Usage

```js
// Import the module into your react app
import {CharacterMap} from 'react-character-map';
```

```js
// Use the element;
<CharacterMap
	characterData={optionalCustomCharacterData}
	onSelect={function(char,el){ console.log(char, el); }}
/>
```


### Properties

* `autofocus` (boolean): When `autofocus` is true, the component's search input will be focused on mount. Default: `true`.

* `characterData` is an optional property that overrides the default character map. `characterData` should be provided in the form:
```js
{
    "TAB NAME": [
        { "entity": "&copy;", "hex": "&#00A9;", "name": "COPYRIGHT SIGN", "char": "©" } // char is required
    ],
    "ANOTHER TAB": [
        { MORE CHARACTER DATA }
    ]
}
```
* `onSelect` callback: This is fired when the user clicks on a character, and has two parameters;

```js
onSelect(char, el)
```

`char` is an Object of the character that has been selected, for instance;

```js
{ "hex": "&#263B;", "name": "BLACK SMILING FACE", "char": "☻" }
```
or
```js
{ "char":"ø" }
```

The second parameter `el` is the element that has been selected, this is an anchor.
```html
<button data-hex="&#00D8;" data-entity="&Oslash;" data-char="Ø" data-title="LATIN CAPITAL LETTER O WITH STROKE">Ø</button>
```
