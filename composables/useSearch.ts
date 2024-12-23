import pt from "~/lang/pt";
import en from "~/lang/en";
import pages from "~/utils/pages"
import { type IResultSearch } from "~/utils/interfaces/ISearch";
const {app} = useRuntimeConfig()
type Route = {
  label: string;
  home?: string;
  link: string;
  subitems?: Route[];
};

type RouteLinkResult = {
  link: string;
  path: Array<String>;
  targetKey?: string | null;
};

const linksFinds: Route[] = []
export const useSearch =  async(search: string): Promise<IResultSearch[]> => {
  const {$i18n} = useNuxtApp()
  let { data } = await useFetch(`${app.api}/search?query=${search}`).catch((err)=> console.log(err))

  data.value = data.value.filter((item)=> item.type=='Content')
  const resultToTranslate = data.value.map((item:Route)=> {
    const findKey = findKeyPath($i18n.locale.value === 'pt' ? pt:en, item.label)
    
    findRouteLinkByLabel(pages, findKey || '')
    const findRoute = removeDuplicates(linksFinds, 'link').find((item: RouteLinkResult)=> item.targetKey === findKey)
    
    return {name: item.label, link:  findRoute?.link ||'', path: findRoute?.path || [] }
  }).filter((item: RouteLinkResult)=> {
    return item?.link
  })
  
  return removeDuplicates(resultToTranslate, 'link')
}

const findKeyPath = (obj: any, targetKey: string, currentPath: string[] = []): string | null => {
  for (const key in obj) {
      if (typeof obj[key] === 'object') {
          const result = findKeyPath(obj[key], targetKey, [...currentPath, key]);
          
          if (result) {
              return result;
          }
      } else if (obj[key] === targetKey) {
        currentPath.pop()
        return currentPath.join('.');
      }
  }
  return null;
};

const findRouteLinkByLabel = (routes: Route[], searchLabel: string, path: string[] = []): RouteLinkResult | null => {
  for(const route of routes){
    if (route.label === searchLabel || route.home === searchLabel) {
      path.push(route.label)
      return { link: route.link, path: path, targetKey: searchLabel }; 
    }
    if (route.subitems && route.subitems.length > 0) {
      const subRoute = findRouteLinkByLabel(route.subitems, searchLabel, [...path, route.label]);
      if (subRoute) {
        
        linksFinds.push(subRoute as unknown as Route)
        return subRoute
      };
    }
  }
  return null
}


const removeDuplicates =(array: Array<Route>,propertyName: string) => {
  
  const uniqueObjects = array.reduce((uniqueArray, currentObject) => {
    const existingObject = uniqueArray.find(obj => obj[propertyName] === currentObject[propertyName]);
    if (!existingObject) {
      uniqueArray.push(currentObject);
    }
    return uniqueArray;
  }, []);
  return uniqueObjects;
}