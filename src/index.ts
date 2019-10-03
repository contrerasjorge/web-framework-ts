import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './models/User';

const user = new Collection(
  'http://localhost:3000/users',
  (json: userProps) => {
    return User.buildUser(json);
  }
);

user.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
