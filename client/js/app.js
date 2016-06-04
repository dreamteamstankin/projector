import { AuthView } from './view/authView'
import { UserModel, Users } from './model/userModel'

new AuthView().render();
Backbone.history.start();