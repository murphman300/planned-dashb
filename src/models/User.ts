export interface UserProperties {
  age: number;
  country: string;
  email: string;
  name: { firstName: string; lastName: string };
}


export class User implements UserProperties {

  age: number;
  country: string;
  email: string;
  name: { firstName: string; lastName: string };

  constructor(data: any) {
    this.age = data['age'];
    this.country = data['country'];
    this.email = data['email'];
    this.name = data['name'];
  }

  static fullName(user: User): string {
    if (!user.name.firstName || !user.name.lastName)
      throw new Error("User object from API has missing name fields");
    return `${user.name.firstName} ${user.name.lastName}`;
  }

  fullName(user: User): string {
    return User.fullName(this);
  }

  static userId(user: User | any): string {
    if (!user) return '';
    return user instanceof User ? user.email ?? '' : (typeof user['email'] === 'string' ? user['email'] : '');
  }

  userId(): string {
    return User.userId(this);
  }
}
