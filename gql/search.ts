interface IHandleSearch {
    name: string;
    link: string;
}


export const useHandleSearch = (search: String) => {
    const data = useFetch(`https://cms.digitalfactory.co.ao/api/apps/site-bcs/search?query=${search}`).catch((err)=> console.log(err))
    console.log(data);
    
}


