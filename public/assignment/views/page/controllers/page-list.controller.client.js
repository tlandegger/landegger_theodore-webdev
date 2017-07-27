(function() {
    angular
        .module("WebAppMaker")
        .controller("pageListController", pageListController)

    function pageListController($routeParams, pageService) {
        var model = this;

        model.userId = $routeParams.uid;
        model.websiteId = $routeParams.wid;

        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.websiteId);
        }
        init();


    }
})();