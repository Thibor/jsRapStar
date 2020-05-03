# jsRapStar
JQuery rating plugin

More information about this can be found in this blog <a href="https://www.jqueryscript.net/other/Fractional-Star-Rating-jsRapStar.html">article</a>.

#### Demo

[https://thibor.github.io/jsRapStar/](https://thibor.github.io/jsRapStar/) 

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
octave | int | 3 | Number first octave
octaves | int | 2 | Count octaves
waveType | string | square | Type of sound wave
envelope | object | {attack: 0.05,decay: 0.1,sustain: 0.1,release: 0.5,level: 0.5} | Customize shape of sound wave

### Events

Event | Params | Description
------ | ---- | -------
onClick | index of key, frequency of key  | Fires after clik
