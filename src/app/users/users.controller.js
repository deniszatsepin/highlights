import {User} from '../../data/models';
import { makeSalt, hashPassword } from '../../utils/authenticate';

class UsersController {

	/**
	 * Create new user with unic email, username and password
	 * @param params
   */
	async create(params) {
		if (params && params.password) {
			const salt = await makeSalt(10);
			const hashedPassword = await hashPassword(params.password, salt);
			console.log(salt, hashedPassword);
			return User.create({
				username: params.username,
				email: params.email,
				shadow_password: hashedPassword,
				salt: salt
			});
		}
	}

	update(id) {

	}

	find(params) {

	}

	get(id) {

	}

	remove(id) {

	}

	validatEmail() {

	}

	/**
	 *	Reset user password using token from email
	 */
	resetPassword(token) {

	}

	/**
	*	Request reset of the user password
	*/
	requestReset(email) {

	}
}

export default new UsersController();
