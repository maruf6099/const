export const apiUrl='Http://localhost:8000/api/';
export const fileUrl='Http://localhost:8000/';

export const token=()=>{
    const userInfo=localStorage.getItem('userInfo');
    const data=JSON.parse(userInfo);
    return data.token;
}