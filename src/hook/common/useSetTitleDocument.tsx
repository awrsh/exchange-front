import { useEffect } from 'react'

const useSetTitleDocument = ({title}:{title:string}) => {
  useEffect(()=>{
    document.title = title;
  },[])
}

export default useSetTitleDocument