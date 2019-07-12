define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var Services = {
        Alert: "alert",
        CrossDomainEvent: "crossDomainEvent",
        Form: "form",
        Grid: "grid",
        Grouping: "grouping",
        GroupingFactory: "groupingFactory",
        LiteEvent: "liteEvent",
        MasterDetail: "masterDetail",
        Modal: "modal",
        ModalHelper: "modalHelper",
        Paging: "paging",
        Sorting: "sorting",
        Url: "url",
        Validate: "validate",
        Waiting: "waiting",
        AjaxRedirect: "ajaxRedirect",
        ResponseProcessor: "responseProcessor",
        ServerInvoker: "serverInvoker",
        StandardAction: "standardAction",
        AutoComplete: "autoComplete",
        AutoCompleteFactory: "autoCompleteFactory",
        CkEditorFileManager: "ckEditorFileManager",
        CKEditorFileManagerFactory: "ckEditorFileManagerFactory",
        ConfirmBox: "confirmBox",
        CustomCheckbox: "customCheckbox",
        CustomRadio: "customRadio",
        DateDropdown: "dateDropdown",
        DatePicker: "datePicker",
        DatePickerFactory: "datePickerFactory",
        DateTimePicker: "dateTimePicker",
        DateTimePickerFactory: "dateTimePickerFactory",
        DateTimePickerBase: "dateTimePickerBase",
        FileUpload: "fileUpload",
        FileUploadFactory: "fileUploadFactory",
        GlobalSearch: "globalSearch",
        HtmlEditor: "htmlEditor",
        HtmlEditorFactory: "htmlEditorFactory",
        InstantSearch: "instantSearch",
        MultiSelect: "multiSelect",
        NumericUpDown: "numericUpDown",
        PasswordStength: "passwordStength",
        SanityAdapter: "sanityAdapter",
        Select: "select",
        Slider: "slider",
        SliderFactory: "sliderFactory",
        SubMenu: "subMenu",
        TimeControl: "timeControl",
        TimeControlFactory: "timeControlFactory",
        UserHelp: "userHelp",
    };
    exports.default = Services;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGkvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFBQSxJQUFNLFFBQVEsR0FBRztRQUNiLEtBQUssRUFBRSxPQUFPO1FBQ2QsZ0JBQWdCLEVBQUUsa0JBQWtCO1FBQ3BDLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsVUFBVTtRQUNwQixlQUFlLEVBQUUsaUJBQWlCO1FBQ2xDLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFlBQVksRUFBRSxjQUFjO1FBQzVCLEtBQUssRUFBRSxPQUFPO1FBQ2QsV0FBVyxFQUFFLGFBQWE7UUFDMUIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsR0FBRyxFQUFFLEtBQUs7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsU0FBUztRQUNsQixZQUFZLEVBQUUsY0FBYztRQUM1QixpQkFBaUIsRUFBRSxtQkFBbUI7UUFDdEMsYUFBYSxFQUFFLGVBQWU7UUFDOUIsY0FBYyxFQUFFLGdCQUFnQjtRQUNoQyxZQUFZLEVBQUUsY0FBYztRQUM1QixtQkFBbUIsRUFBRSxxQkFBcUI7UUFDMUMsbUJBQW1CLEVBQUUscUJBQXFCO1FBQzFDLDBCQUEwQixFQUFFLDRCQUE0QjtRQUN4RCxVQUFVLEVBQUUsWUFBWTtRQUN4QixjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFlBQVksRUFBRSxjQUFjO1FBQzVCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLGlCQUFpQixFQUFFLG1CQUFtQjtRQUN0QyxjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLHFCQUFxQixFQUFFLHVCQUF1QjtRQUM5QyxrQkFBa0IsRUFBRSxvQkFBb0I7UUFDeEMsVUFBVSxFQUFFLFlBQVk7UUFDeEIsaUJBQWlCLEVBQUUsbUJBQW1CO1FBQ3RDLFlBQVksRUFBRSxjQUFjO1FBQzVCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLGlCQUFpQixFQUFFLG1CQUFtQjtRQUN0QyxhQUFhLEVBQUUsZUFBZTtRQUM5QixXQUFXLEVBQUUsYUFBYTtRQUMxQixhQUFhLEVBQUUsZUFBZTtRQUM5QixlQUFlLEVBQUUsaUJBQWlCO1FBQ2xDLGFBQWEsRUFBRSxlQUFlO1FBQzlCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLGFBQWEsRUFBRSxlQUFlO1FBQzlCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLGtCQUFrQixFQUFFLG9CQUFvQjtRQUN4QyxRQUFRLEVBQUUsVUFBVTtLQUN2QixDQUFDO0lBRUYsa0JBQWUsUUFBUSxDQUFDIn0=