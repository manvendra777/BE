import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import step1 from './step1.png'
import step2 from './step2.png'
import step3 from './step3.png'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
class BusinessEvalution extends React.Component {

	render() {
		return (<div ><Card style={{ width: '50%', marginLeft: '18%', marginRight: 'auto' }}>
			<Typography variant="h5" color='primary' style={{ backgroundColor: '#e8eaf6', padding: 10 }} gutterBottom>
				BUSINESS VALUATION CALCULATOR
			</Typography>
			<Container style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
				<form>
					<br />
					<h4 style={{ marginTop: 10, color: "#1a237e" }} >Step 1: Determine the Cash Flow of the business</h4><br /><br />
					<table>
						<tbody>
							<tr>
								<th>Sales</th>
								<td>
									₹ <input type="text" value="" />
								</td>
								<td>₹ <input type="text" value="" /></td>

							</tr>
							<tr>
								<th>Costs of Goods Sold</th>
								<td>₹ <input type="text" value="" /></td>
								<td>₹ <input type="text" value="" /></td>

							</tr>
							<tr>
								<th>Operating Expenses</th>
								<td>₹ <input type="text" value="" /></td>
								<td>₹ <input type="text" value="" /></td>

							</tr>
							<tr>
								<th colspan="10"><i>ADD BACKS</i></th>
							</tr>
							<tr>
								<th>Officer Salaries</th>
								<td>₹ <input type="text" value="" /></td>
								<td>₹ <input type="text" value="" /></td>

							</tr>
							<tr>
								<th>Depreciation</th>
								<td>₹ <input type="text" value="" /></td>
								<td>₹ <input type="text" value="" /></td>

							</tr>
							<tr>
								<th>Interest</th>
								<td>₹ <input type="text" value="" /></td>
								<td>₹ <input type="text" value="" /></td>

							</tr>
							<tr>
								<th>Other Expenses</th>
								<td>₹ <input type="text" value="" /></td>
								<td>₹ <input type="text" value="" /></td>

							</tr>
						</tbody>
					</table>
					<br />
					<h4 style={{ marginTop: 10, color: "#1a237e" }}>Step 2: Determine the Multiple of Earnings to Use</h4><br /><br />
					<div class="form-row"><label for="details.imoe" field="details.imoe">Industry:</label><div class="form-item"><select class="form-control" name="details[imoe]">
						<option value="0" selected=""></option>
						<option value="78">Agriculture</option>
						<option value="129">Automotive</option>
						<option value="124">- Auto Body</option>
						<option value="42">- Auto Repair, Parts &amp; Services</option>
						<option value="22">- Automotive Dealers</option>
						<option value="122">- Car Wash</option>
						<option value="25">- Gasoline Service Stations</option>
						<option value="125">- Wrecking Yard</option>
						<option value="80">Communications</option>
						<option value="74">Construction</option>
						<option value="75">- Building</option>
						<option value="76">- Heavy</option>
						<option value="77">- Special Trades</option>
						<option value="136">eCommerce</option>
						<option value="130">Entertainment</option>
						<option value="102">- Entertainment/Film Production Industries</option>
						<option value="4">Manufacturing</option>
						<option value="85">- Apparel &amp; Finished Fabrics</option>
						<option value="135">- Aviation &amp; Aerospace</option>
						<option value="90">- Chemicals &amp; Allied Products</option>
						<option value="98">- Electronic &amp; Electrical Equipment</option>
						<option value="96">- Fabricated Metal Products</option>
						<option value="82">- Food &amp; Kindred Products</option>
						<option value="87">- Furniture &amp; Fixtures</option>
						<option value="97">- Industrial &amp; Commercial Machinery</option>
						<option value="93">- Leather &amp; Leather Products</option>
						<option value="86">- Lumber &amp; Wood Products</option>
						<option value="100">- Measuring &amp; Analyzing Instruments</option>
						<option value="101">- Miscellaneous Manufacturing</option>
						<option value="88">- Paper &amp; Allied Products</option>
						<option value="119">- Personal Care Products</option>
						<option value="91">- Petroleum Refining</option>
						<option value="95">- Primary Metal Industries</option>
						<option value="89">- Printing,Publishing</option>
						<option value="92">- Rubber &amp; Plastic Products</option>
						<option value="94">- Stone, Clay, Glass, Concrete</option>
						<option value="84">- Textile Mill Products</option>
						<option value="83">- Tobacco Products</option>
						<option value="99">- Transportation Equipment</option>
						<option value="105">- Vinyl Products</option>
						<option value="79">Mining</option>
						<option value="128">Restaurants</option>
						<option value="28">- Bars/Taverns</option>
						<option value="12">- Coffee Shop</option>
						<option value="29">- Other Eating &amp; Drinking Places</option>
						<option value="11">- Restaurant</option>
						<option value="1">Retail</option>
						<option value="26">- Apparel &amp; Accessory Stores</option>
						<option value="104">- ATM Machines</option>
						<option value="132">- Beauty Supplies</option>
						<option value="121">- Bicycle Shop</option>
						<option value="16">- Bldg Materials, Home &amp; Garden</option>
						<option value="127">- Cell Phones</option>
						<option value="115">- Coin Laundry</option>
						<option value="19">- Convenience Stores</option>
						<option value="108">- Florist, Gifts</option>
						<option value="9">- Furniture</option>
						<option value="17">- General Merchandise Store</option>
						<option value="107">- Gym, Physical Fitness</option>
						<option value="27">- Home Furniture &amp; Furnishings</option>
						<option value="111">- Jewelry Design and Sales</option>
						<option value="20">- Liquor Stores</option>
						<option value="24">- Marine Dealers &amp; Equipment</option>
						<option value="106">- Medical Products &amp; Supplies</option>
						<option value="33">- Miscellaneous Retail</option>
						<option value="21">- Other Food Stores</option>
						<option value="32">- Pet Shops &amp; Supplies</option>
						<option value="118">- Postal Centers</option>
						<option value="50">- Supermarkets</option>
						<option value="114">- Tobacco &amp; Related Products</option>
						<option value="30">- Vending Machines</option>
						<option value="109">- Video Rentals</option>
						<option value="34">Services</option>
						<option value="59">- Accounting</option>
						<option value="62">- Agents &amp; Brokers</option>
						<option value="48">- Amusement &amp; Recreation</option>
						<option value="37">- Beauty &amp; Barber Shops</option>
						<option value="117">- Business Services</option>
						<option value="39">- Computer &amp; Software</option>
						<option value="36">- Dry Cleaning/Laundry</option>
						<option value="52">- Educational Services</option>
						<option value="60">- Engineering</option>
						<option value="61">- Finance, Banking, Loans &amp; Leasing</option>
						<option value="46">- Freight Carriers, Moving/Delivery</option>
						<option value="49">- Health, Medical &amp; Dental</option>
						<option value="35">- Hotels &amp; Other Lodging</option>
						<option value="126">- Insurance</option>
						<option value="134">- IT Services</option>
						<option value="133">- Janitorial &amp; Carpet Cleaning Services</option>
						<option value="112">- Jewelry Repair</option>
						<option value="55">- Landscaping &amp; Yard Services</option>
						<option value="51">- Legal Services</option>
						<option value="45">- Local Passenger Transportation</option>
						<option value="123">- Magazine</option>
						<option value="41">- Marine Repair, Parts &amp; Services</option>
						<option value="103">- Media, Communications, Advertising, Marketing, Production &amp; PR</option>
						<option value="58">- Membership Organizations</option>
						<option value="43">- Miscellaneous Repair</option>
						<option value="54">- Museums, Art Galleries, Zoos</option>
						<option value="40">- Other Business Services</option>
						<option value="65">- Other Miscellaneous Services</option>
						<option value="38">- Other Personal Services</option>
						<option value="64">- Other Travel and Transportation</option>
						<option value="56">- Pet Care &amp; Grooming</option>
						<option value="53">- Social Services</option>
						<option value="131">- Staffing</option>
						<option value="57">- Storage &amp; Warehousing</option>
						<option value="110">- Tanning Salons</option>
						<option value="63">- Travel Agencies</option>
						<option value="5">Software &amp; Technology</option>
						<option value="66">- Business Services (B2B)</option>
						<option value="67">- Consumer Services (B2C)</option>
						<option value="70">- Domain Name/Basic Site</option>
						<option value="73">- General Internet</option>
						<option value="69">- ISP/ASP Services</option>
						<option value="72">- Software</option>
						<option value="71">- Web Design/Technical Services</option>
						<option value="81">Utilities</option>
						<option value="10">Wholesale/Distribution</option>
						<option value="14">- Durable Goods</option>
						<option value="15">- Non Durable Goods</option>
					</select>
					</div>

					</div>

					<h4 style={{ marginTop: 10, color: "#1a237e" }}>Purpose Of Valuation (Informational only)</h4>

					<br /><br />

					<div >
						<div style={{ marginLeft: 150 }}>
							<input type="checkbox" /><label> Business Sale</label><br />
							<input type="checkbox" /><label>Exit Planning</label> <br />
							<input type="checkbox" /><label>Insurance</label> <br />
							<input type="checkbox" /><label> Buy-Sell Agreements</label><br />
							<input type="checkbox" /><label> Divorce</label><br />
							<input type="checkbox" /><label> Shareholder Disputes</label><br />
							<input type="checkbox" /><label> Litigation</label><br />
							<input type="checkbox" /><label> Employee Stock Ownership Plans (ESOPs)</label><br />
							<input type="checkbox" /><label> Charitable Contributions</label><br />
							<input type="checkbox" /><label> Patent Infringement</label><br />
							<input type="checkbox" /><label> Capital Infusion</label><br />
							<input type="checkbox" /><label> Eminent Domain Proceedings</label><br />
							<input type="checkbox" /><label> Gift Tax</label><br />
							<input type="checkbox" /><label> Estate Planning and Estate Tax</label><br />
							<input type="checkbox" /><label>Other (Please state)</label><br />
						</div></div>
					<div class="center blue pad">
					</div>
				</form><br />
				<center><Button type="submit" color="primary" variant="contained">Calculate Business Value</Button>
				</center></Container></Card></div>)
	}
}
export default BusinessEvalution;