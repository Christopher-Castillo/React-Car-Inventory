import Modal from "./Modal";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react'
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hideable: true },
  { field: 'make', headerName: "Make", flex: 1 },
  { field: 'model', headerName: "Model", flex: 1 },
  { field: 'year', headerName: "Year", flex: 1 },
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { carData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = ()=> {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 5000)

    }

  return (
    <>
      <Modal 
        id={ selectionModel }
        open={ open }
        onClose = { handleClose }
        />
      <div className='flex flex-col'>
        <div>
            <button
                className='p-3 m-3 bg-slate-300 rounded hover:bg-yellow-400 hover:italic'
                onClick={ handleOpen }>
                Create New Entry
            </button>
            <button
                className='p-3 m-3 bg-slate-300 rounded hover:bg-yellow-400 hover:italic'
                onClick={ handleOpen }>
                Update Entry
            </button>
            <button
                className='p-3 m-3 bg-slate-300 rounded hover:bg-yellow-400 hover:italic'
                onClick={ deleteData }>
                Delete Entry
            </button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: '90%' }}>
            <h2 className='p-3 bg-slate-300 my-2 rounded'>My Cars</h2>
            <DataGrid rows={ carData } columns={ columns } pageSizeOptions={[5]}
            checkboxSelection={true}
            onRowSelectionModelChange = { (item: any) => {
              setSelectionModel(item)
            }}
            />
          </div>
      </div>
    </>
  )
}

export default DataTable