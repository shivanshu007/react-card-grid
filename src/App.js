import { Container } from '@material-ui/core';
import React, { Component } from 'react'
import SpacingGrid from './components/grid';
import Papa from 'papaparse';
import { CSVReader } from 'react-papaparse'
import styled from 'styled-components'
import FetchData from './pokeData/fetchData';
import InputRange from './components/InputRange';
import InputRangeComponent from './components/InputRange';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      filterdata: null,
    }
  }
  handleData = (data) => {
    this.setState({ data, filterdata: data })
  }
  handleType1Filter = (e) => {
    let newData = this.state.data.filter(arr => arr.data[2] == e.target.value)
    this.setState({ filterdata: newData })
  }
  handleType2Filter = (e) => {
    let newData = this.state.data.filter(arr => arr.data[3] == e.target.value)
    this.setState({ filterdata: newData })
  }
  handleLegendaryFilter = (e) => {
    let newData = this.state.data.filter(arr => arr.data[12] == e.target.value)
    this.setState({ filterdata: newData })
  }
  handleGenerationFilter = (e) => {
    let newData = this.state.data.filter(arr => arr.data[11] == e.target.value)
    this.setState({ filterdata: newData })
  }
  handleSearch = (e) => {
    console.log("search");
    let newData = this.state.data.filter(arr => arr.data[1] == document.getElementById("search").value)
    this.setState({ filterdata: newData })
  }
  // handleTotalFilter=(min,max)=>{
  //   let newData=this.state.data.filter(arr=>arr.data[4]>=min && arr.data[4]<=max)
  //   this.setState({filterdata:newData})
  // }
  render() {
    return (
      <BoxContainer>
        <div className="filters">
          <p><h2>Filters</h2></p>
          <div>
            Search Name
              <input type="text" id="search" /><input type="submit" onClick={this.handleSearch} />
          </div>
          <div>
            Type 1
              <select onChange={e => this.handleType1Filter(e)}>
              <option value="0">type 1</option>
              <option value="Grass">Grass</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Bug">Bug</option>
              <option value="Normal">Normal</option>
              <option value="Poison">Poison</option>
              <option value="Electric">Electric</option>
              <option value="Ground">Ground</option>
              <option value="Fighting">Fighting</option>
              <option value="Rock">Rock</option>
              <option value="Ghost">Ghost</option>
              <option value="Psychic">Psychic</option>
              <option value="Ice">Ice</option>
              <option value="Dragon">Dragon</option>
              <option value="Dark">Dark</option>
              <option value="Steel">Steel</option>
            </select>
          </div>
          <div>
            Type 2
              <select onChange={e => this.handleType2Filter(e)}>
              <option value="0">type 2</option>
              <option value="Grass">Grass</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Bug">Bug</option>
              <option value="Normal">Normal</option>
              <option value="Poison">Poison</option>
              <option value="Electric">Electric</option>
              <option value="Ground">Ground</option>
              <option value="Fighting">Fighting</option>
              <option value="Rock">Rock</option>
              <option value="Ghost">Ghost</option>
              <option value="Psychic">Psychic</option>
              <option value="Ice">Ice</option>
              <option value="Dragon">Dragon</option>
              <option value="Dark">Dark</option>
              <option value="Steel">Steel</option>
            </select>
          </div>
          <div>
            Generation
              <select onChange={e => this.handleGenerationFilter(e)}>
              <option value="0">Generation</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div>
            Legendary
              <select onChange={e => this.handleLegendaryFilter(e)}>
              <option value="0">Legendary</option>
              <option value="TRUE">True</option>
              <option value="FALSE">False</option>
            </select>
          </div>
          {/* <div>
              Total <InputRangeComponent handleTotalFilter={this.handleTotalFilter}/>
            </div> */}


        </div>
        <Container className="content">
          <div className="heading">Welcome to Pokedex</div>
          {this.state.data ? <SpacingGrid data={this.state.filterdata ? this.state.filterdata : this.state.data} /> : <FetchData data={this.state} handleData={this.handleData} />}
        </Container>
      </BoxContainer>
    )
  }
}

const BoxContainer = styled.div`
  border:1px solid black;
 
  background-color:#DF807E;
  .heading{
    font-size: xxx-large;
    display: flex;
    padding: 50px;
    justify-content: space-evenly;
    font-weight: bold;
  }
  .filters{
    background-color:#a2d7d5;
    height: auto;
    position:fixed;
    width: 15vw;
    float: left;
  }
  .content{
    width:90vw;
    float:right;
    background-color:#F5E97E;
    
  }
`;