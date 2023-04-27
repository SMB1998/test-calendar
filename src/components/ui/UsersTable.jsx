
import { getUsersList } from '@/apis/users';
import { useEffect, useState } from 'react'


const itemsPerPage = 10;
export const UsersTable = () => {
    const [usersList, setUsersList] = useState([])
    const [pageCount, setPageCount] = useState(1);
  
    const fetchUsersList = async() => {
      const usersData = await getUsersList()
      setUsersList(usersData.users)
    }
    
    useEffect(() => {
      fetchUsersList()
    }, [])
  
    const changePage = pageNum => {
      setPageCount(pageNum);
    }
  
    const startIndex = (pageCount - 1) * itemsPerPage;
    const endIndex = pageCount * itemsPerPage;
  return (
    <div>
            <h2 className={`mb-3 text-2xl font-semibold`}>
          Lista de usuarios
        </h2>

        
    <input type="text" className="m-2 border rounded focus:bg-slate-200" placeholder="Nombre" />
    <input type="text" className="m-2 border rounded focus:bg-slate-200" placeholder="Edad" />
    <input type="text" className="m-2 border rounded focus:bg-slate-200" placeholder="Email" />
                

      <table className="table-auto">
        <thead className='bg-gray-800'>
          <tr>
            <th className="px-4 py-2 text-white">Nombre</th>
            <th className="px-4 py-2 text-white">Apellido</th>
            <th className="px-4 py-2 text-white">Número de teléfono</th>
            <th className="px-4 py-2 text-white">Email</th>
            <th className="px-4 py-2 text-white">Edad</th>
            <th className="px-4 py-2 text-white">Género</th>
          </tr>
        </thead>
        <tbody>
          {usersList.slice(startIndex, endIndex).map(user => (
            <tr>
              <td className="px-4 py-2 border" key={user.firstName + user.lastName + "1"}>{user.firstName}</td>
              <td className="px-4 py-2 border" key={user.firstName + user.lastName+ "2"}>{user.lastName}</td>
              <td className="px-4 py-2 border" key={user.firstName + user.lastName+ "3"}>{user.maidenName}</td>
              <td className="px-4 py-2 border" key={user.firstName + user.lastName+ "4"}>{user.email}</td>
              <td className="px-4 py-2 border" key={user.firstName + user.lastName+ "5"}>{user.age}</td>
              <td className="px-4 py-2 border" key={user.firstName + user.lastName+ "6"}>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        {pageCount > 1 && (
          <button className="p-1 m-2 text-white bg-gray-500 border border-gray-600 rounded hover:bg-gray-400" onClick={() => changePage(pageCount-1)}>{"Atrás"}</button>
        )}
        {endIndex < usersList.length && (  <button  className="p-1 m-2 text-white bg-gray-500 border border-gray-600 rounded hover:bg-gray-400" onClick={() => changePage(pageCount+1)}>{"Siguiente"}</button>
        )}
        <div className='p-1 m-2'>
       
        {'Pagina: '+ pageCount}
        </div>
        </div>
    </div>
  )
}
