System.register(["angular2/core", "../../directives/semantic/semantic", "../../services/data"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, semantic_1, data_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(ds) {
                    var _this = this;
                    this.ds = ds;
                    this.flatArray = [];
                    ds.flatArray().subscribe(function (data) {
                        _this.flatArray = data;
                    });
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: "menu-cp",
                        providers: [data_1.DataServices]
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Menu</h1>\n        <p>Semantic UI menu component <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/collections/menu.html\" target=\"_blank\">Semantic UI Menu</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo inverted</h4>\n    <sm-header title=\"Angular2\" class=\"inverted teal\" logo=\"/assets/images/semantic.png\"></sm-header>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-header title=\"Angular2\" class=\"inverted teal\" logo=\"/assets/images/semantic.png\"></sm-header>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n    <h4 class=\"ui header\">Demo vertical</h4>\n    <sm-header title=\"Vertical\" class=\"vertical\"></sm-header>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-header title=\"Vertical\" class=\"vertical\"></sm-header>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n      <h4 class=\"ui header\">Demo secondary</h4>\n    <sm-header title=\"Secondary\" class=\"secondary\"></sm-header>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-header title=\"Secondary\" class=\"secondary\"></sm-header>\n</textarea>\n        </div>\n      </div>\n      \n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [data_1.DataServices])
                ], MenuComponent);
                return MenuComponent;
            })();
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZW51LnRzIl0sIm5hbWVzIjpbIk1lbnVDb21wb25lbnQiLCJNZW51Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkF5RENBLHVCQUFtQkEsRUFBZ0JBO29CQXpEcENDLGlCQThEQ0E7b0JBTG1CQSxPQUFFQSxHQUFGQSxFQUFFQSxDQUFjQTtvQkFEaENBLGNBQVNBLEdBQWVBLEVBQUVBLENBQUNBO29CQUU3QkEsRUFBRUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsSUFBU0E7d0JBQ2xDQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDdkJBLENBQUNBLENBQUNBLENBQUNBO2dCQUNKQSxDQUFDQTtnQkE3REZEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUdBLFNBQVNBO3dCQUNqQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsbUJBQVlBLENBQUNBO3FCQUM1QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7d0JBQ3REQSxRQUFRQSxFQUFHQSx5MkRBOENYQTtxQkFDQUEsQ0FBQ0E7O2tDQVNEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBQUNBLEFBOURELElBOERDO1lBOURELHlDQThEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlcy9zZW1hbnRpYy9zZW1hbnRpY1wiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yIDogXCJtZW51LWNwXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VzXVxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuXHR0ZW1wbGF0ZSA6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5NZW51PC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgbWVudSBjb21wb25lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVudS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTWVudTwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gaW52ZXJ0ZWQ8L2g0PlxuICAgIDxzbS1oZWFkZXIgdGl0bGU9XCJBbmd1bGFyMlwiIGNsYXNzPVwiaW52ZXJ0ZWQgdGVhbFwiIGxvZ289XCIvYXNzZXRzL2ltYWdlcy9zZW1hbnRpYy5wbmdcIj48L3NtLWhlYWRlcj5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1oZWFkZXIgdGl0bGU9XCJBbmd1bGFyMlwiIGNsYXNzPVwiaW52ZXJ0ZWQgdGVhbFwiIGxvZ289XCIvYXNzZXRzL2ltYWdlcy9zZW1hbnRpYy5wbmdcIj48L3NtLWhlYWRlcj5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gdmVydGljYWw8L2g0PlxuICAgIDxzbS1oZWFkZXIgdGl0bGU9XCJWZXJ0aWNhbFwiIGNsYXNzPVwidmVydGljYWxcIj48L3NtLWhlYWRlcj5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1oZWFkZXIgdGl0bGU9XCJWZXJ0aWNhbFwiIGNsYXNzPVwidmVydGljYWxcIj48L3NtLWhlYWRlcj5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBzZWNvbmRhcnk8L2g0PlxuICAgIDxzbS1oZWFkZXIgdGl0bGU9XCJTZWNvbmRhcnlcIiBjbGFzcz1cInNlY29uZGFyeVwiPjwvc20taGVhZGVyPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCIyXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLWhlYWRlciB0aXRsZT1cIlNlY29uZGFyeVwiIGNsYXNzPVwic2Vjb25kYXJ5XCI+PC9zbS1oZWFkZXI+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcbiAgICBmbGF0QXJyYXk6IEFycmF5PGFueT4gPSBbXTtcblx0Y29uc3RydWN0b3IocHVibGljIGRzOiBEYXRhU2VydmljZXMpIHtcblx0XHRkcy5mbGF0QXJyYXkoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuXHRcdFx0dGhpcy5mbGF0QXJyYXkgPSBkYXRhO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=