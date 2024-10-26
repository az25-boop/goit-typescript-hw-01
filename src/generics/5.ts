// Завдання 5

// Виконуйте це завдання у файлі src/generics/5.ts.

// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.

// export enum UserRole {
// admin = 'admin',
// editor = 'editor',
// guest = 'guest',
// }

// // Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
// admin: 'Admin User',
// editor: 'Editor User',
// guest: 'Guest User',
// };

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRolesStatuses = Record<UserRole, string>;

const RoleDescription: UserRolesStatuses = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
console.log(RoleDescription);
