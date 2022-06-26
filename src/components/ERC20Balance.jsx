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
        dataSource={assets}
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
            dataSource={appAssets}
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
