import React from 'react'
import useNoteStore from './store'
import { FiSearch } from 'react-icons/fi';
const SideBar = () => {
 const { selectNote, notes, search, setSearch } = useNoteStore();
  
 const filterNotes = notes.filter((note)=>note.text.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className='w-1/3 p-4 shadow-lg bg-white'>
      <div className="flex items-center mb-4">
        <FiSearch className='bg-blue-400 text-white h-8 w-8 rounded-xl p-1 absolute'/>
        <input type="text" name="" id="" className='border focus:outline-blue-400 focus:shadow-lg border-blue-300 rounded-xl pl-9
        py-1 shadow-md'
        placeholder='search notes...'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        />
      </div>
      {/* notes lists */}
      <div>
        {
          filterNotes.length>0 ? (
            filterNotes.map((note, index)=>(
              <div key={index} onClick={()=>selectNote(index)} className='flex items-center p-4 mb-4 rounded-lg shadow-md cursor-pointer border hover:border-gray-400'>
                <div className='rounded-full w-4 h-4 mr-2' style={{backgroundColor: note.color, border: '1px solid #000'}}/>
                <div className='truncate' dangerouslySetInnerHTML={{__html : note.text}}>

                </div>
              </div>
            ))
          ) : (
              <p>No new notes </p>
          )
        }
      </div>
    </div>
  )
}

export default SideBar