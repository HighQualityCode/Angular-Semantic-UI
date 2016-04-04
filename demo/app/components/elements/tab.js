System.register(["angular2/core", "ng-semantic/semantic"], function(exports_1, context_1) {
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
    var core_1, semantic_1;
    var TabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            TabComponent = (function () {
                function TabComponent() {
                }
                TabComponent = __decorate([
                    core_1.Component({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "tab",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Tab</h1>\n        <p>Semantic UI tab module <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/modules/tab.html\" target=\"_blank\">Semantic UI Tab</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-tabs>\n          <sm-tab title=\"Hello\" class=\"ui tab bottom attached segment active\" data-tab=\"first\">Lorem ipsum dolor sit amet, \n          consectetur adipiscing elit. \n          Mauris vehicula eros lacus, maximus accumsan sem dignissim et. Lorem ipsum dolor sit amet, \n          consectetur adipiscing elit. \n          Cras non elementum lectus. Sed pretium vulputate quam in laoreet. Nunc molestie id erat in mollis. \n          Integer sit amet dignissim tortor. \n          Donec non ultrices augue. Aenean posuere et justo ut tempor. Fusce sagittis viverra euismod.\n</sm-tab>\n          <sm-tab title=\"About\" class=\"ui tab bottom attached segment\" data-tab=\"second\">Suspendisse vehicula, lorem in maximus vehicula, \n          massa leo viverra purus, ac blandit nulla orci eget eros. Integer at est dapibus, molestie justo non, accumsan est. \n          In dictum consequat pharetra. \n          Cras ultricies elit nec auctor volutpat. In nibh justo, fringilla non tellus ac, imperdiet iaculis diam. \n          Cras maximus ex urna, sit amet elementum eros aliquam volutpat. Ut nec commodo neque. Mauris euismod, leo eu iaculis \n          vestibulum, massa nibh eleifend ante, eu interdum lacus arcu sit amet dui. Fusce tincidunt semper justo et feugiat. \n          Mauris turpis mi, dignissim quis turpis vel, molestie aliquet augue. Curabitur finibus nibh vitae lobortis lacinia. \n          Curabitur molestie porta mauris at elementum. Nunc dignissim pharetra ligula non elementum. \n          Praesent gravida porta nunc et venenatis. \n          Curabitur malesuada arcu non risus aliquet, vitae pulvinar metus luctus. Nulla fermentum, \n          elit a pellentesque aliquet, metus felis mollis enim, et pulvinar orci massa in est.\n</sm-tab>\n      </sm-tabs>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"6\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-tabs>\n  <sm-tab title=\"Hello\" class=\"ui tab bottom attached segment active\" data-tab=\"first\">text...</sm-tab>\n  <sm-tab title=\"About\" class=\"ui tab bottom attached segment\" data-tab=\"second\">text..</sm-tab>\n</sm-tabs>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabComponent);
                return TabComponent;
            }());
            exports_1("TabComponent", TabComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL3RhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNEQTtnQkFBQTtnQkFBMkIsQ0FBQztnQkFuRDVCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsOEJBQW1CLEVBQUUsOEJBQW1CLENBQUM7d0JBQ3RELFFBQVEsRUFBRyxLQUFLO3dCQUNoQixRQUFRLEVBQUcsK29GQTZDZDtxQkFDQSxDQUFDOztnQ0FBQTtnQkFFeUIsbUJBQUM7WUFBRCxDQUFDLEFBQTVCLElBQTRCO1lBQTVCLHVDQUE0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuICAgIHNlbGVjdG9yIDogXCJ0YWJcIixcbiAgICB0ZW1wbGF0ZSA6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5UYWI8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSB0YWIgbW9kdWxlIDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvdGFiLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBUYWI8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cbiAgICA8c20tdGFicz5cbiAgICAgICAgICA8c20tdGFiIHRpdGxlPVwiSGVsbG9cIiBjbGFzcz1cInVpIHRhYiBib3R0b20gYXR0YWNoZWQgc2VnbWVudCBhY3RpdmVcIiBkYXRhLXRhYj1cImZpcnN0XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIFxuICAgICAgICAgIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gXG4gICAgICAgICAgTWF1cmlzIHZlaGljdWxhIGVyb3MgbGFjdXMsIG1heGltdXMgYWNjdW1zYW4gc2VtIGRpZ25pc3NpbSBldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIFxuICAgICAgICAgIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gXG4gICAgICAgICAgQ3JhcyBub24gZWxlbWVudHVtIGxlY3R1cy4gU2VkIHByZXRpdW0gdnVscHV0YXRlIHF1YW0gaW4gbGFvcmVldC4gTnVuYyBtb2xlc3RpZSBpZCBlcmF0IGluIG1vbGxpcy4gXG4gICAgICAgICAgSW50ZWdlciBzaXQgYW1ldCBkaWduaXNzaW0gdG9ydG9yLiBcbiAgICAgICAgICBEb25lYyBub24gdWx0cmljZXMgYXVndWUuIEFlbmVhbiBwb3N1ZXJlIGV0IGp1c3RvIHV0IHRlbXBvci4gRnVzY2Ugc2FnaXR0aXMgdml2ZXJyYSBldWlzbW9kLlxuPC9zbS10YWI+XG4gICAgICAgICAgPHNtLXRhYiB0aXRsZT1cIkFib3V0XCIgY2xhc3M9XCJ1aSB0YWIgYm90dG9tIGF0dGFjaGVkIHNlZ21lbnRcIiBkYXRhLXRhYj1cInNlY29uZFwiPlN1c3BlbmRpc3NlIHZlaGljdWxhLCBsb3JlbSBpbiBtYXhpbXVzIHZlaGljdWxhLCBcbiAgICAgICAgICBtYXNzYSBsZW8gdml2ZXJyYSBwdXJ1cywgYWMgYmxhbmRpdCBudWxsYSBvcmNpIGVnZXQgZXJvcy4gSW50ZWdlciBhdCBlc3QgZGFwaWJ1cywgbW9sZXN0aWUganVzdG8gbm9uLCBhY2N1bXNhbiBlc3QuIFxuICAgICAgICAgIEluIGRpY3R1bSBjb25zZXF1YXQgcGhhcmV0cmEuIFxuICAgICAgICAgIENyYXMgdWx0cmljaWVzIGVsaXQgbmVjIGF1Y3RvciB2b2x1dHBhdC4gSW4gbmliaCBqdXN0bywgZnJpbmdpbGxhIG5vbiB0ZWxsdXMgYWMsIGltcGVyZGlldCBpYWN1bGlzIGRpYW0uIFxuICAgICAgICAgIENyYXMgbWF4aW11cyBleCB1cm5hLCBzaXQgYW1ldCBlbGVtZW50dW0gZXJvcyBhbGlxdWFtIHZvbHV0cGF0LiBVdCBuZWMgY29tbW9kbyBuZXF1ZS4gTWF1cmlzIGV1aXNtb2QsIGxlbyBldSBpYWN1bGlzIFxuICAgICAgICAgIHZlc3RpYnVsdW0sIG1hc3NhIG5pYmggZWxlaWZlbmQgYW50ZSwgZXUgaW50ZXJkdW0gbGFjdXMgYXJjdSBzaXQgYW1ldCBkdWkuIEZ1c2NlIHRpbmNpZHVudCBzZW1wZXIganVzdG8gZXQgZmV1Z2lhdC4gXG4gICAgICAgICAgTWF1cmlzIHR1cnBpcyBtaSwgZGlnbmlzc2ltIHF1aXMgdHVycGlzIHZlbCwgbW9sZXN0aWUgYWxpcXVldCBhdWd1ZS4gQ3VyYWJpdHVyIGZpbmlidXMgbmliaCB2aXRhZSBsb2JvcnRpcyBsYWNpbmlhLiBcbiAgICAgICAgICBDdXJhYml0dXIgbW9sZXN0aWUgcG9ydGEgbWF1cmlzIGF0IGVsZW1lbnR1bS4gTnVuYyBkaWduaXNzaW0gcGhhcmV0cmEgbGlndWxhIG5vbiBlbGVtZW50dW0uIFxuICAgICAgICAgIFByYWVzZW50IGdyYXZpZGEgcG9ydGEgbnVuYyBldCB2ZW5lbmF0aXMuIFxuICAgICAgICAgIEN1cmFiaXR1ciBtYWxlc3VhZGEgYXJjdSBub24gcmlzdXMgYWxpcXVldCwgdml0YWUgcHVsdmluYXIgbWV0dXMgbHVjdHVzLiBOdWxsYSBmZXJtZW50dW0sIFxuICAgICAgICAgIGVsaXQgYSBwZWxsZW50ZXNxdWUgYWxpcXVldCwgbWV0dXMgZmVsaXMgbW9sbGlzIGVuaW0sIGV0IHB1bHZpbmFyIG9yY2kgbWFzc2EgaW4gZXN0LlxuPC9zbS10YWI+XG4gICAgICA8L3NtLXRhYnM+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjZcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20tdGFicz5cbiAgPHNtLXRhYiB0aXRsZT1cIkhlbGxvXCIgY2xhc3M9XCJ1aSB0YWIgYm90dG9tIGF0dGFjaGVkIHNlZ21lbnQgYWN0aXZlXCIgZGF0YS10YWI9XCJmaXJzdFwiPnRleHQuLi48L3NtLXRhYj5cbiAgPHNtLXRhYiB0aXRsZT1cIkFib3V0XCIgY2xhc3M9XCJ1aSB0YWIgYm90dG9tIGF0dGFjaGVkIHNlZ21lbnRcIiBkYXRhLXRhYj1cInNlY29uZFwiPnRleHQuLjwvc20tdGFiPlxuPC9zbS10YWJzPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCB7fVxuIl19