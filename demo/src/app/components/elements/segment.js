var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var semantic_1 = require("../../directives/semantic/semantic");
var data_1 = require("../../services/data");
var SegmentComponent = (function () {
    function SegmentComponent() {
    }
    SegmentComponent = __decorate([
        core_1.Component({
            selector: "segment",
            providers: [data_1.DataServices]
        }),
        core_1.View({
            directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
            template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Segment</h1>\n        <p>Semantic UI segment element <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/elements/segment.html\" target=\"_blank\">Semantic UI Segment</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo raised</h4>\n    <sm-segment class=\"raised\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. \n    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-segment class=\"raised\">...</sm-segment>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n      <h4 class=\"ui header\">Demo stacked</h4>\n    <sm-segment class=\"stacked\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. \n    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-segment class=\"stacked\">...</sm-segment>\n</textarea>\n        </div>\n      </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], SegmentComponent);
    return SegmentComponent;
})();
exports.SegmentComponent = SegmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9zZWdtZW50LnRzIl0sIm5hbWVzIjpbIlNlZ21lbnRDb21wb25lbnQiLCJTZWdtZW50Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQseUJBQXlELG9DQUFvQyxDQUFDLENBQUE7QUFDOUYscUJBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFFbkQ7SUFBQUE7SUE4QytCQyxDQUFDQTtJQTlDaENEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFHQSxTQUFTQTtZQUNqQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsbUJBQVlBLENBQUNBO1NBQzVCQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7WUFDdERBLFFBQVFBLEVBQUdBLDZ4REFxQ1hBO1NBQ0FBLENBQUNBOzt5QkFFOEJBO0lBQURBLHVCQUFDQTtBQUFEQSxDQUFDQSxBQTlDaEMsSUE4Q2dDO0FBQW5CLHdCQUFnQixtQkFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlcy9zZW1hbnRpYy9zZW1hbnRpY1wiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yIDogXCJzZWdtZW50XCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VzXVxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuXHR0ZW1wbGF0ZSA6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5TZWdtZW50PC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgc2VnbWVudCBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3NlZ21lbnQuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIFNlZ21lbnQ8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHJhaXNlZDwvaDQ+XG4gICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJyYWlzZWRcIj5QZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gXG4gICAgVmVzdGlidWx1bSB0b3J0b3IgcXVhbSwgZmV1Z2lhdCB2aXRhZSwgdWx0cmljaWVzIGVnZXQsIHRlbXBvciBzaXQgYW1ldCwgYW50ZS4gRG9uZWMgZXUgbGliZXJvIHNpdCBhbWV0IHF1YW0gZWdlc3RhcyBzZW1wZXIuIFxuICAgIEFlbmVhbiB1bHRyaWNpZXMgbWkgdml0YWUgZXN0LiBNYXVyaXMgcGxhY2VyYXQgZWxlaWZlbmQgbGVvLjwvc20tc2VnbWVudD5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1zZWdtZW50IGNsYXNzPVwicmFpc2VkXCI+Li4uPC9zbS1zZWdtZW50PlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHN0YWNrZWQ8L2g0PlxuICAgIDxzbS1zZWdtZW50IGNsYXNzPVwic3RhY2tlZFwiPlBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBcbiAgICBWZXN0aWJ1bHVtIHRvcnRvciBxdWFtLCBmZXVnaWF0IHZpdGFlLCB1bHRyaWNpZXMgZWdldCwgdGVtcG9yIHNpdCBhbWV0LCBhbnRlLiBEb25lYyBldSBsaWJlcm8gc2l0IGFtZXQgcXVhbSBlZ2VzdGFzIHNlbXBlci4gXG4gICAgQWVuZWFuIHVsdHJpY2llcyBtaSB2aXRhZSBlc3QuIE1hdXJpcyBwbGFjZXJhdCBlbGVpZmVuZCBsZW8uPC9zbS1zZWdtZW50PlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCIyXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLXNlZ21lbnQgY2xhc3M9XCJzdGFja2VkXCI+Li4uPC9zbS1zZWdtZW50PlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIFNlZ21lbnRDb21wb25lbnQge31cbiJdfQ==