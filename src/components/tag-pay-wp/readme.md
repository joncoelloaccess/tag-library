# tag-pay-wp









## Demos









#### Basic button









```html




<tag-pay-wp></tag-pay-wp>




<script>




  document.addEventListener("workingPatternChange", e => {




    const $el = document.querySelector("tag-pay-wp");




    $el.value = e.detail.value




  });




</script>




```









```html




const { monday, thursday, tuesday, wednesday, friday } = this.workingPatterns;




return [




  <tag-pay-wp id="monday" dayofweek={monday.dayofweek} value={monday.value} />,




  <tag-pay-wp id="tuesday" dayofweek={tuesday.dayofweek} value={tuesday.value} />,




  <tag-pay-wp id="wednesday" dayofweek={wednesday.dayofweek} value={wednesday.value} />,




  <tag-pay-wp id="thursday" dayofweek={thursday.dayofweek} value={thursday.value} />,




  <tag-pay-wp id="friday" dayofweek={friday.dayofweek} value={friday.value} />




];




```









```html




const { workingPatterns } = this;




    return Object.keys(workingPatterns).map(wp => (




      <tag-pay-wp




        id={wp}




        dayofweek={workingPatterns[wp].dayofweek}




        value={workingPatterns[wp].value}




      />




    ));




));




```









```html




<tag-pay-wp id="test"></tag-pay-wp>









<script>




  const x = document.getElementById('test');




  x.value = "half-day";




</script>




```









<!-- Auto Generated Below -->


## Properties

#### dayofweek

string


#### id

string


#### value

string


## Attributes

#### dayofweek

string


#### id

string


#### value

string


## Events

#### workingPatternChange



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
