import { Container } from '@material-ui/core';
import React, { Component } from 'react'
import SpacingGrid from './components/grid';
import styled from 'styled-components'
import FetchData from './pokeData/fetchData';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      filterdata: null,
    }
  }
  handleData = (data) => {
    this.setState({ data:data, filterdata: data })
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
        <img  src="/logo.png"/>
          <p className="heading-filter">Filters</p>
          <div className="search">
            Search Name
              <input type="text" id="search" /><input type="submit" onClick={this.handleSearch} />
          </div>
          <div  className="type1">
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
          <div className="type2">
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
          <div className="generation">
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
          <div className="legendary">
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
  .heading-filter{
    font-size: xxx-large;
    display: flex;
    padding: 5px;
    justify-content: space-evenly;
    font-weight: bold;
  }
  .filters{
    background-color: #a2d7d5;
    position: fixed;
    width: 22%;
    height: 100%;
    float: left;
    img{
      max-width:100%;
    }
  }
  .content{
    width:78%;
    float:right;
    background-color:#F5E97E;
    
  }
  .search{
    margin:10px 0px 10px 0px; 
    input{

    }
  }
  .type1{
    margin:10px 0px 10px 0px; 
    select{
      margin:0px 0px 0px 14%;
      width:50%;
    }
  }
  .type2{
    margin:10px 0px 10px 0px; 
    select{
      margin:0px 0px 0px 14%;
      width:50%;
    }
  }
  .legendary{
    margin:10px 0px 10px 0px; 
    select{
      margin:0px 0px 0px 6%;
      width:50%;
    }
  }
  .generation{
    margin:10px 0px 10px 0px;
    select{
      margin:0px 0px 0px 5%;
      width:50%;
    } 
  }
`;