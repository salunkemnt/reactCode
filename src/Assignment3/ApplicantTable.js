
import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  Paper,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
  Alert,
  } from '@mui/material';
  import ModeEditSharpIcon from '@mui/icons-material/ModeEditSharp';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import CTextField from '../Assignment1/components/CTextField';
import CTable from '../Assignment2/components/CTable';
import CButton from '../Assignment1/components/CButton';
import CDialog from '../Assignment2/components/CDialog';

const ApplicantTable = () => {
  const [formData,setFormData]=useState([]);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const totalPages = Math.ceil(formData.length / recordsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const Navigate = useNavigate();
  const handleNavigation = () => {
    Navigate('/Assignment3'); 
  };
  const sendData = useSelector((state) => state.formData);
  // const sendData = formData;

console.log(sendData); 
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

  const openEditDialog = (data) => {
    setEditData(data);
    setIsDialogOpen(true);
  };

  const closeEditDialog = () => {
    setEditData(null);
    setIsDialogOpen(false);
  };

  const saveEditedData = () => {
    const index = formData.findIndex((data) => data.id === editData.id);
    sendData[index] = editData;

    setFormData((prevData) => {
      const updatedformData = [...formData];
      updatedformData[index] = editData;
      setFormData(updatedformData);
      return updatedformData;
    });

    closeEditDialog();
    showSnackbar('Your Data Updated successfully!');
  };

  const openDeleteDialog = (data) => {
    setDeleteData(data);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    const updatedformdata = formData.filter((data) => data.id !== deleteData.id);
    setFormData(updatedformdata);
    setDeleteDialogOpen(false);
    showSnackbar('Your User deleted successfully!');
    // sendData = updatedformdata;

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

 <>
    <TableContainer component={Paper}>
    <CTable sx={{border:"black"}}>
      <TableHead sx={{border:'black', backgroundColor:'green'}}>
        <TableRow sx={{textAlign:'center',border:'1px solid black'}}>
          
          <StyledTableCell sx={{border:'1px solid black'}}>FirstNameName</StyledTableCell>
          <StyledTableCell sx={{border:'1px solid black'}}>lastName</StyledTableCell> 
          <StyledTableCell sx={{border:'1px solid black'}}>Email</StyledTableCell>
          <StyledTableCell sx={{border:'1px solid black'}}>Phone</StyledTableCell>
          <StyledTableCell sx={{border:'1px solid black'}}>Gender</StyledTableCell>
          <StyledTableCell sx={{border:'1px solid black'}}>Action</StyledTableCell>
        </TableRow>
        
      </TableHead>
      <TableBody>
      {sendData?.map((data, index) => (
      <StyledTableRow sx={{ backgroundColor: 'yellow'}} key={index}>
        <StyledTableCell sx={{ border: '1px solid black' }}>{data.firstName}</StyledTableCell>
        <StyledTableCell sx={{ border: '1px solid black' }}>{data.lastName}</StyledTableCell>
        <StyledTableCell sx={{ border: '1px solid black' }}>{data.email}</StyledTableCell>
        <StyledTableCell sx={{ border: '1px solid black' }}>{data.number}</StyledTableCell>
        <StyledTableCell sx={{ border: '1px solid black' }}>{data.gender}</StyledTableCell>
        <StyledTableCell sx={{border:'1px solid black'}}>
                  <IconButton
                  onClick={() => openEditDialog(data)} aria-label='edit'>
                    <ModeEditSharpIcon/>
                  </IconButton>
                  <IconButton
                  onClick={() => openDeleteDialog(data)}>
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
                label="FirstName"
                value={editData.firstName}
                variant="filled"
                onChange={(e) => setEditData({ ...editData, firstName: e.target.value })}
              />   
              <CTextField
                label="LastName"
                value={editData.lastName}
                variant="filled"
                onChange={(e) => setEditData({ ...editData, lastName: e.target.value })}
               
              /><br></br>
              <CTextField
                label="Email"
                value={editData.email}
                variant="filled"
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
               />
              
              <br></br>
              <CTextField
                label="Phone"
                value={editData.number}
                variant="filled"
                onChange={(e) => setEditData({ ...editData, number: e.target.value })}
              />
              <CTextField
                label="Website"
                value={editData.gender}
                variant="filled"
                onChange={(e) => setEditData({ ...editData, gender: e.target.value })}
              /><br></br>
              
            </>
          )}
        </DialogContent>
        <DialogActions >
          <Button onClick={closeEditDialog}  colorv="Secondary" variant="outlined">Cancel</Button>
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
  
    <CButton onClick={handleNavigation} variant="contained" color="success">Go To Form</CButton>
    
    
    <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity='success'>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ApplicantTable

