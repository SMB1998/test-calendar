import { usersApi } from "./usersApi"

export const getUsersList = async() => {
    const response = await usersApi.get('/users?limit=25')
    return response.data
}

