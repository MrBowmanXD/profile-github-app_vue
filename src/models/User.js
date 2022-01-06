export class User {
  constructor({ avatar_url, name, blog, bio, location, public_repos } = {}) {
    this.avatarUrl = avatar_url;
    this.name = name;
    this.blog = blog;
    this.bio = bio;
    this.location = location;
    this.publicRepos = public_repos;
  }
}
