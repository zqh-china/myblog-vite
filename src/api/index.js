import axios from 'axios';
const baseURL = 'http://localhost:3000';
// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwidXNlcmlkIjoxLCJpYXQiOjE3MzM2MzA5MzgsImV4cCI6NDMyNTYzMDkzOH0.x7oNAVuAdpk3QO10Uu48GnAWJhZPEeNa8tZF2Zwt6F8',
// }
const headers = {
    'Content-Type': 'application/json',
}
export function getAllTags() {
    return axios.get(`${baseURL}/tag`, { headers });
}

export function getAllCategories() {
    return axios.get(`${baseURL}/category`, { headers });
}

export function getAllArticles() {
    return axios.get(`${baseURL}/article`, { headers });
}

export function getArticle(id) {
    return axios.get(`${baseURL}/article/${id}`, { headers });
}

export function getArticleParagraphs(id) {
    return axios.get(`${baseURL}/paragraph/${id}`, { headers });
}

export function getAuthor(id) {
    return axios.get(`${baseURL}/user/${id}`, { headers });
}

export function getChangelog() {
    return axios.get(`${baseURL}/changelog`, { headers });
}