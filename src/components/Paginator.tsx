import React, { ReactNode } from 'react';

interface PaginatorProps {
  lastPage:number
  page:number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Paginator({ lastPage, page, setPage }: PaginatorProps) {
  const pageSet = new Set<number>();
  if(lastPage !== 0) {
    pageSet.add(1);
    pageSet.add(2);
    for( let i = -2; i <=2; ++i ) {
      if(page + i > 2 && page+i<lastPage-1){
        pageSet.add(page+i);
      }
    }
    console.log(pageSet);
    pageSet.add(lastPage-1)
    pageSet.add(lastPage)
  }
  
  const arr = Array.from(pageSet);

  let buttons = arr.map((e) => {
    return e !== page ?
      <button className='min-w-[30px]' key={e} onClick={() => setPage(e)}>{e}</button> : 
      <button className='min-w-[30px] font-extrabold' key={e} onClick={() => setPage(e)}>{e}</button>
  });


  return(
    <div className='flex gap-1 justify-around max-w-[300px] mx-auto'>
      <>
        {lastPage > 1 && <button className='min-w-[30px]' onClick={() => setPage(page-1)} disabled={page===1}>{'<'}</button>}
        {buttons}
        {lastPage > 1 && <button className='min-w-[30px]' onClick={() => setPage(page+1)} disabled={page===lastPage}>{'>'}</button>}
      </>
    </div>
  )
}
