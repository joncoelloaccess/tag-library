import { Component, Listen, State } from "@stencil/core";

declare var $: any;

const relationships: any = [
  { value: "102", text: "Mother" },
  { value: "103", text: "Father" },
  { value: "104", text: "Daughter" },
  { value: "105", text: "Son" },
  { value: "100", text: "Sister" },
  { value: "101", text: "Brother" },
  { value: "107", text: "Auntie" },
  { value: "106", text: "Uncle" },
  { value: "108", text: "Niece" },
  { value: "122", text: "Wife" },
  { value: "123", text: "Husband" },
  { value: "115", text: "Nephew" },
  { value: "110", text: "Cousin (female)" },
  { value: "109", text: "Cousin (male)" },
  { value: "111", text: "Grandmother" },
  { value: "112", text: "Grandfather" },
  { value: "114", text: "Granddaughter" },
  { value: "113", text: "Grandson" },
  { value: "165", text: "Stepsister" },
  { value: "166", text: "Stepbrother" },
  { value: "167", text: "Stepmother" },
  { value: "168", text: "Stepfather" },
  { value: "169", text: "Stepdaughter" },
  { value: "170", text: "Stepson" },
  { value: "175", text: "Sister-in-law" },
  { value: "176", text: "Brother-in-law" },
  { value: "177", text: "Mother-in-law" },
  { value: "178", text: "Father-in-law" },
  { value: "179", text: "Daughter-in-law" },
  { value: "180", text: "Son-in-law" },
  { value: "225", text: "Sibling (gender neutral)" },
  { value: "226", text: "Parent (gender neutral)" },
  { value: "227", text: "Child (gender neutral)" },
  { value: "228", text: "Sibling of Parent (gender neutral)" },
  { value: "229", text: "Child of Sibling (gender neutral)" },
  { value: "230", text: "Cousin (gender neutral)" },
  { value: "231", text: "Grandparent (gender neutral)" },
  { value: "232", text: "Grandchild (gender neutral)" },
  { value: "234", text: "Step-sibling (gender neutral)" },
  { value: "235", text: "Step-parent (gender neutral)" },
  { value: "236", text: "Stepchild (gender neutral)" },
  { value: "237", text: "Sibling-in-law (gender neutral)" },
  { value: "238", text: "Parent-in-law (gender neutral)" },
  { value: "239", text: "Child-in-law (gender neutral)" },
  { value: "242", text: "Pet (gender neutral)" }
];

@Component({
  tag: "tag-pay-profile-store",
  styleUrl: "tag-pay-profile-store.scss",
  shadow: true
})
export class TagPayProfileStore {
  @State() vm: any = {};
  async componentDidLoad(): Promise<void> {
    const resp: Response = await fetch("http://localhost:5050/Home/GetProfile");
    const viewModel: any = await resp.json();
    this.vm = viewModel;
  }
  @Listen("change")
  changeHandler(event: CustomEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }
  @Listen("workingPatternChange")
  workingPatternChangeHandler(event: CustomEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const newValue: any = {};
    newValue[event.detail.dayofweek.toLowerCase()] = event.detail.value;
    const newWorkingPattern: object = {
      workingPattern: Object.assign({}, this.vm.workingPattern, newValue)
    };
    this.vm = Object.assign({}, this.vm, newWorkingPattern);
  }
  bindData(): void {
    const { vm } = this;

    if (vm === null) {
      return;
    }

    $("#profile")
      .prop("name", vm.name)
      .prop("gender", vm.gender)
      .prop("dob", vm.dob)
      .prop("nationality", vm.nationality)
      .prop("src", vm.profileSrc);

    $("#knownAs").val(vm.knownAs);
    $("#addressline1").val(vm.addressline1);
    $("#town").val(vm.town);
    $("#county").val(vm.county);
    $("#postcode").val(vm.postcode);
    $("#emailAddress").val(vm.emailAddress);
    $("#mobile").val(vm.mobile);
    $("#landline").val(vm.landline);

    $("#emergancyContactName").val(vm.emergancyContactName);
    $("#relationship")
      .prop("options", relationships)
      .val(vm.relationship);
    $("#emergancyContactMobile").val(vm.emergancyContactMobile);

    $("#workingPattern").val(vm.workingPattern);
  }
  render(): JSX.Element {
    window.requestAnimationFrame(() => this.bindData());
    return <slot />;
  }
}
