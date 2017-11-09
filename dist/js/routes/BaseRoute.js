"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constructor
 *
 * @class BaseRoute
 */
var BaseRoute = /** @class */ (function () {
    /**
     * Constructor
     *
     * @class BaseRoute
     * @constructor
     */
    function BaseRoute() {
        this.title = "Doba's MusicQ proj";
        this.scripts = [];
    }
    /**
     * Add a JS external file to the request.
     *
     * @class BaseRoute
     * @method addScript
     * @param src {string} The scr to the external JS file.
     * @return {BaseRoute} Self for chaining
     */
    BaseRoute.prototype.addScript = function (src) {
        this.scripts.push(src);
        return this;
    };
    /**
     * Render a page.
     *
     * @class BaseRoute
     * @method render
     * @param req {Request} The request object.
     * @param res {Response} The response object.
     * @param view {String} The view to render.
     * @param options {Object} Additional options to append to the views local scope.
     * @return void
     */
    BaseRoute.prototype.render = function (req, res, view, options) {
        //add constants
        res.locals.BASE_URL = "/";
        //add scripts
        res.locals.scripts = this.scripts;
        //add title
        res.locals.title = this.title;
        //render view
        res.render(view, options);
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cy9yb3V0ZXMvQmFzZVJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7R0FJRztBQUNIO0lBTUk7Ozs7O09BS0c7SUFDSDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCw2QkFBUyxHQUFULFVBQVUsR0FBVztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsMEJBQU0sR0FBTixVQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBWSxFQUFFLE9BQWdCO1FBQzlELGVBQWU7UUFDZixHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFFMUIsYUFBYTtRQUNiLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbEMsV0FBVztRQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFOUIsYUFBYTtRQUNiLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTCxnQkFBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFksOEJBQVMiLCJmaWxlIjoicm91dGVzL0Jhc2VSb3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RvclxyXG4gKiBcclxuICogQGNsYXNzIEJhc2VSb3V0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhc2VSb3V0ZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBzY3JpcHRzOiBzdHJpbmdbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKiBcclxuICAgICAqIEBjbGFzcyBCYXNlUm91dGVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJEb2JhJ3MgTXVzaWNRIHByb2pcIjtcclxuICAgICAgICB0aGlzLnNjcmlwdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIEpTIGV4dGVybmFsIGZpbGUgdG8gdGhlIHJlcXVlc3QuXHJcbiAgICAgKiBcclxuICAgICAqIEBjbGFzcyBCYXNlUm91dGVcclxuICAgICAqIEBtZXRob2QgYWRkU2NyaXB0XHJcbiAgICAgKiBAcGFyYW0gc3JjIHtzdHJpbmd9IFRoZSBzY3IgdG8gdGhlIGV4dGVybmFsIEpTIGZpbGUuXHJcbiAgICAgKiBAcmV0dXJuIHtCYXNlUm91dGV9IFNlbGYgZm9yIGNoYWluaW5nXHJcbiAgICAgKi9cclxuICAgIGFkZFNjcmlwdChzcmM6IHN0cmluZyk6IEJhc2VSb3V0ZSB7XHJcbiAgICAgICAgdGhpcy5zY3JpcHRzLnB1c2goc3JjKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciBhIHBhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQGNsYXNzIEJhc2VSb3V0ZVxyXG4gICAgICogQG1ldGhvZCByZW5kZXJcclxuICAgICAqIEBwYXJhbSByZXEge1JlcXVlc3R9IFRoZSByZXF1ZXN0IG9iamVjdC5cclxuICAgICAqIEBwYXJhbSByZXMge1Jlc3BvbnNlfSBUaGUgcmVzcG9uc2Ugb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHZpZXcge1N0cmluZ30gVGhlIHZpZXcgdG8gcmVuZGVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gQWRkaXRpb25hbCBvcHRpb25zIHRvIGFwcGVuZCB0byB0aGUgdmlld3MgbG9jYWwgc2NvcGUuXHJcbiAgICAgKiBAcmV0dXJuIHZvaWRcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgdmlldzogc3RyaW5nLCBvcHRpb25zPzogT2JqZWN0KSB7XHJcbiAgICAgICAgLy9hZGQgY29uc3RhbnRzXHJcbiAgICAgICAgcmVzLmxvY2Fscy5CQVNFX1VSTCA9IFwiL1wiO1xyXG5cclxuICAgICAgICAvL2FkZCBzY3JpcHRzXHJcbiAgICAgICAgcmVzLmxvY2Fscy5zY3JpcHRzID0gdGhpcy5zY3JpcHRzO1xyXG5cclxuICAgICAgICAvL2FkZCB0aXRsZVxyXG4gICAgICAgIHJlcy5sb2NhbHMudGl0bGUgPSB0aGlzLnRpdGxlO1xyXG5cclxuICAgICAgICAvL3JlbmRlciB2aWV3XHJcbiAgICAgICAgcmVzLnJlbmRlcih2aWV3LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii4uIn0=
