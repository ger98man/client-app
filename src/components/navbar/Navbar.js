import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import { useSignOut } from "react-auth-kit";

export default function Navbar() {
  const signOut = useSignOut();

  return (
    <MDBNavbar expand="lg">
      <MDBContainer>
        <MDBNavbarBrand>Menu</MDBNavbarBrand>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBNavbarLink href="/user-info">User Info</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/user-list">User List</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink onClick={() => signOut()}>Sign out</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}
