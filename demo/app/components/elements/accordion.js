System.register(["@angular/core", "ng-semantic", "../../prismjs/prismjs", "@angular/common"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, prismjs_1, common_1;
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
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AccordionComponent = (function () {
                function AccordionComponent(fb) {
                    this.agreeControl = new common_1.Control("", common_1.Validators.required);
                    this.nameControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.emailControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
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
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "sm-page-accordion",
                        template: "\n    <div class=\"ui masthead vertical segment\">\n        <div class=\"ui container\">\n            <h1>Accordion</h1>\n            <p>Semantic UI accordion module <i class=\"icon external\"></i>\n            <a href=\"http://semantic-ui.com/modules/accordion.html\" target=\"_blank\">Semantic UI Accordion</a></p>\n        </div>\n    </div>\n    <div class=\"main ui container\">\n    \n        <p>Options can be passed in form of JavaScript object. Full list of settings can be found on: </p>\n        <a href=\"http://semantic-ui.com/modules/accordion.html#/settings\" target=\"_blank\">\n        http://semantic-ui.com/modules/accordion.html#/settings\n        </a>\n        \n        <h4 class=\"ui header\">Demo ( with options )</h4>\n        <sm-accordion [options]=\"accordionOption\">\n            <sm-accordion-item title=\"What is a dog?\">\n                A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"What kinds of dogs are there?\">\n                There are many breeds of dogs. Each breed varies in size and temperament.\n                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"How do you acquire a dog?\">\n                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner \n                allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, \n                finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.\n            </sm-accordion-item>\n        </sm-accordion>\n        <h4 class=\"ui header\">Code</h4>\n<codeblock prismjs=\"html\">\naccordionOption = {\n    exclusive: true,\n    on: \"mouseenter\"\n}\n&lt;sm-accordion [options]=\"accordionOption\">\n    &lt;sm-accordion-item title=\"What is a dog?\">\n        A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.\n    &lt;/sm-accordion-item>\n    &lt;sm-accordion-item title=\"What kinds of dogs are there?\">\n        There are many breeds of dogs. Each breed varies in size and temperament.\n        Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n    &lt;/sm-accordion-item>\n    &lt;sm-accordion-item title=\"How do you acquire a dog?\">\n        Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n        A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner \n        allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, \n        finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.\n    &lt;/sm-accordion-item>\n&lt;/sm-accordion>\n</codeblock>\n         <h4 class=\"ui header\">Demo styled</h4>\n         <sm-accordion class=\"styled\">\n            <sm-accordion-item title=\"What is a dog?\">\n                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, \n                it can be found as a welcome guest in many households across the world.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"What kinds of dogs are there?\">\n                There are many breeds of dogs. Each breed varies in size and temperament. \n                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"How do you acquire a dog?\">\n                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n                A pet shop may be the most convenient way to buy a dog. \n                Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog \n                before choosing to take it home. \n                Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.\n            </sm-accordion-item>\n        </sm-accordion>\n        \n        <h4 class=\"ui header\">Demo fluid ( second is active by default)</h4>\n        <sm-accordion class=\"styled fluid\">\n            <sm-accordion-item title=\"What is a dog?\">\n                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, \n                it can be found as a welcome guest in many households across the world.\n            </sm-accordion-item>\n            <sm-accordion-item class=\"active\" title=\"What kinds of dogs are there?\">\n                There are many breeds of dogs. Each breed varies in size and temperament. \n                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"How do you acquire a dog?\">\n                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows \n                you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, \n                finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.\n            </sm-accordion-item>\n        </sm-accordion>\n        \n        <h4 class=\"ui header\">Demo inverted</h4>\n        <sm-segment class=\"inverted teal\">\n           <sm-accordion class=\"inverted\">\n            <sm-accordion-item class=\"active\" title=\"What is a dog?\">\n                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, \n                it can be found as a welcome guest in many households across the world.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"What kinds of dogs are there?\">\n                There are many breeds of dogs. Each breed varies in size and temperament. \n                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"How do you acquire a dog?\">\n                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess \n                the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter,\n                 helps give a good home to a dog who may not find one so readily.\n            </sm-accordion-item>\n            </sm-accordion>\n        </sm-segment>\n             \n        <h4 class=\"ui header\">Demo form</h4>\n        <sm-segment>\n            <form smForm class=\"ui form\" [ngFormModel]=\"form\">\n                <div class=\"field\">\n                    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n                </div>\n                <sm-accordion>\n                    <sm-accordion-item title=\"Additional\">                        \n                        <div class=\"field\">\n                            <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n                        </div>\n                        <div class=\"field\">\n                            <sm-input label=\"Phone number\" [control]=\"emailControl\" placeholder=\"Enter phone number...\"></sm-input>\n                        </div>\n                    </sm-accordion-item>\n                </sm-accordion>\n                    <p></p>\n                    <sm-button class=\"primary\">Save</sm-button>\n                </form>\n        </sm-segment>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AccordionComponent);
                return AccordionComponent;
            }());
            exports_1("AccordionComponent", AccordionComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0pBO2dCQVlJLDRCQUFZLEVBQWU7b0JBVjNCLGlCQUFZLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3RCxnQkFBVyxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0csaUJBQVksR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRzVHLG9CQUFlLEdBQUc7d0JBQ2QsU0FBUyxFQUFFLElBQUk7d0JBQ2YsRUFBRSxFQUFFLFlBQVk7cUJBQ25CLENBQUM7b0JBR0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7d0JBQy9CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztxQkFDaEMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBNUpMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQVEsNEJBQWtCLEVBQVEsMEJBQWdCLENBQUM7d0JBQ3hHLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxxMVFBcUlUO3FCQUNKLENBQUM7O3NDQUFBO2dCQW9CRix5QkFBQztZQUFELENBQUMsQUFsQkQsSUFrQkM7WUFsQkQsbURBa0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcbmltcG9ydCB7IENvZGVibG9ja0NvbXBvbmVudCwgUHJpc21Kc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9wcmlzbWpzL3ByaXNtanNcIjtcbmltcG9ydCB7IENvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCA8VHlwZT5Db2RlYmxvY2tDb21wb25lbnQsIDxUeXBlPlByaXNtSnNEaXJlY3RpdmVdLFxuICAgIHNlbGVjdG9yOiBcInNtLXBhZ2UtYWNjb3JkaW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+QWNjb3JkaW9uPC9oMT5cbiAgICAgICAgICAgIDxwPlNlbWFudGljIFVJIGFjY29yZGlvbiBtb2R1bGUgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9hY2NvcmRpb24uaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIEFjY29yZGlvbjwvYT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIFxuICAgICAgICA8cD5PcHRpb25zIGNhbiBiZSBwYXNzZWQgaW4gZm9ybSBvZiBKYXZhU2NyaXB0IG9iamVjdC4gRnVsbCBsaXN0IG9mIHNldHRpbmdzIGNhbiBiZSBmb3VuZCBvbjogPC9wPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2FjY29yZGlvbi5odG1sIy9zZXR0aW5nc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvYWNjb3JkaW9uLmh0bWwjL3NldHRpbmdzXG4gICAgICAgIDwvYT5cbiAgICAgICAgXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gKCB3aXRoIG9wdGlvbnMgKTwvaDQ+XG4gICAgICAgIDxzbS1hY2NvcmRpb24gW29wdGlvbnNdPVwiYWNjb3JkaW9uT3B0aW9uXCI+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJXaGF0IGlzIGEgZG9nP1wiPlxuICAgICAgICAgICAgICAgIEEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIldoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/XCI+XG4gICAgICAgICAgICAgICAgVGhlcmUgYXJlIG1hbnkgYnJlZWRzIG9mIGRvZ3MuIEVhY2ggYnJlZWQgdmFyaWVzIGluIHNpemUgYW5kIHRlbXBlcmFtZW50LlxuICAgICAgICAgICAgICAgIE93bmVycyBvZnRlbiBzZWxlY3QgYSBicmVlZCBvZiBkb2cgdGhhdCB0aGV5IGZpbmQgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHRoZWlyIG93biBsaWZlc3R5bGUgYW5kIGRlc2lyZXMgZnJvbSBhIGNvbXBhbmlvbi5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJIb3cgZG8geW91IGFjcXVpcmUgYSBkb2c/XCI+XG4gICAgICAgICAgICAgICAgVGhyZWUgY29tbW9uIHdheXMgZm9yIGEgcHJvc3BlY3RpdmUgb3duZXIgdG8gYWNxdWlyZSBhIGRvZyBpcyBmcm9tIHBldCBzaG9wcywgcHJpdmF0ZSBvd25lcnMsIG9yIHNoZWx0ZXJzLlxuICAgICAgICAgICAgICAgIEEgcGV0IHNob3AgbWF5IGJlIHRoZSBtb3N0IGNvbnZlbmllbnQgd2F5IHRvIGJ1eSBhIGRvZy4gQnV5aW5nIGEgZG9nIGZyb20gYSBwcml2YXRlIG93bmVyIFxuICAgICAgICAgICAgICAgIGFsbG93cyB5b3UgdG8gYXNzZXNzIHRoZSBwZWRpZ3JlZSBhbmQgdXBicmluZ2luZyBvZiB5b3VyIGRvZyBiZWZvcmUgY2hvb3NpbmcgdG8gdGFrZSBpdCBob21lLiBMYXN0bHksIFxuICAgICAgICAgICAgICAgIGZpbmRpbmcgeW91ciBkb2cgZnJvbSBhIHNoZWx0ZXIsIGhlbHBzIGdpdmUgYSBnb29kIGhvbWUgdG8gYSBkb2cgd2hvIG1heSBub3QgZmluZCBvbmUgc28gcmVhZGlseS5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgIDwvc20tYWNjb3JkaW9uPlxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxjb2RlYmxvY2sgcHJpc21qcz1cImh0bWxcIj5cbmFjY29yZGlvbk9wdGlvbiA9IHtcbiAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgb246IFwibW91c2VlbnRlclwiXG59XG4mbHQ7c20tYWNjb3JkaW9uIFtvcHRpb25zXT1cImFjY29yZGlvbk9wdGlvblwiPlxuICAgICZsdDtzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIldoYXQgaXMgYSBkb2c/XCI+XG4gICAgICAgIEEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC5cbiAgICAmbHQ7L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICZsdDtzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIldoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/XCI+XG4gICAgICAgIFRoZXJlIGFyZSBtYW55IGJyZWVkcyBvZiBkb2dzLiBFYWNoIGJyZWVkIHZhcmllcyBpbiBzaXplIGFuZCB0ZW1wZXJhbWVudC5cbiAgICAgICAgT3duZXJzIG9mdGVuIHNlbGVjdCBhIGJyZWVkIG9mIGRvZyB0aGF0IHRoZXkgZmluZCB0byBiZSBjb21wYXRpYmxlIHdpdGggdGhlaXIgb3duIGxpZmVzdHlsZSBhbmQgZGVzaXJlcyBmcm9tIGEgY29tcGFuaW9uLlxuICAgICZsdDsvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgJmx0O3NtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiSG93IGRvIHlvdSBhY3F1aXJlIGEgZG9nP1wiPlxuICAgICAgICBUaHJlZSBjb21tb24gd2F5cyBmb3IgYSBwcm9zcGVjdGl2ZSBvd25lciB0byBhY3F1aXJlIGEgZG9nIGlzIGZyb20gcGV0IHNob3BzLCBwcml2YXRlIG93bmVycywgb3Igc2hlbHRlcnMuXG4gICAgICAgIEEgcGV0IHNob3AgbWF5IGJlIHRoZSBtb3N0IGNvbnZlbmllbnQgd2F5IHRvIGJ1eSBhIGRvZy4gQnV5aW5nIGEgZG9nIGZyb20gYSBwcml2YXRlIG93bmVyIFxuICAgICAgICBhbGxvd3MgeW91IHRvIGFzc2VzcyB0aGUgcGVkaWdyZWUgYW5kIHVwYnJpbmdpbmcgb2YgeW91ciBkb2cgYmVmb3JlIGNob29zaW5nIHRvIHRha2UgaXQgaG9tZS4gTGFzdGx5LCBcbiAgICAgICAgZmluZGluZyB5b3VyIGRvZyBmcm9tIGEgc2hlbHRlciwgaGVscHMgZ2l2ZSBhIGdvb2QgaG9tZSB0byBhIGRvZyB3aG8gbWF5IG5vdCBmaW5kIG9uZSBzbyByZWFkaWx5LlxuICAgICZsdDsvc20tYWNjb3JkaW9uLWl0ZW0+XG4mbHQ7L3NtLWFjY29yZGlvbj5cbjwvY29kZWJsb2NrPlxuICAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBzdHlsZWQ8L2g0PlxuICAgICAgICAgPHNtLWFjY29yZGlvbiBjbGFzcz1cInN0eWxlZFwiPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiV2hhdCBpcyBhIGRvZz9cIj5cbiAgICAgICAgICAgICAgICBBIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsIFxuICAgICAgICAgICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiV2hhdCBraW5kcyBvZiBkb2dzIGFyZSB0aGVyZT9cIj5cbiAgICAgICAgICAgICAgICBUaGVyZSBhcmUgbWFueSBicmVlZHMgb2YgZG9ncy4gRWFjaCBicmVlZCB2YXJpZXMgaW4gc2l6ZSBhbmQgdGVtcGVyYW1lbnQuIFxuICAgICAgICAgICAgICAgIE93bmVycyBvZnRlbiBzZWxlY3QgYSBicmVlZCBvZiBkb2cgdGhhdCB0aGV5IGZpbmQgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHRoZWlyIG93biBsaWZlc3R5bGUgYW5kIGRlc2lyZXMgZnJvbSBhIGNvbXBhbmlvbi5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJIb3cgZG8geW91IGFjcXVpcmUgYSBkb2c/XCI+XG4gICAgICAgICAgICAgICAgVGhyZWUgY29tbW9uIHdheXMgZm9yIGEgcHJvc3BlY3RpdmUgb3duZXIgdG8gYWNxdWlyZSBhIGRvZyBpcyBmcm9tIHBldCBzaG9wcywgcHJpdmF0ZSBvd25lcnMsIG9yIHNoZWx0ZXJzLlxuICAgICAgICAgICAgICAgIEEgcGV0IHNob3AgbWF5IGJlIHRoZSBtb3N0IGNvbnZlbmllbnQgd2F5IHRvIGJ1eSBhIGRvZy4gXG4gICAgICAgICAgICAgICAgQnV5aW5nIGEgZG9nIGZyb20gYSBwcml2YXRlIG93bmVyIGFsbG93cyB5b3UgdG8gYXNzZXNzIHRoZSBwZWRpZ3JlZSBhbmQgdXBicmluZ2luZyBvZiB5b3VyIGRvZyBcbiAgICAgICAgICAgICAgICBiZWZvcmUgY2hvb3NpbmcgdG8gdGFrZSBpdCBob21lLiBcbiAgICAgICAgICAgICAgICBMYXN0bHksIGZpbmRpbmcgeW91ciBkb2cgZnJvbSBhIHNoZWx0ZXIsIGhlbHBzIGdpdmUgYSBnb29kIGhvbWUgdG8gYSBkb2cgd2hvIG1heSBub3QgZmluZCBvbmUgc28gcmVhZGlseS5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgIDwvc20tYWNjb3JkaW9uPlxuICAgICAgICBcbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBmbHVpZCAoIHNlY29uZCBpcyBhY3RpdmUgYnkgZGVmYXVsdCk8L2g0PlxuICAgICAgICA8c20tYWNjb3JkaW9uIGNsYXNzPVwic3R5bGVkIGZsdWlkXCI+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJXaGF0IGlzIGEgZG9nP1wiPlxuICAgICAgICAgICAgICAgIEEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcywgXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0gY2xhc3M9XCJhY3RpdmVcIiB0aXRsZT1cIldoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/XCI+XG4gICAgICAgICAgICAgICAgVGhlcmUgYXJlIG1hbnkgYnJlZWRzIG9mIGRvZ3MuIEVhY2ggYnJlZWQgdmFyaWVzIGluIHNpemUgYW5kIHRlbXBlcmFtZW50LiBcbiAgICAgICAgICAgICAgICBPd25lcnMgb2Z0ZW4gc2VsZWN0IGEgYnJlZWQgb2YgZG9nIHRoYXQgdGhleSBmaW5kIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVpciBvd24gbGlmZXN0eWxlIGFuZCBkZXNpcmVzIGZyb20gYSBjb21wYW5pb24uXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiSG93IGRvIHlvdSBhY3F1aXJlIGEgZG9nP1wiPlxuICAgICAgICAgICAgICAgIFRocmVlIGNvbW1vbiB3YXlzIGZvciBhIHByb3NwZWN0aXZlIG93bmVyIHRvIGFjcXVpcmUgYSBkb2cgaXMgZnJvbSBwZXQgc2hvcHMsIHByaXZhdGUgb3duZXJzLCBvciBzaGVsdGVycy5cbiAgICAgICAgICAgICAgICBBIHBldCBzaG9wIG1heSBiZSB0aGUgbW9zdCBjb252ZW5pZW50IHdheSB0byBidXkgYSBkb2cuIEJ1eWluZyBhIGRvZyBmcm9tIGEgcHJpdmF0ZSBvd25lciBhbGxvd3MgXG4gICAgICAgICAgICAgICAgeW91IHRvIGFzc2VzcyB0aGUgcGVkaWdyZWUgYW5kIHVwYnJpbmdpbmcgb2YgeW91ciBkb2cgYmVmb3JlIGNob29zaW5nIHRvIHRha2UgaXQgaG9tZS4gTGFzdGx5LCBcbiAgICAgICAgICAgICAgICBmaW5kaW5nIHlvdXIgZG9nIGZyb20gYSBzaGVsdGVyLCBoZWxwcyBnaXZlIGEgZ29vZCBob21lIHRvIGEgZG9nIHdobyBtYXkgbm90IGZpbmQgb25lIHNvIHJlYWRpbHkuXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICA8L3NtLWFjY29yZGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gaW52ZXJ0ZWQ8L2g0PlxuICAgICAgICA8c20tc2VnbWVudCBjbGFzcz1cImludmVydGVkIHRlYWxcIj5cbiAgICAgICAgICAgPHNtLWFjY29yZGlvbiBjbGFzcz1cImludmVydGVkXCI+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0gY2xhc3M9XCJhY3RpdmVcIiB0aXRsZT1cIldoYXQgaXMgYSBkb2c/XCI+XG4gICAgICAgICAgICAgICAgQSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLCBcbiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIldoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/XCI+XG4gICAgICAgICAgICAgICAgVGhlcmUgYXJlIG1hbnkgYnJlZWRzIG9mIGRvZ3MuIEVhY2ggYnJlZWQgdmFyaWVzIGluIHNpemUgYW5kIHRlbXBlcmFtZW50LiBcbiAgICAgICAgICAgICAgICBPd25lcnMgb2Z0ZW4gc2VsZWN0IGEgYnJlZWQgb2YgZG9nIHRoYXQgdGhleSBmaW5kIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVpciBvd24gbGlmZXN0eWxlIGFuZCBkZXNpcmVzIGZyb20gYSBjb21wYW5pb24uXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiSG93IGRvIHlvdSBhY3F1aXJlIGEgZG9nP1wiPlxuICAgICAgICAgICAgICAgIFRocmVlIGNvbW1vbiB3YXlzIGZvciBhIHByb3NwZWN0aXZlIG93bmVyIHRvIGFjcXVpcmUgYSBkb2cgaXMgZnJvbSBwZXQgc2hvcHMsIHByaXZhdGUgb3duZXJzLCBvciBzaGVsdGVycy5cbiAgICAgICAgICAgICAgICBBIHBldCBzaG9wIG1heSBiZSB0aGUgbW9zdCBjb252ZW5pZW50IHdheSB0byBidXkgYSBkb2cuIEJ1eWluZyBhIGRvZyBmcm9tIGEgcHJpdmF0ZSBvd25lciBhbGxvd3MgeW91IHRvIGFzc2VzcyBcbiAgICAgICAgICAgICAgICB0aGUgcGVkaWdyZWUgYW5kIHVwYnJpbmdpbmcgb2YgeW91ciBkb2cgYmVmb3JlIGNob29zaW5nIHRvIHRha2UgaXQgaG9tZS4gTGFzdGx5LCBmaW5kaW5nIHlvdXIgZG9nIGZyb20gYSBzaGVsdGVyLFxuICAgICAgICAgICAgICAgICBoZWxwcyBnaXZlIGEgZ29vZCBob21lIHRvIGEgZG9nIHdobyBtYXkgbm90IGZpbmQgb25lIHNvIHJlYWRpbHkuXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24+XG4gICAgICAgIDwvc20tc2VnbWVudD5cbiAgICAgICAgICAgICBcbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBmb3JtPC9oND5cbiAgICAgICAgPHNtLXNlZ21lbnQ+XG4gICAgICAgICAgICA8Zm9ybSBzbUZvcm0gY2xhc3M9XCJ1aSBmb3JtXCIgW25nRm9ybU1vZGVsXT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNtLWlucHV0IGxhYmVsPVwiTmFtZVwiIFtjb250cm9sXT1cIm5hbWVDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lLi4uXCI+PC9zbS1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c20tYWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJBZGRpdGlvbmFsXCI+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c20taW5wdXQgbGFiZWw9XCJFLW1haWxcIiBbY29udHJvbF09XCJlbWFpbENvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGUtbWFpbC4uLlwiPjwvc20taW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbS1pbnB1dCBsYWJlbD1cIlBob25lIG51bWJlclwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGhvbmUgbnVtYmVyLi4uXCI+PC9zbS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzbS1idXR0b24gY2xhc3M9XCJwcmltYXJ5XCI+U2F2ZTwvc20tYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zbS1zZWdtZW50PlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQge1xuXG4gICAgYWdyZWVDb250cm9sOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgbmFtZUNvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSkpO1xuICAgIGVtYWlsQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKSk7XG5cbiAgICBmb3JtOiBDb250cm9sR3JvdXA7XG4gICAgYWNjb3JkaW9uT3B0aW9uID0ge1xuICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgIG9uOiBcIm1vdXNlZW50ZXJcIlxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWxDb250cm9sOiB0aGlzLmVtYWlsQ29udHJvbCxcbiAgICAgICAgICAgIG5hbWVDb250cm9sOiB0aGlzLm5hbWVDb250cm9sLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=