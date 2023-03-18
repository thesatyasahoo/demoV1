import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";
import Card from "@mui/material/Card";

export const ListDetails = ({ userId, id, title, body }) => {
  return (
    <>
      <div>
        <Container fixed>
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              height: "80vh",
              marginTop: "1rem",
              paddingTop: "1rem",
            }}
          >
            {userId && userId.length > 0 ? (
              <>
                <p>{userId}</p>
                <p>{id}</p>
                <p style={{ textAlign: "justify" }}>{title}</p>
                <p style={{ textAlign: "justify" }}>{body}</p>
              </>
            ) : null}
          </Box>
        </Container>
      </div>
    </>
  );
};
