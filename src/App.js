import logo from './logo.svg';
import './App.css';

function App() {
      return (
        <section id="router-wrapper">
          <div className="Toastify" />
          <header id="main-header" className>
            <div className="area">
              <div className="lft-cnt">
                <h1 className="logo">
                  <img src="/images/logo/logo.svg" alt="belt fi logo" />
                </h1>
              </div>
              <div className="rgt-cnt">
                <nav>
                  <ul>
                    <li className>
                      <span>Swap</span>
                    </li>
                    <li className>
                      <span>Pools</span>
                    </li>
                    <li className>
                      <span>Staking</span>
                    </li>
                    <li className>
                      <span>Vaults</span>
                    </li>
                    <li className>
                      <span>LP Staking</span>
                    </li>
                    <li className="items">
                      <span>Learn</span>
                      <ul style={{ height: "0px" }}>
                        <li>
                          <span>Audit</span>
                        </li>
                        <li>
                          <span>Medium</span>
                        </li>
                        <li>
                          <span>Twitter</span>
                        </li>
                        <li>
                          <span>Telegram</span>
                        </li>
                        <li>
                          <span>Docs</span>
                        </li>
                        <li>
                          <span>Team</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="wallet-cnt">
                  <button type="button" className="connect-btn">
                    CONNECT WALLET
                  </button>
                </div>
              </div>
            </div>
          </header>
          
          <div className="main-page">
            <div className="phrase">
              <span>
                The conveyor <strong>Belt</strong> of optimized yield to your
                assets
              </span>
              <span>
                AMM protocol incorporating multi-strategy yield optimization
              </span>
            </div>
            <div className="dashboard-v2">
              <div className="left-section">
                <ul>
                  <li className="price">
                    <span>BELT price</span>
                    <span>
                      <strong>85.8846</strong>
                      <span>USD</span>
                    </span>
                  </li>
                  <li className="circulating-supply">
                    <span>BELT market cap</span>
                    <span>
                      <strong>151.5M</strong>
                      <span>USD</span>
                    </span>
                  </li>
                  <li className="market-cap">
                    <span>BELT circ. supply</span>
                    <span>
                      <strong>1,764,102</strong>
                      <span>BELT</span>
                    </span>
                  </li>
                  <li className="burned-amount">
                    <span>BELT burnt</span>
                    <span>
                      <strong>26,972.5458</strong>
                      <span>BELT</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="main-section">
                <span>Total Value Locked (TVL)</span>
                <span className="tvl">$3,341,289,078</span>
                <button className="buy-btn">Buy BELT</button>
              </div>
              <div className="right-section">
                <span className="portfolio">My Portfolio</span>
                <ul>
                  <li className="deposit">
                    <span>My Total Deposit</span>
                    <span>
                      <strong>-</strong>
                      <span>USD</span>
                    </span>
                  </li>
                  <li className="earned">
                    <span>BELT Earned</span>
                    <span>
                      <strong>-</strong>
                      <span>BELT</span>
                    </span>
                  </li>
                  <li className="average-apy">
                    <span>My Average APR</span>
                    <span>
                      <strong>-</strong>
                      <span>%</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="stable-swap">
              <div className="exchange">
                <div className="tokenA ">
                  <span className="balance">
                    BALANCE<strong>0.0000 BUSD</strong>
                  </span>
                  <div>
                    <div className="dropdown-container undefined ">
                      <div>
                        <img src="/images/token/0xe9e7cea3dedca5984780bafc599bd69add087d56.svg" />
                        <span>BUSD</span>
                        <img src="/images/icon/ic-drop-down.svg" />
                      </div>
                      <ul style={{ borderWidth: "0px", height: "0px" }}>
                        <li>
                          <img src="/images/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.svg" />
                          <span>DAI</span>
                        </li>
                        <li>
                          <img src="/images/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.svg" />
                          <span>USDC</span>
                        </li>
                        <li>
                          <img src="/images/token/0x55d398326f99059ff775485246999027b3197955.svg" />
                          <span>USDT</span>
                        </li>
                        <li>
                          <img src="/images/token/0xe9e7cea3dedca5984780bafc599bd69add087d56.svg" />
                          <span>BUSD</span>
                        </li>
                      </ul>
                    </div>
                    <input defaultValue={0.0} />
                    <button className="max">MAX</button>
                  </div>
                </div>
                <button className="btn-change" />
                <div className="tokenB">
                  <span className="balance">
                    BALANCE<strong>0.0000 USDT</strong>
                  </span>
                  <div>
                    <div className="dropdown-container undefined ">
                      <div>
                        <img src="/images/token/0x55d398326f99059ff775485246999027b3197955.svg" />
                        <span>USDT</span>
                        <img src="/images/icon/ic-drop-down.svg" />
                      </div>
                      <ul style={{ borderWidth: "0px", height: "0px" }}>
                        <li>
                          <img src="/images/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.svg" />
                          <span>DAI</span>
                        </li>
                        <li>
                          <img src="/images/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.svg" />
                          <span>USDC</span>
                        </li>
                        <li>
                          <img src="/images/token/0x55d398326f99059ff775485246999027b3197955.svg" />
                          <span>USDT</span>
                        </li>
                        <li>
                          <img src="/images/token/0xe9e7cea3dedca5984780bafc599bd69add087d56.svg" />
                          <span>BUSD</span>
                        </li>
                      </ul>
                    </div>
                    <input className="disabled" disabled defaultValue={0.0} />
                  </div>
                </div>
              </div>
              <div className="info">
                <span>
                  Exchange Rate BUSD/USDT (including fees):
                  <span>Not Available</span>
                </span>
                <span>
                  Trading routed through:<span>-</span>
                </span>
                <span>
                  Max slippage:<span>1%</span>
                </span>
              </div>
              <button className="btn-swap ">Swap</button>
            </div>
            <div className="belt-pools">
              <span className="section-header">Belt Pools</span>
              <ul className="pool-list">
                <li className="belt-pool ">
                  <div className="name">
                    <img src="https://s.belt.fi/status/venus_gu.png" />
                    <div>
                      <span className="list-text pool-name">venus</span>
                      <span className="list-text want-name">
                        (v)USDT-(v)USDC-(v)BUSD-(v)DAI
                      </span>
                    </div>
                  </div>
                  <div className="info">
                    <div className="left-section">
                      <div className="tvl">
                        <span className="list-text light tvl-header">TVL</span>
                        <span className="list-text tvl">$18.1M</span>
                      </div>
                      <div className="volume">
                        <span className="list-text light volume-header">
                          VOL
                        </span>
                        <span className="list-text volume">$0.8M</span>
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="apy">
                        <span className="list-text light tvl-header">APR</span>
                        <span className="list-text tvl">22.28%</span>
                      </div>
                      <div className="apr">
                        <span className="list-text light tvl-header">
                          DAILY
                        </span>
                        <span className="list-text tvl">0.06%</span>
                      </div>
                      <div className="rewards">
                        <span className="list-text light rewards-header">
                          REWARDS
                        </span>
                        <div className="icons">
                          <img src="https://s.belt.fi/status/USDT_icon.png" />
                          <img src="https://s.belt.fi/status/USDC_icon.png" />
                          <img src="https://s.belt.fi/status/BUSD_icon.png" />
                          <img src="https://s.belt.fi/status/DAI_icon.png" />
                          <img src="https://s.belt.fi/status/BELT_icon.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn-detail " />
                </li>
                <li className="belt-pool ">
                  <div className="name">
                    <img src="https://s.belt.fi/status/belt_gu.png" />
                    <div>
                      <span className="list-text pool-name">4Belt</span>
                      <span className="list-text want-name">
                        (belt)USDT-(belt)USDC-(belt)BUSD-(belt)DAI
                      </span>
                    </div>
                  </div>
                  <div className="info">
                    <div className="left-section">
                      <div className="tvl">
                        <span className="list-text light tvl-header">TVL</span>
                        <span className="list-text tvl">$1,021.9M</span>
                      </div>
                      <div className="volume">
                        <span className="list-text light volume-header">
                          VOL
                        </span>
                        <span className="list-text volume">$1.7M</span>
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="apy">
                        <span className="list-text light tvl-header">APR</span>
                        <span className="list-text tvl">35.42%</span>
                      </div>
                      <div className="apr">
                        <span className="list-text light tvl-header">
                          DAILY
                        </span>
                        <span className="list-text tvl">0.09%</span>
                      </div>
                      <div className="rewards">
                        <span className="list-text light rewards-header">
                          REWARDS
                        </span>
                        <div className="icons">
                          <img src="https://s.belt.fi/status/USDT_icon.png" />
                          <img src="https://s.belt.fi/status/USDC_icon.png" />
                          <img src="https://s.belt.fi/status/BUSD_icon.png" />
                          <img src="https://s.belt.fi/status/DAI_icon.png" />
                          <img src="https://s.belt.fi/status/BELT_icon.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn-detail " />
                </li>
                <li className="belt-pool disabled">
                  <div className="name">
                    <img src="/images/token/VAI.png" />
                    <div>
                      <span className="list-text pool-name">VAI</span>
                      <span className="list-text want-name">VAI-VENUS BLP</span>
                      <span className="coming-soon">coming soon</span>
                    </div>
                  </div>
                  <div className="info">
                    <div className="left-section">
                      <div className="tvl">
                        <span className="list-text light tvl-header">TVL</span>
                        <span className="list-text tvl">-</span>
                      </div>
                      <div className="volume">
                        <span className="list-text light volume-header">
                          VOL
                        </span>
                        <span className="list-text volume">-</span>
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="apy">
                        <span className="list-text light tvl-header">APR</span>
                        <span className="list-text tvl">-</span>
                      </div>
                      <div className="apr">
                        <span className="list-text light tvl-header">
                          DAILY
                        </span>
                        <span className="list-text tvl">-</span>
                      </div>
                      <div className="rewards">
                        <span className="list-text light rewards-header">
                          REWARDS
                        </span>
                        <div className="icons">
                          <img src="/images/token/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.svg" />
                          <img src="https://s.belt.fi/status/DAI_icon.png" />
                          <img src="https://s.belt.fi/status/USDC_icon.png" />
                          <img src="https://s.belt.fi/status/USDT_icon.png" />
                          <img src="https://s.belt.fi/status/BUSD_icon.png" />
                          <img src="https://s.belt.fi/status/BELT_icon.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn-detail disabled" />
                </li>
                <li className="belt-pool disabled">
                  <div className="name">
                    <img src="/images/token/BETH.png" />
                    <div>
                      <span className="list-text pool-name">BETH</span>
                      <span className="list-text want-name">
                        (v)ETH-(v)BETH
                      </span>
                      <span className="coming-soon">coming soon</span>
                    </div>
                  </div>
                  <div className="info">
                    <div className="left-section">
                      <div className="tvl">
                        <span className="list-text light tvl-header">TVL</span>
                        <span className="list-text tvl">-</span>
                      </div>
                      <div className="volume">
                        <span className="list-text light volume-header">
                          VOL
                        </span>
                        <span className="list-text volume">-</span>
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="apy">
                        <span className="list-text light tvl-header">APR</span>
                        <span className="list-text tvl">-</span>
                      </div>
                      <div className="apr">
                        <span className="list-text light tvl-header">
                          DAILY
                        </span>
                        <span className="list-text tvl">-</span>
                      </div>
                      <div className="rewards">
                        <span className="list-text light rewards-header">
                          REWARDS
                        </span>
                        <div className="icons">
                          <img src="https://s.belt.fi/status/ETH_icon.png" />
                          <img src="/images/token/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.svg" />
                          <img src="https://s.belt.fi/status/BELT_icon.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn-detail disabled" />
                </li>
              </ul>
            </div>
            <div className="belt-staking">
              <span className="section-header">Belt Staking</span>
              <ul className="pool-list">
                <li className="belt-staking-pool">
                  <div className="info-area">
                    <div className="area">
                      <div className="tokens">
                        <img src="https://s.belt.fi/status/BNBBELT_icon.png" />
                      </div>
                      <span>
                        <span className="list-text want-name">
                          WBNB-BELT LP
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$15.8M</span>
                        </div>
                      </span>
                    </div>
                    <div className="rates">
                      <div className="apy">
                        <span className="list-text light tvl-header">APR</span>
                        <span className="list-text tvl">0.00%</span>
                      </div>
                      <div className="apr">
                        <span className="list-text light tvl-header">
                          DAILY
                        </span>
                        <span className="list-text tvl">0.00%</span>
                      </div>
                    </div>
                  </div>
                  <div className="detail-area">
                    <div className="left-section">
                      <div className="balance">
                        <span className="header">
                          <span>LP</span>Balance
                        </span>
                        <div>
                          <div>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </div>
                          <div className="buttons">
                            <button className="btn-stake disabled">
                              Stake
                            </button>
                          </div>
                        </div>
                      </div>
                      <span className="description">
                        Add/Remove liquidity to the <strong>WBNB-BELT</strong>{" "}
                        pair on PancakeSwap to get<strong> WBNB-BELT LP</strong>{" "}
                        token(s).
                        <br />
                        Then stake those LP tokens on Belt.fi to receive BELT
                        rewards.
                      </span>
                      <div className="btn-container">
                        <button className="remove-liquidity">
                          Migrate Liquidity on PancakeSwap
                        </button>
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="staked">
                        <span className="header">
                          <span>LP</span>Staked
                        </span>
                        <div>
                          <span>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </span>
                          <button className="btn-unstake disabled">
                            Unstake
                          </button>
                        </div>
                      </div>
                      <div className="earned">
                        <span className="header">
                          <span>Belt</span>Earned
                        </span>
                        <div>
                          <span>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </span>
                          <button className="btn-harvest disabled">
                            Harvest
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="belt-staking-pool">
                  <div className="info-area">
                    <div className="area">
                      <div className="tokens">
                        <img src="https://s.belt.fi/status/BNBBELT_icon.png" />
                      </div>
                      <span>
                        <span className="list-text want-name">
                          WBNB-BELT-V2-DIS LP
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$0</span>
                        </div>
                      </span>
                    </div>
                    <div className="rates">
                      <div className="apy">
                        <span className="list-text light tvl-header">APR</span>
                        <span className="list-text tvl">0.00%</span>
                      </div>
                      <div className="apr">
                        <span className="list-text light tvl-header">
                          DAILY
                        </span>
                        <span className="list-text tvl">0.00%</span>
                      </div>
                    </div>
                  </div>
                  <div className="detail-area">
                    <div className="left-section">
                      <div className="balance">
                        <span className="header">
                          <span>LP</span>Balance
                        </span>
                        <div>
                          <div>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </div>
                          <div className="buttons">
                            <button className="btn-stake disabled">
                              Stake
                            </button>
                          </div>
                        </div>
                      </div>
                      <span className="description">
                        Add/Remove liquidity to the <strong>WBNB-BELT</strong>{" "}
                        pair on PancakeSwap to get<strong> WBNB-BELT LP</strong>{" "}
                        token(s).
                        <br />
                        Then stake those LP tokens on Belt.fi to receive BELT
                        rewards.
                      </span>
                      <div className="btn-container">
                        <button className="remove-liquidity">
                          Migrate Liquidity on PancakeSwap
                        </button>
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="staked">
                        <span className="header">
                          <span>LP</span>Staked
                        </span>
                        <div>
                          <span>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </span>
                          <button className="btn-unstake disabled">
                            Unstake
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="belt-staking-pool">
                  <div className="info-area">
                    <div className="area">
                      <div className="tokens">
                        <img src="https://s.belt.fi/status/BNBBELT_icon.png" />
                      </div>
                      <span>
                        <span className="list-text want-name">
                          WBNB-BELT-V2 LP
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$171.9M</span>
                        </div>
                      </span>
                    </div>
                    <div className="rates">
                      <div className="apy">
                        <span className="list-text light tvl-header">APR</span>
                        <span className="list-text tvl">262.53%</span>
                      </div>
                      <div className="apr">
                        <span className="list-text light tvl-header">
                          DAILY
                        </span>
                        <span className="list-text tvl">0.71%</span>
                      </div>
                    </div>
                  </div>
                  <div className="detail-area">
                    <div className="left-section">
                      <div className="balance">
                        <span className="header">
                          <span>LP</span>Balance
                        </span>
                        <div>
                          <div>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </div>
                          <div className="buttons">
                            <button className="btn-stake disabled">
                              Stake
                            </button>
                          </div>
                        </div>
                      </div>
                      <span className="description">
                        Add/Remove liquidity to the <strong>WBNB-BELT</strong>{" "}
                        pair on PancakeSwap to get<strong> WBNB-BELT LP</strong>{" "}
                        token(s).
                        <br />
                        Then stake those LP tokens on Belt.fi to receive BELT
                        rewards.
                      </span>
                      <div className="btn-container">
                        <button className="add-liquidity">
                          Add Liquidity on PancakeSwap
                        </button>
                        <button className="remove-liquidity">
                          Remove Liquidity on PancakeSwap
                        </button>
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="staked">
                        <span className="header">
                          <span>LP</span>Staked
                        </span>
                        <div>
                          <span>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </span>
                          <button className="btn-unstake disabled">
                            Unstake
                          </button>
                        </div>
                      </div>
                      <div className="earned">
                        <span className="header">
                          <span>Belt</span>Earned
                        </span>
                        <div>
                          <span>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </span>
                          <button className="btn-harvest disabled">
                            Harvest
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="belt-vaults">
              <span className="section-header">Belt Vaults</span>
              <ul className="vault-list">
                <li className="belt-single-vault ">
                  <div className="info-area">
                    <div className="list-text area">
                      <img src="https://s.belt.fi/status/BTC_icon.png" />
                      <div>
                        <span>
                          <span className="list-text pool-name">BTCB</span>
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$490.1M</span>
                        </div>
                      </div>
                    </div>
                    <div className="rates">
                      <div>
                        <div className="asset">
                          <span className="list-text light tvl-header">
                            My Asset
                          </span>
                          <span className="list-text tvl">-</span>
                        </div>
                      </div>
                      <div>
                        <div className="apy">
                          <span className="list-text light tvl-header">
                            Multi Vault APR
                          </span>
                          <span className="list-text tvl">20.70%</span>
                        </div>
                        <div className="apr">
                          <span className="list-text light tvl-header">
                            DAILY
                          </span>
                          <span className="list-text tvl">0.05%</span>
                        </div>
                      </div>
                    </div>
                    <img src="/images/icon/ic-arrow-down.svg" />
                  </div>
                  <div className="detail-area" style={{ height: "0px" }}>
                    <div className="top-area">
                      <div className="left-section">
                        <div className="balance">
                          <span className="header">
                            <span>beltBTC</span>BALANCE
                          </span>
                          <div>
                            <div>
                              <img src="https://s.belt.fi/status/beltBTC.png" />
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </div>
                            <div className="buttons approve">
                              <button className="btn-approve">Approve</button>
                              <button className="btn-stake disabled">
                                Stake
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="tab-layout">
                          <button className="selected">Deposit</button>
                          <button className>Withdrawal</button>
                        </div>
                        <div className="liquidity-controller">
                          <div className="add">
                            <div />
                            <ul>
                              <li className>
                                <div>
                                  <img src="https://s.belt.fi/status/BTC_icon.png" />
                                  <span className="token-name">BTCB</span>
                                </div>
                                <input
                                  className="token-amount"
                                  defaultValue={0.0}
                                />
                                <div className="balances">
                                  <span>BALANCE</span>
                                  <span>0.0000</span>
                                </div>
                              </li>
                            </ul>
                            <div className="information">
                              <span>
                                Receive:{" "}
                                <strong>0.0000 beltBTC ($0.0000)</strong>
                              </span>
                              <span>
                                Fee: <strong>0.00% ~ 0.11%</strong>
                              </span>
                              <span>
                                Max slippage: <strong>1%</strong>
                              </span>
                            </div>
                            <button className="btn-add-liquidity ">
                              DEPOSIT
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="right-section">
                        <div className="staked">
                          <span className="header">
                            <span>beltBTC</span>STAKED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-unstake disabled">
                              Unstake
                            </button>
                          </div>
                        </div>
                        <div className="earned">
                          <span className="header">
                            <span>BELT</span>EARNED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-harvest disabled">
                              Harvest
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btm-area">
                      <div className="vault-info">
                        <span>RUNNING STRATEGY</span>
                        <p>
                          <span className="total-apr">
                            <span>Multi Vault APR</span>
                            <span>20.7%</span>
                          </span>
                          <span className="base-apr">
                            <span>BASE APR</span>
                            <span>2.2%</span>
                          </span>
                          <span className="reward-apr">
                            <span>BELT APR</span>
                            <span>18.4%</span>
                          </span>
                        </p>
                      </div>
                      <div className="strategy-sticks">
                        <div
                          style={{
                            width: "90%",
                            height: "7px",
                            backgroundColor: "rgb(255, 209, 132)",
                          }}
                        />
                        <div
                          style={{
                            width: "10%",
                            height: "7px",
                            backgroundColor: "rgb(70, 198, 173)",
                          }}
                        />
                      </div>
                      <div className="strategy-list">
                        <ul>
                          <li className>
                            <img src="https://s.belt.fi/status/venus-icon.png" />
                            <div>
                              <strong>Venus</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>2.47%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>90.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/fortube-icon.png" />
                            <div>
                              <strong>Fortube</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>0.00%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>10.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="belt-single-vault ">
                  <div className="info-area">
                    <div className="list-text area">
                      <img src="https://s.belt.fi/status/ETH_icon.png" />
                      <div>
                        <span>
                          <span className="list-text pool-name">ETH</span>
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$380.0M</span>
                        </div>
                      </div>
                    </div>
                    <div className="rates">
                      <div>
                        <div className="asset">
                          <span className="list-text light tvl-header">
                            My Asset
                          </span>
                          <span className="list-text tvl">-</span>
                        </div>
                      </div>
                      <div>
                        <div className="apy">
                          <span className="list-text light tvl-header">
                            Multi Vault APR
                          </span>
                          <span className="list-text tvl">12.73%</span>
                        </div>
                        <div className="apr">
                          <span className="list-text light tvl-header">
                            DAILY
                          </span>
                          <span className="list-text tvl">0.03%</span>
                        </div>
                      </div>
                    </div>
                    <img src="/images/icon/ic-arrow-down.svg" />
                  </div>
                  <div className="detail-area" style={{ height: "0px" }}>
                    <div className="top-area">
                      <div className="left-section">
                        <div className="balance">
                          <span className="header">
                            <span>beltETH</span>BALANCE
                          </span>
                          <div>
                            <div>
                              <img src="https://s.belt.fi/status/beltETH.png" />
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </div>
                            <div className="buttons approve">
                              <button className="btn-approve">Approve</button>
                              <button className="btn-stake disabled">
                                Stake
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="tab-layout">
                          <button className="selected">Deposit</button>
                          <button className>Withdrawal</button>
                        </div>
                        <div className="liquidity-controller">
                          <div className="add">
                            <div />
                            <ul>
                              <li className>
                                <div>
                                  <img src="https://s.belt.fi/status/ETH_icon.png" />
                                  <span className="token-name">ETH</span>
                                </div>
                                <input
                                  className="token-amount"
                                  defaultValue={0.0}
                                />
                                <div className="balances">
                                  <span>BALANCE</span>
                                  <span>0.0000</span>
                                </div>
                              </li>
                            </ul>
                            <div className="information">
                              <span>
                                Receive:{" "}
                                <strong>0.0000 beltETH ($0.0000)</strong>
                              </span>
                              <span>
                                Fee: <strong>0.00% ~ 0.11%</strong>
                              </span>
                              <span>
                                Max slippage: <strong>1%</strong>
                              </span>
                            </div>
                            <button className="btn-add-liquidity ">
                              DEPOSIT
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="right-section">
                        <div className="staked">
                          <span className="header">
                            <span>beltETH</span>STAKED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-unstake disabled">
                              Unstake
                            </button>
                          </div>
                        </div>
                        <div className="earned">
                          <span className="header">
                            <span>BELT</span>EARNED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-harvest disabled">
                              Harvest
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btm-area">
                      <div className="vault-info">
                        <span>RUNNING STRATEGY</span>
                        <p>
                          <span className="total-apr">
                            <span>Multi Vault APR</span>
                            <span>12.7%</span>
                          </span>
                          <span className="base-apr">
                            <span>BASE APR</span>
                            <span>0.8%</span>
                          </span>
                          <span className="reward-apr">
                            <span>BELT APR</span>
                            <span>11.8%</span>
                          </span>
                        </p>
                      </div>
                      <div className="strategy-sticks">
                        <div
                          style={{
                            width: "45%",
                            height: "7px",
                            backgroundColor: "rgb(255, 209, 132)",
                          }}
                        />
                        <div
                          style={{
                            width: "10%",
                            height: "7px",
                            backgroundColor: "rgb(70, 198, 173)",
                          }}
                        />
                        <div
                          style={{
                            width: "45%",
                            height: "7px",
                            backgroundColor: "rgb(49, 199, 127)",
                          }}
                        />
                      </div>
                      <div className="strategy-list">
                        <ul>
                          <li className>
                            <img src="https://s.belt.fi/status/venus-icon.png" />
                            <div>
                              <strong>Venus</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>1.89%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>45.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/fortube-icon.png" />
                            <div>
                              <strong>Fortube</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>0.00%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>10.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/alpaca-icon.png" />
                            <div>
                              <strong>Alpaca</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>E-53.00%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>45.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="belt-single-vault ">
                  <div className="info-area">
                    <div className="list-text area">
                      <img src="https://s.belt.fi/status/BNB_icon.png" />
                      <div>
                        <span>
                          <span className="list-text pool-name">BNB</span>
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$219.2M</span>
                        </div>
                      </div>
                    </div>
                    <div className="rates">
                      <div>
                        <div className="asset">
                          <span className="list-text light tvl-header">
                            My Asset
                          </span>
                          <span className="list-text tvl">-</span>
                        </div>
                      </div>
                      <div>
                        <div className="apy">
                          <span className="list-text light tvl-header">
                            Multi Vault APR
                          </span>
                          <span className="list-text tvl">23.88%</span>
                        </div>
                        <div className="apr">
                          <span className="list-text light tvl-header">
                            DAILY
                          </span>
                          <span className="list-text tvl">0.06%</span>
                        </div>
                      </div>
                    </div>
                    <img src="/images/icon/ic-arrow-down.svg" />
                  </div>
                  <div className="detail-area" style={{ height: "0px" }}>
                    <div className="top-area">
                      <div className="left-section">
                        <div className="balance">
                          <span className="header">
                            <span>beltBNB</span>BALANCE
                          </span>
                          <div>
                            <div>
                              <img src="https://s.belt.fi/status/beltBNB.png" />
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </div>
                            <div className="buttons approve">
                              <button className="btn-approve">Approve</button>
                              <button className="btn-stake disabled">
                                Stake
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="tab-layout">
                          <button className="selected">Deposit</button>
                          <button className>Withdrawal</button>
                        </div>
                        <div className="liquidity-controller">
                          <div className="add">
                            <div />
                            <ul>
                              <li className>
                                <div>
                                  <img src="https://s.belt.fi/status/BNB_icon.png" />
                                  <span className="token-name">BNB</span>
                                </div>
                                <input
                                  className="token-amount"
                                  defaultValue={0.0}
                                />
                                <div className="balances">
                                  <span>BALANCE</span>
                                  <span>0.0000</span>
                                </div>
                              </li>
                            </ul>
                            <div className="information">
                              <span>
                                Receive:{" "}
                                <strong>0.0000 beltBNB ($0.0000)</strong>
                              </span>
                              <span>
                                Minimum Deposit Amount:{" "}
                                <strong>0.01 BNB</strong>
                              </span>
                              <span>
                                Fee: <strong>0.00% ~ 0.11%</strong>
                              </span>
                              <span>
                                Max slippage: <strong>1%</strong>
                              </span>
                            </div>
                            <button className="btn-add-liquidity ">
                              DEPOSIT
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="right-section">
                        <div className="staked">
                          <span className="header">
                            <span>beltBNB</span>STAKED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-unstake disabled">
                              Unstake
                            </button>
                          </div>
                        </div>
                        <div className="earned">
                          <span className="header">
                            <span>BELT</span>EARNED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-harvest disabled">
                              Harvest
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btm-area">
                      <div className="vault-info">
                        <span>RUNNING STRATEGY</span>
                        <p>
                          <span className="total-apr">
                            <span>Multi Vault APR</span>
                            <span>23.8%</span>
                          </span>
                          <span className="base-apr">
                            <span>BASE APR</span>
                            <span>2.8%</span>
                          </span>
                          <span className="reward-apr">
                            <span>BELT APR</span>
                            <span>21.0%</span>
                          </span>
                        </p>
                      </div>
                      <div className="strategy-sticks">
                        <div
                          style={{
                            width: "30%",
                            height: "7px",
                            backgroundColor: "rgb(255, 209, 132)",
                          }}
                        />
                        <div
                          style={{
                            width: "10%",
                            height: "7px",
                            backgroundColor: "rgb(70, 198, 173)",
                          }}
                        />
                        <div
                          style={{
                            width: "30%",
                            height: "7px",
                            backgroundColor: "rgb(17, 34, 91)",
                          }}
                        />
                        <div
                          style={{
                            width: "30%",
                            height: "7px",
                            backgroundColor: "rgb(49, 199, 127)",
                          }}
                        />
                      </div>
                      <div className="strategy-list">
                        <ul>
                          <li className>
                            <img src="https://s.belt.fi/status/venus-icon.png" />
                            <div>
                              <strong>Venus</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>4.89%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>30.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/fortube-icon.png" />
                            <div>
                              <strong>Fortube</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>0.06%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>10.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/alphahomora-icon.png" />
                            <div>
                              <strong>Alpha</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>4.45%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>30.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/alpaca-icon.png" />
                            <div>
                              <strong>Alpaca</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>E-53.00%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>30.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="belt-single-vault ">
                  <div className="info-area">
                    <div className="list-text area">
                      <img src="https://s.belt.fi/status/DAI_icon.png" />
                      <div>
                        <span>
                          <span className="list-text pool-name">DAI</span>
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$181.7M</span>
                        </div>
                      </div>
                    </div>
                    <div className="rates">
                      <div>
                        <div className="asset">
                          <span className="list-text light tvl-header">
                            My Asset
                          </span>
                          <span className="list-text tvl">-</span>
                        </div>
                      </div>
                      <div>
                        <div className="apy">
                          <span className="list-text light tvl-header">
                            Multi Vault APR
                          </span>
                          <span className="list-text tvl">1.57%</span>
                        </div>
                        <div className="apr">
                          <span className="list-text light tvl-header">
                            DAILY
                          </span>
                          <span className="list-text tvl">0.00%</span>
                        </div>
                      </div>
                    </div>
                    <img src="/images/icon/ic-arrow-down.svg" />
                  </div>
                  <div className="detail-area" style={{ height: "0px" }}>
                    <div className="top-area">
                      <div className="left-section">
                        <div className="balance">
                          <span className="header">
                            <span>beltDAI</span>BALANCE
                          </span>
                          <div>
                            <div>
                              <img src="https://s.belt.fi/status/beltDAI.png" />
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </div>
                            <div className="buttons ">
                              <button className="btn-stake disabled">
                                Stake
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="tab-layout">
                          <button className="selected">Deposit</button>
                          <button className>Withdrawal</button>
                        </div>
                        <div className="liquidity-controller">
                          <div className="add">
                            <div />
                            <ul>
                              <li className>
                                <div>
                                  <img src="https://s.belt.fi/status/DAI_icon.png" />
                                  <span className="token-name">DAI</span>
                                </div>
                                <input
                                  className="token-amount"
                                  defaultValue={0.0}
                                />
                                <div className="balances">
                                  <span>BALANCE</span>
                                  <span>0.0000</span>
                                </div>
                              </li>
                            </ul>
                            <div className="information">
                              <span>
                                Receive:{" "}
                                <strong>0.0000 beltDAI ($0.0000)</strong>
                              </span>
                              <span>
                                Fee: <strong>0.00% ~ 0.11%</strong>
                              </span>
                              <span>
                                Max slippage: <strong>1%</strong>
                              </span>
                            </div>
                            <button className="btn-add-liquidity ">
                              DEPOSIT
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="right-section">
                        <div className="staked">
                          <span className="header">
                            <span>beltDAI</span>STAKED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-unstake disabled">
                              Unstake
                            </button>
                          </div>
                        </div>
                        <div className="earned">
                          <span className="header">
                            <span>BELT</span>EARNED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-harvest disabled">
                              Harvest
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btm-area">
                      <div className="vault-info">
                        <span>RUNNING STRATEGY</span>
                        <p>
                          <span className="total-apr">
                            <span>Multi Vault APR</span>
                            <span>1.5%</span>
                          </span>
                          <span className="base-apr">
                            <span>BASE APR</span>
                            <span>1.5%</span>
                          </span>
                          <span className="reward-apr">
                            <span>BELT APR</span>
                            <span>0.0%</span>
                          </span>
                        </p>
                      </div>
                      <div className="strategy-sticks">
                        <div
                          style={{
                            width: "90%",
                            height: "7px",
                            backgroundColor: "rgb(255, 209, 132)",
                          }}
                        />
                        <div
                          style={{
                            width: "10%",
                            height: "7px",
                            backgroundColor: "rgb(70, 198, 173)",
                          }}
                        />
                      </div>
                      <div className="strategy-list">
                        <ul>
                          <li className>
                            <img src="https://s.belt.fi/status/venus-icon.png" />
                            <div>
                              <strong>Venus</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>1.71%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>90.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/fortube-icon.png" />
                            <div>
                              <strong>Fortube</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>0.28%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>10.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="belt-single-vault ">
                  <div className="info-area">
                    <div className="list-text area">
                      <img src="https://s.belt.fi/status/USDT_icon.png" />
                      <div>
                        <span>
                          <span className="list-text pool-name">USDT</span>
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$160.0M</span>
                        </div>
                      </div>
                    </div>
                    <div className="rates">
                      <div>
                        <div className="asset">
                          <span className="list-text light tvl-header">
                            My Asset
                          </span>
                          <span className="list-text tvl">-</span>
                        </div>
                      </div>
                      <div>
                        <div className="apy">
                          <span className="list-text light tvl-header">
                            Multi Vault APR
                          </span>
                          <span className="list-text tvl">8.86%</span>
                        </div>
                        <div className="apr">
                          <span className="list-text light tvl-header">
                            DAILY
                          </span>
                          <span className="list-text tvl">0.02%</span>
                        </div>
                      </div>
                    </div>
                    <img src="/images/icon/ic-arrow-down.svg" />
                  </div>
                  <div className="detail-area" style={{ height: "0px" }}>
                    <div className="top-area">
                      <div className="left-section">
                        <div className="balance">
                          <span className="header">
                            <span>beltUSDT</span>BALANCE
                          </span>
                          <div>
                            <div>
                              <img src="https://s.belt.fi/status/beltUSDT.png" />
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </div>
                            <div className="buttons ">
                              <button className="btn-stake disabled">
                                Stake
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="tab-layout">
                          <button className="selected">Deposit</button>
                          <button className>Withdrawal</button>
                        </div>
                        <div className="liquidity-controller">
                          <div className="add">
                            <div />
                            <ul>
                              <li className>
                                <div>
                                  <img src="https://s.belt.fi/status/USDT_icon.png" />
                                  <span className="token-name">USDT</span>
                                </div>
                                <input
                                  className="token-amount"
                                  defaultValue={0.0}
                                />
                                <div className="balances">
                                  <span>BALANCE</span>
                                  <span>0.0000</span>
                                </div>
                              </li>
                            </ul>
                            <div className="information">
                              <span>
                                Receive:{" "}
                                <strong>0.0000 beltUSDT ($0.0000)</strong>
                              </span>
                              <span>
                                Fee: <strong>0.00% ~ 0.11%</strong>
                              </span>
                              <span>
                                Max slippage: <strong>1%</strong>
                              </span>
                            </div>
                            <button className="btn-add-liquidity ">
                              DEPOSIT
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="right-section">
                        <div className="staked">
                          <span className="header">
                            <span>beltUSDT</span>STAKED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-unstake disabled">
                              Unstake
                            </button>
                          </div>
                        </div>
                        <div className="earned">
                          <span className="header">
                            <span>BELT</span>EARNED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-harvest disabled">
                              Harvest
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btm-area">
                      <div className="vault-info">
                        <span>RUNNING STRATEGY</span>
                        <p>
                          <span className="total-apr">
                            <span>Multi Vault APR</span>
                            <span>8.8%</span>
                          </span>
                          <span className="base-apr">
                            <span>BASE APR</span>
                            <span>8.8%</span>
                          </span>
                          <span className="reward-apr">
                            <span>BELT APR</span>
                            <span>0.0%</span>
                          </span>
                        </p>
                      </div>
                      <div className="strategy-sticks">
                        <div
                          style={{
                            width: "45%",
                            height: "7px",
                            backgroundColor: "rgb(255, 209, 132)",
                          }}
                        />
                        <div
                          style={{
                            width: "10%",
                            height: "7px",
                            backgroundColor: "rgb(70, 198, 173)",
                          }}
                        />
                        <div
                          style={{
                            width: "45%",
                            height: "7px",
                            backgroundColor: "rgb(200, 99, 218)",
                          }}
                        />
                      </div>
                      <div className="strategy-list">
                        <ul>
                          <li className>
                            <img src="https://s.belt.fi/status/venus-icon.png" />
                            <div>
                              <strong>Venus</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>6.74%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>45.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/fortube-icon.png" />
                            <div>
                              <strong>Fortube</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>1.01%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>10.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/ellipsis-icon.png" />
                            <div>
                              <strong>Ellipsis</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>12.73%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>45.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="belt-single-vault ">
                  <div className="info-area">
                    <div className="list-text area">
                      <img src="https://s.belt.fi/status/USDC_icon.png" />
                      <div>
                        <span>
                          <span className="list-text pool-name">USDC</span>
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$326.5M</span>
                        </div>
                      </div>
                    </div>
                    <div className="rates">
                      <div>
                        <div className="asset">
                          <span className="list-text light tvl-header">
                            My Asset
                          </span>
                          <span className="list-text tvl">-</span>
                        </div>
                      </div>
                      <div>
                        <div className="apy">
                          <span className="list-text light tvl-header">
                            Multi Vault APR
                          </span>
                          <span className="list-text tvl">9.57%</span>
                        </div>
                        <div className="apr">
                          <span className="list-text light tvl-header">
                            DAILY
                          </span>
                          <span className="list-text tvl">0.02%</span>
                        </div>
                      </div>
                    </div>
                    <img src="/images/icon/ic-arrow-down.svg" />
                  </div>
                  <div className="detail-area" style={{ height: "0px" }}>
                    <div className="top-area">
                      <div className="left-section">
                        <div className="balance">
                          <span className="header">
                            <span>beltUSDC</span>BALANCE
                          </span>
                          <div>
                            <div>
                              <img src="https://s.belt.fi/status/beltUSDC.png" />
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </div>
                            <div className="buttons ">
                              <button className="btn-stake disabled">
                                Stake
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="tab-layout">
                          <button className="selected">Deposit</button>
                          <button className>Withdrawal</button>
                        </div>
                        <div className="liquidity-controller">
                          <div className="add">
                            <div />
                            <ul>
                              <li className>
                                <div>
                                  <img src="https://s.belt.fi/status/USDC_icon.png" />
                                  <span className="token-name">USDC</span>
                                </div>
                                <input
                                  className="token-amount"
                                  defaultValue={0.0}
                                />
                                <div className="balances">
                                  <span>BALANCE</span>
                                  <span>0.0000</span>
                                </div>
                              </li>
                            </ul>
                            <div className="information">
                              <span>
                                Receive:{" "}
                                <strong>0.0000 beltUSDC ($0.0000)</strong>
                              </span>
                              <span>
                                Fee: <strong>0.00% ~ 0.11%</strong>
                              </span>
                              <span>
                                Max slippage: <strong>1%</strong>
                              </span>
                            </div>
                            <button className="btn-add-liquidity ">
                              DEPOSIT
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="right-section">
                        <div className="staked">
                          <span className="header">
                            <span>beltUSDC</span>STAKED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-unstake disabled">
                              Unstake
                            </button>
                          </div>
                        </div>
                        <div className="earned">
                          <span className="header">
                            <span>BELT</span>EARNED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-harvest disabled">
                              Harvest
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btm-area">
                      <div className="vault-info">
                        <span>RUNNING STRATEGY</span>
                        <p>
                          <span className="total-apr">
                            <span>Multi Vault APR</span>
                            <span>9.5%</span>
                          </span>
                          <span className="base-apr">
                            <span>BASE APR</span>
                            <span>9.5%</span>
                          </span>
                          <span className="reward-apr">
                            <span>BELT APR</span>
                            <span>0.0%</span>
                          </span>
                        </p>
                      </div>
                      <div className="strategy-sticks">
                        <div
                          style={{
                            width: "45%",
                            height: "7px",
                            backgroundColor: "rgb(255, 209, 132)",
                          }}
                        />
                        <div
                          style={{
                            width: "45%",
                            height: "7px",
                            backgroundColor: "rgb(200, 99, 218)",
                          }}
                        />
                        <div
                          style={{
                            width: "10%",
                            height: "7px",
                            backgroundColor: "rgb(70, 198, 173)",
                          }}
                        />
                      </div>
                      <div className="strategy-list">
                        <ul>
                          <li className>
                            <img src="https://s.belt.fi/status/venus-icon.png" />
                            <div>
                              <strong>Venus</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>8.50%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>45.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/ellipsis-icon.png" />
                            <div>
                              <strong>Ellipsis</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>12.73%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>45.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/fortube-icon.png" />
                            <div>
                              <strong>Fortube</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>0.15%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>10.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="belt-single-vault ">
                  <div className="info-area">
                    <div className="list-text area">
                      <img src="https://s.belt.fi/status/BUSD_icon.png" />
                      <div>
                        <span>
                          <span className="list-text pool-name">BUSD</span>
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$356.1M</span>
                        </div>
                      </div>
                    </div>
                    <div className="rates">
                      <div>
                        <div className="asset">
                          <span className="list-text light tvl-header">
                            My Asset
                          </span>
                          <span className="list-text tvl">-</span>
                        </div>
                      </div>
                      <div>
                        <div className="apy">
                          <span className="list-text light tvl-header">
                            Multi Vault APR
                          </span>
                          <span className="list-text tvl">5.64%</span>
                        </div>
                        <div className="apr">
                          <span className="list-text light tvl-header">
                            DAILY
                          </span>
                          <span className="list-text tvl">0.01%</span>
                        </div>
                      </div>
                    </div>
                    <img src="/images/icon/ic-arrow-down.svg" />
                  </div>
                  <div className="detail-area" style={{ height: "0px" }}>
                    <div className="top-area">
                      <div className="left-section">
                        <div className="balance">
                          <span className="header">
                            <span>beltBUSD</span>BALANCE
                          </span>
                          <div>
                            <div>
                              <img src="https://s.belt.fi/status/beltBUSD.png" />
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </div>
                            <div className="buttons ">
                              <button className="btn-stake disabled">
                                Stake
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="tab-layout">
                          <button className="selected">Deposit</button>
                          <button className>Withdrawal</button>
                        </div>
                        <div className="liquidity-controller">
                          <div className="add">
                            <div />
                            <ul>
                              <li className>
                                <div>
                                  <img src="https://s.belt.fi/status/BUSD_icon.png" />
                                  <span className="token-name">BUSD</span>
                                </div>
                                <input
                                  className="token-amount"
                                  defaultValue={0.0}
                                />
                                <div className="balances">
                                  <span>BALANCE</span>
                                  <span>0.0000</span>
                                </div>
                              </li>
                            </ul>
                            <div className="information">
                              <span>
                                Receive:{" "}
                                <strong>0.0000 beltBUSD ($0.0000)</strong>
                              </span>
                              <span>
                                Fee: <strong>0.00% ~ 0.11%</strong>
                              </span>
                              <span>
                                Max slippage: <strong>1%</strong>
                              </span>
                            </div>
                            <button className="btn-add-liquidity ">
                              DEPOSIT
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="right-section">
                        <div className="staked">
                          <span className="header">
                            <span>beltBUSD</span>STAKED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-unstake disabled">
                              Unstake
                            </button>
                          </div>
                        </div>
                        <div className="earned">
                          <span className="header">
                            <span>BELT</span>EARNED
                          </span>
                          <div>
                            <span>
                              <span className="amount">0.0000</span>
                              <span className="converted">$0.0000</span>
                            </span>
                            <button className="btn-harvest disabled">
                              Harvest
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btm-area">
                      <div className="vault-info">
                        <span>RUNNING STRATEGY</span>
                        <p>
                          <span className="total-apr">
                            <span>Multi Vault APR</span>
                            <span>5.6%</span>
                          </span>
                          <span className="base-apr">
                            <span>BASE APR</span>
                            <span>5.6%</span>
                          </span>
                          <span className="reward-apr">
                            <span>BELT APR</span>
                            <span>0.0%</span>
                          </span>
                        </p>
                      </div>
                      <div className="strategy-sticks">
                        <div
                          style={{
                            width: "30%",
                            height: "7px",
                            backgroundColor: "rgb(255, 209, 132)",
                          }}
                        />
                        <div
                          style={{
                            width: "10%",
                            height: "7px",
                            backgroundColor: "rgb(70, 198, 173)",
                          }}
                        />
                        <div
                          style={{
                            width: "30%",
                            height: "7px",
                            backgroundColor: "rgb(49, 199, 127)",
                          }}
                        />
                        <div
                          style={{
                            width: "30%",
                            height: "7px",
                            backgroundColor: "rgb(200, 99, 218)",
                          }}
                        />
                      </div>
                      <div className="strategy-list">
                        <ul>
                          <li className>
                            <img src="https://s.belt.fi/status/venus-icon.png" />
                            <div>
                              <strong>Venus</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>5.96%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>30.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/fortube-icon.png" />
                            <div>
                              <strong>Fortube</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>0.32%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>10.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/alpaca-icon.png" />
                            <div>
                              <strong>Alpaca</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>E-53.00%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>30.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                          <li className>
                            <img src="https://s.belt.fi/status/ellipsis-icon.png" />
                            <div>
                              <strong>Ellipsis</strong>
                              <span className="apr">
                                <span>APY</span>
                                <span>12.73%</span>
                              </span>
                              <span>
                                <span>RATIO</span>
                                <span>30.00%</span>
                              </span>
                              <span className="status">
                                <span>STATUS</span>
                                <span className>ACTIVE</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="belt-lp-staking">
              <span className="section-header">Belt LP Staking</span>
              <ul className="pool-list">
                <li className="belt-lp-staking-pool ">
                  <div className="info-area">
                    <div className="list-text area">
                      <img src="https://s.belt.fi/status/venus_gu.png" />
                      <div>
                        <span>
                          <span className="list-text pool-name">venus</span>
                          <span className="list-text want-name">
                            (v)USDT-(v)USDC-(v)BUSD-(v)DAI
                          </span>
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$18.1M</span>
                        </div>
                      </div>
                    </div>
                    <div className="rates">
                      <div className="apy">
                        <span className="list-text light tvl-header">APR</span>
                        <span className="list-text tvl">22.28%</span>
                      </div>
                      <div className="apr">
                        <span className="list-text light tvl-header">
                          DAILY
                        </span>
                        <span className="list-text tvl">0.06%</span>
                      </div>
                    </div>
                    <img src="/images/icon/ic-arrow-down.svg" />
                  </div>
                  <div className="detail-area" style={{ height: "0px" }}>
                    <div className="left-section">
                      <div className="balance">
                        <span className="header">
                          <span>venus BLP</span>Balance
                        </span>
                        <div>
                          <div>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </div>
                          <div className="buttons approve">
                            <button className="btn-stake disabled">
                              Stake
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="tab-layout">
                        <button className="selected">Add Liquidity</button>
                        <button className>Remove Liquidity</button>
                      </div>
                      <div className="liquidity-controller">
                        <div className="add">
                          <div />
                          <ul>
                            <li className>
                              <img src="/images/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.svg" />
                              <span className="token-name">DAI</span>
                              <input
                                className="token-amount"
                                defaultValue={0.0}
                              />
                              <div className="balances">
                                <span>BALANCE</span>
                                <span>0.0000</span>
                              </div>
                            </li>
                            <li className>
                              <img src="/images/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.svg" />
                              <span className="token-name">USDC</span>
                              <input
                                className="token-amount"
                                defaultValue={0.0}
                              />
                              <div className="balances">
                                <span>BALANCE</span>
                                <span>0.0000</span>
                              </div>
                            </li>
                            <li className>
                              <img src="/images/token/0x55d398326f99059ff775485246999027b3197955.svg" />
                              <span className="token-name">USDT</span>
                              <input
                                className="token-amount"
                                defaultValue={0.0}
                              />
                              <div className="balances">
                                <span>BALANCE</span>
                                <span>0.0000</span>
                              </div>
                            </li>
                            <li className>
                              <img src="/images/token/0xe9e7cea3dedca5984780bafc599bd69add087d56.svg" />
                              <span className="token-name">BUSD</span>
                              <input
                                className="token-amount"
                                defaultValue={0.0}
                              />
                              <div className="balances">
                                <span>BALANCE</span>
                                <span>0.0000</span>
                              </div>
                            </li>
                          </ul>
                          <div className="information">
                            <span>
                              Receive:{" "}
                              <strong>0.0000 venus BLP ($0.0000)</strong>
                            </span>
                            <span>
                              Price impact: <strong>0.0000%</strong>
                            </span>
                            <span>
                              Fee: <strong>0.1%</strong>
                            </span>
                            <span>
                              Max slippage: <strong>1%</strong>
                            </span>
                          </div>
                          <button className="btn-add-liquidity error">
                            Currently Unavailable
                          </button>
                          <span className="liquidity-info" />
                        </div>
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="staked">
                        <span className="header">
                          <span>venus BLP</span>Staked
                        </span>
                        <div>
                          <span>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </span>
                          <button className="btn-unstake disabled">
                            Unstake
                          </button>
                        </div>
                      </div>
                      <div className="earned">
                        <span className="header">
                          <span>BELT</span>Earned
                        </span>
                        <div>
                          <span>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </span>
                          <button className="btn-harvest disabled">
                            Harvest
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="belt-lp-staking-pool ">
                  <div className="info-area">
                    <div className="list-text area">
                      <img src="https://s.belt.fi/status/belt_gu.png" />
                      <div>
                        <span>
                          <span className="list-text pool-name">4Belt</span>
                          <span className="list-text want-name">
                            (belt)USDT-(belt)USDC-(belt)BUSD-(belt)DAI
                          </span>
                        </span>
                        <div className="tvl">
                          <span>TVL</span>
                          <span className="tvl">$1,021.9M</span>
                        </div>
                      </div>
                    </div>
                    <div className="rates">
                      <div className="apy">
                        <span className="list-text light tvl-header">APR</span>
                        <span className="list-text tvl">35.42%</span>
                      </div>
                      <div className="apr">
                        <span className="list-text light tvl-header">
                          DAILY
                        </span>
                        <span className="list-text tvl">0.09%</span>
                      </div>
                    </div>
                    <img src="/images/icon/ic-arrow-down.svg" />
                  </div>
                  <div className="detail-area" style={{ height: "0px" }}>
                    <div className="left-section">
                      <div className="balance">
                        <span className="header">
                          <span>4Belt BLP</span>Balance
                        </span>
                        <div>
                          <div>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </div>
                          <div className="buttons approve">
                            <button className="btn-stake disabled">
                              Stake
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="tab-layout">
                        <button className="selected">Add Liquidity</button>
                        <button className>Remove Liquidity</button>
                      </div>
                      <div className="liquidity-controller">
                        <div className="add">
                          <div />
                          <ul>
                            <li className>
                              <img src="/images/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.svg" />
                              <span className="token-name">DAI</span>
                              <input
                                className="token-amount"
                                defaultValue={0.0}
                              />
                              <div className="balances">
                                <span>BALANCE</span>
                                <span>0.0000</span>
                              </div>
                            </li>
                            <li className>
                              <img src="/images/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.svg" />
                              <span className="token-name">USDC</span>
                              <input
                                className="token-amount"
                                defaultValue={0.0}
                              />
                              <div className="balances">
                                <span>BALANCE</span>
                                <span>0.0000</span>
                              </div>
                            </li>
                            <li className>
                              <img src="/images/token/0x55d398326f99059ff775485246999027b3197955.svg" />
                              <span className="token-name">USDT</span>
                              <input
                                className="token-amount"
                                defaultValue={0.0}
                              />
                              <div className="balances">
                                <span>BALANCE</span>
                                <span>0.0000</span>
                              </div>
                            </li>
                            <li className>
                              <img src="/images/token/0xe9e7cea3dedca5984780bafc599bd69add087d56.svg" />
                              <span className="token-name">BUSD</span>
                              <input
                                className="token-amount"
                                defaultValue={0.0}
                              />
                              <div className="balances">
                                <span>BALANCE</span>
                                <span>0.0000</span>
                              </div>
                            </li>
                          </ul>
                          <div className="information">
                            <span>
                              Receive:{" "}
                              <strong>0.0000 4Belt BLP ($0.0000)</strong>
                            </span>
                            <span>
                              Price impact: <strong>0.0000%</strong>
                            </span>
                            <span>
                              Fee: <strong>0.00% ~ 0.11%</strong>
                            </span>
                            <span>
                              Max slippage: <strong>1%</strong>
                            </span>
                          </div>
                          <button className="btn-add-liquidity ">
                            Add Liquidity
                          </button>
                          <span className="liquidity-info" />
                        </div>
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="staked">
                        <span className="header">
                          <span>4Belt BLP</span>Staked
                        </span>
                        <div>
                          <span>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </span>
                          <button className="btn-unstake disabled">
                            Unstake
                          </button>
                        </div>
                      </div>
                      <div className="earned">
                        <span className="header">
                          <span>BELT</span>Earned
                        </span>
                        <div>
                          <span>
                            <span className="amount">0.0000</span>
                            <span className="converted">$0</span>
                          </span>
                          <button className="btn-harvest disabled">
                            Harvest
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <button className="go-top">
              <img src="/images/icon/ic-top.svg" />
            </button>
          </div>
          <footer id="main-footer">
            <div>
              <img src="/images/logo/ozys-logo.svg" />
              <span>ozys PTE, Ltd</span>
              <p>ⓒ ozys Pte. Ltd., All Rights Reserved</p>
              <p className="contact">support@belt.fi</p>
              <ul className="sns-list">
                <li>
                  <span className="blind" />
                </li>
                <li>
                  <span className="blind" />
                </li>
                <li>
                  <span className="blind" />
                </li>
                <li>
                  <span className="blind" />
                </li>
                <li>
                  <span className="blind" />
                </li>
              </ul>
            </div>
          </footer>
        </section>
      );

}

export default App;
