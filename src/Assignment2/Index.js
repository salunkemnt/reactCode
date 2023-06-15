import React, { useEffect, useState } from 'react';
import '../App.css';
import { styled } from '@mui/material/styles';
import {TableBody,TableCell,TableContainer,TableHead,TableRow,tableCellClasses,Paper,
        IconButton,DialogTitle,DialogContent,DialogActions,Button,Snackbar,Alert,} from '@mui/material';
import CTable from './components/CTable';
import ModeEditSharpIcon from '@mui/icons-material/ModeEditSharp';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import CTextField from './components/CTextField';
import CDialog from './components/CDialog';

function Index() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.yellow,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  const [jsonData, setJsonData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = jsonData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(jsonData.length / recordsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    fetchJsonData();
  }, []);

  const fetchJsonData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  const openEditDialog = (item) => {
    setEditData(item);
    setIsDialogOpen(true);
  };

  const closeEditDialog = () => {
    setEditData(null);
    setIsDialogOpen(false);
  };

  const saveEditedData = () => {
    const index = jsonData.findIndex((item) => item.id === editData.id);

    setJsonData((prevData) => {
      const updatedJsonData = [...jsonData];
      updatedJsonData[index] = editData;
      setJsonData(updatedJsonData);
      return updatedJsonData;
    });

    closeEditDialog();
    showSnackbar('Your Data Updated successfully!');
  };

  const openDeleteDialog = (item) => {
    setDeleteData(item);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    const updatedJsonData = jsonData.filter((item) => item.id !== deleteData.id);
    setJsonData(updatedJsonData);
    setDeleteDialogOpen(false);
    showSnackbar('Your User deleted successfully!');
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    
  };
  
  const changePage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <TableContainer component={Paper}>
      
        <CTable sx={{border:"black",width:'200px'}}>
          <TableHead sx={{border:'black', backgroundColor:'green'}}>
            <TableRow sx={{textAlign:'center',border:'1px solid black'}}>
           
            
        <StyledTableCell sx={{border:'1px solid black'}}>ID</StyledTableCell>
        <StyledTableCell sx={{border:'1px solid black'}}>Name</StyledTableCell>
        <StyledTableCell sx={{border:'1px solid black'}}>Email</StyledTableCell>
        <StyledTableCell sx={{border:'1px solid black'}}>Address</StyledTableCell>
        <StyledTableCell sx={{border:'1px solid black'}}>Phone</StyledTableCell>
        <StyledTableCell sx={{border:'1px solid black'}}>Company Name</StyledTableCell>
        <StyledTableCell sx={{border:'1px solid black'}}>Action</StyledTableCell>
      </TableRow>
          </TableHead>
          <TableBody>
            {records.map((item) => (
              <StyledTableRow sx={{ backgroundColor: 'yellow',opacity: '1'}} key={item.id}>
                <StyledTableCell sx={{border:'1px solid black'}}>{item.id}</StyledTableCell>
                <StyledTableCell sx={{border:'1px solid black'}}>{item.name}</StyledTableCell>
                <StyledTableCell sx={{border:'1px solid black'}} >{item.email}</StyledTableCell>
                <StyledTableCell sx={{border:'1px solid black'}}>
                     Street: {item.address.street}, City: {item.address.city}
                </StyledTableCell>
                <StyledTableCell sx={{border:'1px solid black'}}>{item.phone}</StyledTableCell>
                <StyledTableCell sx={{border:'1px solid black'}}>{item.company.name}</StyledTableCell>
                
                <StyledTableCell sx={{border:'1px solid black'}}>
                 <IconButton
                  onClick={() => openEditDialog(item)} aria-label='edit'>
                    <ModeEditSharpIcon/>
                  </IconButton>
                  <IconButton
                  onClick={() => openDeleteDialog(item)}>
                    <DeleteOutlineTwoToneIcon/>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </CTable>
      </TableContainer>

      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a href='#' className='page-link' onClick={prevPage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? 'active' : ''}`}
              key={i}
            >
              <a href='#' className='page-item' onClick={() => changePage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className='page-item'>
            <a href='#' className='page-link' onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      
      <CDialog open={isDialogOpen} onClose={closeEditDialog}>
        <DialogTitle sx={{ color: 'goldenrod'}}>Edit User Data</DialogTitle>
        <DialogContent>
          {editData && (
            <>
              <CTextField
                label="Name"
                value={editData.name}
                variant="filled"
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />   
              <CTextField
                label="Email"
                value={editData.email}
                variant="filled"
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
               
              /><br></br>
              <CTextField
                label="Street"
                value={editData.address.street}
                variant="filled"
                onChange={(e) => setEditData((editData)=>(
                  {...editData,address:{ ...editData.address, street: e.target.value }}
                )
                  )}
               />
              <CTextField
                label="City"
                value={editData.address.city}
                variant="filled"
                onChange={(e) => setEditData((editData)=>(
                  {...editData,address:{ ...editData.address, city: e.target.value }}
                )
                  )}
              /><br></br>
              <CTextField
                label="Phone"
                value={editData.phone}
                variant="filled"
                onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
              />
              <CTextField
                label="Website"
                value={editData.website}
                variant="filled"
                onChange={(e) => setEditData({ ...editData, website: e.target.value })}
              /><br></br>
              <CTextField
                label="Company Name"
                value={editData.company.name}
                variant="filled"
                onChange={(e) => setEditData((editData)=>(
                  {...editData,company:{ ...editData.company, name: e.target.value }}
                )
              )}
              />
            </>
          )}
        </DialogContent>
        <DialogActions >
          <Button onClick={closeEditDialog}  color="Secondary" variant="outlined">Cancel</Button>
          <Button onClick={saveEditedData} variant="outlined">Save</Button>
        </DialogActions>
      </CDialog>

      <CDialog open={deleteDialogOpen} onClose={closeDeleteDialog} >
        <DialogTitle>You want to Delete User</DialogTitle>
        <DialogActions sx={{textAlign:'center', boxDecorationborder:'red' }}>
          <Button onClick={closeDeleteDialog} variant="outlined">NO</Button>
          <Button onClick={confirmDelete} color="secondary" autoFocus variant="outlined">
           Yes
          </Button>
        </DialogActions>
      </CDialog>
      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity='success'>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Index;