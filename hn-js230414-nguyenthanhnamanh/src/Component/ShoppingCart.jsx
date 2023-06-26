import React from "react";
import Table from "react-bootstrap/Table";

function ShoppingCart(props) {
  return (
    <div>
      <Table striped="columns">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>IMG</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>TotalAmuont</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              BST 50 - Áo thun nam nữ form rộng vải dày mịn logo cá tính cách
              điệu
            </td>
            <td>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp1.jfif5c29ba45-be68-4381-8ae9-42ddfc1b4135?alt=media&token=fc203279-226a-4b55-aee9-d42ccaba382a"
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
            </td>
            <input type="number" placeholder="1" />
            <td>100$</td>
            <td>100$</td>
            <td>
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ShoppingCart;
