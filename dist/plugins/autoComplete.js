define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var AutoCompleteFactory = /** @class */ (function () {
        function AutoCompleteFactory(url, form, serverInvoker) {
            this.url = url;
            this.form = form;
            this.serverInvoker = serverInvoker;
        }
        AutoCompleteFactory.prototype.enable = function (selector) {
            var _this = this;
            selector.each(function (i, e) { return new AutoComplete($(e), _this.url, _this.form, _this.serverInvoker).enable(); });
        };
        return AutoCompleteFactory;
    }());
    exports.AutoCompleteFactory = AutoCompleteFactory;
    var AutoComplete = /** @class */ (function () {
        function AutoComplete(input, url, form, serverInvoker) {
            this.input = input;
            this.url = url;
            this.form = form;
            this.serverInvoker = serverInvoker;
            this.awaitingAutocompleteResponses = 0;
        }
        AutoComplete.setOptions = function (options) {
            AutoComplete.customOptions = options;
        };
        AutoComplete.prototype.enable = function () {
            var _this = this;
            if (this.input.is("[data-typeahead-enabled=true]"))
                return;
            else
                this.input.attr("data-typeahead-enabled", "true");
            if (this.input.is("[data-change-action]"))
                this.serverInvoker.enableInvokeWithAjax(this.input, "typeahead:select", "data-change-action");
            this.input.wrap("<div class='typeahead__container'></div>");
            this.valueField = $("[name='" + this.input.attr("name").slice(0, -5) + "']");
            var url = this.input.attr("autocomplete-source") || '';
            url = this.url.effectiveUrlProvider(url, this.input);
            var postData = this.toObject(this.form.getPostData(this.input));
            postData[this.input.attr("name")] = "{{query}}";
            var clientSideSearch = this.input.attr("clientside") || false;
            var callback = {
                onClick: function (node, a, item, event) {
                    // The following line is a compile error.
                    // $("[name='" + node.attr("name").slice(0, -5) + "']").val(event.Value);
                },
                onClickAfter: function (node, a, item, event) {
                    _this.itemSelected(item);
                    _this.input.trigger("typeahead:select", { event: event, item: item });
                },
                onPopulateSource: function (node, data) {
                    var text = _this.input.val();
                    var index = data.findIndex(function (x) { return x.Text.trim().toLowerCase() === text.toLowerCase().trim(); });
                    if (index >= 0)
                        _this.valueField.val(data[index].Value);
                    return data;
                }
            };
            if (this.input.data("strict") === true) {
                callback = $.extend(callback, {
                    onHideLayout: function () {
                        if (_this.valueField.val() === "")
                            _this.input.val("");
                    }
                });
            }
            var defaultOptions = {
                minLength: 0,
                dynamic: !clientSideSearch,
                searchOnFocus: true,
                debug: false,
                delay: 500,
                backdrop: false,
                correlativeTemplate: true,
                emptyTemplate: "<div class='tt-suggestion'>Not found</div>"
            };
            var mandatoryOptions = {
                source: {
                    values: {
                        display: "Display",
                        data: [{
                                "Display": "",
                                "Text": "",
                                "Value": ""
                            }],
                        ajax: function (query) {
                            return {
                                type: "POST",
                                url: url,
                                data: postData,
                                xhrFields: { withCredentials: true }
                            };
                        }
                    }
                },
                callback: callback
            };
            this.input
                .wrap("<span class='typehead-chevron-down'></span>")
                .before('<i class="fas fa-chevron-down"></i>')
                .data("selected-text", "")
                .on('input', function () { return _this.clearValue(); })
                .typeahead($.extend(defaultOptions, AutoComplete.customOptions, mandatoryOptions));
        };
        AutoComplete.prototype.clearValue = function () {
            if (this.input.val() === "")
                this.valueField.val("");
            if (this.input.val() !== this.input.data("selected-text"))
                this.valueField.val("");
        };
        AutoComplete.prototype.itemSelected = function (item) {
            if (item) {
                var txt = (item.Text == null || item.Text == undefined || item.Text.trim() == "") ? item.Display : item.Text;
                if (txt)
                    txt = $("<div/>").html(txt).text();
                this.valueField.val(item.Value);
                this.input.data("selected-text", txt);
                this.input.val(txt);
            }
            else {
                console.log("Clearing text, item is undefined");
                this.input.data("selected-text", "");
            }
            // This will invoke RunOnLoad M# method as typeahead does not fire textbox change event when it sets its value from drop down
            this.input.trigger("change");
        };
        // Convert current form array to simple plain object
        AutoComplete.prototype.toObject = function (arr) {
            var rv = {};
            for (var i = 0; i < arr.length; ++i)
                rv[arr[i].name] = arr[i].value;
            return rv;
        };
        return AutoComplete;
    }());
    exports.default = AutoComplete;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b0NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BsdWdpbnMvYXV0b0NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBSUE7UUFFSSw2QkFBb0IsR0FBUSxFQUNoQixJQUFVLEVBQ1YsYUFBNEI7WUFGcEIsUUFBRyxHQUFILEdBQUcsQ0FBSztZQUNoQixTQUFJLEdBQUosSUFBSSxDQUFNO1lBQ1Ysa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBSSxDQUFDO1FBRXRDLG9DQUFNLEdBQWIsVUFBYyxRQUFnQjtZQUE5QixpQkFFQztZQURHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQXhFLENBQXdFLENBQUMsQ0FBQztRQUN0RyxDQUFDO1FBQ0wsMEJBQUM7SUFBRCxDQUFDLEFBVEQsSUFTQztJQVRZLGtEQUFtQjtJQVdoQztRQVVJLHNCQUFtQixLQUFhLEVBQ3BCLEdBQVEsRUFDUixJQUFVLEVBQ1YsYUFBNEI7WUFIckIsVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFLO1lBQ1IsU0FBSSxHQUFKLElBQUksQ0FBTTtZQUNWLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBVmhDLGtDQUE2QixHQUFXLENBQUMsQ0FBQztRQVVOLENBQUM7UUFQL0IsdUJBQVUsR0FBeEIsVUFBeUIsT0FBdUM7WUFDNUQsWUFBWSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDekMsQ0FBQztRQU9NLDZCQUFNLEdBQWI7WUFBQSxpQkF3RkM7WUF0RkcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztn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