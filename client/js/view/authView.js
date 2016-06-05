import { Storage } from '../helpers/storage'
import { InputHelper } from '../helpers/inputs'
import { AppRouter } from '../router/router'
import { UserModel, Users} from '../model/userModel'
import { MenuView } from '../view/menuView'
import { ProjectsView } from '../view/project/projectsView'

const { View } = Backbone;
const AuthTemplate = require('../../templates/auth.hbs');
const App = {};

var auth = function (userData) {
    var user = userData || JSON.parse(localStorage.getItem('user'));

    // переходим на главную страницу после авторизации
    App.Router = new AppRouter(user);
    App.ProjectsView = new ProjectsView();

    App.Menu = new MenuView(user);
};

class AuthView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = AuthTemplate;
        this.events = {
            'click .js_login_submit': 'login',
            'click .js_signup_submit': 'signup',
            'keypress .js_login_input': 'loginInput',
            'keypress .js_signup_input': 'signupInput'
        };
        View.apply(this);
    }

    render() {
        var user = JSON.parse(localStorage.getItem('user'));
        if (Storage.getCookie('version') && Storage.getCookie('token') && Storage.getCookie('company_id') && user){
            auth(user);
        } else {
            $(this.el).html(this.template());
        }
    }

    logout () {
        Storage.removeCookie('version');
        Storage.removeCookie('token');
        Storage.removeCookie('company_id');
        localStorage.removeItem('user');
    }

    loginInput(e) {
        if (e.keyCode == 13) this.login();
    }

    signupInput(e) {
        if (e.keyCode == 13) this.signup();
    }

    login() {
        var notify = $('.js_login_notify');
        var username = this.$el.find('.js_login_username');
        var password = this.$el.find('.js_login_password');
        var usernameValue = InputHelper.initInput(username);
        var passwordValue = InputHelper.initInput(password);

        notify.html('');
        if (usernameValue && passwordValue) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/login/',
                dataType: 'JSON',
                data: JSON.stringify({
                    username: usernameValue,
                    password: passwordValue
                }),
                contentType: 'application/json',
                success: function (response) {
                    var response = JSON.parse(response);
                    switch (response.status) {
                        case 0: // без ошибок
                            var userData = _.omit(response.user, 'token');
                            Storage.setCookie('version', response.version, 24*365*2);
                            Storage.setCookie('token', response.user._id, 24*365*2);
                            Storage.setCookie('company_id', response.user.company_id, 24*365*2);
                            localStorage.setItem('user', JSON.stringify(userData));
                            auth(userData);
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
                            $(password)[0].focus();
                            $(password).addClass('input_state_error');
                            console.log(2, response.message);
                            break;
                        default:
                            notify.html('Ошибка системы');
                            console.log('неизвестный код', response);
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

        //var nameValue = InputHelper.initInput(this.$el.find('.js_signup_name'));
        //var surnameValue = InputHelper.initInput(this.$el.find('.js_signup_surname'));
        //var usernameValue = InputHelper.initInput(this.$el.find('.js_signup_username'));
        //var passwordValue = InputHelper.initInput(this.$el.find('.js_signup_password'));
        //var companyValue = InputHelper.initInput(this.$el.find('.js_signup_company'));
        //var companyTitleValue = InputHelper.initInput(this.$el.find('.js_signup_company_title'));

        notify.html('Ошибка. Попробуйте позже');
    }
}

export { AuthView }