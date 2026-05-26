# Json-Javascript object notation

Jsonဆိုတာ JS object syntaxကို အခြေခံထားတဲ့ text-based data formatဖြစ်တယ်။

Across networkကို data transmitရာမှာ အသုံးဝင်တယ်။

## Json structure

```json
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
//Array As JSON
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

## [**JSON syntax restrictions**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON#json_syntax_restrictions)

## [**Converting between objects and text**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON#converting_between_objects_and_text)

`.[parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)` JSON stringကို parameterအနေနဲ့လက်ခံပြီး JavaScript objectကို return ပြန်ပေးတယ်။

[`stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) Objectကို parameterအနေနဲ့လက်ခံပြီး JSON Stringကို return ပြန်ပေးတယ်။