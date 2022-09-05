import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: 'Emirates Private Jet',
      img: 'https://media.istockphoto.com/photos/private-jet-picture-id637359998?k=20&m=637359998&s=612x612&w=0&h=6REDfQOOCu_Q1bBqP7HMxB3eOm5OJDcHaqB3e-9_Ipc=',
      customer: 'John Smith',
      date: '2nd January',
      amount: 20000,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 2235235,
      product: 'Emirates Private Jet',
      img: 'https://media.istockphoto.com/photos/private-jet-picture-id637359998?k=20&m=637359998&s=612x612&w=0&h=6REDfQOOCu_Q1bBqP7HMxB3eOm5OJDcHaqB3e-9_Ipc=',
      customer: 'Michael Doe',
      date: '9th October',
      amount: 90000,
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 2342353,
      product: 'Emirates Private Jet',
      img: 'https://media.istockphoto.com/photos/private-jet-picture-id637359998?k=20&m=637359998&s=612x612&w=0&h=6REDfQOOCu_Q1bBqP7HMxB3eOm5OJDcHaqB3e-9_Ipc=',
      customer: 'John Smith',
      date: '17th December',
      amount: 35000,
      method: 'Cash on Delivery',
      status: 'Pending',
    },
    {
      id: 2357741,
      product: 'Emirates Private Jet',
      img: 'https://media.istockphoto.com/photos/private-jet-picture-id637359998?k=20&m=637359998&s=612x612&w=0&h=6REDfQOOCu_Q1bBqP7HMxB3eOm5OJDcHaqB3e-9_Ipc=',
      customer: 'Jane Smith',
      date: '18th July',
      amount: 92000,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 2342355,
      product: 'Emirates Private Jet',
      img: 'https://media.istockphoto.com/photos/interior-of-empty-corporate-jet-picture-id1413587508?k=20&m=1413587508&s=612x612&w=0&h=rQF4i3aklfkd8nMCLDgtHs5_5maqI1bJdWuPBS2kVXE=',
      customer: 'Harold Carol',
      date: '21st March',
      amount: 200000,
      method: 'Online',
      status: 'Pending',
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map (row => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
