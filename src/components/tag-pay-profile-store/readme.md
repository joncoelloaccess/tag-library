# tag-pay-profile-store









## Demos









#### Basic element









```html




<tag-pay-profile-store></tag-pay-profile-store>




```









```html




<script>




  let viewModel;









  async function main() {




    const resp = await fetch("http://localhost:5050/Home/GetProfile");




    viewModel = await resp.json();




    bindData(viewModel);




  }




  main();









  function bindData(viewModel) {




    const vm = viewModel;









    $("#profile")




      .prop("name", vm.name)




      .prop("gender", vm.gender)




      .prop("dob", vm.dob)




      .prop("nationality", vm.nationality)




      .prop("src", vm.profileSrc);









    $("#knownAs").val(vm.preferedName);




    $("#addressline1").val(vm.addressline1);




    $("#town").val(vm.town);




    $("#county").val(vm.county);




    $("#postcode").val(vm.postcode);




    $("#emailAddress").val(vm.emailAddress);




    $("#mobile").val(vm.mobile);




    $("#landline").val(vm.landline);









    $("#emergancyContactName").val(vm.emergancyContactName);




    $("#relationship")




      .prop("options", vm.relationships)




      .val(vm.relationship);




    $("#emergancyContactMobile").val(vm.emergancyContactMobile);









    $('#effectiveFromDate').val(vm.workingPatternEffectiveFrom);




    $("#workingPattern").prop("workingPatterns", vm.workingPatterns);




  }









  document.addEventListener("workingPatternChange", e => {




    const newWpValues = e.detail;




    console.log(e.detail);




    const newValue = {};




    newValue[newWpValues.id] = newWpValues;




    const newWorkingPattern = {




        workingPatterns: Object.assign({}, viewModel.workingPatterns, newValue)




    };




    viewModel = Object.assign({}, viewModel, newWorkingPattern);




    bindData(viewModel);




  });




</script>




```









<!-- Auto Generated Below -->



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
