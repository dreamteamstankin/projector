import { UserModel, Users} from '../model/userModel'

const { View } = Backbone;
const AuthTemplate = require('../../templates/auth.hbs');

function _initInput(input) {
    var inputValue = input.val();
    var validateValue = (inputValue.length > 1) ? inputValue : false;
    input.removeClass('input_state_error');
    if (!validateValue) {
        input.addClass('input_state_error');
    }
    return validateValue
}


class AuthView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = AuthTemplate;
        this.render();
        this.events = {
            'click .js_login_submit': 'login',
            'click .js_signup_submit': 'signup',
            'keypress .js_login_input':'loginInput',
            'keypress .js_signup_input': 'signupInput'
        };
        View.apply(this);
    }

    render() {
        this.el.html(this.template());
    }

    loginInput(e){
        if (e.keyCode == 13) this.login();
    }

    signupInput(e){
        if (e.keyCode == 13) this.signup();
    }

    login() {
        var notify = $('.js_login_notify');
        var username = this.$el.find('.js_login_username');
        var password = this.$el.find('.js_login_password');
        var usernameValue = _initInput(username);
        var passwordValue = _initInput(password);

        notify.html('');

        if (usernameValue && passwordValue) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/login',
                data: JSON.stringify({
                    username: usernameValue,
                    password: passwordValue
                }),
                contentType: 'application/json',
                success: function(response){
                    console.log(response);
                    switch(response.status){
                        case 0:
                            Users.add(new UserModel(response.user));
                            break;
                        case 1:
                            notify.html('Ошибка сервера');
                            console.log(1, response.message);
                            break;
                        case 2:
                            notify.html('Неправильный логин');
                            $(username)[0].focus();
                            $(username).addClass('input_state_error');
                            console.log(2, response.message);
                            break;
                        case 3:
                            notify.html('Неправильный пароль');
                            $(username)[0].focus();
                            $(password).addClass('input_state_error');
                            console.log(2, response.message);
                            break;
                        default:
                            notify.html('Ошибка системы');
                            console.log('неизвестный код');
                            break;
                    }
                }
            });
        }
    }

    signup() {
        var notify = $('.js_signup_notify');

        var name = this.$el.find('.js_signup_name');
        var surname = this.$el.find('.js_signup_surname');
        var username = this.$el.find('.js_signup_username');
        var password = this.$el.find('.js_signup_password');
        var company = this.$el.find('.js_signup_company');
        var companyTitle = this.$el.find('.js_signup_company_title');

        //var nameValue = _initInput(this.$el.find('.js_signup_name'));
        //var surnameValue = _initInput(this.$el.find('.js_signup_surname'));
        //var usernameValue = _initInput(this.$el.find('.js_signup_username'));
        //var passwordValue = _initInput(this.$el.find('.js_signup_password'));
        //var companyValue = _initInput(this.$el.find('.js_signup_company'));
        //var companyTitleValue = _initInput(this.$el.find('.js_signup_company_title'));

        notify.html('Ошибка. Попробуйте позже');
    }
}

export { AuthView }