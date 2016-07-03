System.register(["@angular/core", "ng-semantic", "../../prismjs/prismjs", "@angular/forms"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng_semantic_1, prismjs_1, forms_1;
    var AccordionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            AccordionComponent = (function () {
                function AccordionComponent(fb) {
                    this.agreeControl = new forms_1.FormControl("", forms_1.Validators.required);
                    this.nameControl = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)]));
                    this.emailControl = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)]));
                    this.accordionOption = {
                        exclusive: true,
                        on: "mouseenter"
                    };
                    this.form = fb.group({
                        emailControl: this.emailControl,
                        nameControl: this.nameControl,
                    });
                }
                AccordionComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, forms_1.REACTIVE_FORM_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "sm-page-accordion",
                        template: "\n    <div class=\"ui masthead vertical segment\">\n        <div class=\"ui container\">\n            <h1>Accordion</h1>\n            <p>Semantic UI accordion module <i class=\"icon external\"></i>\n            <a href=\"http://semantic-ui.com/modules/accordion.html\" target=\"_blank\">Semantic UI Accordion</a></p>\n        </div>\n    </div>\n    <div class=\"main ui container\">\n    \n        <p>Options can be passed in form of JavaScript object. Full list of settings can be found on: </p>\n        <a href=\"http://semantic-ui.com/modules/accordion.html#/settings\" target=\"_blank\">\n        http://semantic-ui.com/modules/accordion.html#/settings\n        </a>\n        \n        <h4 class=\"ui header\">Demo ( with options )</h4>\n        <sm-accordion [options]=\"accordionOption\">\n            <sm-accordion-item>\n                <accordion-title>What is a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>What kinds of dogs are there?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>How do you acquire a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n        </sm-accordion>\n        <h4 class=\"ui header\">Code</h4>\n<sm-codeblock smPrismjs=\"html\">\naccordionOption = {\n    exclusive: true,\n    on: \"mouseenter\"\n}\n&lt;sm-accordion [options]=\"accordionOption\">\n    &lt;sm-accordion-item>\n        &lt;accordion-title>What is a dog?&lt;/accordion-title>\n        &lt;accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.&lt;/accordion-content>\n    &lt;/sm-accordion-item>\n    &lt;sm-accordion-item>\n        &lt;accordion-title>What is a dog?&lt;/accordion-title>\n        &lt;accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.&lt;/accordion-content>\n    &lt;/sm-accordion-item>\n    &lt;sm-accordion-item>\n        &lt;accordion-title>What is a dog?&lt;/accordion-title>\n        &lt;accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.&lt;/accordion-content>\n    &lt;/sm-accordion-item>\n&lt;/sm-accordion>\n</sm-codeblock>\n         <h4 class=\"ui header\">Demo styled</h4>\n         <sm-accordion class=\"styled\">\n            <sm-accordion-item>\n                <accordion-title>What is a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>What kinds of dogs are there?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>How do you acquire a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n        </sm-accordion>\n        \n        <h4 class=\"ui header\">Demo fluid ( second is active by default)</h4>\n        <sm-accordion class=\"styled fluid\">\n            <sm-accordion-item>\n                <accordion-title>What is a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>What kinds of dogs are there?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>How do you acquire a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n        </sm-accordion>\n        \n        <h4 class=\"ui header\">Demo inverted</h4>\n        <sm-segment class=\"inverted teal\">\n           <sm-accordion class=\"inverted\">\n                <sm-accordion-item>\n                    <accordion-title>What is a dog?</accordion-title>\n                    <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.</accordion-content>\n                </sm-accordion-item>\n                <sm-accordion-item>\n                    <accordion-title>What kinds of dogs are there?</accordion-title>\n                    <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.</accordion-content>\n                </sm-accordion-item>\n                <sm-accordion-item>\n                    <accordion-title>How do you acquire a dog?</accordion-title>\n                    <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.</accordion-content>\n                </sm-accordion-item>\n            </sm-accordion>\n        </sm-segment>\n             \n        <h4 class=\"ui header\">Demo form</h4>\n        <sm-segment>\n            <form smForm class=\"ui form\" [formGroup]=\"form\">\n                <div class=\"field\">\n                    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n                </div>\n                <sm-accordion>\n                    <sm-accordion-item>   \n                        <accordion-title>Additional</accordion-title>\n                        <accordion-content>\n                            <div class=\"field\">\n                                <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n                            </div>\n                            <div class=\"field\">\n                                <sm-input label=\"Phone number\" [control]=\"emailControl\" placeholder=\"Enter phone number...\"></sm-input>\n                            </div>\n                        </accordion-content>\n                    </sm-accordion-item>\n                </sm-accordion>\n                    <p></p>\n                    <sm-button class=\"primary\">Save</sm-button>\n                </form>\n        </sm-segment>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder])
                ], AccordionComponent);
                return AccordionComponent;
            }());
            exports_1("AccordionComponent", AccordionComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUpBO2dCQVlJLDRCQUFZLEVBQWU7b0JBVjNCLGlCQUFZLEdBQWdCLElBQUksbUJBQVcsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDckUsZ0JBQVcsR0FBZ0IsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuSCxpQkFBWSxHQUFnQixJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBR3BILG9CQUFlLEdBQUc7d0JBQ2QsU0FBUyxFQUFFLElBQUk7d0JBQ2YsRUFBRSxFQUFFLFlBQVk7cUJBQ25CLENBQUM7b0JBR0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7d0JBQy9CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztxQkFDaEMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbktMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsZ0NBQXdCLEVBQVEsNEJBQWtCLEVBQVEsMEJBQWdCLENBQUM7d0JBQzdHLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxxbFFBNElUO3FCQUNKLENBQUM7O3NDQUFBO2dCQW9CRix5QkFBQztZQUFELENBQUMsQUFsQkQsSUFrQkM7WUFsQkQsbURBa0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcbmltcG9ydCB7IENvZGVibG9ja0NvbXBvbmVudCwgUHJpc21Kc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9wcmlzbWpzL3ByaXNtanNcIjtcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgPFR5cGU+Q29kZWJsb2NrQ29tcG9uZW50LCA8VHlwZT5QcmlzbUpzRGlyZWN0aXZlXSxcbiAgICBzZWxlY3RvcjogXCJzbS1wYWdlLWFjY29yZGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPkFjY29yZGlvbjwvaDE+XG4gICAgICAgICAgICA8cD5TZW1hbnRpYyBVSSBhY2NvcmRpb24gbW9kdWxlIDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvYWNjb3JkaW9uLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBBY2NvcmRpb248L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICBcbiAgICAgICAgPHA+T3B0aW9ucyBjYW4gYmUgcGFzc2VkIGluIGZvcm0gb2YgSmF2YVNjcmlwdCBvYmplY3QuIEZ1bGwgbGlzdCBvZiBzZXR0aW5ncyBjYW4gYmUgZm91bmQgb246IDwvcD5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9hY2NvcmRpb24uaHRtbCMvc2V0dGluZ3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2FjY29yZGlvbi5odG1sIy9zZXR0aW5nc1xuICAgICAgICA8L2E+XG4gICAgICAgIFxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vICggd2l0aCBvcHRpb25zICk8L2g0PlxuICAgICAgICA8c20tYWNjb3JkaW9uIFtvcHRpb25zXT1cImFjY29yZGlvbk9wdGlvblwiPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tdGl0bGU+V2hhdCBpcyBhIGRvZz88L2FjY29yZGlvbi10aXRsZT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICAgICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuPC9hY2NvcmRpb24tY29udGVudD5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi10aXRsZT5XaGF0IGtpbmRzIG9mIGRvZ3MgYXJlIHRoZXJlPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLXRpdGxlPkhvdyBkbyB5b3UgYWNxdWlyZSBhIGRvZz88L2FjY29yZGlvbi10aXRsZT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICAgICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuPC9hY2NvcmRpb24tY29udGVudD5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgIDwvc20tYWNjb3JkaW9uPlxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxzbS1jb2RlYmxvY2sgc21QcmlzbWpzPVwiaHRtbFwiPlxuYWNjb3JkaW9uT3B0aW9uID0ge1xuICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICBvbjogXCJtb3VzZWVudGVyXCJcbn1cbiZsdDtzbS1hY2NvcmRpb24gW29wdGlvbnNdPVwiYWNjb3JkaW9uT3B0aW9uXCI+XG4gICAgJmx0O3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAmbHQ7YWNjb3JkaW9uLXRpdGxlPldoYXQgaXMgYSBkb2c/Jmx0Oy9hY2NvcmRpb24tdGl0bGU+XG4gICAgICAgICZsdDthY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuJmx0Oy9hY2NvcmRpb24tY29udGVudD5cbiAgICAmbHQ7L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICZsdDtzbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgJmx0O2FjY29yZGlvbi10aXRsZT5XaGF0IGlzIGEgZG9nPyZsdDsvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAmbHQ7YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLiZsdDsvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgJmx0Oy9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAmbHQ7c20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICZsdDthY2NvcmRpb24tdGl0bGU+V2hhdCBpcyBhIGRvZz8mbHQ7L2FjY29yZGlvbi10aXRsZT5cbiAgICAgICAgJmx0O2FjY29yZGlvbi1jb250ZW50PkEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC4mbHQ7L2FjY29yZGlvbi1jb250ZW50PlxuICAgICZsdDsvc20tYWNjb3JkaW9uLWl0ZW0+XG4mbHQ7L3NtLWFjY29yZGlvbj5cbjwvc20tY29kZWJsb2NrPlxuICAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBzdHlsZWQ8L2g0PlxuICAgICAgICAgPHNtLWFjY29yZGlvbiBjbGFzcz1cInN0eWxlZFwiPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tdGl0bGU+V2hhdCBpcyBhIGRvZz88L2FjY29yZGlvbi10aXRsZT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICAgICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuPC9hY2NvcmRpb24tY29udGVudD5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi10aXRsZT5XaGF0IGtpbmRzIG9mIGRvZ3MgYXJlIHRoZXJlPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLXRpdGxlPkhvdyBkbyB5b3UgYWNxdWlyZSBhIGRvZz88L2FjY29yZGlvbi10aXRsZT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICAgICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuPC9hY2NvcmRpb24tY29udGVudD5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgIDwvc20tYWNjb3JkaW9uPlxuICAgICAgICBcbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBmbHVpZCAoIHNlY29uZCBpcyBhY3RpdmUgYnkgZGVmYXVsdCk8L2g0PlxuICAgICAgICA8c20tYWNjb3JkaW9uIGNsYXNzPVwic3R5bGVkIGZsdWlkXCI+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi10aXRsZT5XaGF0IGlzIGEgZG9nPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLXRpdGxlPldoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/PC9hY2NvcmRpb24tdGl0bGU+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1jb250ZW50PkEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLjwvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tdGl0bGU+SG93IGRvIHlvdSBhY3F1aXJlIGEgZG9nPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgPC9zbS1hY2NvcmRpb24+XG4gICAgICAgIFxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGludmVydGVkPC9oND5cbiAgICAgICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJpbnZlcnRlZCB0ZWFsXCI+XG4gICAgICAgICAgIDxzbS1hY2NvcmRpb24gY2xhc3M9XCJpbnZlcnRlZFwiPlxuICAgICAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPGFjY29yZGlvbi10aXRsZT5XaGF0IGlzIGEgZG9nPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLjwvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tdGl0bGU+V2hhdCBraW5kcyBvZiBkb2dzIGFyZSB0aGVyZT88L2FjY29yZGlvbi10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPGFjY29yZGlvbi1jb250ZW50PkEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLXRpdGxlPkhvdyBkbyB5b3UgYWNxdWlyZSBhIGRvZz88L2FjY29yZGlvbi10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPGFjY29yZGlvbi1jb250ZW50PkEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbj5cbiAgICAgICAgPC9zbS1zZWdtZW50PlxuICAgICAgICAgICAgIFxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGZvcm08L2g0PlxuICAgICAgICA8c20tc2VnbWVudD5cbiAgICAgICAgICAgIDxmb3JtIHNtRm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNtLWlucHV0IGxhYmVsPVwiTmFtZVwiIFtjb250cm9sXT1cIm5hbWVDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lLi4uXCI+PC9zbS1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c20tYWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLXRpdGxlPkFkZGl0aW9uYWw8L2FjY29yZGlvbi10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtLWlucHV0IGxhYmVsPVwiRS1tYWlsXCIgW2NvbnRyb2xdPVwiZW1haWxDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwuLi5cIj48L3NtLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c20taW5wdXQgbGFiZWw9XCJQaG9uZSBudW1iZXJcIiBbY29udHJvbF09XCJlbWFpbENvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHBob25lIG51bWJlci4uLlwiPjwvc20taW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzbS1idXR0b24gY2xhc3M9XCJwcmltYXJ5XCI+U2F2ZTwvc20tYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zbS1zZWdtZW50PlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQge1xuXG4gICAgYWdyZWVDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICBuYW1lQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pKTtcbiAgICBlbWFpbENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKSk7XG5cbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgYWNjb3JkaW9uT3B0aW9uID0ge1xuICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgIG9uOiBcIm1vdXNlZW50ZXJcIlxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWxDb250cm9sOiB0aGlzLmVtYWlsQ29udHJvbCxcbiAgICAgICAgICAgIG5hbWVDb250cm9sOiB0aGlzLm5hbWVDb250cm9sLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=