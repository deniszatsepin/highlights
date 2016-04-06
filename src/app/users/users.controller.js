import validate from 'validate.js';
import {User} from '../../data/models';
import UserValidation from './users.validator';
import { makeSalt, hashPassword } from '../../utils/authenticate';

class UsersController {

	/**
	 * Create new user with unic email, username and password
	 * @param params
   */
	async create(params) {
		const error = validate(params, UserValidation);
		if (!error) {
			const salt = await makeSalt(10);
			const hashedPassword = await hashPassword(params.password, salt);
			console.log(salt, hashedPassword);
			const user = await User.create({
				username: params.username,
				email: params.email,
				shadow_password: hashedPassword,
				salt: salt
			});
			
			return {
				data: user
			};
		} else {
			console.log(error);
			return {
				errors: Object.keys(error).map((key) => {
					return {
						key: key,
						messages: error[key]
					}
				})
			};
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
