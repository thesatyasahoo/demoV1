import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const List = () => {
  const [data, setData] = useState(null);
  const [tempList, setTempList] = useState(null);
  const [child, setChild] = useState(false);
  const [tempData, setTempData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
        usrDetail();
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const usrDetail = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setTempList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const getPerUserDetail = async (id) => {
    let tempListFilteredData = tempList.filter((il) => il.userId === id);
    console.log(tempListFilteredData);
    console.log(tempListFilteredData);
    setTempData(tempListFilteredData);
    setChild(true);
  };

  return (
    <>
      <div>
        <Container fixed>
          <Box
            sx={{
              height: "100%",
              marginTop: "1rem",
              marginBottom: "2rem",
              paddingTop: "1rem",
            }}
          >
            {child ? (
              <Button
                variant="contained"
                sx={{ marginLeft: "90%" }}
                onClick={async () => {
                  setTempData(null);
                  setChild(false);
                }}
              >
                Go Back
              </Button>
            ) : null}
            {child === false &&
              data &&
              data.length > 0 &&
              data.map((e) => {
                return (
                  <>
                    <Card
                      variant="outlined"
                      sx={{
                        bgcolor: "#0073aa",
                        color: "#f2f2f2",
                        margin: "1rem",
                        cursor: "pointer",
                        padding: "0.5rem",
                      }}
                      onClick={() => getPerUserDetail(e.id)}
                    >
                      {e.name}
                    </Card>
                  </>
                );
              })}
            {child === true &&
              tempData &&
              tempData.length > 0 &&
              tempData.map((e) => {
                return (
                  <div>
                    <Card
                      variant="outlined"
                      sx={{
                        margin: "1rem",
                        bgcolor: "#0073aa",
                        color: "#f2f2f2",
                      }}
                    >
                      <CardContent>
                        <div style={{ display: "flex" }}>
                          <Typography
                            style={{ paddingRight: "1rem" }}
                            variant="p"
                            component="div"
                          >
                            {e.id}
                          </Typography>
                          <Typography variant="p" component="div">
                            {e.title}
                          </Typography>
                        </div>
                        <Typography
                          sx={{ mb: 1.5, color: "#f2f2f2" }}
                          color="text.secondary"
                        >
                          {e.body}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
          </Box>
        </Container>
      </div>
    </>
  );
};
