class Input {
    constructor() {}
    initInput (input) {
        var inputValue = input.val();
        var validateValue = (inputValue.length > 1) ? inputValue : false;
        input.removeClass('input_state_error');
        if (!validateValue) {
            input.addClass('input_state_error');
        }
        return validateValue
    }
}
var InputHelper = new Input();
export { InputHelper }

