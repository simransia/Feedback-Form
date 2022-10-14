import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { useEffect } from 'react';
import '../css/DetailsStyles.css'

function Details() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setItems(data);
    }
  }, [])

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "email",
      label: "Email ID",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "phone",
      label: "Phone",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "service",
      label: "Service Feedback",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "beverages",
      label: "Beverages Feedback",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "cleanliness",
      label: "Cleanliness Feedback",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "overall",
      label: "Feedback For Overall",
      options: {
        filter: true,
        sort: false,
      }
    }
  ];
  const options = {
    filterType: 'dropdown',
    responsive: 'simple',
    searchPlaceholder: ' Search By Name, Email ID or Phone No.',
  };


  return (
    <div className="table-container">
      <MUIDataTable
        title={<h2 style={{ color: '#9B1FE8', fontWight: '900' }}>Aromatic bar</h2>}
        data={items}
        columns={columns}
        options={options}
      />
    </div>

  )
}

export default Details