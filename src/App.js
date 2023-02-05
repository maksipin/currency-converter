import { Container, Grid, IconButton, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { currencyMarketAPI } from "./store/currencyMarketAPI";
import CurrencyForm from "./components/CurrencyForm";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import conversionInfo from "./utils/conversionInfo";
import calculation from "./utils/calculation";

function App() {
  const { data, isLoading, error } = currencyMarketAPI.useGetCurrenciesQuery();
  const [haveCarrency, setHaveCarrency] = useState([]);
  const [willGetCarrency, setWillGetCarrency] = useState([]);
  const [money, setMoney] = useState({ have: "", get: "" });
  const [convertInfo, setConvertInfo] = useState({ have: "", get: "" });

  useEffect(() => {
    const have = conversionInfo(haveCarrency, willGetCarrency);
    const get = conversionInfo(willGetCarrency, haveCarrency);
    setConvertInfo({ have, get });
  }, [haveCarrency, willGetCarrency]);

  const onChangeHave = (value = money.have, currencyHave, currencyGet) => {
    const get = calculation(value, currencyHave, currencyGet);
    setMoney({ get, have: value });
  };

  const onChangeGet = (value, currencyHave, currencyGet) => {
    const have = calculation(value, currencyHave, currencyGet);
    setMoney({ get: value, have });
  };

  const onReplaceCurrency = () => {
    setHaveCarrency(willGetCarrency);
    setWillGetCarrency(haveCarrency);
    onChangeHave(money.have, willGetCarrency, haveCarrency);
  };

  return (
    <Container sx={{ mt: "20px" }}>
      <Paper
        sx={{
          display: "flex",
          paddingY: "50px",
          paddingX: "10px",
          justifyContent: "center",
          borderRadius: 4,
        }}
        elevation={10}
      >
        {!isLoading && !error ? (
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              sm={12}
              md={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CurrencyForm
                text="У меня есть"
                currenciesList={data}
                currency={haveCarrency}
                money={money.have}
                convertInfo={convertInfo.have}
                onSelect={(currency) => {
                  setHaveCarrency(currency);
                  onChangeHave(money.have, currency, willGetCarrency);
                }}
                onChangeValue={(value) =>
                  onChangeHave(value, haveCarrency, willGetCarrency)
                }
              />
            </Grid>
            <Grid
              item
              sm={12}
              md={1}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton onClick={onReplaceCurrency}>
                <SyncAltIcon
                  sx={{
                    margin: "auto",
                    fontSize: "80px",
                    color: "#4b4b4b",
                  }}
                />
              </IconButton>
            </Grid>
            <Grid
              item
              sm={12}
              md={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CurrencyForm
                text="Я получу"
                currenciesList={data}
                currency={willGetCarrency}
                money={money.get}
                convertInfo={convertInfo.get}
                onSelect={(currency) => {
                  setWillGetCarrency(currency);
                  onChangeHave(money.have, haveCarrency, currency);
                }}
                onChangeValue={(value) =>
                  onChangeGet(value, haveCarrency, willGetCarrency)
                }
              />
            </Grid>
          </Grid>
        ) : !error ? (
          <Typography variant="h5" component="div">
            Загружаем данные...
          </Typography>
        ) : (
          <Typography variant="h5" component="div">
            Произошла ошибка. Попробуйте позже.
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default App;
