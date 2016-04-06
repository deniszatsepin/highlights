/**
 * Created by denis.zatsepin on 06/04/16.
 */

export default {
  username: {
    presence: true,
    length: {
      minimum: 5,
      maximum: 256
    } 
  },
  email: {
    presence: true,
    email: true,
    length: {
      maximum: 256
    }
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      maximum: 256
    }
  }
}
