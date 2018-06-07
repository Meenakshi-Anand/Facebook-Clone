
 export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  })
);

export const login = (user) => (
 $.ajax({
   method: 'POST',
   url: 'api/session',
   data: {user}
 })
);

export const demologin = () => (
 $.ajax({
   method: 'POST',
   url: 'api/session',
   data:{user:{email:"abhi@codeanand.com",password:"password"}},
 })
);

export const logout = () => (
 $.ajax({
   method: 'DELETE',
   url: 'api/session',
 })
);
