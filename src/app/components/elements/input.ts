import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
	selector : "test-input"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Input</h1>
        <p>Semantic UI input element <i class="icon external"></i> 
        <a href="http://semantic-ui.com/elements/input.html" target="_blank">Semantic UI Input</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
   	<sm-input placeholder="Search..." [(model)]="default"></sm-input>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="3" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-input placeholder="Search..." [(model)]="default"></sm-input>
</textarea>
        </div>
      </div>
</div>
`
})

export class InputComponent {
    default: string = "test";
}
