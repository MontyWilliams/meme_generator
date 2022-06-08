# Meme Generator
tutoriall from free code camp goes over event listeners and stat

# Sass notes
A few tidbits I noted during this proj
## Mixins
theses are like functions and add to the power of varibles
here I create a mixin for the backround of the header in a file called _utilities
(underscore is a compilation setting)
```
@mixin bg(){
  background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%)
};
```
then, because sass compiles everything at once, I import it into the main sass
```
@import 'utilities'
```
