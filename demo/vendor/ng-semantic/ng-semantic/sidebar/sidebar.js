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
require("semantic/sidebar.min");
jQuery.fn.fixSidebar = function () {
    var $allModules = jQuery(this);
    $allModules
        .each(function () {
        var selector = {
            pusher: '.pusher'
        }, module = jQuery(this), context = jQuery('body');
        if (module.nextAll(selector.pusher).length === 0) {
            module.detach().prependTo(context);
        }
    });
    return this;
};
var SemanticSidebar = (function () {
    function SemanticSidebar() {
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticSidebar.prototype, "class", void 0);
    SemanticSidebar = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-sidebar"
        }),
        core_1.View({
            template: "<div class=\"ui sidebar {{class}}\"><ng-content></ng-content></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticSidebar);
    return SemanticSidebar;
})();
exports.SemanticSidebar = SemanticSidebar;
var SMSidebarDirective = (function () {
    function SMSidebarDirective() {
    }
    SMSidebarDirective.prototype.toggleSidebar = function () {
        jQuery(".ui.sidebar." + this.data)
            .fixSidebar()
            .sidebar({
            error: {
                movedSidebar: "Sidebar moving."
            },
            transition: "overlay",
            verbose: false
        })
            .sidebar("toggle");
    };
    SMSidebarDirective = __decorate([
        core_1.Directive({
            host: {
                "(click)": "toggleSidebar()"
            },
            inputs: [
                "data: sm-dir-sidebar"
            ],
            selector: "[sm-dir-sidebar]"
        }), 
        __metadata('design:paramtypes', [])
    ], SMSidebarDirective);
    return SMSidebarDirective;
})();
exports.SMSidebarDirective = SMSidebarDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZGViYXIudHMiXSwibmFtZXMiOlsiU2VtYW50aWNTaWRlYmFyIiwiU2VtYW50aWNTaWRlYmFyLmNvbnN0cnVjdG9yIiwiU01TaWRlYmFyRGlyZWN0aXZlIiwiU01TaWRlYmFyRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiU01TaWRlYmFyRGlyZWN0aXZlLnRvZ2dsZVNpZGViYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLHFCQUEyRSxlQUFlLENBQUMsQ0FBQTtBQUMzRixRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFFOUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUc7SUFDbkIsSUFBSSxXQUFXLEdBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5DLFdBQVc7U0FDTixJQUFJLENBQUM7UUFDRixJQUNJLFFBQVEsR0FBVTtZQUNkLE1BQU0sRUFBRSxTQUFTO1NBQ3BCLEVBQ0QsTUFBTSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDN0IsT0FBTyxHQUFVLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBR0Y7SUFBQUE7SUFVQUMsQ0FBQ0E7SUFEQ0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLGtDQUFLQSxVQUFTQTtJQVRoQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSxxRUFBbUVBO1NBQzlFQSxDQUFDQTs7d0JBR0RBO0lBQURBLHNCQUFDQTtBQUFEQSxDQUFDQSxBQVZELElBVUM7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQTtBQUVEO0lBQUFFO0lBMkJBQyxDQUFDQTtJQWRHRCwwQ0FBYUEsR0FBYkE7UUFFSUUsTUFBTUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7YUFDN0JBLFVBQVVBLEVBQUVBO2FBQ1pBLE9BQU9BLENBQUNBO1lBQ0xBLEtBQUtBLEVBQUVBO2dCQUNIQSxZQUFZQSxFQUFFQSxpQkFBaUJBO2FBQ2xDQTtZQUNEQSxVQUFVQSxFQUFFQSxTQUFTQTtZQUNyQkEsT0FBT0EsRUFBRUEsS0FBS0E7U0FDakJBLENBQUNBO2FBQ0RBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQzNCQSxDQUFDQTtJQXpCTEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLElBQUlBLEVBQUVBO2dCQUNGQSxTQUFTQSxFQUFFQSxpQkFBaUJBO2FBQy9CQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsc0JBQXNCQTthQUN6QkE7WUFDREEsUUFBUUEsRUFBRUEsa0JBQWtCQTtTQUMvQkEsQ0FBQ0E7OzJCQW1CREE7SUFBREEseUJBQUNBO0FBQURBLENBQUNBLEFBM0JELElBMkJDO0FBbEJZLDBCQUFrQixxQkFrQjlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRGlyZWN0aXZlIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCBcInNlbWFudGljL3NpZGViYXIubWluXCI7XG5cbmpRdWVyeS5mbi5maXhTaWRlYmFyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyICRhbGxNb2R1bGVzICAgICA9IGpRdWVyeSh0aGlzKTtcblxuICAgICRhbGxNb2R1bGVzXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgICAgICAgID0ge1xuICAgICAgICAgICAgICAgICAgICBwdXNoZXI6ICcucHVzaGVyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgPSBqUXVlcnkodGhpcyksXG4gICAgICAgICAgICAgICAgY29udGV4dCAgICAgICAgPSBqUXVlcnkoJ2JvZHknKTtcblxuICAgICAgICAgICAgaWYobW9kdWxlLm5leHRBbGwoc2VsZWN0b3IucHVzaGVyKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuZGV0YWNoKCkucHJlcGVuZFRvKGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiBcInNtLXNpZGViYXJcIlxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1aSBzaWRlYmFyIHt7Y2xhc3N9fVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljU2lkZWJhciB7XG4gIEBJbnB1dChcImNsYXNzXCIpIGNsYXNzOiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY2xpY2spXCI6IFwidG9nZ2xlU2lkZWJhcigpXCJcbiAgICB9LFxuICAgIGlucHV0czogW1xuICAgICAgICBcImRhdGE6IHNtLWRpci1zaWRlYmFyXCJcbiAgICBdLFxuICAgIHNlbGVjdG9yOiBcIltzbS1kaXItc2lkZWJhcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTTVNpZGViYXJEaXJlY3RpdmUge1xuXG4gICAgcHVibGljIGRhdGE6IGFueTtcblxuICAgIHRvZ2dsZVNpZGViYXIoKSB7XG5cbiAgICAgICAgalF1ZXJ5KFwiLnVpLnNpZGViYXIuXCIgKyB0aGlzLmRhdGEpXG4gICAgICAgICAgICAuZml4U2lkZWJhcigpXG4gICAgICAgICAgICAuc2lkZWJhcih7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRTaWRlYmFyOiBcIlNpZGViYXIgbW92aW5nLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm92ZXJsYXlcIixcbiAgICAgICAgICAgICAgICB2ZXJib3NlOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zaWRlYmFyKFwidG9nZ2xlXCIpO1xuICAgIH1cblxufVxuIl19