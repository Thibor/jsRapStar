# jsRapStar
JQuery rating plugin

More information about this can be found in this blog <a href="https://www.jqueryscript.net/other/Fractional-Star-Rating-jsRapStar.html">article</a>.

#### Demo

[https://thibor.github.io/jsRapStar/](https://thibor.github.io/jsRapStar/) 

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
colorBack | color | white | Background color
colorFront | color | yellow | The rating symbol color
enabled | bool | true | Enable disable plugin
star | char | &#9733 | Customize the rating symbol
length | int | 6 | Specify the number of rating stars
step | bool | true | Rating use only full star
value | double | 0 | Value of rating

### Events

Event | Params | Description
------ | ---- | -------
onClick | new rating | Fires after clik
onMousemove | current rating  | Fires when mouse is moved
