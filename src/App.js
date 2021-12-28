import React, { useState } from "react";
import "./App.css";

function App() {
	const [update, setUpdate] = useState(0);
	const [update2, setUpdate2] = useState(0);
	const [rs, setRs] = useState(0);
	const [rs2, setRs2] = useState(0);
	const [productAmount, setProductAmount] = useState(0);

	const increase = () => {
		if (update >= 5) {
			document.getElementById("inputID").style.backgroundColor = "red";
			document.getElementById("inputID").style.color = "white";
			alert("Maximum 5 quantity is Allowed");
		} else {
			setUpdate(update + 1);
			setRs(rs + 15);
			setProductAmount(productAmount + 15);
		}
	};
	const decrease = () => {
		if (update < 1) {
			alert("not Valid");
		} else {
			document.getElementById("inputID").style.backgroundColor = "white";
			document.getElementById("inputID").style.color = "black";
			setUpdate(update - 1);
			setRs(rs - 15);
			setProductAmount(productAmount - 15);
		}
	};

	const increaseValue = () => {
		if (update2 >= 5) {
			document.getElementById("inputID2").style.backgroundColor = "red";
			document.getElementById("inputID2").style.color = "white";
			alert("Maximum 5 quantity is Allowed");
		} else {
			setUpdate2(update2 + 1);
			setRs2(rs2 + 15);
			setProductAmount(productAmount + 15);
		}
	};
	const decreaseValue = () => {
		if (update2 < 1) {
			alert("not Valid");
		} else {
			document.getElementById("inputID2").style.backgroundColor = "white";
			document.getElementById("inputID2").style.color = "black";
			setUpdate2(update2 - 1);
			setRs2(rs2 - 15);
			setProductAmount(productAmount - 15);
		}
	};
	const discount = () => {
		if (document.getElementById("disCountCode1").value === "Ayyan") {
			setProductAmount(productAmount - 20);
			document.getElementById("errorTrw").innerHTML = "Hurray! code is valid";
		} else {
			document.getElementById("errorTrw").innerHTML = "Code is not valid";
			alert("You type Wrong Code");
		}
	};

	const handleKey = (e) => {
		if (e.keyCode == 13) {
			e.preventDefault();
			discount();
		}
	};
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-8 mx-auto'>
					<div className='row mt-5 '>
						{/* left side */}
						<div className='col-md-12 mx-auto p-3 shopingCard'>
							<div className='card p-4 '>
								<h2 className='py-4 font-weight-bold'>Cart (2 items)</h2>
								<div className='row'>
									{/* cart image */}
									<div className='col-md-4 imgDiv '>
										<img src='1.jpg' alt='shirt' className='img-fluid' />
									</div>
									<div className='col-md-8 mx-auto px-4 mt-2'>
										<div className='row'>
											{/* name */}
											<div className='col-md-6 cardTitle'>
												<h2 className='mb-4 shirtClass '> White Shirt</h2>
												<h5 className='mb-2'>Shirt : white</h5>
												<h5 className='mb-2'>Color : white</h5>
												<h5 className='mb-3'>Size : Medium</h5>
											</div>
											<div className='col-md-6'>
												<ul class='pagination justify-content-end quantity setQuantity'>
													<li class='page-item'>
														<button class='page-link' onClick={decrease}>
															<i className='fas fa-minus'></i>
														</button>
													</li>
													<li class='page-item'>
														<input
															disabled
															type='text'
															id='inputID'
															value={update}
															min='1'
															max='5'
															class='page-link inputClass'
														/>
													</li>
													<li class='page-item'>
														<button class='page-link' onClick={increase}>
															<i class='fas fa-plus'></i>
														</button>
													</li>
												</ul>
											</div>
										</div>
										{/* items */}
										<div className='row'>
											<div className='col-md-9 items'>
												<p>
													<i className='fas fa-trash  '>
														{" "}
														<span className='fnt'> Remove item </span>
													</i>
												</p>
												<p>
													<i className=' fas fa-heart '>
														{" "}
														<span className='fnt'> Move to wish list </span>
													</i>
												</p>
											</div>
											<div className='col-md-3 d-flex justify-content-end price'>
												<h5>
													$<span> {` ${rs === 0 ? ` ${rs}.00  ` : `${rs}  `}`}</span>
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr />
							{/* 2nd Card */}
							<div className='card p-4 '>
								<div className='row'>
									{/* cart image */}
									<div className='col-md-4 imgDiv '>
										<img src='2.jpg' alt='shirt' className='img-fluid' />
									</div>
									<div className='col-md-8 mx-auto px-4 mt-2'>
										<div className='row'>
											{/* name */}
											<div className='col-md-6 cardTitle'>
												<h2 className='mb-4 shirtClass '> Blue Shirt</h2>
												<h5 className='mb-2'>Shirt : Blue</h5>
												<h5 className='mb-2'>Color : Blue</h5>
												<h5 className='mb-3'>Size : Medium</h5>
											</div>
											<div className='col-md-6'>
												<ul class='pagination justify-content-end quantity setQuantity'>
													<li class='page-item'>
														<button class='page-link' onClick={decreaseValue}>
															<i className='fas fa-minus'></i>
														</button>
													</li>
													<li class='page-item'>
														<input
															disabled
															type='text'
															id='inputID2'
															value={update2}
															min='1'
															max='5'
															class='page-link inputClass'
														/>
													</li>
													<li class='page-item'>
														<button class='page-link' onClick={increaseValue}>
															<i class='fas fa-plus'></i>
														</button>
													</li>
												</ul>
											</div>
										</div>
										{/* items */}
										<div className='row'>
											<div className='col-md-9 items'>
												<p>
													<i className='fas fa-trash  '>
														{" "}
														<span className='fnt'> Remove item </span>
													</i>
												</p>
												<p>
													<i className=' fas fa-heart '>
														{" "}
														<span className='fnt'> Move to wish list </span>
													</i>
												</p>
											</div>
											<div className='col-md-3 d-flex justify-content-end price'>
												<h5>
													$<span> {` ${rs === 0 ? ` ${rs}.00  ` : `${rs}  `}`}</span>
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* right Side */}
					</div>
				</div>
				{/* right Side */}
				<div className='col-md-4 mx-auto mt-5'>
					<div className='rightSide p-3'>
						<h2 className='productName mb-5'>The Total amount of</h2>
						<div className='priceClass d-flex justify-content-between'>
							<p className='priceClass d-flex  '>product Amount</p>
							<p>
								$<span>{`${productAmount < 0 ? 0 : productAmount}`}</span>
							</p>
						</div>
						<div className='priceClass d-flex justify-content-between'>
							<p className='priceClass d-flex  '>Shipping Charge</p>
							<p>
								$<span>50.00</span>
							</p>
						</div>
						<hr />
						<div className='totalAmount d-flex justify-content-between font-weight-bold'>
							<p>Total amount (including VAT)</p>
							<p>
								$<span>{`${productAmount + 50}`}</span>
							</p>
						</div>
						{/* <button className="btn btn-primary" >CHECKOUT</button> */}
					</div>
					{/* Discount Part */}
					<div className='disCount mt-3'>
						<div className='card'>
							<div className='card-body'>
								<a className='d-flex justify-content-between' data-toggle='collapse' href='#collapseExample'>
									Add a Discount Code (optional)
									<span>
										<i className='fas fa-chevron-down pt-1'></i>
									</span>
								</a>
								<div className='collapse' id='collapseExample'>
									<div className='mt-3'>
										<input
											type='text'
											id='disCountCode1'
											className='form-control font-weight-bold'
											onKeyDown={handleKey}
											placeholder='Enter the discount Code'
										/>
										<small id='errorTrw' className='text-dark mt-3'>
											Ayyan
										</small>
									</div>
									<button className='btn btn-primary btn-sm mt-3' onClick={discount}>
										Apply
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* Discount End */}
					<div className='disCount mt-3 p-3'>
						<div className='pt-4'>
							<h6 className='mb-4'>Expected Delivery Date</h6>
							<p style={{ color: "gray" }}>1 feb 2021 - 1 March 2021</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
