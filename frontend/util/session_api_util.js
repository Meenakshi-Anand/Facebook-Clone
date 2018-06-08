
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

export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
  });
};

export const updateUser = (formdata) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/_`,
    data: formdata,
    processData: false,
    contentType: false,
  });
};
