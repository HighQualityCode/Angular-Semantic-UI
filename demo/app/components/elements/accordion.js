System.register(["angular2/core", "ng-semantic", "ng2-prism/codeblock", "ng2-prism/languages", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, codeblock_1, languages_1, common_1;
    var AccordionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (codeblock_1_1) {
                codeblock_1 = codeblock_1_1;
            },
            function (languages_1_1) {
                languages_1 = languages_1_1;
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
                    this.form = fb.group({
                        emailControl: this.emailControl,
                        nameControl: this.nameControl,
                    });
                }
                AccordionComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        selector: "ui-accordion",
                        template: "\n    <div class=\"ui masthead vertical segment\">\n        <div class=\"ui container\">\n            <h1>Accordion</h1>\n            <p>Semantic UI accordion module <i class=\"icon external\"></i>\n            <a href=\"http://semantic-ui.com/modules/accordion.html\" target=\"_blank\">Semantic UI Accordion</a></p>\n        </div>\n    </div>\n    <div class=\"main ui container\">\n        <h4 class=\"ui header\">Demo</h4>\n        \n        <sm-accordion [options]=\"{exclusive: false}\">\n            <sm-accordion-item title=\"What is a dog?\">\n                A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"What kinds of dogs are there?\">\n                There are many breeds of dogs. Each breed varies in size and temperament.\n                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"How do you acquire a dog?\">\n                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner \n                allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, \n                finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.\n            </sm-accordion-item>\n        </sm-accordion>\n        \n        <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;sm-accordion [options]=\"{exclusive: false}\">\n    &lt;sm-accordion-item title=\"What is a dog?\">\n        A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.\n    &lt;/sm-accordion-item>\n    &lt;sm-accordion-item title=\"What kinds of dogs are there?\">\n        There are many breeds of dogs. Each breed varies in size and temperament.\n        Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n    &lt;/sm-accordion-item>\n    &lt;sm-accordion-item title=\"How do you acquire a dog?\">\n        Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n        A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner \n        allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, \n        finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.\n    &lt;/sm-accordion-item>\n&lt;/sm-accordion>\n</codeblock>\n         <h4 class=\"ui header\">Demo styled</h4>\n         <sm-accordion class=\"styled\">\n            <sm-accordion-item title=\"What is a dog?\">\n                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, \n                it can be found as a welcome guest in many households across the world.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"What kinds of dogs are there?\">\n                There are many breeds of dogs. Each breed varies in size and temperament. \n                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"How do you acquire a dog?\">\n                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n                A pet shop may be the most convenient way to buy a dog. \n                Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog \n                before choosing to take it home. \n                Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.\n            </sm-accordion-item>\n        </sm-accordion>\n        \n        <h4 class=\"ui header\">Demo fluid</h4>\n        <sm-accordion class=\"styled fluid\">\n            <sm-accordion-item title=\"What is a dog?\">\n                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, \n                it can be found as a welcome guest in many households across the world.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"What kinds of dogs are there?\">\n                There are many breeds of dogs. Each breed varies in size and temperament. \n                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"How do you acquire a dog?\">\n                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows \n                you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, \n                finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.\n            </sm-accordion-item>\n        </sm-accordion>\n        \n        <h4 class=\"ui header\">Demo inverted</h4>\n        <sm-segment class=\"inverted\">\n           <sm-accordion class=\"inverted\">\n            <sm-accordion-item title=\"What is a dog?\">\n                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, \n                it can be found as a welcome guest in many households across the world.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"What kinds of dogs are there?\">\n                There are many breeds of dogs. Each breed varies in size and temperament. \n                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.\n            </sm-accordion-item>\n            <sm-accordion-item title=\"How do you acquire a dog?\">\n                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.\n                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess \n                the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter,\n                 helps give a good home to a dog who may not find one so readily.\n            </sm-accordion-item>\n            </sm-accordion>\n        </sm-segment>\n             \n        <h4 class=\"ui header\">Demo form</h4>\n        <sm-segment>\n            <form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n                <div class=\"field\">\n                    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n                </div>\n                <sm-accordion>\n                    <sm-accordion-item title=\"Additional\">                        \n                        <div class=\"field\">\n                            <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n                        </div>\n                        <div class=\"field\">\n                            <sm-input label=\"Phone number\" [control]=\"emailControl\" placeholder=\"Enter phone number...\"></sm-input>\n                        </div>\n                    </sm-accordion-item>\n                </sm-accordion>\n                    <p></p>\n                    <sm-button class=\"primary\">Save</sm-button>\n                </form>\n        </sm-segment>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AccordionComponent);
                return AccordionComponent;
            }());
            exports_1("AccordionComponent", AccordionComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2FjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlJQTtnQkFRSSw0QkFBWSxFQUFlO29CQU4zQixpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0QsZ0JBQVcsR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNHLGlCQUFZLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUt4RyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ2pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTt3QkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUNoQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFoSkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBRSxxQkFBUyxFQUFFLGtCQUFNLENBQUM7d0JBQ3pFLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsODVQQTZIVDtxQkFDSixDQUFDOztzQ0FBQTtnQkFnQkYseUJBQUM7WUFBRCxDQUFDLEFBZEQsSUFjQztZQWRELG1EQWNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xuaW1wb3J0IHsgQ29kZWJsb2NrIH0gZnJvbSBcIm5nMi1wcmlzbS9jb2RlYmxvY2tcIjtcbmltcG9ydCB7IE1hcmt1cCB9IGZyb20gXCJuZzItcHJpc20vbGFuZ3VhZ2VzXCI7XG5pbXBvcnQge0NvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIENvZGVibG9jaywgTWFya3VwXSxcbiAgICBzZWxlY3RvcjogXCJ1aS1hY2NvcmRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT5BY2NvcmRpb248L2gxPlxuICAgICAgICAgICAgPHA+U2VtYW50aWMgVUkgYWNjb3JkaW9uIG1vZHVsZSA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2FjY29yZGlvbi5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgQWNjb3JkaW9uPC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgICAgICBcbiAgICAgICAgPHNtLWFjY29yZGlvbiBbb3B0aW9uc109XCJ7ZXhjbHVzaXZlOiBmYWxzZX1cIj5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIldoYXQgaXMgYSBkb2c/XCI+XG4gICAgICAgICAgICAgICAgQSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICAgICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiV2hhdCBraW5kcyBvZiBkb2dzIGFyZSB0aGVyZT9cIj5cbiAgICAgICAgICAgICAgICBUaGVyZSBhcmUgbWFueSBicmVlZHMgb2YgZG9ncy4gRWFjaCBicmVlZCB2YXJpZXMgaW4gc2l6ZSBhbmQgdGVtcGVyYW1lbnQuXG4gICAgICAgICAgICAgICAgT3duZXJzIG9mdGVuIHNlbGVjdCBhIGJyZWVkIG9mIGRvZyB0aGF0IHRoZXkgZmluZCB0byBiZSBjb21wYXRpYmxlIHdpdGggdGhlaXIgb3duIGxpZmVzdHlsZSBhbmQgZGVzaXJlcyBmcm9tIGEgY29tcGFuaW9uLlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIkhvdyBkbyB5b3UgYWNxdWlyZSBhIGRvZz9cIj5cbiAgICAgICAgICAgICAgICBUaHJlZSBjb21tb24gd2F5cyBmb3IgYSBwcm9zcGVjdGl2ZSBvd25lciB0byBhY3F1aXJlIGEgZG9nIGlzIGZyb20gcGV0IHNob3BzLCBwcml2YXRlIG93bmVycywgb3Igc2hlbHRlcnMuXG4gICAgICAgICAgICAgICAgQSBwZXQgc2hvcCBtYXkgYmUgdGhlIG1vc3QgY29udmVuaWVudCB3YXkgdG8gYnV5IGEgZG9nLiBCdXlpbmcgYSBkb2cgZnJvbSBhIHByaXZhdGUgb3duZXIgXG4gICAgICAgICAgICAgICAgYWxsb3dzIHlvdSB0byBhc3Nlc3MgdGhlIHBlZGlncmVlIGFuZCB1cGJyaW5naW5nIG9mIHlvdXIgZG9nIGJlZm9yZSBjaG9vc2luZyB0byB0YWtlIGl0IGhvbWUuIExhc3RseSwgXG4gICAgICAgICAgICAgICAgZmluZGluZyB5b3VyIGRvZyBmcm9tIGEgc2hlbHRlciwgaGVscHMgZ2l2ZSBhIGdvb2QgaG9tZSB0byBhIGRvZyB3aG8gbWF5IG5vdCBmaW5kIG9uZSBzbyByZWFkaWx5LlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgPC9zbS1hY2NvcmRpb24+XG4gICAgICAgIFxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NtLWFjY29yZGlvbiBbb3B0aW9uc109XCJ7ZXhjbHVzaXZlOiBmYWxzZX1cIj5cbiAgICAmbHQ7c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJXaGF0IGlzIGEgZG9nP1wiPlxuICAgICAgICBBIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuXG4gICAgJmx0Oy9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAmbHQ7c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJXaGF0IGtpbmRzIG9mIGRvZ3MgYXJlIHRoZXJlP1wiPlxuICAgICAgICBUaGVyZSBhcmUgbWFueSBicmVlZHMgb2YgZG9ncy4gRWFjaCBicmVlZCB2YXJpZXMgaW4gc2l6ZSBhbmQgdGVtcGVyYW1lbnQuXG4gICAgICAgIE93bmVycyBvZnRlbiBzZWxlY3QgYSBicmVlZCBvZiBkb2cgdGhhdCB0aGV5IGZpbmQgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHRoZWlyIG93biBsaWZlc3R5bGUgYW5kIGRlc2lyZXMgZnJvbSBhIGNvbXBhbmlvbi5cbiAgICAmbHQ7L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICZsdDtzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIkhvdyBkbyB5b3UgYWNxdWlyZSBhIGRvZz9cIj5cbiAgICAgICAgVGhyZWUgY29tbW9uIHdheXMgZm9yIGEgcHJvc3BlY3RpdmUgb3duZXIgdG8gYWNxdWlyZSBhIGRvZyBpcyBmcm9tIHBldCBzaG9wcywgcHJpdmF0ZSBvd25lcnMsIG9yIHNoZWx0ZXJzLlxuICAgICAgICBBIHBldCBzaG9wIG1heSBiZSB0aGUgbW9zdCBjb252ZW5pZW50IHdheSB0byBidXkgYSBkb2cuIEJ1eWluZyBhIGRvZyBmcm9tIGEgcHJpdmF0ZSBvd25lciBcbiAgICAgICAgYWxsb3dzIHlvdSB0byBhc3Nlc3MgdGhlIHBlZGlncmVlIGFuZCB1cGJyaW5naW5nIG9mIHlvdXIgZG9nIGJlZm9yZSBjaG9vc2luZyB0byB0YWtlIGl0IGhvbWUuIExhc3RseSwgXG4gICAgICAgIGZpbmRpbmcgeW91ciBkb2cgZnJvbSBhIHNoZWx0ZXIsIGhlbHBzIGdpdmUgYSBnb29kIGhvbWUgdG8gYSBkb2cgd2hvIG1heSBub3QgZmluZCBvbmUgc28gcmVhZGlseS5cbiAgICAmbHQ7L3NtLWFjY29yZGlvbi1pdGVtPlxuJmx0Oy9zbS1hY2NvcmRpb24+XG48L2NvZGVibG9jaz5cbiAgICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gc3R5bGVkPC9oND5cbiAgICAgICAgIDxzbS1hY2NvcmRpb24gY2xhc3M9XCJzdHlsZWRcIj5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIldoYXQgaXMgYSBkb2c/XCI+XG4gICAgICAgICAgICAgICAgQSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLCBcbiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIldoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/XCI+XG4gICAgICAgICAgICAgICAgVGhlcmUgYXJlIG1hbnkgYnJlZWRzIG9mIGRvZ3MuIEVhY2ggYnJlZWQgdmFyaWVzIGluIHNpemUgYW5kIHRlbXBlcmFtZW50LiBcbiAgICAgICAgICAgICAgICBPd25lcnMgb2Z0ZW4gc2VsZWN0IGEgYnJlZWQgb2YgZG9nIHRoYXQgdGhleSBmaW5kIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVpciBvd24gbGlmZXN0eWxlIGFuZCBkZXNpcmVzIGZyb20gYSBjb21wYW5pb24uXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiSG93IGRvIHlvdSBhY3F1aXJlIGEgZG9nP1wiPlxuICAgICAgICAgICAgICAgIFRocmVlIGNvbW1vbiB3YXlzIGZvciBhIHByb3NwZWN0aXZlIG93bmVyIHRvIGFjcXVpcmUgYSBkb2cgaXMgZnJvbSBwZXQgc2hvcHMsIHByaXZhdGUgb3duZXJzLCBvciBzaGVsdGVycy5cbiAgICAgICAgICAgICAgICBBIHBldCBzaG9wIG1heSBiZSB0aGUgbW9zdCBjb252ZW5pZW50IHdheSB0byBidXkgYSBkb2cuIFxuICAgICAgICAgICAgICAgIEJ1eWluZyBhIGRvZyBmcm9tIGEgcHJpdmF0ZSBvd25lciBhbGxvd3MgeW91IHRvIGFzc2VzcyB0aGUgcGVkaWdyZWUgYW5kIHVwYnJpbmdpbmcgb2YgeW91ciBkb2cgXG4gICAgICAgICAgICAgICAgYmVmb3JlIGNob29zaW5nIHRvIHRha2UgaXQgaG9tZS4gXG4gICAgICAgICAgICAgICAgTGFzdGx5LCBmaW5kaW5nIHlvdXIgZG9nIGZyb20gYSBzaGVsdGVyLCBoZWxwcyBnaXZlIGEgZ29vZCBob21lIHRvIGEgZG9nIHdobyBtYXkgbm90IGZpbmQgb25lIHNvIHJlYWRpbHkuXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICA8L3NtLWFjY29yZGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gZmx1aWQ8L2g0PlxuICAgICAgICA8c20tYWNjb3JkaW9uIGNsYXNzPVwic3R5bGVkIGZsdWlkXCI+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJXaGF0IGlzIGEgZG9nP1wiPlxuICAgICAgICAgICAgICAgIEEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcywgXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJXaGF0IGtpbmRzIG9mIGRvZ3MgYXJlIHRoZXJlP1wiPlxuICAgICAgICAgICAgICAgIFRoZXJlIGFyZSBtYW55IGJyZWVkcyBvZiBkb2dzLiBFYWNoIGJyZWVkIHZhcmllcyBpbiBzaXplIGFuZCB0ZW1wZXJhbWVudC4gXG4gICAgICAgICAgICAgICAgT3duZXJzIG9mdGVuIHNlbGVjdCBhIGJyZWVkIG9mIGRvZyB0aGF0IHRoZXkgZmluZCB0byBiZSBjb21wYXRpYmxlIHdpdGggdGhlaXIgb3duIGxpZmVzdHlsZSBhbmQgZGVzaXJlcyBmcm9tIGEgY29tcGFuaW9uLlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIkhvdyBkbyB5b3UgYWNxdWlyZSBhIGRvZz9cIj5cbiAgICAgICAgICAgICAgICBUaHJlZSBjb21tb24gd2F5cyBmb3IgYSBwcm9zcGVjdGl2ZSBvd25lciB0byBhY3F1aXJlIGEgZG9nIGlzIGZyb20gcGV0IHNob3BzLCBwcml2YXRlIG93bmVycywgb3Igc2hlbHRlcnMuXG4gICAgICAgICAgICAgICAgQSBwZXQgc2hvcCBtYXkgYmUgdGhlIG1vc3QgY29udmVuaWVudCB3YXkgdG8gYnV5IGEgZG9nLiBCdXlpbmcgYSBkb2cgZnJvbSBhIHByaXZhdGUgb3duZXIgYWxsb3dzIFxuICAgICAgICAgICAgICAgIHlvdSB0byBhc3Nlc3MgdGhlIHBlZGlncmVlIGFuZCB1cGJyaW5naW5nIG9mIHlvdXIgZG9nIGJlZm9yZSBjaG9vc2luZyB0byB0YWtlIGl0IGhvbWUuIExhc3RseSwgXG4gICAgICAgICAgICAgICAgZmluZGluZyB5b3VyIGRvZyBmcm9tIGEgc2hlbHRlciwgaGVscHMgZ2l2ZSBhIGdvb2QgaG9tZSB0byBhIGRvZyB3aG8gbWF5IG5vdCBmaW5kIG9uZSBzbyByZWFkaWx5LlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgPC9zbS1hY2NvcmRpb24+XG4gICAgICAgIFxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGludmVydGVkPC9oND5cbiAgICAgICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJpbnZlcnRlZFwiPlxuICAgICAgICAgICA8c20tYWNjb3JkaW9uIGNsYXNzPVwiaW52ZXJ0ZWRcIj5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIldoYXQgaXMgYSBkb2c/XCI+XG4gICAgICAgICAgICAgICAgQSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLCBcbiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIldoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/XCI+XG4gICAgICAgICAgICAgICAgVGhlcmUgYXJlIG1hbnkgYnJlZWRzIG9mIGRvZ3MuIEVhY2ggYnJlZWQgdmFyaWVzIGluIHNpemUgYW5kIHRlbXBlcmFtZW50LiBcbiAgICAgICAgICAgICAgICBPd25lcnMgb2Z0ZW4gc2VsZWN0IGEgYnJlZWQgb2YgZG9nIHRoYXQgdGhleSBmaW5kIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVpciBvd24gbGlmZXN0eWxlIGFuZCBkZXNpcmVzIGZyb20gYSBjb21wYW5pb24uXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiSG93IGRvIHlvdSBhY3F1aXJlIGEgZG9nP1wiPlxuICAgICAgICAgICAgICAgIFRocmVlIGNvbW1vbiB3YXlzIGZvciBhIHByb3NwZWN0aXZlIG93bmVyIHRvIGFjcXVpcmUgYSBkb2cgaXMgZnJvbSBwZXQgc2hvcHMsIHByaXZhdGUgb3duZXJzLCBvciBzaGVsdGVycy5cbiAgICAgICAgICAgICAgICBBIHBldCBzaG9wIG1heSBiZSB0aGUgbW9zdCBjb252ZW5pZW50IHdheSB0byBidXkgYSBkb2cuIEJ1eWluZyBhIGRvZyBmcm9tIGEgcHJpdmF0ZSBvd25lciBhbGxvd3MgeW91IHRvIGFzc2VzcyBcbiAgICAgICAgICAgICAgICB0aGUgcGVkaWdyZWUgYW5kIHVwYnJpbmdpbmcgb2YgeW91ciBkb2cgYmVmb3JlIGNob29zaW5nIHRvIHRha2UgaXQgaG9tZS4gTGFzdGx5LCBmaW5kaW5nIHlvdXIgZG9nIGZyb20gYSBzaGVsdGVyLFxuICAgICAgICAgICAgICAgICBoZWxwcyBnaXZlIGEgZ29vZCBob21lIHRvIGEgZG9nIHdobyBtYXkgbm90IGZpbmQgb25lIHNvIHJlYWRpbHkuXG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24+XG4gICAgICAgIDwvc20tc2VnbWVudD5cbiAgICAgICAgICAgICBcbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBmb3JtPC9oND5cbiAgICAgICAgPHNtLXNlZ21lbnQ+XG4gICAgICAgICAgICA8Zm9ybSBzbS1mb3JtIGNsYXNzPVwidWkgZm9ybVwiIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNtLWFjY29yZGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiQWRkaXRpb25hbFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtLWlucHV0IGxhYmVsPVwiRS1tYWlsXCIgW2NvbnRyb2xdPVwiZW1haWxDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwuLi5cIj48L3NtLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c20taW5wdXQgbGFiZWw9XCJQaG9uZSBudW1iZXJcIiBbY29udHJvbF09XCJlbWFpbENvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHBob25lIG51bWJlci4uLlwiPjwvc20taW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8L3NtLWFjY29yZGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8c20tYnV0dG9uIGNsYXNzPVwicHJpbWFyeVwiPlNhdmU8L3NtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc20tc2VnbWVudD5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IHtcblxuICAgIGFncmVlQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgIG5hbWVDb250cm9sOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pKTtcbiAgICBlbWFpbENvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSkpO1xuXG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsQ29udHJvbDogdGhpcy5lbWFpbENvbnRyb2wsXG4gICAgICAgICAgICBuYW1lQ29udHJvbDogdGhpcy5uYW1lQ29udHJvbCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19