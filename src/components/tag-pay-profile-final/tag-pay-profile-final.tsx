import { Component, Event, EventEmitter, Listen, Prop } from "@stencil/core";
import { WorkingPatternWeek } from "../tag-pay-working-pattern/tag-pay-working-pattern.utils";

export interface IVM {
  name: string;
  gender: string;
  dob: string;
  nationality: string;
  profileSrc: string;
  preferedName: string;
  addressline1: string;
  town: string;
  county: string;
  postcode: string;
  emailAddress: string;
  mobile: string;
  landline: string;
  emergancyContactName: string;
  relationship: string;
  emergancyContactMobile: string;
  workingPattern: WorkingPatternWeek;
}

@Component({
  tag: "tag-pay-profile-final",
  styleUrl: "tag-pay-profile-final.scss"
})
export class TagPayProfileFinal {
  /** Property description */
  @Prop() vm: IVM;
  @Event() payProfileChange: EventEmitter;
  @Listen("change")
  test(e: any): void {
    console.log("change event", e);
  }
  @Listen("workingPatternWeekChange")
  workingPatternWeekChangeHandler(event: CustomEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const wp = {
      workingPattern: event.detail
    };
    this.payProfileChange.emit(Object.assign({}, this.vm, wp));
  }
  render(): JSX.Element {
    const { vm } = this;

    if (!vm) {
      return null;
    }

    return [
      <tag-main-header>
        <tag-text type="h2" inline>
          My Details
        </tag-text>
      </tag-main-header>,
      <tag-three-col-layout>
        <tag-card class="tall">
          <tag-profile
            name={vm.name}
            gender={vm.gender}
            dob={vm.dob}
            nationality={vm.nationality}
            src={vm.profileSrc}
          />
          <tag-form-group label="Known as" value={vm.preferedName} />
        </tag-card>
        <tag-card-header class="tall" heading="Contact information">
          <tag-form-group label="Address line 1" value={vm.addressline1} />
          <tag-form-group label="Town" value={vm.town} />
          <tag-form-group label="County" value={vm.county} />
          <tag-form-group label="Postcode" value={vm.postcode} />
          <tag-form-group label="Email address" value={vm.emailAddress} />
          <tag-form-group label="Mobile" value={vm.mobile} />
          <tag-form-group label="Landline" value={vm.landline} />
        </tag-card-header>
        <tag-card-header heading="Emergancy contact">
          <tag-form-group label="Name" />
          <tag-form-group-select label="Relationship" />
          <tag-form-group label="Mobile" />
        </tag-card-header>
        <tag-card-header heading="Working patterns">
          <tag-datepicker
            id="effectiveFromDate"
            label="Effective from"
            class="wp__date"
          />
          <tag-datepicker
            id="effectiveToDate"
            label="Effective to"
            class="wp__date"
          />
          <tag-pay-working-pattern value={vm.workingPattern} />
        </tag-card-header>
      </tag-three-col-layout>
    ];
  }
}
