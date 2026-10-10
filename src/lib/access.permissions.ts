// type Role = keyof typeof ROLES;

// type Permission = typeof ROLES[Role][number];

// declare global {
//   interface customJWTSessionClaims {
//     roles: Role[];
//   }
// }

// const ROLES  = {
//     admin : [
//         "view:comments",
//         "create:comments",
//         "update:comments",
//         "delete:comments",
//     ],
//     moderator : [
//         "view:comments",
//         "create:comments",
//         "delete:comments",
//     ],
//     user : [
//         "view:comments",
//         "create:comments",
//         "update:comments",
//         "delete:comments",
//     ]
// } as const

// export function hasPermission(user : { id : string, roles: Role[] }, permission: Permission): boolean {
//     return user.roles.some(role => (ROLES[role] as readonly Permission[]).includes(permission));
// }