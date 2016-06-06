import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

/**
 * Implementation of Item view
 * 
 * @link http://semantic-ui.com/views/item.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "a[sm-item], sm-item",
  template:
`<i *ngIf="icon" class="{{icon}} icon"></i>
<img *ngIf="image" class="ui avatar image" src="{{image}}">
<div class="content">
  <div *ngIf="header" class="header">
    {{header}}
  </div>
  <ng-content></ng-content>
</div>`
})
export class SemanticItemComponent {
  @Input("icon") icon: string;
  @Input("header") header: string;
  @Input("image") image: string;
}
