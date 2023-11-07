import { publish } from 'gh-pages';

publish(
  'build',
  {
    branch: 'crud-demo',
    repo: 'https://github.com/el3um4s/memento-sveltekit-and-github-pages.git',
    user: {
      name: 'Steven A.J.',
      email: 'johnsonstheory@gmail.com'
    },
    dotfiles: true
  },
  () => console.log('Deploy Complete!')
);