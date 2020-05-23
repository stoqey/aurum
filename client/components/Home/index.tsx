import React from 'react';
import { Portfolios } from '../Portfolios';

export class Home extends React.Component {
	render() {
		return (
			<div className="main-block">
				{/* Left side profit pills */}
				<div className="block-item side side-left">
					<div className="left-appl-list">
						<div className="single-appl">APPL</div>
						<div className="single-appl">APPL</div>
						<div className="single-appl">APPL</div>
						<div className="single-appl">APPL</div>
						<div className="single-appl">APPL</div>
					</div>
				</div>
				<div className="block-item center-block">
					{/* Account details + search */}
					<div className="center-block-upper">
						<div className="info-block">
							<p className="text-1">ETH / USDT</p>
							<h5>194.58<span>$194.58</span></h5>
							<h6><span>+3.78%</span> Volume: 167.567.635.51 USDT </h6>
						</div>

						<div className="search-block">
							<div className="search-container">
								<form className="searchform">
									<input type="text" name="search" />
									<img src="images/search.png" alt="search" />
									<button type="submit"></button>
								</form>
								<form className="radio-search">
									<label className="label-con"><strong>IB</strong>
										<input type="radio" defaultChecked name="radio" />
										<span className="checkmark"></span>
									</label>
									<label className="label-con">Finnhub
									  <input type="radio" name="radio" />
										<span className="checkmark"></span>
									</label>
									<label className="label-con">Finnhub
									  <input type="radio" name="radio" />
										<span className="checkmark"></span>
									</label>
									<label className="label-con">Finn
									  <input type="radio" name="radio" />
										<span className="checkmark"></span>
									</label>
								</form>
							</div>
						</div>
					</div>

					{/* Portfolios here + Screener whitelist */}
					<div className="center-block-down">
						{/* Portfolios */}
						<Portfolios />

						{/* Screener whitelist */}
						<div className="right-sm">
							<div className="single-right-sm">
								<h4>AAPL</h4>
								<h5>Profit <span>1200</span></h5>
								<div className="blink-btn red-blink"></div>
								<div className="blink-btn green-blink"></div>
							</div>
							<div className="single-right-sm">
								<h4>AAPL</h4>
								<h5>Profit <span>1200</span></h5>
								<div className="blink-btn red-blink"></div>
								<div className="blink-btn green-blink"></div>
							</div>
							<div className="single-right-sm active">
								<h4>AAPL</h4>
								<h5>Profit <span>1200</span></h5>
								<div className="blink-btn red-blink"></div>
								<div className="blink-btn green-blink"></div>
							</div>
							<div className="single-right-sm">
								<h4>AAPL</h4>
								<h5>Profit <span>1200</span></h5>
								<div className="blink-btn red-blink"></div>
								<div className="blink-btn green-blink"></div>
							</div>
							<div className="single-right-sm active">
								<h4>AAPL</h4>
								<h5>Profit <span>1200</span></h5>
								<div className="blink-btn red-blink"></div>
								<div className="blink-btn green-blink"></div>
							</div>
							<div className="single-right-sm">
								<h4>AAPL</h4>
								<h5>Profit <span>1200</span></h5>
								<div className="blink-btn red-blink"></div>
								<div className="blink-btn green-blink"></div>
							</div>
							<div className="single-right-sm">
								<h4>AAPL</h4>
								<h5>Profit <span>1200</span></h5>
								<div className="blink-btn red-blink"></div>
								<div className="blink-btn green-blink"></div>
							</div>
							<div className="single-right-sm">
								<h4>AAPL</h4>
								<h5>Profit <span>1200</span></h5>
								<div className="blink-btn red-blink"></div>
								<div className="blink-btn green-blink"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Right size loss pills */}
				<div className="block-item side side-right"></div>
			</div>
		);
	}
}

export default Home;