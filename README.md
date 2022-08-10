# Meme Generator
tutoriall from free code camp goes over event listeners and stat

# Sass notes
A few tidbits I noted during this proj
### Css
margin up right down left

## importing syle sheets
had issues with importing still sheets, for some reason when I import the nav sheet into the main style sheet
I loose control over it 
## Mixins
theses are like functions and add to the power of varibles
here I create a mixin for the backround of the header in a file called _utilities
(underscore is a compilation setting)
```
@mixin bg(){
  background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%)
};
```
then, I need to import the utility in each file that uses it
```
@import 'utilities'
```
# Event listeners
buttons and events bring webpages to life. usually we have click events linked 
together but on hover or mouse over can be used as well
https://reactjs.org/docs/events.html#mouse-events

# useState()
useState is part of the react libray. its usually destructured but it can be used as
```
const result = React.useState()
```
logging this will return undefined because it must be passed somthing to keap track of
```
const result = React.useState("Hello")
```
## Updating a state
It is never good to call a curent state directly when updating a value (something to do with how react handles state under the hood) The callback function used with useState automatically knows what the state currently is 
```
    const [count, setCount] = React.useState(0)
    // The callback function calls setstate and gets value indirectly
    function add() {
        setCount(prevCount => prevCount + 1)
    }
```
## spread Syntax ...
using this operator automatically returns all the elements in an array or obj
when using this operator use the {} because we need to switch to jsx
```
const thingArray = ["thing 1", "thing 2", "thing 3"]
...thingArray
// returnsv"thing 1", "thing 2", "thing 3"
```
### Returning an object
when returning an object jsx needs to be wrapped in parenthesis ({})

# Moonshot
if remove the derived state and lift it to the top as i set it i can pass the stat to the header and footer and maybe display the top text in the head and the bottm text in the footer. just to see is=f I can and it may look cool to
