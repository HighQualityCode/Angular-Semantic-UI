System.register(["@angular/core", "@angular/forms", "ng-semantic", "../../prismjs/prismjs"], function(exports_1, context_1) {
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
    var core_1, forms_1, ng_semantic_1, prismjs_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent(fb) {
                    this.agreeControl = new forms_1.FormControl("", forms_1.Validators.required);
                    this.emailControl = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)]));
                    this.search = new forms_1.FormControl("");
                    this.formSubmited = false;
                    this.nameControl = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)]));
                    this.nameFControl = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)]));
                    this.selectControl = new forms_1.FormControl("");
                    this.textControl = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10)]));
                    this.form = fb.group({
                        emailControl: this.emailControl,
                        nameControl: this.nameControl,
                    });
                    this.formFeedback = fb.group({
                        nameFControl: this.nameFControl,
                        selectControl: this.selectControl,
                        textControl: this.textControl
                    });
                }
                FormComponent.prototype.checkboxValidator = function (control) {
                    var value = (typeof control.value === "boolean") ? control.value : false;
                    return (value) ? "" : "yes";
                };
                FormComponent.prototype.submit = function () {
                    this.formSubmited = true;
                };
                FormComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "sm-page-form",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Form</h1>\n\t<p>Semantic UI Form collection <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/form.html\" target=\"_blank\">Semantic UI Form</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo login</h4>\n    \n    <form smForm class=\"ui form\" [formGroup]=\"form\">\n\t<sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n\t<div class=\"field\">\n\t    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\"></sm-checkbox>\n\t</div>\n\t<sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login</sm-button>\n    </form>\n    <h4 class=\"ui header\">Code</h4>\n<sm-codeblock smPrismjs=\"html\">\n&lt;form smForm class=\"ui form\" [formGroup]=\"form\"> \n    &lt;sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\">&lt;/sm-loader>\n    &lt;div class=\"field\">\n\t    &lt;sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\">&lt;/sm-input>\n    &lt;/div>\n    &lt;div class=\"field\">\n\t    &lt;sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\">&lt;/sm-input>\n    &lt;/div>\n    &lt;div class=\"field\">\n\t    &lt;sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\">&lt;/sm-checkbox>\n    &lt;/div>\n    &lt;sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login&lt;/sm-button>\n&lt;/form>\n</sm-codeblock>\n\n<h4 class=\"ui header\">Demo feedback</h4>\n<form smForm class=\"ui form\" [formGroup]=\"formFeedback\">\n    <div class=\"field\">\n        <sm-input label=\"Name\" [control]=\"nameFControl\" placeholder=\"Enter name...\"></sm-input>\n        Remaining: {{(nameFControl.value.length - 4 )}}\n    </div>\n    <div class=\"field\">\n        <label>Category</label>\n        <sm-select class=\"fluid\" [control]=\"selectControl\" placeholder=\"Choose category...\">\n            <option>Support</option>\n            <option>Feedback</option>\n        </sm-select>\n    </div>\n    <div class=\"field\">\n        <sm-textarea label=\"Name\" rows=\"10\" [control]=\"textControl\"></sm-textarea>\n        Remaining: {{(textControl.value.length - 10)}}\n    </div>\n    <sm-button (click)=\"feedbackModal.show({ transition: 'slide up'})\" [disabled]=\"!formFeedback.valid\" class=\"primary\">Send</sm-button>\n</form>\n\n<sm-modal title=\"Feedback sent\" #feedbackModal>\n    <modal-content>\n        <h2 class=\"ui icon center aligned header\">\n          <i class=\"thumbs up icon\"></i>\n          <div class=\"content\">\n            <p>Successfully sent</p>\n            <div class=\"sub header\">{{nameFControl.value}}</div>\n            <div>{{selectControl.value}}</div>\n            <p>\n                {{textControl.value}}\n            </p>\n          </div>\n        </h2>\n    </modal-content>\n</sm-modal>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1RkE7Z0JBY0ksdUJBQVksRUFBZTtvQkFiM0IsaUJBQVksR0FBZ0IsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNyRSxpQkFBWSxHQUFnQixJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BILFdBQU0sR0FBZ0IsSUFBSSxtQkFBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUkxQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztvQkFDOUIsZ0JBQVcsR0FBZ0IsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVuSCxpQkFBWSxHQUFnQixJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BILGtCQUFhLEdBQWdCLElBQUksbUJBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDakQsZ0JBQVcsR0FBZ0IsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUdoSCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ2pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTt3QkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUNoQyxDQUFDLENBQUM7b0JBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUN6QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7d0JBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTt3QkFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUNoQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsT0FBb0I7b0JBQ3JDLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN6RSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixDQUFDO2dCQUVELDhCQUFNLEdBQU47b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBcEhMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQUUsZ0NBQXdCLEVBQVEsNEJBQWtCLEVBQVEsMEJBQWdCLENBQUM7d0JBQ2xJLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsMnZHQTZFYjtxQkFDQSxDQUFDOztpQ0FBQTtnQkFvQ0Ysb0JBQUM7WUFBRCxDQUFDLEFBbkNELElBbUNDO1lBbkNELHlDQW1DQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2tDb21wb25lbnQsIFByaXNtSnNEaXJlY3RpdmUgfSBmcm9tIFwiLi4vLi4vcHJpc21qcy9wcmlzbWpzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIDxUeXBlPkNvZGVibG9ja0NvbXBvbmVudCwgPFR5cGU+UHJpc21Kc0RpcmVjdGl2ZV0sXG4gICAgc2VsZWN0b3I6IFwic20tcGFnZS1mb3JtXCIsXG4gICAgdGVtcGxhdGU6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG5cdDxoMT5Gb3JtPC9oMT5cblx0PHA+U2VtYW50aWMgVUkgRm9ybSBjb2xsZWN0aW9uIDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cblx0PGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvZm9ybS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgRm9ybTwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gbG9naW48L2g0PlxuICAgIFxuICAgIDxmb3JtIHNtRm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cblx0PHNtLWxvYWRlciBbY29tcGxldGVdPVwiIWZvcm1TdWJtaXRlZFwiIGNsYXNzPVwiaW52ZXJ0ZWRcIiB0ZXh0PVwiTG9hZGluZy4uLlwiPjwvc20tbG9hZGVyPlxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cblx0ICAgIDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cblx0ICAgIDxzbS1pbnB1dCBsYWJlbD1cIkUtbWFpbFwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsLi4uXCI+PC9zbS1pbnB1dD5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuXHQgICAgPHNtLWNoZWNrYm94IGxhYmVsPVwiSSBhZ3JlZSB0byB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnNcIiBbY29udHJvbF09XCJhZ3JlZUNvbnRyb2xcIj48L3NtLWNoZWNrYm94PlxuXHQ8L2Rpdj5cblx0PHNtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0KClcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiBjbGFzcz1cInByaW1hcnlcIj5Mb2dpbjwvc20tYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxzbS1jb2RlYmxvY2sgc21QcmlzbWpzPVwiaHRtbFwiPlxuJmx0O2Zvcm0gc21Gb3JtIGNsYXNzPVwidWkgZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPiBcbiAgICAmbHQ7c20tbG9hZGVyIFtjb21wbGV0ZV09XCIhZm9ybVN1Ym1pdGVkXCIgY2xhc3M9XCJpbnZlcnRlZFwiIHRleHQ9XCJMb2FkaW5nLi4uXCI+Jmx0Oy9zbS1sb2FkZXI+XG4gICAgJmx0O2RpdiBjbGFzcz1cImZpZWxkXCI+XG5cdCAgICAmbHQ7c20taW5wdXQgbGFiZWw9XCJOYW1lXCIgW2NvbnRyb2xdPVwibmFtZUNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWUuLi5cIj4mbHQ7L3NtLWlucHV0PlxuICAgICZsdDsvZGl2PlxuICAgICZsdDtkaXYgY2xhc3M9XCJmaWVsZFwiPlxuXHQgICAgJmx0O3NtLWlucHV0IGxhYmVsPVwiRS1tYWlsXCIgW2NvbnRyb2xdPVwiZW1haWxDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwuLi5cIj4mbHQ7L3NtLWlucHV0PlxuICAgICZsdDsvZGl2PlxuICAgICZsdDtkaXYgY2xhc3M9XCJmaWVsZFwiPlxuXHQgICAgJmx0O3NtLWNoZWNrYm94IGxhYmVsPVwiSSBhZ3JlZSB0byB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnNcIiBbY29udHJvbF09XCJhZ3JlZUNvbnRyb2xcIj4mbHQ7L3NtLWNoZWNrYm94PlxuICAgICZsdDsvZGl2PlxuICAgICZsdDtzbS1idXR0b24gKGNsaWNrKT1cInN1Ym1pdCgpXCIgW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkXCIgY2xhc3M9XCJwcmltYXJ5XCI+TG9naW4mbHQ7L3NtLWJ1dHRvbj5cbiZsdDsvZm9ybT5cbjwvc20tY29kZWJsb2NrPlxuXG48aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGZlZWRiYWNrPC9oND5cbjxmb3JtIHNtRm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1GZWVkYmFja1wiPlxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICA8c20taW5wdXQgbGFiZWw9XCJOYW1lXCIgW2NvbnRyb2xdPVwibmFtZUZDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lLi4uXCI+PC9zbS1pbnB1dD5cbiAgICAgICAgUmVtYWluaW5nOiB7eyhuYW1lRkNvbnRyb2wudmFsdWUubGVuZ3RoIC0gNCApfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgPGxhYmVsPkNhdGVnb3J5PC9sYWJlbD5cbiAgICAgICAgPHNtLXNlbGVjdCBjbGFzcz1cImZsdWlkXCIgW2NvbnRyb2xdPVwic2VsZWN0Q29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGNhdGVnb3J5Li4uXCI+XG4gICAgICAgICAgICA8b3B0aW9uPlN1cHBvcnQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+RmVlZGJhY2s8L29wdGlvbj5cbiAgICAgICAgPC9zbS1zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgIDxzbS10ZXh0YXJlYSBsYWJlbD1cIk5hbWVcIiByb3dzPVwiMTBcIiBbY29udHJvbF09XCJ0ZXh0Q29udHJvbFwiPjwvc20tdGV4dGFyZWE+XG4gICAgICAgIFJlbWFpbmluZzoge3sodGV4dENvbnRyb2wudmFsdWUubGVuZ3RoIC0gMTApfX1cbiAgICA8L2Rpdj5cbiAgICA8c20tYnV0dG9uIChjbGljayk9XCJmZWVkYmFja01vZGFsLnNob3coeyB0cmFuc2l0aW9uOiAnc2xpZGUgdXAnfSlcIiBbZGlzYWJsZWRdPVwiIWZvcm1GZWVkYmFjay52YWxpZFwiIGNsYXNzPVwicHJpbWFyeVwiPlNlbmQ8L3NtLWJ1dHRvbj5cbjwvZm9ybT5cblxuPHNtLW1vZGFsIHRpdGxlPVwiRmVlZGJhY2sgc2VudFwiICNmZWVkYmFja01vZGFsPlxuICAgIDxtb2RhbC1jb250ZW50PlxuICAgICAgICA8aDIgY2xhc3M9XCJ1aSBpY29uIGNlbnRlciBhbGlnbmVkIGhlYWRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwidGh1bWJzIHVwIGljb25cIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwPlN1Y2Nlc3NmdWxseSBzZW50PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YiBoZWFkZXJcIj57e25hbWVGQ29udHJvbC52YWx1ZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pnt7c2VsZWN0Q29udHJvbC52YWx1ZX19PC9kaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7e3RleHRDb250cm9sLnZhbHVlfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oMj5cbiAgICA8L21vZGFsLWNvbnRlbnQ+XG48L3NtLW1vZGFsPlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQge1xuICAgIGFncmVlQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgZW1haWxDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSkpO1xuICAgIHNlYXJjaDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIik7XG5cbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgZm9ybUZlZWRiYWNrOiBGb3JtR3JvdXA7XG4gICAgZm9ybVN1Ym1pdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbmFtZUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKSk7XG5cbiAgICBuYW1lRkNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKSk7XG4gICAgc2VsZWN0Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIik7XG4gICAgdGV4dENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTApXSkpO1xuXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsQ29udHJvbDogdGhpcy5lbWFpbENvbnRyb2wsXG4gICAgICAgICAgICBuYW1lQ29udHJvbDogdGhpcy5uYW1lQ29udHJvbCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3JtRmVlZGJhY2sgPSBmYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lRkNvbnRyb2w6IHRoaXMubmFtZUZDb250cm9sLFxuICAgICAgICAgICAgc2VsZWN0Q29udHJvbDogdGhpcy5zZWxlY3RDb250cm9sLFxuICAgICAgICAgICAgdGV4dENvbnRyb2w6IHRoaXMudGV4dENvbnRyb2xcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tib3hWYWxpZGF0b3IoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcblx0ICAgIGxldCB2YWx1ZSA9ICh0eXBlb2YgY29udHJvbC52YWx1ZSA9PT0gXCJib29sZWFuXCIpID8gY29udHJvbC52YWx1ZSA6IGZhbHNlO1xuXHQgICAgcmV0dXJuICh2YWx1ZSkgPyBcIlwiIDogXCJ5ZXNcIjtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG5cdCAgICB0aGlzLmZvcm1TdWJtaXRlZCA9IHRydWU7XG4gICAgfVxufVxuIl19