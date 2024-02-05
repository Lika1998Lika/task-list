import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export const USERS_SERVICE = {
  users: '/users',
};

export const getUsers = async (filter) => {
  let params = {}
  if(filter === 'increased') {
    params.increased = 'approved'
  }
  if(filter === 'all') {
    params = {};
  }
  if(filter === 'salary') {
    params.salary_gte = 1000 //http://localhost:5000/users?salary_gte=1000
  }
  const response = await api.get(USERS_SERVICE.users, {params});
  return response.data;
}

export const addUser = async (user) => {
  const response = await api.post(USERS_SERVICE.users, user)
  return response.data;
}

export const deleteUser = async (id) => {
  const response = await api.delete(`${USERS_SERVICE.users}/${id}`)
  return response.data;
}

export const updateUser = async (id, userData) => {
  const response = await api.put(`${USERS_SERVICE.users}/${id}`, userData)
  return response.data;
} 
