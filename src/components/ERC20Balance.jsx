import { useMoralis, useERC20Balances } from "react-moralis";
import { Skeleton, Table } from "antd";
import { getEllipsisTxt } from "../helpers/formatters";
import "../card.css";
import CreditCard from "./CreditCard";

const appAssets = [
  {
    token_address: "0x111...0c302",
    name: "Element Fi - ePyvDAI",
    symbol: "ePyvDAI",
    logo: "https://www.canva.com/design/DAFElYIn0M0/dp44QLxMyjp5FUGDwDG6wg/view?utm_content=DAFElYIn0M0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    thumbnail:
      "https://www.canva.com/design/DAFElYIn0M0/dp44QLxMyjp5FUGDwDG6wg/view?utm_content=DAFElYIn0M0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    decimals: 16,
    balance: "40347",
  },
];

const optimismAssets = [
  {
    token_address: "0x28c3...d92d",
    name: "Uniswap - WETH/OP",
    symbol: "WETHOP",
    logo: require("../assets/eth-op-pool.png"),
    thumbnail: require("../assets/eth-op-pool.png"),
    decimals: 16,
    balance: "40347",
  },
  {
    token_address: "0x28c3...d92d",
    name: "Mai Finance - USD",
    symbol: "MAI",
    logo: "https://cdn.discordapp.com/attachments/990366843636166676/990369187727831101/mimatic-op.png",
    thumbnail:
      "https://cdn.discordapp.com/attachments/990366843636166676/990369187727831101/mimatic-op.png",
    decimals: 3,
    balance: "42069",
  },
];

const polygonAssets = [
  {
    token_address: "0x28c3...d92d",
    name: "Uniswap - WETH/MATIC",
    symbol: "WETHMATIC",
    logo: require("../assets/eth-poly-pool.png"),
    thumbnail: require("../assets/eth-poly-pool.png"),
    balance: "40347",
  },
  {
    token_address: "0x28c3...d92d",
    name: "Mai USD",
    symbol: "MAI",
    logo: "https://cdn.discordapp.com/attachments/990366843636166676/990369188184985610/mimatic-poly.png",
    thumbnail:
      "https://cdn.discordapp.com/attachments/990366843636166676/990369188184985610/mimatic-poly.png",
    decimals: 3,
    balance: "42069",
  },
];

const cardVaults = [
  {
    token_address: "0x28c3...d92d",
    name: "Mai Finance - USD (Polygon)",
    symbol: "MAI",
    logo: "https://cdn.discordapp.com/attachments/990366843636166676/990369188184985610/mimatic-poly.png",
    thumbnail:
      "https://cdn.discordapp.com/attachments/990366843636166676/990369188184985610/mimatic-poly.png",
    decimals: 3,
    balance: "42069",
  },
  {
    token_address: "0x28c3...d92d",
    name: "Mai Finance - USD (Optimism)",
    symbol: "MAI",
    logo: "https://cdn.discordapp.com/attachments/990366843636166676/990369187727831101/mimatic-op.png",
    thumbnail:
      "https://cdn.discordapp.com/attachments/990366843636166676/990369187727831101/mimatic-op.png",
    decimals: 3,
    balance: "42069",
  },
];

function ERC20Balance(props) {
  const { data: assets } = useERC20Balances(props);
  const { Moralis } = useMoralis();

  console.log("ASSETS", assets);

  const columns = [
    {
      title: "",
      dataIndex: "logo",
      key: "logo",
      render: (logo) => (
        <img
          src={logo || "https://etherscan.io/images/main/empty-token.png"}
          alt="nologo"
          width="28px"
          height="28px"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => name,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol) => symbol,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (value, item) =>
        parseFloat(Moralis?.Units?.FromWei(value, item.decimals)).toFixed(6),
    },
    {
      title: "Address",
      dataIndex: "token_address",
      key: "token_address",
      render: (address) => getEllipsisTxt(address, 5),
    },
  ];

  const networkNames = ["poly", "op", "skale", "boba", "gnosis"];

  return (
    <div style={{ width: "65vw", padding: "15px" }}>
      <h1> 💳 Credit Card here</h1>
      <button>change protocol</button>
      <CreditCard network={networkNames} />
      <h1>💰Token Balances</h1>
      <h1 style={{ marginBottom: 10 }}>💳 Card Vault</h1>
      <Table
        dataSource={cardVaults}
        columns={columns}
        rowKey={(record) => {
          return record.token_address;
        }}
      />

      <h1 style={{ marginBottom: 10, marginTop: 30 }}>💰Token Balances</h1>
      <Skeleton loading={!assets}>
        <Table
          dataSource={assets}
          columns={columns}
          rowKey={(record) => {
            return record.token_address;
          }}
        />
        <div
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#d3d3d3",
            borderStyle: "solid",
            padding: 20,
            marginTop: 20,
          }}
        >
          <h1 style={{ marginBottom: 30 }}>📱 Dapps</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <img
              style={{
                width: "30px",
                height: "30px",
                objectFit: "contain",
              }}
              src="https://github.com/ethereum-optimism/brand-kit/blob/main/assets/images/Profile-Logo.png?raw=true"
            />
            {/* <h2>Element Finance</h2> */}
            <h2>Optimism</h2>
          </div>
          <Table
            dataSource={optimismAssets}
            columns={columns}
            rowKey={(record) => {
              return record.token_address;
            }}
          />

          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <img
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
                src="https://i.pinimg.com/474x/9b/1e/97/9b1e977d00b5d887608b156705a10759.jpg"
              />
              <h2>Polygon</h2>
            </div>
            <Table
              dataSource={polygonAssets}
              columns={columns}
              rowKey={(record) => {
                return record.token_address;
              }}
            />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <img
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
                src="https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/13c43/eth-diamond-purple.png"
              />
              <h2>Ethereum</h2>
            </div>
            <Table
              dataSource={appAssets}
              columns={columns}
              rowKey={(record) => {
                return record.token_address;
              }}
            />
          </div>
        </div>
      </Skeleton>
    </div>
  );
}
export default ERC20Balance;
